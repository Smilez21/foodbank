import React, { useEffect } from "react";
import Header from "./header";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const landing = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-x-auto">
      <Header />
      <div className="md:pt-[12rem] py-24 flex flex-col md:flex-row justify-center md:gap-64">
        <div
          className="px-12 flex flex-col justify-center items-center md:items-start"
          data-aos="fade-right"
        >
          <h1 className="large-header-text font-semibold md:text-[3.5rem] text-[2rem] w-[23rem] md:w-[39rem] font-monts text-gray-700">
            Nourish Together
            <br />
            Where Every Morsel is a{" "}
            <span className="text-[#066163]">Beacon of Hope.</span>
          </h1>
          <p className="w-[23rem] md:w-[39rem] text-gray-500 small-header-text md:text-[1.2rem] mb-8 font-monts">
            Join us in the joy of giving by connecting surplus food with those
            in need. Together, let's create a world where no one goes to bed
            hungry. Start sharing the love today.
          </p>
          <button
            className="bg-gray-700 hover:bg-gray-400 text-white font-bold py-4 mr-10 md:px-6 md:rounded-[1rem] rounded-lg text-[1.2rem] font-monts w-full sm:w-auto items-start "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Get Started
          </button>
        </div>

        <div className="flex justify-center " data-aos="fade-left">
          <img
            className=" pt-8 md:w-full max-w-[23.5rem] max-h-[22rem] md:h-[30rem] h-[24rem] sm:max-w-[50rem] sm:max-h-[39rem] justify-center items-center rounded-[6rem]"
            src="food.webp"
            alt=""
            data-aos="fade-down-left"
          />
        </div>
      </div>
    </div>
  );
};

export default landing;
