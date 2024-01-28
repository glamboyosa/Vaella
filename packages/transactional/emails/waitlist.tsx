import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const WaitlistWelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>Vaella waitlist confirmation! You're in!</Preview>
    <Tailwind>
      <Body className="bg-white font-sans">
        <Container className="mx-auto p-4 pt-8 pb-6">
          <Img
            src={`${baseUrl}/static/cat.svg`}
            width="170"
            height="50"
            alt="Vaella"
            className="mx-auto"
          />
          <Text className="text-base leading-normal">Hi there,</Text>
          <Text className="text-base leading-normal">
            Thank you for signing up for the Vaella waitlist. Can't wait to show
            you guys what we have planned as we roll out private beta tests over
            the next few weeks. Stay tuned and don't forget to spread the word!
          </Text>
          <Text className="text-base leading-normal">
            Best,
            <br />
            Osa
          </Text>
          {/* <Hr style={hr} />
          <Text style={footer}>
            470 Noor Ave STE B #1148, South San Francisco, CA 94080
          </Text> */}
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default WaitlistWelcomeEmail;
