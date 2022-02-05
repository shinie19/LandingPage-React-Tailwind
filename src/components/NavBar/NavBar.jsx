import React, { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from "../../Hooks/useDarkMode";

function NavBar(props) {
  const { isMobile } = props;
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">NerdCard</div>
        {isDarkMode ? (
          <BsSunFill
            onClick={() => toggleDarkMode()}
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
          />
        ) : (
          <FaMoon
            onClick={() => toggleDarkMode()}
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
          />
        )}
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
          <div className="absolute right-8 bg-white p-8 text-center text-13 text-purple-900 z-10">
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
