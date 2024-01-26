"use client";

import { joinWaitlist } from "@/app/(landing)/actions";
import { cn } from "@/lib/utils";
import { PropsWithChildren, useCallback, useEffect } from "react";
// @ts-ignore
import { useFormState } from "react-dom";

import { toast } from "sonner";

const initialState: { message: string; errors: { email: Array<string> } } = {
  message: "",
  errors: { email: [] },
};

const WaitlistForm = ({ children }: PropsWithChildren) => {
  const [state, formAction] = useFormState(joinWaitlist, initialState);
  const playSound = useCallback(async () => {
    const audio = new Audio("/sounds/laser-swoosh.wav");
    await audio.play();
  }, []);
  useEffect(() => {
    if (state.message.length > 0 && Object.keys(state.errors).length === 0) {
      toast("Added to waitlist 🚀", {
        description: state.message,
        descriptionClassName: "text-lg",
      });
      playSound();
    } else if (state.errors?.email && state.errors.email.length > 0) {
      toast.error(state.errors.email[0]);
    }
  }, [state, playSound]);

  return (
    <form
      action={formAction}
      className="mt-3.5 z-20 w-3/4 space-y-2.5 *:cursor-pointer flex flex-col items-center justify-center cursor-pointer"
    >
      <input
        name="email"
        id="email"
        type="email"
        placeholder="Enter Email"
        className={cn(
          "w-1/2 text-white flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          state.errors?.email &&
            state.errors.email.length > 0 &&
            "border-red-400 focus:border-input focus-visible:border-input"
        )}
      />
      {children}
    </form>
  );
};

export default WaitlistForm;
