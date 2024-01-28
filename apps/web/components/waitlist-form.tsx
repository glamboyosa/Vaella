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
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (state.message.length > 0 && Object.keys(state.errors).length === 0) {
      toast("Added to waitlist 🚀", {
        description: state.message,
        descriptionClassName: "text-lg",
      });
      playSound();
    } else if (state.errors?.email && state.errors.email.length > 0) {
      const msg = state.errors.email[0];
      toast.error(msg);
    }
  }, [state.message, state.errors, playSound]);

  return (
    <form
      action={formAction}
      className="z-20 mt-3.5 flex w-[90%] cursor-pointer flex-col items-center justify-center space-y-2.5 md:w-3/4 *:cursor-pointer"
    >
      <input
        name="email"
        id="email"
        type="email"
        placeholder="Enter Email"
        className={cn(
          "flex h-9 w-1/2 rounded-md border border-input bg-transparent px-3 py-1 text-sm text-white shadow-sm transition-colors disabled:cursor-not-allowed file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          state.errors?.email &&
            state.errors.email.length > 0 &&
            "border-red-400 focus-visible:border-input focus:border-input"
        )}
      />
      {children}
    </form>
  );
};

export default WaitlistForm;
