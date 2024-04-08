// SideMenu.tsx
import React, { useState } from "react";

const SideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onHomeClick = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="h-full w-full">
      <div
        className={`flex flex-row justify-center items-center ${
          !isOpen ? "bg-white" : "bg-[#F0F0F0]"
        } p-4`}
        onClick={onHomeClick}
      >
        <svg
          fill="#000000"
          width="24px"
          height="24px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.772 16.043l-15.012-15.724c-0.189-0.197-0.449-0.307-0.721-0.307s-0.533 0.111-0.722 0.307l-15.089 15.724c-0.383 0.398-0.369 1.031 0.029 1.414 0.399 0.382 1.031 0.371 1.414-0.029l1.344-1.401v14.963c0 0.552 0.448 1 1 1h6.986c0.551 0 0.998-0.445 1-0.997l0.031-9.989h7.969v9.986c0 0.552 0.448 1 1 1h6.983c0.552 0 1-0.448 1-1v-14.968l1.343 1.407c0.197 0.204 0.459 0.308 0.722 0.308 0.249 0 0.499-0.092 0.692-0.279 0.398-0.382 0.411-1.015 0.029-1.413zM26.985 14.213v15.776h-4.983v-9.986c0-0.552-0.448-1-1-1h-9.965c-0.551 0-0.998 0.445-1 0.997l-0.031 9.989h-4.989v-15.777c0-0.082-0.013-0.162-0.032-0.239l11.055-11.52 10.982 11.507c-0.021 0.081-0.036 0.165-0.036 0.252z"
            fill={`${isOpen ? "#1A0A02" : "#5F69C7"}`}
          ></path>
        </svg>
        <p
          className={`font-encode-sans-expanded-sb text-base ${
            isOpen ? "text-[#1A0A02]" : "text-[#5F69C7]"
          } ml-1.5`}
        >
          Home
        </p>
      </div>
      <div className="p-4 cursor-pointer" onClick={toggleDropdown}>
        <div
          className={`flex flex-row justify-center items-center ${
            !isOpen ? "bg-white" : "bg-[#F0F0F0]"
          }`}
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.25 5V19H21.25V5H3.25ZM7.25 7V9H5.25V7H7.25ZM5.25 13V11H7.25V13H5.25ZM5.25 15H7.25V17H5.25V15ZM19.25 17H9.25V15H19.25V17ZM19.25 13H9.25V11H19.25V13ZM19.25 9H9.25V7H19.25V9Z"
              fill={`${!isOpen ? "#1A0A02" : "#5F69C7"}`}
            />
          </svg>
          <p
            className={`font-encode-sans-expanded-sb text-base ${
              !isOpen ? "text-[#1A0A02]" : "text-[#5F69C7]"
            } ml-1.5`}
          >
            Console
          </p>
        </div>
        <div className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
          <div className="p-2 text-black">Attendance</div>
          <div className="p-2 text-black">Staff</div>
          <div className="p-2 text-black">Overview</div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
