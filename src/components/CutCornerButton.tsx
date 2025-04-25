/**
 * CutCornerButton.tsx
 *
 * A stylized button component with a cut-corner effect using a gradient mask and an SVG corner accent.
 * Ideal for use in call-to-action areas or visually striking UI elements.
 *
 * @component
 * @param {string} [className] - Additional Tailwind classes to override or extend the default styling.
 * @param {React.ReactNode} children - The button label or nested elements.
 *
 * @example
 * <CutCornerButton className="text-white">
 *   Get Started
 * </CutCornerButton>
 */

import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const CutCornerButton = (props: ComponentPropsWithoutRef<"button">) => {
  const { className, children } = props;
  return (
    <button
      className={twMerge(
        "relative bg-fuchsia-500/20 px-4 py-2 font-extrabold uppercase font-heading text-sm tracking-wide",
        className
      )}
    >
      {/* Decorative cut-corner outline using gradient masking */}
      <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)]"></div>

      {/* Top-right SVG corner detail for an angular visual accent */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 text-fuchsia-500"
      >
        <path
          d="M0 1H12.2667L23 11.7333V24"
          stroke="currentColor"
          strokeWidth="2"
        ></path>
      </svg>

      {/* Main button text or children */}
      <span className="leading-6">{children}</span>
    </button>
  );
};
