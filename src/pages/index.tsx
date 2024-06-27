import About from "@/components/MidelSection/About";
import Hero from "@/components/Home/Hero";
import RecentProject from "@/components/MidelSection/RecentProject";

const index = () => {
  return (
    <div className="relative flex justify-center items-center bg-black-100 flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <About />
        <RecentProject />
      </div>
    </div>
  );
};

export default index;
