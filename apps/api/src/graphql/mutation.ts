import { Context } from "../../types";
import { emailSchema } from "../schema";

const mutations = {
  saveWaitlistEmail: async (_: unknown, { email }: { email: string }, ctx: Context) => {
    const insertedMail = await ctx.db.insert(emailSchema).values({ email }).returning();
    return insertedMail[0].email;
  },
};
export { mutations };
