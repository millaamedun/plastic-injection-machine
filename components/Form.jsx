import Image from "next/image";
import React from "react";

import hands from "../public/assets/hand1.png";

const Form = ({direction}) => {
  return (
    <div className={direction==='rtl'?"rtl bg-[#9db5cfd6] dark:bg-[#0a1728] w-full h-full":"bg-[#9db5cfd6] dark:bg-[#0a1728] w-full h-full"}>
      <div className="h-screen max-w-[1320px] w-full m-auto pt-[150px] pb-[42px] px-3 md:px-11 text-white">
        <div className="w-full object-cover py-[60px] relative">
          <Image className="w-full m-auto blur-sm" src={hands} alt="" />

          <div className="w-[90%] sm:w-[75%] h-[600px]  bg-[#7695bd80] dark:bg-[#0d1f369e] rounded-lg absolute top-[60px] blur-xl z-[1] right-0 left-0 m-auto"></div>
          <div className="w-[87%] sm:w-[72%] m-auto absolute top-[60px] right-0 left-0  z-[3]">
            <form className="flex justify-around items-center lg:items-start py-[12%] lg:py-[18%] flex-col lg:flex-row ">
              <div className="w-[99%] sm:w-[90%] md:w-[72%] lg:w-[42%] flex flex-col justify-around items-start h-full mb-9 lg:mb-0">
                <label className="py-3 rounded-full w-[90%] m-auto pr-3 text-sm sm:text-base">
                  نام کاربری :
                </label>
                <input
                  type="text"
                  className="bg-white/10 focus:outline-none px-3 border-2 border-[#c1e8ff] py-2 rounded-full w-[90%] m-auto mb-6"
                ></input>
                <label className="py-3 rounded-full w-[90%] m-auto pr-3 text-sm sm:text-base">
                  ایمیل :{" "}
                </label>
                <input
                  type="email"
                  className="bg-white/10 focus:outline-none px-3 border-2 border-[#c1e8ff] py-2 rounded-full w-[90%] m-auto"
                />
              </div>
              <div className="w-[99%] sm:w-[90%] md:w-[72%] lg:w-[57%] flex flex-col justify-around items-start relative">
                <label className="py-2 rounded-full w-[90%] m-auto pr-3 text-sm sm:text-base">
                  متن پیام :
                </label>
                <textarea
                  rows="6"
                  className="bg-white/10 resize-none scroll focus:outline-none p-3 border-2 border-[#c1e8ff] rounded-xl w-[90%] m-auto mb-6"
                />
                <button className={direction==='rtl'?"absolute bottom-1 left-[12%] text-sm sm:text-base m-auto py-1.5 px-6 sm:px-9 border-2  border-[#c1e8ff] bg-[#c1e8ff] text-[#3B4359] rounded-full ease-in duration-300":"absolute bottom-1 right-[12%] text-sm sm:text-base m-auto py-1.5 px-6 sm:px-9 border-2  border-[#c1e8ff] bg-[#c1e8ff] text-[#3B4359] rounded-full ease-in duration-300"}>
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
