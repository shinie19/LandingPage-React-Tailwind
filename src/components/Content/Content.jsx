import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";

function Content(props) {
  return (
    <section className="">
      <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b from-white/40 to-transparent shadow-md rounded-[24px]">
        <div className="flex items-start gap-8 mt-16">
          <FaUser size={"22px"} className="mt-[12px]" />
          <p className="text-26">
            1199
            <p className="text-13 font-semibold mb-[36px]">Customers</p>
          </p>
        </div>
        <div className="flex items-start gap-8 mb-16">
          <BsFillCreditCardFill size={"22px"} className="mt-3" />
          <p className="text-26">
            1259
            <p className="text-13 font-semibold">Cards Issued</p>
          </p>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold">
        <p className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>Cards reports send to your phone every weeks</p>
        </p>
        <p className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>No external fees</p>
        </p>
        <p className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>Set spending limits and restrictions</p>
        </p>
      </div>
    </section>
  );
}

export default Content;
