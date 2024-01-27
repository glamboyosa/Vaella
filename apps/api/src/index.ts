import fs from "node:fs";
import { join } from "node:path";
import { drizzle } from "drizzle-orm/d1";
import { createSchema, createYoga } from "graphql-yoga";
import { Hono } from "hono";
import { Bindings } from "../types";
import { mutations } from "./graphql/mutation";
import { queries } from "./graphql/query";

const app = new Hono<{ Bindings: Bindings }>();

app.on(["POST", "GET"], "/api/graphql", async (c) =>
  createYoga<Bindings & ExecutionContext>({
    logging: c.env.LOGGING,
    // `NODE_ENV` is under `c.env`
    maskedErrors: c.env.NODE_ENV === "production",
    // Keep as / so you're using just the hono route
    graphqlEndpoint: "/",
    // add drizzle to context
    context: { db: drizzle(c.env.DB) },
    schema: createSchema({
      typeDefs: fs.readFileSync(
        join(__dirname, "./graphql/schema.graphql"),
        "utf-8"
      ),

      resolvers: {
        Query: {
          ...queries,
        },
        Mutation: {
          ...mutations,
        },
      },
    }),
  }).fetch(c.req.raw, c.env, c.executionCtx)
);

export default app;
