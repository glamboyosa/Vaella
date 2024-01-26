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
      className="w-1/2 px-3 h-8 flex items-center justify-center cursor-pointer py-1 rounded-md bg-white hover:bg-white/85 text-black"
    >
      {!pending ? (
        " Join Waitlist ☄️"
      ) : (
        <Image src="/three-dots.svg" width={30} height={200} alt="loader" />
      )}
    </button>
  );
}
