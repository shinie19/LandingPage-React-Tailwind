import React from "react";
import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";

function NavBar(props) {
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2 cursor-pointer">NerdCard</div>
        <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" />
      </div>
      <ul className="ml-auto text-16 font-semibold">
        <HiOutlineMenu size={"24px"} className="cursor-pointer" />
      </ul>
    </nav>
  );
}

export default NavBar;
