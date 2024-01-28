"use client";
import Image from "next/image";
// @ts-ignore
import { useFormStatus } from "react-dom";

export function SubmitWaitlistButton() {
  const { pending } = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      type="submit"
      className="flex h-8 w-5/6 cursor-pointer items-center justify-center rounded-md bg-white px-3 py-1 text-black md:w-1/2 hover:bg-white/85"
    >
      {!pending ? (
        " Join Waitlist ☄️"
      ) : (
        <Image src="/three-dots.svg" width={30} height={200} alt="loader" />
      )}
    </button>
  );
}
