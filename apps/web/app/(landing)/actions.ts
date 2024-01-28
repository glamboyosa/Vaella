"use server";
import { getClient } from "@/lib/apollo/apollo-client";
import { gql } from "@apollo/client";
import { Resend } from "resend";
import { WaitlistWelcomeEmail } from "transactional/emails/waitlist";
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
// eslint-disable-next-line turbo/no-undeclared-env-vars
const resend = new Resend(process.env.RESEND_API_KEY);

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
    if (m.data.saveWaitlistEmail === "Email exists") {
      return {
        errors: {},
        message: "Like the sound eh? 😉",
      };
    }
    await resend.emails.send({
      from: "Osa from Vaella <osa@glamboyosa.xyz>",
      to: [email as string],
      subject: "Thank you for joining the waitlist!",
      react: WaitlistWelcomeEmail(),
    });
    return {
      errors: {},
      message: "Please check your email!",
    };
  } catch (error: unknown) {
    const e = error as Array<{ message: string }>;
    console.log(JSON.stringify(e));
    return {
      errors: { email: ["Invalid Email Address"] },
      message: "",
    };
  }
};
export { joinWaitlist };
