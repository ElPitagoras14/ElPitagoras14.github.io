"use client";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { SocialMedia } from "@/components/social-media";
import { cn } from "@/lib/utils";
import { useIntl } from "react-intl";

export default function Hero() {
  const intl = useIntl();

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <div className="flex flex-col space-y-4 justify-center items-center z-10">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter">
          <TypingAnimation>Jonathan García</TypingAnimation>
        </p>
        <p className="z-10 whitespace-pre-wrap text-center text-xl font-medium tracking-tighter w-[40rem]">
          {intl.formatMessage({ id: "hero.description" })}
        </p>
        <SocialMedia className="pt-4" />
        <div className="flex flex-row space-x-4 pt-4">
          <ShimmerButton className="shadow-md bg-background">
            <span className="text-primary-foreground">
              {intl.formatMessage({ id: "hero.download" })}
            </span>
          </ShimmerButton>
          <InteractiveHoverButton>{intl.formatMessage({id: "hero.contact"})}</InteractiveHoverButton>
        </div>
      </div>
      <FlickeringGrid
        className={cn(
          "absolute inset-0 z-0 size-full",
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
    </div>
  );
}
