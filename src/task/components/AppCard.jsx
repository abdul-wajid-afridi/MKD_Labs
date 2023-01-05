import React from "react";
import { FaArrowUp } from "react-icons/fa";
const AppCard = ({ name, title, photo, like, id }) => {
  return (
    <div className="flex justify-between items-center px-3  border rounded-lg h-[80px] w-[80%] ">
      <div className="flex items-center gap-3 sm:gap-4  text-gray-500 text-sm">
        <p>{id}</p>
        <img src={photo} alt={name} className="h-[70px] w-[150px] rounded-lg" />
        <p className="w-[30%]">{title}</p>
        <p className="text-green-500 text-xs">{name}</p>
      </div>
      <div className="flex items-center gap-1  text-sm">
        <p>{like}</p>
        <span className="text-green-500">{<FaArrowUp />}</span>
      </div>
    </div>
  );
};

export default AppCard;
