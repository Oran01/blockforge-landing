/**
 * Circle.tsx
 *
 * A circular UI container with an optional animated border using Framer Motion.
 * Commonly used as a decorative element or container for icons/content.
 *
 * @component
 * @param {boolean} [animate=false] - If true, the outer border rotates infinitely.
 * @param {string} [className] - Optional Tailwind utility classes to style the wrapper.
 * @param {React.ReactNode} children - Any nested content inside the circle.
 *
 * @example
 * <Circle animate>
 *   <Icon />
 * </Circle>
 */

import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const Circle = (
  props: ComponentPropsWithoutRef<"div"> & { animate?: boolean }
) => {
  const { className, children, animate = false } = props;
  return (
    <div
      className={twMerge(
        "bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full relative",
        className
      )}
    >
      {/* Outer animated ring using Framer Motion */}
      <motion.div
        animate={
          animate && {
            rotate: 360,
          }
        }
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
        className={twMerge(
          "absolute inset-0 rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 border-[6px] border-transparent",
          animate && "border-t-fuchsia-500/30"
        )}
      />

      {/* Render any children inside the circle */}
      {children}
    </div>
  );
};
