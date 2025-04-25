/**
 * Tag.tsx
 *
 * A small, styled tag component used for highlighting categories, labels, or keywords.
 * Supports dynamic coloring via a `color` prop and merges any additional Tailwind classes.
 *
 * @component
 * @param {string} [color] - Optional accent color (e.g., "lime", "cyan", "violet"). Defaults to fuchsia.
 * @param {string} [className] - Additional Tailwind utility classes for custom styling.
 * @param {React.ReactNode} children - The tag label or content.
 *
 * @example
 * <Tag color="lime">Blockchain</Tag>
 */

import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Tag = (
  props: ComponentPropsWithoutRef<"div"> & { color?: string }
) => {
  const { children, color, className } = props;
  return (
    <div
      className={twMerge(
        // Default styles: rounded, bold, small text, fuchsia color theme
        "px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full",

        // Dynamic color overrides
        color === "lime" && "bg-lime-500/15 text-lime-500",
        color === "cyan" && "bg-cyan-500/15 text-cyan-500",
        color === "violet" && "bg-violet-500/15 text-violet-500",

        // Merge any additional custom classes passed in
        className
      )}
    >
      {children}
    </div>
  );
};
