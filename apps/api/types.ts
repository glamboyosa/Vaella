import { DrizzleD1Database } from "drizzle-orm/d1";
import { YogaInitialContext } from "graphql-yoga";
import { z } from "zod";

export type Bindings = {
  NODE_ENV: string;
  LOGGING: "debug" | "error" | "info" | "warn";
  DB: D1Database;
};
type Prettify<T> = T extends object ? { [K in keyof T]: T[K] } : T;
export type Context = Prettify<
  Bindings &
    ExecutionContext &
    YogaInitialContext & {
      db: DrizzleD1Database<Record<string, never>>;
    }
>;
export const emailSchema = z.object({
  email: z.string().email("Invalid Email Address"),
});

export type joinWaitlistArgs = z.infer<typeof emailSchema>;
