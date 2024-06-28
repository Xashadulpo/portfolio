import { companies, testimonials } from "@/config";
import Image from "next/image";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Clients = () => {
  return (
    <div className="py-20">
      <h1 className="text-white text-[48px] font-extrabold text-center">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="h-[50vh] rounded-md flex flex-col w-full  antialiased  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-7xl w-full flex justify-center items-center gap-10 lg:px-10 px-5 flex-wrap">
          {companies.map((item) => (
            <div className="flex items-center gap-1 " key={item.id}>
              <Image
                src={item.img}
                alt={item.img}
                width={45}
                height={45}
                className="object-contain"
              />
              <p className="text-white text-[1.5rem] extrabold font-Kanit font-kanitweight">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
