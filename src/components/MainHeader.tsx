import React from "react";

const MainHeader: React.FC = () => {
  return (
    <div className="w-full flex h-8 md:h-[6.5rem] flex-row bg-blue justify-center items-center px-6 pt-8 pb-10 border-b">
      <div className="w-1/2 flex h-full flex-row justify-start items-center">
        <p className="hidden md:block font-encode-sans-expanded md:text-4xl text-[#1A0A02]">
          ABCHotel
        </p>
        <p className="font-encode-sans-expanded-sb text-base text-[#1A0A02] md:hidden">
          Tasks of the Day
        </p>
      </div>
      <div className="w-1/2 flex h-full flex-row justify-end items-center ">
        <img className="md:hidden w-6 h-6 mr-4" src="search.png" />
        <img className="md:hidden w-6 h-6 mr-4" src="GUC153.png" />
        <img
          className="hidden w-12 h-12 mr-10 md:block"
          src="Notification 4.png"
        />
        <img className="w-8 h-8 md:w-12 md:h-12" src="Ellipse 185.png" />
      </div>
    </div>
  );
};

export default MainHeader;
