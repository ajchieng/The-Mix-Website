"use client";

import { useEffect, useState } from "react";

const defaultIntroCopy = "industry access you can't chat gpt";

type HomeIntroTypingProps = {
  ariaLabel?: string;
  copy?: string;
  lineClassName?: string;
};

export function HomeIntroTyping({
  ariaLabel = "Homepage introduction",
  copy = defaultIntroCopy,
  lineClassName,
}: HomeIntroTypingProps) {
  const [visibleText, setVisibleText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotionQuery.matches) {
      setVisibleText(copy);
      setIsComplete(true);
      return;
    }

    let characterIndex = 0;
    let timeoutId = 0;

    setVisibleText("");
    setIsComplete(false);

    const typeNextCharacter = () => {
      characterIndex += 1;
      setVisibleText(copy.slice(0, characterIndex));

      if (characterIndex >= copy.length) {
        setIsComplete(true);
        return;
      }

      const nextCharacter = copy[characterIndex];
      const nextDelay = nextCharacter === " " ? 90 : 42 + Math.round(Math.random() * 44);
      timeoutId = window.setTimeout(typeNextCharacter, nextDelay);
    };

    timeoutId = window.setTimeout(typeNextCharacter, 360);

    return () => window.clearTimeout(timeoutId);
  }, [copy]);

  return (
    <section className="mix-intro-stage" aria-label={ariaLabel}>
      <div className="mix-intro-panel px-4 sm:px-6 lg:px-8">
        <p className={["mix-intro-line", lineClassName].filter(Boolean).join(" ")}>
          <span className="mix-sr-only">{copy}</span>
          <span aria-hidden="true" className="mix-intro-line-display">
            {visibleText}
          </span>
          <span
            aria-hidden="true"
            className={`mix-intro-cursor ${isComplete ? "is-complete" : ""}`}
          />
        </p>
      </div>
    </section>
  );
}
