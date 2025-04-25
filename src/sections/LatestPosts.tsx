/**
 * LatestPosts.tsx
 *
 * A featured blog section component that displays the latest blockchain-related posts.
 * The component uses Framer Motion to add a scroll-based animation for staggered entry.
 * It renders two columns — one static, one animated — to enhance user engagement.
 *
 * @component
 * @param {CollectionEntry<"blog">[]} latestPosts - Array of recent blog entries (max 4).
 */

import type { CollectionEntry } from "astro:content";
import { Card } from "../components/Card";
import { getPostColorFromCategory } from "../utils/postUtils";
import { Tag } from "../components/Tag";
import { CutCornerButton } from "../components/CutCornerButton";
import { twMerge } from "tailwind-merge";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export const LatestPosts = (props: {
  lattesPost: CollectionEntry<"blog">[];
}) => {
  const { lattesPost } = props;

  // Ref for scroll tracking
  const targetRaf = useRef(null);

  // Track vertical scroll progress for animation
  const { scrollYProgress } = useScroll({
    target: targetRaf,
    offset: ["start end", "start center"],
  });

  // Map scroll progress to a margin-top transform
  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);

  return (
    <section className="py-60">
      <div className="container">
        {/* Section heading and subheading */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Your portal to everything blockchain.
          </h2>
          <p className="text-xl lg:text-2xl text-center text-zinc-400 mt-8">
            Keep up with the newest trends, update , and insights in the
            blockchain world, update weekly.
          </p>
        </div>

        {/* Responsive two-column layout */}
        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column A: Static display for mobile and fallback */}
          <div className="flex flex-col gap-8">
            {lattesPost.map(
              ({ data: { title, description, category } }, postIndex) => (
                <Card
                  key={postIndex}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge(
                    (postIndex === 1 || postIndex === 3) && "md:hidden"
                  )}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="font-heading font-black text-3xl mt-3">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-6">{description}</p>
                </Card>
              )
            )}
          </div>

          {/* Column B: Scroll-animated column (desktop only) */}
          <motion.div
            className="hidden md:flex flex-col gap-8 mt-16"
            ref={targetRaf}
            style={{ marginTop }}
          >
            {lattesPost.map(
              ({ data: { title, description, category } }, postIndex) => (
                <Card
                  key={postIndex}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge(
                    (postIndex === 0 || postIndex === 2) && "md:hidden"
                  )}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="font-heading font-black text-3xl mt-3">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-6">{description}</p>
                </Card>
              )
            )}
          </motion.div>
        </div>

        {/* CTA button to blog archive */}
        <div className="flex justify-center mt-48 md:mt-32">
          <CutCornerButton>Read the Blog</CutCornerButton>
        </div>
      </div>
    </section>
  );
};
