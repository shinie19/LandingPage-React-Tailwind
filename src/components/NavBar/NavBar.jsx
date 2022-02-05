import React, { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

function NavBar(props) {
  const { isMobile } = props;

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">NerdCard</div>
        <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" />
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <>
            <li className="btn-hover cursor-pointer">Feature</li>
            <li className="btn-hover cursor-pointer">Menu</li>
            <li className="btn-hover cursor-pointer">Our Story</li>
            <li className="btn-hover cursor-pointer ml-28">Contact</li>
          </>
        )}

        {/* Menu */}
        {openMenu && (
          <div className="absolute right-8 bg-white p-8 text-center text-13 text-purple-900">
            <li className="cursor-pointer">Feature</li>
            <li className="cursor-pointer">Menu</li>
            <li className="cursor-pointer">Our Story</li>
            <li className="cursor-pointer">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
