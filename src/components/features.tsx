import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <div className="">
        <div className="md:pt-[8rem] py-24 flex flex-col md:flex-row items-center justify-center">
          <div
            className="items-center justify-center text-center md:text-left md:pr-[20rem]"
            data-aos="fade-down-left"
          >
            <img
              className="md:w-full max-w-[23.5rem] max-h-[22rem] md:h-[30rem] h-[24rem] sm:max-w-[50rem] sm:max-h-[39rem] rounded-[5rem]"
              src="love.webp"
              alt=""
              data-aos="fade-down-left"
            />
          </div>

          <div className="px-2 ml-4 pt-14 mb-12 flex flex-col font-monts">
            <p className="large-header-text max-w-[39.75rem] w-full md:max-w-[39.75rem] text-[25px] md:text-[35px] text-gray-900">
              Features
            </p>

            <div className="pt-4" data-aos="fade-down-right">
              <div className="flex flex-col md:flex-row mt-2 gap-2 ">
                <div className="bg-orange-50 p-2 rounded-full w-20 h-20 flex items-center justify-center">
                  <img src="/open-book.png" className="" alt=""></img>
                </div>
                <div className="justify-center items-center">
                  <p className="mb-2 text-lg text-[#463550] text-left md:text-left font-bold">
                    comprehensive_textbooks
                  </p>
                  <p className="md:max-w-[39.75rem] text-gray-600  mb-8 text-left md:text-left">
                    covering
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-2 gap-2 ">
                <div className="bg-purple-50 p-2 rounded-full w-20 h-20 flex items-center justify-center">
                  <img src="/mic.png" className="" alt=""></img>
                </div>
                <div className="justify-center items-center">
                  <p className="mb-2 text-lg text-[#463550] text-left md:text-left font-bold">
                    audio_books
                  </p>
                  <p className="md:max-w-[39.75rem] text-gray-600  mb-8 text-left md:text-left">
                    turn
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-2 gap-2 ">
                <div className="bg-green-50 p-2 rounded-full w-20 h-20 flex items-center justify-center">
                  <img src="/arrow.png" className="" alt=""></img>
                </div>
                <div className="justify-center items-center">
                  <p className="mb-2 text-lg text-[#463550] text-left md:text-left font-bold">
                    scholarly_resources
                  </p>
                  <p className="md:max-w-[39.75rem] text-gray-600  mb-8 text-left md:text-left">
                    access_clear
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-2 gap-2 ">
                <div className="bg-orange-50 p-2 rounded-full w-20 h-20 flex items-center justify-center">
                  <img src="/computer.png" className="" alt=""></img>
                </div>
                <div className="justify-center items-center">
                  <p className="mb-2 text-lg text-[#463550] text-left md:text-left font-bold">
                    instructional_videos
                  </p>
                  <p className="md:max-w-[39.75rem] text-gray-600  mb-8 text-left md:text-left">
                    dive_into
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default features;
