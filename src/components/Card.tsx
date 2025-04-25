/**
 * Card.tsx
 *
 * A reusable card component with a dynamic glowing background and a customizable CTA button.
 * The color prop changes the background accent color.
 *
 * @component
 * @param {string} [color] - Optional color accent (lime, cyan, violet).
 * @param {string} [buttonText] - Optional button text; defaults to "Learn More".
 * @param {React.ReactNode} children - Card content (title, text, etc).
 * @param {string} [className] - Additional Tailwind utility classes for layout/styling.
 *
 * @example
 * <Card color="cyan" buttonText="Explore">
 *   <h3 className="text-xl">Explore Web3</h3>
 *   <p>Learn about decentralized tech</p>
 * </Card>
 */

import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { TextButton } from "./TextButton";

export const Card = (
  props: ComponentPropsWithoutRef<"div"> & {
    color?: string;
    buttonText?: string;
  }
) => {
  const { color, children, className, buttonText } = props;
  return (
    <div className={twMerge("relative z-0 p-8 md:p-10 group", className)}>
      {/* Glowing blur effect that appears on hover */}
      <div
        className={twMerge(
          "absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
          color === "lime" && "bg-lime-500",
          color === "cyan" && "bg-cyan-500",
          color === "violet" && "bg-violet-500"
        )}
      ></div>

      {/* Static color glow layer with slight hover shift */}
      <div
        className={twMerge(
          "absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 transition duration-300 top-1.5 right-1.5 -z-10",
          color === "lime" && "bg-lime-500 group-hover:bg-lime-400",
          color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-400",
          color === "violet" && "bg-violet-500 group-hover:bg-violet-400"
        )}
      ></div>

      {/* Card background with a gradient mask */}
      <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>

      {/* Card content passed in as children */}
      <div>{children}</div>

      {/* Footer section with CTA button and arrow icon */}
      <div className="flex justify-between mt-12">
        <TextButton color={color}>{buttonText || "Learn More"}</TextButton>

        {/* Animated right arrow icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};
