import { cn } from "@/lib/utils";
import React from "react";

type HtmlButtonProps = React.HTMLAttributes<HTMLButtonElement>;
type Variant = "DEFAULT" | "ARROW";
type Size = "SMALL" | "LARGE";

interface ButtonProps {
  text: string;
  variant: Variant;
  props?: HtmlButtonProps;
  size: Size;
  className: string;
  disabled?: boolean;
}

export default function Button({
  text,
  variant,
  props = {},
  size,
  className,
  disabled = false,
}: ButtonProps) {
  const smallButtonClassName =
    "flex items-center justify-center hover:brightness-75 duration-300 gap-[8px] lg:gap-[5px] xl:gap-[6px] desktop:gap-[7px] px-[12px] lg:px-[14px] xl:px-[20px] desktop:px-[24px] py-[5px] lg:py-[6px] xl:py-[8px] desktop:py-[10px] rounded-[83px] lg:rounded-[60px] xl:rounded-[84px] desktop:rounded-[100px]";

  const smallTextClassName =
    "text-xs lg:text-[10px] xl:text-sm desktop:text-base";

  const largeButtonClassName =
    "flex items-center justify-center hover:brightness-75 duration-300 gap-[6px] lg:gap-[4px] xl:gap-[6px] desktop:gap-[7px] px-[34px] lg:px-[16px] xl:px-[23px] desktop:px-[28px] py-[10px] md:py-[11px] lg:py-[9px] xl:py-[13px] desktop:py-[16px] rounded-[83px] lg:rounded-[60px] xl:rounded-[84px] desktop:rounded-[100px]";

  const largeTextClassName = "lg:text-xs xl:text-lg desktop:text-xl";
  return (
    <>
      {variant === "DEFAULT" && (
        <button
          disabled={disabled}
          className={cn(
            size === "LARGE" ? largeButtonClassName : smallButtonClassName,
            className,
            "text-sm lg:text-xs xl:text-lg desktop:text-xl"
          )}
          {...props}
        >
          <p
            className={
              size === "LARGE" ? largeTextClassName : smallTextClassName
            }
          >
            {text}
          </p>
        </button>
      )}
      {variant === "ARROW" && (
        <button
          disabled={disabled}
          className={cn(
            size === "LARGE" ? largeButtonClassName : smallButtonClassName,
            className
          )}
          {...props}
        >
          <p
            className={
              size === "LARGE" ? largeTextClassName : smallTextClassName
            }
          >
            {text}
          </p>
          <div className="flex w-[6px] items-center lg:w-[3px] xl:w-[5px] desktop:w-[6px]">
            {icons[variant]}
          </div>
        </button>
      )}
    </>
  );
}

const icons = {
  ARROW: (
    <svg
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
    >
      <path
        d="M1.77783 18.852L10.6667 9.96311L1.77783 1.07422"
        stroke="currentColor"
        strokeWidth="2.66667"
      />
    </svg>
  ),
};
