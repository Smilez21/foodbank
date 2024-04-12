import React, { useState } from "react";

const about = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevButtonClicked, setPrevButtonClicked] = useState(true);
  const [nextButtonClicked, setNextButtonClicked] = useState(false);

  const cards = [
    {
      title: "Ease of Donation",
      description: "Make a difference with just a few clicks",
      image: "1",
    },
    {
      title: "Accessibility",
      description: "Donate anytime and anywhere",
      image: "2",
    },
    {
      title: "Social Impact",
      description: "Enables individuals and organizations make a difference in the society",
      image: "3",
    },
    {
      title: "Feedback System",
      description: "Gather feedback from recipients to improve services",
      image: "4",
    },
    {
      title: "Reduced Food Waste",
      description: "Redirect surplus food from being wasted to those in need",
      image: "5",
    },
    {
      title: "Alleviates Hunger",
      description: "Provides essential food supplies to individuals and families facing food insecurity",
      image: "6",
    },
  ];

  const totalCards = cards.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    setNextButtonClicked(true);
    setPrevButtonClicked(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    setPrevButtonClicked(true);
    setNextButtonClicked(false);
  };

  return (
    <div className="bg-gray-100 overflow-x-auto">
      <div className="px-4 md:pt-16 pt-8 justify-center items-center" data-aos="zoom-in">
        <p className="large-header-text text-[15px] md:text-[20px] text-[#066163] text-center font-medium">
          WHAT WE SERVE
        </p>
        <p className="large-header-text text-[17px] md:text-[30px] text-gray-700 text-center font-semibold">
          Empowering Communities Through Food Relief
        </p>
        <p className="large-header-text text-[17px] md:text-[30px] text-gray-700 text-center font-semibold">
          Ending Hunger Together
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-8 px-8 pt-8 md:pt-[4rem]">
          {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
            <div key={index} className="">
              <div
                className="bg-white h-[300px] w-[350px] shadow-lg md:px-6 px-4 py-2 pb-4 flex flex-col justify-center items-center gap-4"
                data-aos="zoom-in-up"
              >
                <div className="flex items-center justify-center bg-gray-700 rounded-full h-20 w-20">
                  <p className="text-white font-semibold font-monts text-center">
                    {card.image}
                  </p>
                </div>

                <div className="flex flex-col gap-2 items-center">
                  <h2 className="mt-2 text-gray-900 text-[16px] text-left font-semibold leading-39.786 font-monts">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-text-sub md:text-md mb-4 text-1xl text-center text-gray-500 font-monts">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12 pb-12" data-aos="">
        <button
          onClick={handlePrev}
          className={`mr-4 p-2 w-[40px] rounded-lg ${
            prevButtonClicked ? "bg-gray-700" : "bg-gray-200"
          }`}
          disabled={currentIndex === 0}
        ></button>
        <button
          onClick={handleNext}
          className={`p-2 rounded-lg  w-[40px] ${
            nextButtonClicked ? "bg-gray-700" : "bg-gray-200"
          }`}
          disabled={currentIndex === totalCards - 4}
        ></button>
      </div>
    </div>
  );
};

export default about;
