/**
 * TextButton.tsx
 *
 * A minimal text-style button used for inline actions or call-to-action links.
 * Supports dynamic text coloring via the `color` prop and accepts custom class names.
 *
 * @component
 * @param {string} [color] - Optional accent color: "fuchsia" (default), "lime", "cyan", or "violet".
 * @param {string} [className] - Additional Tailwind utility classes for custom styling.
 * @param {React.ReactNode} children - Button label or nested elements.
 *
 * @example
 * <TextButton color="cyan">Get Started</TextButton>
 */

import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const TextButton = (
  props: ComponentPropsWithoutRef<"button"> & { color?: string }
) => {
  const { className, children, color } = props;

  return (
    <button
      className={twMerge(
        // Base styling: bold, uppercase, colored CTA text
        "text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500",

        // Dynamic text color based on `color` prop
        color === "lime" && "text-lime-500",
        color === "cyan" && "text-cyan-500",
        color === "violet" && "text-violet-500",

        // Merge any additional classes passed in
        className
      )}
    >
      {children}
    </button>
  );
};
