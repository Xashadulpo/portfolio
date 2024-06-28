"use client";
import { leftLists, rightLists } from "@/config";
import { cn } from "@/utils/cn";
import { useState } from "react";
import SkillList from "../skillLIst";
import BackgroundGradientAnimation from "./bgGradientAnimation";
import GridGlobe from "./GridGlobe";
import animationData from "@/config/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[11rem] lg:grid lg:auto-rows-[8.5rem] grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 max-w-full mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: BentoGridItemProps) => {
  const [copied, setCopied] = useState(false);
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleCopy = () => {
    const text = "xashadulbusiness@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={id === 6 ? "flex justify-center" : ""}>
        <div className="w-full h-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={`${imgClassName} "object-center object-cover"`}
            />
          )}
          {id === 6 && <BackgroundGradientAnimation />}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-center object-cover"
            />
          )}
        </div>
      </div>
      <div
        className={cn(
          titleClassName,
          `group-hover/bento:translate-x-2 transition duration-200  absolute md:h-full min-h-40 flex flex-col ${
            id === 3 ? "p-2" : "p-5"
          }   lg:p-10`
         )}
       
       >
        <div className="font-sans font-extralight  md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div>
        <div
          className={`${titleClassName} flex font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white`}
        >
          {title}
        </div>
        {id === 6 && (
          <div className=" w-full relative ">
            <div
              className={`absolute -bottom-0 right-0 ${copied ? "block" : ""}`}
            >
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>

            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleBtn={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        )}
      </div>
      {id === 2 && <GridGlobe />}
      {id === 3 && (
        <div className="flex gap-1 lg:gap-4 w-fit absolute -right-3 lg:-right-2">
          <SkillList listes={leftLists} position="left" otherclasses="" />
          <SkillList listes={rightLists} position="right" otherclasses="" />
        </div>
      )}
    </div>
  );
};
