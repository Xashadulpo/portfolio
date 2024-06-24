//  import { gridItems } from "@/config";

import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const About = () => {
  return (
    <section id="about" className="relative">
      <BentoGrid className="w-full mx-auto">
        {gridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            id={item.id}
            img={item.img}
            className={item.class}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
export default About;


const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",

    class: "col-span-4 md:col-span-6 lg:col-span-3 lg:row-span-4",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",

    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
    class: "col-span-4 md:col-span-3  lg:col-span-2 lg:row-span-2 ",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",

    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
    class: "col-span-4  md:col-span-3 lg:col-span-2 lg:row-span-2 ",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    imgClassName: "",

    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
    class: "col-span-4  md:col-span-3 lg:col-span-2  ",
  },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    class:
      "col-span-4  md:col-span-3 md:row-span-2 lg:col-span-3 lg:row-span-3 ",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    imgClassName: "",

    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
    class: "col-span-4  md:col-span-3 lg:col-span-2 lg:row-span-2",
  },
];