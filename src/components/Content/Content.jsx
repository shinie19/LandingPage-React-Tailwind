import React from "react";
import { FaUser } from "react-icons/fa";

function Content(props) {
  return (
    <section className="">
      <div className="ml-[70px] mr-[54px] text-bold bg-purple-600 flex items-center bg-gradient-to-b from-white/40 to-transparent shadow-md rounded-[24px]">
        <div className="mt-16 flex items-center">
          <FaUser size={"22px"} className="mt-[12px]" />
          <p className="text-26">1199</p>
        </div>
      </div>
    </section>
  );
}

export default Content;
