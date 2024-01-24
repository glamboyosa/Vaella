import { DrizzleD1Database } from "drizzle-orm/d1";
import { YogaInitialContext } from "graphql-yoga";

export type Bindings = {
  NODE_ENV: string;
  LOGGING: "debug" | "error" | "info" | "warn";
  DB: D1Database;
};
export type Context = Bindings &
  ExecutionContext &
  YogaInitialContext & {
    db: DrizzleD1Database<Record<string, never>>;
  };
