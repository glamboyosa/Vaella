"use server";
import { z } from "zod";

const schema = z.object({
  email: z
    .string({
      invalid_type_error: "Invalid Email Address",
    })
    .email(),
});

const joinWaitlist = async (_: any, formData: FormData) => {
  const email = formData.get("email");
  const validatedFields = schema.safeParse({
    email,
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "",
    };
  }

  return {
    errors: {},
    message: "Please check your email!",
  };
};
export { joinWaitlist };
