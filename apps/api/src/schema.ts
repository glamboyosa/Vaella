import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const email = sqliteTable("email", {
  id: integer("id").primaryKey(),
  email: text("email").notNull().unique(),
});
