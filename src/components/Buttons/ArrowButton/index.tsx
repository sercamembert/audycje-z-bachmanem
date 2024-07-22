import { Arrow } from "@/components/Svgs";
import { cn } from "@/lib/utils";
import React from "react";

interface ArrowButtonProps {
  className?: string;
}

export default function ArrowButton({ className }: ArrowButtonProps) {
  return (
    <div
      className={cn(
        "bg-white flex items-center justify-center rounded-[50%] size-12 md:size-8 lg:size-10 xl:size-14 desktop:size-16",
        className
      )}
    >
      <Arrow className="size-3 md:size-2 lg:size-3 xl:size-4 group-hover:rotate-[360deg] ease-custom-bezier duration-500" />
    </div>
  );
}
