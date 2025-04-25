/**
 * CallToAction.tsx
 *
 * A visually engaging call-to-action section that uses layered animated shapes (Hexagons & Circles)
 * and scroll-driven rotation effects. The section includes a heading, subheading, and a CTA button.
 *
 * Framer Motion's `useScroll` and `useTransform` are used to animate rotation based on scroll position.
 *
 * @component
 * @returns JSX.Element
 */

import { useRef } from "react";
import { Circle } from "../components/Circle";
import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";
import { useScroll, useTransform, motion } from "framer-motion";

export const CallToAction = () => {
  // Ref to the section for scroll-based animation tracking
  const sectionRef = useRef(null);

  // Scroll progress between [0, 1] based on viewport offset
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Rotate value mapped from scroll progress
  const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section className="py-60 overflow-hidden" ref={sectionRef}>
      <div className="container">
        <div className="relative">
          {/* Background animated hexagons (layered and rotating) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={700} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={1100} reverse duration={50} />
          </div>

          {/* Left-floating animated 3D cylinder */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -left-[600px] -top-[70px]" animate>
              <motion.img
                src="/assets/images/cylinder.png"
                className="size-[140px]"
                style={{
                  rotate: rotate,
                }}
              />
            </Circle>
          </div>

          {/* Top-floating animated 3D cuboid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute left-0 -top-[400px]" animate>
              <motion.img
                src="/assets/images/cuboid.png"
                className="size-[140px]"
                style={{
                  rotate: rotate,
                }}
              />
            </Circle>
          </div>

          {/* Section heading and description */}
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Ready to <span className="block">get started?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-sm mx-auto">
            Start building using blockchain technology, with Blockforge.
          </p>

          {/* CTA button centered below text */}
          <div className="flex justify-center mt-12">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
        </div>
      </div>
    </section>
  );
};
