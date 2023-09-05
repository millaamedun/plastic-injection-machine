import React from "react";

import { MdLocationCity } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { BiMailSend } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

import { BsShopWindow } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi";
import { TbBuildingFactory2 } from "react-icons/tb";

const Footer = ({direction}) => {
  return (
    <div className={direction==='rtl'?"rtl w-full h-full text-white bg-[#7da0ca] relative":"w-full h-full text-white bg-[#7da0ca] relative"}>

      <div className="bg-[#92afc8eb]  dark:bg-[#101f31]  pb-[3%] m-auto px-6 absolute z-[3] top-0 right-0 left-0">
        <div className="max-w-[1320px] m-auto flex flex-col items-center">
          <div className="w-[99%] sm:w-[90%] m-auto flex justify-center items-start flex-col lg:flex-row  pt-[1%] pb-[9%] relative">
            <div className="w-[90%] lg:w-[45%] px-[1%] md:px-[3%] lg:px-[6%] flex flex-col items-start relative m-auto mb-[54px] lg:mb-0">
              <div className="w-full flex flex-col items-center lg:items-start m-auto lg:m-0">
                <div className="relative">
                  <div className="hidden md:block absolute w-[45px] motion-safe:animate-spin-slow h-[45px] z-[3] border-2 border-[#4392c0] dark:border-[#7da0ca] filter blur-sm  top-0 right-[-30px]"></div>
                </div>
                <div className="w-full flex justify-around items-center flex-col md:flex-row lg:flex-col">
                  <div className="w-full flex justify-around items-center flex-row lg:flex-col">
                    <div className="flex justify-center lg:justify-start items-center w-[75%] lg:w-full py-6 ">
                      <div>
                        <BsShopWindow size={23} />
                      </div>
                      <h3 className="mx-3 text-md cursor-pointer">محصولات</h3>
                    </div>
                    <div className="flex justify-center lg:justify-start items-center w-[75%] lg:w-full py-6 ">
                      <div>
                        <HiOutlineNewspaper size={26} />
                      </div>
                      <h3 className="mx-3 text-md cursor-pointer">مقالات</h3>
                    </div>
                  </div>
                  <div className="w-full flex justify-around items-center flex-row lg:flex-col">
                    <div className="flex justify-center lg:justify-start items-center w-[75%] lg:w-full py-6 ">
                      <div>
                        <TbBuildingFactory2 size={26} />
                      </div>
                      <h3 className="mx-3 text-md cursor-pointer">شرکت</h3>
                    </div>
                    <div className="flex justify-center lg:justify-start items-center w-[75%] lg:w-full py-6 ">
                      <div>
                        <FaRegHandshake size={26} />
                      </div>
                      <h3 className="mx-3 text-md cursor-pointer">
                        تماس با ما
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[90%] lg:w-[45%] px-[1%] md:px-[3%] xl:px-[6%] flex flex-col items-start relative m-auto mt-0 lg:mt-[60px] ">
              <div className={direction==='rtl'?"hidden md:block absolute w-[210px] motion-safe:animate-spin-slow-reverse h-[210px] z-[1] border-2 border-[#4392c0] dark:border-[#7da0ca] filter blur-md  top-6 right-[9%] xl:right-0":"hidden md:block absolute w-[210px] motion-safe:animate-spin-slow-reverse h-[210px] z-[1] border-2 border-[#4392c0] dark:border-[#7da0ca] filter blur-md  top-6 left-[9%] xl:left-0"}></div>
              <div className="flex justify-between items-center w-full flex-col md:flex-row lg:flex-col">
                <div className="flex justify-center lg:justify-normal items-center py-6 w-[75%] sm:w-[54%] md:w-[51%] lg:w-full m-auto">
                  <div>
                    <MdLocationCity size={30} />
                  </div>
                  <div className="w-full flex flex-col items-start px-6 text-sm lg:text-base">
                    <h4>نشانی دفتر مرکزی:</h4>
                    <h4 className="font-semibold pt-2">
                      پیامبر اعظم ۷۳ آزادی ۱۲۷/۴ پلاک ۱۱
                    </h4>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-normal items-center py-6 w-[75%] sm:w-[54%] m-auto md:w-[33%] lg:w-full">
                  <div>
                    <PiPhoneCallFill size={27} />
                  </div>
                  <div className="w-full flex flex-col items-start px-6">
                    <h4 className="text-base lg:text-xl">0912-369-9999</h4>
                    <h4 className="text-base lg:text-xl pt-3">0513-369-9999</h4>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-normal items-center py-6 w-[75%] sm:w-[54%] md:w-[48%] lg:w-full m-auto">
                <div>
                  <BiMailSend size={27} />
                </div>
                <div className="w-full flex flex-col items-start px-6">
                  <h4 className="text-sm lg:text-xl">
                    Plastic-Injection@gmail.com
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[90%] border-b-2 border-[#c1e8ff] m-auto mt-9 sm:mt-0">
            <div className="absolute bottom-[-15px] right-0 left-0 flex justify-between items-center m-auto w-[72%]">
              <div className="hidden md:block absolute w-[60px] motion-safe:animate-spin-slow h-[60px] z-[1] border-2 border-[#4392c0] dark:border-[#7da0ca] filter blur-sm  top-0 right-0"></div>
              <div className="hidden md:block absolute w-[72px] motion-safe:animate-spin-slow-reverse h-[72px] z-[1] border-2 border-[#4392c0] dark:border-[#7da0ca] filter blur-sm  top-[-9px] left-0"></div>
              <div className="cursor-pointer bg-[#92afc8eb]  dark:bg-[#101f31]   hover:text-[#c1e8ff] scale-105 ease-in duration-300 relative z-[2]">
                <FaFacebookSquare size={36} />
              </div>
              <div className="cursor-pointer bg-[#92afc8eb]  dark:bg-[#101f31]   hover:text-[#c1e8ff] scale-105 ease-in duration-300">
                <FaLinkedin size={36} />
              </div>
              <div className="cursor-pointer bg-[#92afc8eb]  dark:bg-[#101f31]   hover:text-[#c1e8ff] scale-105 ease-in duration-300">
                <FaTwitterSquare size={36} />
              </div>
              <div className="cursor-pointer bg-[#92afc8eb]  dark:bg-[#101f31]   hover:text-[#c1e8ff] scale-105 ease-in duration-300">
                <GrInstagram size={36} />
              </div>
            </div>
          </div>
          <div className="cursor-pointer text-center w-[72%] md:w-[51%] lg:w-[36%] mt-[90px] py-3 m-auto border-2 border-[#c1e8ff] rounded-full">Created By <strong className="hover:text-[#c1e8ff] ease-in duration-150 font-medium">Millaamedun</strong></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
