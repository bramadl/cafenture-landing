"use client";

import { gsap } from "gsap";
import { useCallback } from "react";
import { useLenis } from "@studio-freight/react-lenis";

import { cn } from "@cafenture/lib/utils";

export const JumpToContentButton = ({
  children,
  id,
  isActive,
  onJumped,
}: {
  children: React.ReactNode;
  id: string;
  isActive: boolean;
  onJumped: (id: string) => void;
}) => {
  const lenis = useLenis();
  const jumpTo = useCallback(
    (id: string) => {
      if (!lenis) return;
      onJumped(id);
      lenis.scrollTo(`#${id}`, {
        force: true,
        lock: true,
        offset: -(+gsap.getProperty("#article", "paddingTop") * 1.5),
      });
    },
    [lenis, onJumped]
  );

  return (
    <button
      className={cn(
        "relative inline-block after:absolute after:left-0 after:inset-y-0 after:-translate-x-px after:w-0.5 after:bg-transparent after:transition-colors w-full text-left text-sm text-secondary hover:text-slate-800 hover:bg-slate-50 py-3 px-4 transition-colors",
        isActive &&
          "bg-slate-100 hover:bg-slate-100 text-slate-950 after:bg-primary"
      )}
      onClick={() => jumpTo(id)}
    >
      {children}
    </button>
  );
};
