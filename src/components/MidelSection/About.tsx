 import { gridItems } from "@/config";

import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const About = () => {
  return (
    <section id="about" className="relative">
      <BentoGrid className="w-full my-20">
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
