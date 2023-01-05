import React from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const handleLogOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="flex justify-between px-5 sm:px-10  h-[80px] bg-black pt-2">
      <p className="text-white text-2xl sm:text-4xl">APP</p>
      <button
        onClick={handleLogOut}
        className="flex justify-center items-center gap-2 text-gray-600 bg-green-500 w-[120px] h-[34px] text-sm rounded-full"
      >
        <span>
          <FaUser />
        </span>
        LOG-OUT
      </button>
    </div>
  );
};

export default Navbar;
