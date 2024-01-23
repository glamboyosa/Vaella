import { DrizzleD1Database } from "drizzle-orm/d1";
import { YogaInitialContext } from "graphql-yoga";

export type Context = YogaInitialContext & {
  db: DrizzleD1Database<Record<string, never>>;
};
