// import { gridItems } from "@/config";
import { gridItems } from "@/config";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";


const About = () => {
  return (
    <section id="about" className="relative">
      <BentoGrid className="w-full py-20 ">
        {gridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.class}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
export default About;

const items = [
  {
    title: "The Dawn of Innovation 1",
    description: "Explore the birth of groundbreaking ideas and inventions.",

    class: "col-span-3 row-span-4",
  },
  {
    title: "The Digital Revolution 2",
    description: "Dive into the transformative power of technology.",
    class: "col-span-2 row-span-2",
  },
  {
    title: "The Art of Design 3",
    description: "Discover the beauty of thoughtful and functional design.",
    class: "col-span-2 row-span-2",
  },
  {
    title: "The Power of Communication 4",
    description:
      "Understand the impact of effective communication in our lives.",
    class: "col-span-2 row-span-1",
  },
  {
    title: "The Pursuit of Knowledge 5",
    description: "Join the quest for understanding and enlightenment.",
    class: "col-span-3 row-span-3",
  },
  {
    title: "The Joy of Creation 6",
    description: "Experience the thrill of bringing ideas to life.",
    class: "col-span-2 row-span-2",
  },
];
