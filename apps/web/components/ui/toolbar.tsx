"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const Toolbar = ({ className }: { className?: string }) => {
  const [currentEmoji, setCurrentEmoji] = useState<{
    emoji: string;
    id: number;
  } | null>(null);
  const clearEmojiTimeout = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (clearEmojiTimeout.current) {
        clearTimeout(clearEmojiTimeout.current);
      }
    };
  }, []);

  const handleEmojiClick = async (emoji: string) => {
    // Clear any existing timeout
    if (clearEmojiTimeout.current) {
      clearTimeout(clearEmojiTimeout.current);
    }

    // Set the current emoji with a unique identifier
    setCurrentEmoji({ emoji, id: Date.now() });

    // Remove the emoji after the animation duration
    clearEmojiTimeout.current = setTimeout(() => {
      setCurrentEmoji(null);
    }, 3000); // Adjust this duration to match your animation

    // Record the reaction in the database
    // or do something else
  };

  const Emoji = ({ label, emoji }: { label: string; emoji: string }) => (
    <div className="relative w-fit">
      {/* biome-ignore lint/a11y/noInteractiveElementToNoninteractiveRole: <explanation> */}
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button
        className="relative inline-flex items-center justify-center rounded-full bg-transparent p-1 align-middle font-emoji text-2xl leading-6 transition-bg-color duration-600 ease-in-out active:bg-gray-400 hover:bg-gray-200 active:duration-0"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
        onClick={() => handleEmojiClick(emoji)}
      >
        {emoji}
        {currentEmoji && currentEmoji.emoji === emoji && (
          <span
            key={currentEmoji.id}
            className="-top-10 absolute right-0 left-0 mx-auto animate-flyEmoji font-emoji duration-3000"
          >
            {currentEmoji.emoji}
          </span>
        )}
      </button>
    </div>
  );

  return (
    <>
      <div
        className={cn(
          "mx-auto mt-4 mb-4 rounded-full border border-gray-300 bg-white dark:border-white/70 dark:bg-black",
          className
        )}
      >
        <div className="grid items-center justify-start">
          <div className="p-2">
            <div className="grid grid-flow-col items-center justify-start">
              {REACTIONS.map((reaction) => (
                <Emoji
                  key={reaction.emoji}
                  emoji={reaction.emoji}
                  label={reaction.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const REACTIONS = [
  {
    emoji: "😂",
    label: "joy",
  },
  {
    emoji: "😍",
    label: "love",
  },
  {
    emoji: "😮",
    label: "wow",
  },
  {
    emoji: "🙌",
    label: "yay",
  },
  {
    emoji: "👍",
    label: "up",
  },
  {
    emoji: "👎",
    label: "down",
  },
];
