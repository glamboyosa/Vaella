"use server";
import { getClient } from "@/lib/apollo/apollo-client";
import { gql } from "@apollo/client";
import { z } from "zod";
interface SaveWaitlistEmailData {
  data: {
    saveWaitlistEmail: string;
  };
}
const mutation = gql`
  mutation saveWaitlist($email: String!) {
    saveWaitlistEmail(email: $email)
  }
`;
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
  try {
    const m = (await getClient().mutate({
      mutation: mutation,
      variables: { email },
    })) as SaveWaitlistEmailData;
    console.log(m);
  } catch (error: unknown) {
    const e = error as Array<{ message: string }>;
    console.log(JSON.stringify(e));
    return {
      errors: { email: ["Invalid Email Address"] },
      message: "",
    };
  }
  return {
    errors: {},
    message: "Please check your email!",
  };
};
export { joinWaitlist };
