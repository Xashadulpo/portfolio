import { projects } from "@/config";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "../ui/3d-pin";

const RecentProject = () => {
  return (
    <div className="py-20 max-sm:px-10">
      <h1 className="text-white text-[48px] font-extrabold text-center">
       
        A small Selection of <span className="text-purple">recent project</span>
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2  justify-center mt-10 p-4 items-center xl:gap-x-[11rem] justify-items-center"
      
      >
        {projects.map((item) => (
          <div
            className="lg:min-h-[46.5rem] h-[35rem] flex items-center justify-center sm:w-[40rem] w-[90vw]"
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href={item.link}
            
            >
              <div className="relative flex items-center justify-center sm:w-[37rem] w-[100vw] overflow-hidden h-[30vh] lg:h-[40vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-white text-base line-clamp-1">
                {item.title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
