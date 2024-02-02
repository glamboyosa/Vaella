import { drizzle } from "drizzle-orm/d1";
import { createSchema, createYoga } from "graphql-yoga";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { Bindings } from "../types";
import { mutations } from "./graphql/mutation";
import { queries } from "./graphql/query";
const app = new Hono<{ Bindings: Bindings }>();
app.use(
  "/api/*",
  cors({
    origin: [
      "http://localhost:3000",
      "https://vaella.glamboyosa.xyz",
      " /^https?://vaella-.*-glamboyosa.vercel.app$/",
    ],
  })
);
app.on(["POST", "GET"], "/api/graphql", async (c) =>
  createYoga<Bindings & ExecutionContext>({
    logging: c.env.LOGGING,
    // `NODE_ENV` is under `c.env`
    maskedErrors: c.env.NODE_ENV === "production",
    // Keep as / so you're using just the hono route
    graphqlEndpoint: "/api/graphql",
    // add drizzle to context
    context: { db: drizzle(c.env.DB) },
    schema: createSchema({
      typeDefs: `
      type Email {
        id: Int!
        email: String!
      }
      
      type Query {
        hello: String!
      }
      
      type Mutation {
        saveWaitlistEmail(email: String!): String!
      }
      `,

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
