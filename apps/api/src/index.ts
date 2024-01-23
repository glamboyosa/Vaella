import { Hono } from "hono";
import { cors } from "hono/cors";
import { createYoga, createSchema } from "graphql-yoga";
import { drizzle } from "drizzle-orm/d1";
import { readFileSync } from "node:fs";
import { join } from "node:path";
type Bindings = {
  NODE_ENV: string;
  LOGGING: "debug" | "error" | "info" | "warn";
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.on(["POST", "GET"], "/graphql", async (c) =>
  createYoga<Bindings & ExecutionContext>({
    logging: c.env.LOGGING,
    // `NODE_ENV` is under `c.env`
    maskedErrors: c.env.NODE_ENV == "production",
    // Keep as / so you're using just the hono route
    graphqlEndpoint: "/",
    // add drizzle to context
    context: { db: drizzle(c.env.DB) },
    schema: createSchema({
      typeDefs: readFileSync(
        join(__dirname, "./graphql/schema.graphql"),
        "utf-8"
      ),

      resolvers: {
        Query: {
          hello: () => "Hello world!",
        },
      },
    }),
  }).fetch(c.req.raw, c.env, c.executionCtx)
);

export default app;