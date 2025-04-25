/**
 * Hexagon.tsx
 *
 * A reusable animated hexagon component built with SVG and Framer Motion.
 * It renders a static hexagon shape with an optional animated stroke that traces the border.
 * Useful for visual decoration, loading indicators, or animated design accents.
 *
 * @component
 * @param {number} [size=800] - Pixel size (both width and height) of the hexagon.
 * @param {boolean} [reverse=false] - If true, the animation runs in reverse.
 * @param {number} [duration=30] - Duration (in seconds) for one full stroke animation loop.
 * @param {string} [className] - Additional Tailwind utility classes.
 *
 * @example
 * <Hexagon size={400} reverse duration={20} className="text-cyan-400" />
 */

import {
  useLayoutEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const Hexagon = (
  props: ComponentPropsWithoutRef<"svg"> & {
    size?: number;
    reverse?: boolean;
    duration?: number;
  }
) => {
  const { className, size = 800, reverse = false, duration = 30 } = props;

  // Reference to the static hexagon path element
  const pathRef = useRef<SVGPathElement>(null);

  // State to hold the calculated total path length (scaled)
  const [totalPathLength, setTotalPathLength] = useState<number>();

  // On component mount, calculate the total stroke path length
  useLayoutEffect(() => {
    const pathLength = pathRef.current?.getTotalLength();
    if (!pathLength) return;
    const scaledPathLength = (pathLength * size) / 82;
    setTotalPathLength(scaledPathLength);
  }, []);

  return (
    <div className="inline-flex relative">
      {/* Static hexagon shape */}
      <svg
        width="82"
        height="72"
        viewBox="0 0 82 72"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge("text-fuchsia-500/10 -rotate-6", className)}
        style={{
          height: size,
          width: size,
        }}
      >
        <path
          d="M3.44337 38.5C2.55021 36.953 2.55021 35.047 3.44338 33.5L20.0566 4.72501C20.9498 3.178 22.6004 2.22501 24.3868 2.22501H57.6132C59.3996 2.22501 61.0502 3.178 61.9434 4.72501L78.5566 33.5C79.4498 35.047 79.4498 36.953 78.5566 38.5L61.9434 67.275C61.0502 68.822 59.3996 69.775 57.6132 69.775H24.3867C22.6004 69.775 20.9498 68.822 20.0566 67.275L3.44337 38.5Z"
          vector-effect="non-scaling-stroke"
          ref={pathRef}
        />
      </svg>

      {/* Animated stroke path, only rendered when path length is known */}
      {totalPathLength && (
        <motion.svg
          width="82"
          height="72"
          viewBox="0 0 82 72"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          xmlns="http://www.w3.org/2000/svg"
          className={twMerge(
            "text-fuchsia-500/30 -rotate-6 absolute",
            className
          )}
          initial={{
            strokeDashoffset: 0,
          }}
          animate={{
            strokeDashoffset: reverse ? totalPathLength : totalPathLength * -1,
          }}
          transition={{
            repeat: Infinity,
            duration,
            ease: "linear",
          }}
          style={{
            strokeDasharray: `500 ${totalPathLength - 500}`,
            height: size,
            width: size,
          }}
        >
          <path
            d="M3.44337 38.5C2.55021 36.953 2.55021 35.047 3.44338 33.5L20.0566 4.72501C20.9498 3.178 22.6004 2.22501 24.3868 2.22501H57.6132C59.3996 2.22501 61.0502 3.178 61.9434 4.72501L78.5566 33.5C79.4498 35.047 79.4498 36.953 78.5566 38.5L61.9434 67.275C61.0502 68.822 59.3996 69.775 57.6132 69.775H24.3867C22.6004 69.775 20.9498 68.822 20.0566 67.275L3.44337 38.5Z"
            vector-effect="non-scaling-stroke"
          />
        </motion.svg>
      )}
    </div>
  );
};
