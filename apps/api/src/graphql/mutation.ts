import { eq } from "drizzle-orm";
import { GraphQLError } from "graphql";
import { Context, joinWaitlistArgs } from "../../types";
import { emailSchema as zodEmailSchema } from "../../types";
import { emailSchema } from "../schema";

const mutations = {
  saveWaitlistEmail: async (
    _: unknown,
    { email }: joinWaitlistArgs,
    ctx: Context
  ) => {
    const result = zodEmailSchema.safeParse({ email });
    if (!result.success) {
      throw new GraphQLError(
        `Something went wrong ${result.error.errors[0].message}`
      );
    }
    try {
      // check if mail exists
      const existingMail = await ctx.db
        .select()
        .from(emailSchema)
        .where(eq(emailSchema.email, email));
      if (existingMail) {
        return "Email exists";
      }
      const insertedMail = await ctx.db
        .insert(emailSchema)
        .values({ email })
        .returning();

      return insertedMail[0].email;
    } catch (error) {
      throw new GraphQLError(`Something went wrong ${JSON.stringify(error)}`);
    }
  },
};
export { mutations };
