import React from "react";

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, onClose }) => {
  return (
    <div className="w-full wrap bg-[#F7F7F7] z-50 mx-10">
      <div className="py-3 px-6 rounded-tl-xl rounded-br-xl shadow-md flex flex-row justify-center items-center">
        <p className="text-lg font-semibold font-encode-sans-expanded-sb text-[0.75rem] text-[#00A441] mr-4">{message}</p>
        <button
          className="w-5 h-5  bg-transparent  text-blue-600  rounded-md  focus:outline-none"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
