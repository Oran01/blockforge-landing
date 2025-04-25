/**
 * FeatureCards.tsx
 *
 * A carousel-style section that highlights four core features of Blockforge.
 * Each feature is represented as a card with an icon, title, and description.
 * Cards auto-rotate every 3 seconds unless the user hovers over them.
 *
 * @component
 * @returns JSX.Element
 */

import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { twMerge } from "tailwind-merge";

// Static array of card data for the features
const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Revolutionary Blockchain API",
    description:
      "Effortlessly integrate and manage blockchain data with our cutting-edge API , designed for seamless connectivity.",
    color: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Decentralized Data Solution",
    description:
      "Empower your applications with decentralized data solution, ensuring security and transparency at every step.",
    color: "lime",
  },
  {
    image: "/assets/images/cone.png",
    title: "Next-Gen Smart Contracts",
    description:
      "Unlock the potential of next-gen smart contracts with our robust and scalable  API, tailored for modern blockchain needs.",
    color: "cyan",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Seamless Blockchain Integration",
    description:
      "Integrate blockchain technology seamlessly into your projects with minimal effort and maximum efficiency.",
    color: "violet",
  },
];

export const FeaturesCardsSection = () => {
  // Index of currently active (visible) card
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  // Whether the user is currently hovering over the cards
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate cards every 3 seconds if not hovered
  useEffect(() => {
    if (isHovered) return;
    const timeout = setTimeout(() => {
      setSelectedCardIndex((curr) =>
        curr === cardData.length - 1 ? 0 : curr + 1
      );
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [selectedCardIndex, isHovered]);

  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        {/* Section title */}
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
          Discover the future of blockchain with Blockforge.
        </h2>

        {/* Horizontal scroll carousel of cards */}
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {cardData.map(({ image, title, description, color }) => (
              <div
                className="inline-flex transition-all duration-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  // Scroll effect by translating the wrapper
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                }}
              >
                <Card
                  key={title}
                  className="max-w-xs md:max-w-md"
                  color={color}
                >
                  {/* Feature image */}
                  <div className="flex justify-center -mt-28">
                    <div className="inline-flex relative">
                      {/* Shadow glow effect below image */}
                      <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                      <img
                        src={image}
                        alt="Pill image"
                        className="size-40 group-hover:-translate-y-6 transition duration-300"
                      />
                    </div>
                  </div>

                  {/* Card content: title and description */}
                  <h3 className="font-heading font-black text-3xl mt-12">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-4">{description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({ title }, cardIndex) => (
              <div
                key={title}
                className={twMerge(
                  "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                  cardIndex === selectedCardIndex && "bg-zinc-300"
                )}
                onClick={() => setSelectedCardIndex(cardIndex)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
