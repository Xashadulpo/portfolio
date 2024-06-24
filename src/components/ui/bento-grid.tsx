import { cn } from "@/utils/cn";
import BackgroundGradientAnimation from "./bgGradientAnimation";

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
        "grid auto-rows-[11rem] lg:grid lg:auto-rows-[8rem] grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 max-w-full mx-auto ",
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
              className={`${imgClassName} "object-contain object-cover"`}
            />
          )}
          {id === 6 && (
            <BackgroundGradientAnimation>
              <div className="absolute  z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
            </BackgroundGradientAnimation>
          )}
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
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        <div className="font-sans font-extralight  md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div>
        <div
            className={`${titleClassName} font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white`}
          >
            {title}
          </div>
      </div>
    </div>
  );
};
