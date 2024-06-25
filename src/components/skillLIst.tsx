import React from "react";

const SkillList = ({ listes, position, otherclasses }: SkillLIstProps) => {
  return (
    <div className="flex flex-col gap-3 md:gap-3 lg:gap-5">
      {position === "right" && (
        <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]" />
      )}
      {listes.map((item, i) => (
        <span
          key={i}
          className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] text-white"
        >
          {item}
        </span>
      ))}
      {position === "left" && (
        <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]" />
      )}
    </div>
  );
};

export default SkillList;
