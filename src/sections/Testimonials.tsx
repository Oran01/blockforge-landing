/**
 * Testimonials.tsx
 *
 * A 3-column testimonial section using Framer Motion for scroll-in animations.
 * Each testimonial displays a quote, name, title, and avatar.
 * One testimonial is hidden on medium screens and only shown on large screens to optimize layout.
 *
 * @component
 * @returns JSX.Element
 */

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

// Static testimonials array (could be moved to CMS or JSON)
const testimonials = [
  {
    text: "The user experience is phenomenal, and the support team is always there to help. Highly recommended!",
    name: "Erica Wyatt",
    title: "Product Manager - BlockLink",
    avatarImage: "/assets/images/avatar-erica-wyatt.jpg",
  },
  {
    text: "Our productivity has skyrocketed since we started using Blockforge. It's a game-changer for our team.",
    name: "Noel Baldwin",
    title: "Lead Developer - BitBridge",
    avatarImage: "/assets/images/avatar-noel-baldwin.jpg",
  },
  {
    text: "The Integration process seamless, and the performance improvements are beyond our expectation.",
    name: "Harry Bender",
    title: "CTO = CryptoSolutions",
    avatarImage: "/assets/images/avatar-harry-bender.jpg",
  },
];

export const TestimonialSection = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonials.map((testimonial, testimonialIndex) => (
            <motion.blockquote
              key={testimonialIndex}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: testimonialIndex * 0.5,
                ease: "easeInOut",
                duration: 1,
              }}
              viewport={{
                once: true,
              }}
              className={twMerge(
                testimonialIndex === 2 && "md:hidden lg:block"
              )}
            >
              {/* Testimonial quote */}
              <p className="font-heading text-3xl lg:text-4xl font-black">
                &rdquo;{testimonial.text}&rdquo;
              </p>

              {/* Attribution block: avatar, name, title */}
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  {/* Avatar */}
                  <div>
                    <div
                      className="size-16 bg-zinc-700 rounded-full bg-cover"
                      style={{
                        backgroundImage: `url(${testimonial.avatarImage})`,
                      }}
                    ></div>
                  </div>

                  {/* Name and title */}
                  <div>
                    <div className="text-lg not-italic font-black">
                      {testimonial.name}
                    </div>
                    <div className="text-zinc-400 not-italic">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
