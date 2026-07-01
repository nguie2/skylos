"use client";

import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const RIVE_SRC = "/animations/welcome-dog.riv";
const ARTBOARD = "New Artboard";
const STATE_MACHINE = "Main animation";

const sizeClasses = {
  default: "h-40 w-40 sm:h-44 sm:w-44 md:h-52 md:w-52",
  hero: "h-36 w-36 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-[17rem] lg:w-[17rem] xl:h-[19rem] xl:w-[19rem]",
} as const;

type WelcomeDogRiveProps = {
  className?: string;
  variant?: keyof typeof sizeClasses;
  showHint?: boolean;
};

export function WelcomeDogRive({
  className,
  variant = "default",
  showHint = true,
}: WelcomeDogRiveProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!showHint) return;
    const timer = window.setTimeout(() => setHintVisible(false), 6000);
    return () => window.clearTimeout(timer);
  }, [showHint]);

  const { RiveComponent, rive, setContainerRef } = useRive(
    {
      src: RIVE_SRC,
      artboard: ARTBOARD,
      stateMachines: STATE_MACHINE,
      autoplay: true,
      layout: new Layout({
        fit: Fit.Contain,
        alignment: Alignment.BottomCenter,
      }),
      onLoadError: () => setLoadError(true),
    },
    {
      shouldResizeCanvasToContainer: true,
    },
  );

  const hoverInput = useStateMachineInput(rive, STATE_MACHINE, "Hover");

  useEffect(() => {
    if (reducedMotion && rive) {
      rive.pause();
    }
  }, [reducedMotion, rive]);

  const setHover = (active: boolean) => {
    if (reducedMotion || !hoverInput) return;
    hoverInput.value = active;
  };

  if (loadError) {
    return (
      <div
        className={cn(
          "flex h-40 w-40 items-center justify-center text-center text-label-sm text-outline px-2",
          className,
        )}
        role="img"
        aria-label="Mascotte Skylos"
      >
        Animation indisponible
      </div>
    );
  }

  return (
    <figure
      className={cn("rive-dog group relative flex flex-col items-center", className)}
      aria-label="Mascotte Skylos — chien assis qui se lève au survol"
    >
      <div
        ref={setContainerRef}
        className={cn(
          "relative overflow-visible bg-transparent",
          sizeClasses[variant],
          !reducedMotion && "cursor-default",
        )}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        tabIndex={reducedMotion ? -1 : 0}
        role="img"
      >
        <RiveComponent className="h-full w-full bg-transparent" />
      </div>

      {showHint && !reducedMotion && (
        <p
          className={cn(
            "mt-1 text-center text-label-sm font-label-md text-outline transition-opacity duration-500",
            hintVisible ? "opacity-70" : "opacity-0 group-hover:opacity-70",
          )}
          aria-hidden="true"
        >
          Survolez pour le saluer
        </p>
      )}

      <figcaption className="sr-only">
        Animation décorative d&apos;un chien. Survolez pour le voir se lever et
        vous saluer.
      </figcaption>
    </figure>
  );
}
