import React from "react";

import { MdLocationCity } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { BiMailSend } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Contact = ({ direction }) => {
  return (
    <div
      className={
        direction === "rtl"
          ? "rtl bg-[#9db5cfd6] dark:bg-[#0a1728] w-full h-full"
          : "bg-[#9db5cfd6] dark:bg-[#0a1728] w-full h-full"
      }
    >
      <div className="h-full pt-[150px] pb-[42px] max-w-[1320px] m-auto px-11">
        <div className="relative h-full rounded-2xl text-white flex justify-between items-center  border-2 border-[#c1e8ff] flex-col lg:flex-row">
          <div className="w-[90%] md:w-[70%] lg:w-[45%] py-[9%] px-[1%] md:px-[6%] flex flex-col items-start relative">
            <div
              className={
                direction === "rtl"
                  ? "hidden md:block absolute w-[210px] motion-safe:animate-spin-slow h-[210px] z-[1] border-2 border-[#4392c0] dark:border-[#7da0ca] filter blur-md  top-6 right-[9%] xl:right-0"
                  : "hidden md:block absolute w-[210px] motion-safe:animate-spin-slow h-[210px] z-[1] border-2 border-[#4392c0] dark:border-[#7da0ca] filter blur-md  top-6 left-[9%] xl:left-0"
              }
            ></div>
            <p className="mb-9 text-sm md:text-base">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div className="flex justify-normal items-center py-6 ">
              <div>
                <MdLocationCity size={30} />
              </div>
              <div className="flex flex-col items-start px-6 text-sm md:text-base">
                <h4>نشانی دفتر مرکزی:</h4>
                <h4 className="font-semibold pt-2">
                  پیامبر اعظم ۷۳ آزادی ۱۲۷/۴ پلاک ۱۱
                </h4>
              </div>
            </div>
            <div className="flex justify-normal items-center py-6 ">
              <div>
                <PiPhoneCallFill size={27} />
              </div>
              <div className="flex flex-col items-start px-6">
                <h4 className="text-base lg:text-xl">0912-369-9999</h4>
                <h4 className="text-base lg:text-xl pt-3">0513-369-9999</h4>
              </div>
            </div>
            <div className="flex justify-normal items-center py-6 ">
              <div>
                <BiMailSend size={27} />
              </div>
              <div className="flex flex-col items-start px-6">
                <h4 className="text-sm md:text-base lg:text-xl">
                  Plastic-Injection@gmail.com
                </h4>
              </div>
            </div>
            <div className="flex justify-between items-center relative pt-11 pb-11 m-auto xl:pb-0 w-[90%] md:w-full">
              <div
                className={
                  direction === "rtl"
                    ? "hidden md:block absolute w-[60px] motion-safe:animate-spin-slow h-[60px] z-[1] border-2 border-[#4392c0] dark:border-[#7da0ca] filter blur-sm  top-9 right-0"
                    : "hidden md:block absolute w-[60px] motion-safe:animate-spin-slow h-[60px] z-[1] border-2 border-[#4392c0] dark:border-[#7da0ca] filter blur-sm  top-9 left-0"
                }
              ></div>
              <div className="cursor-pointer hover:text-[#c1e8ff] scale-105 ease-in duration-300 relative z-[2]">
                <FaFacebookSquare size={36} />
              </div>
              <div className="cursor-pointer hover:text-[#c1e8ff] scale-105 ease-in duration-300">
                <FaLinkedin size={36} />
              </div>
              <div className="cursor-pointer hover:text-[#c1e8ff] scale-105 ease-in duration-300">
                <FaTwitterSquare size={36} />
              </div>
              <div className="cursor-pointer hover:text-[#c1e8ff] scale-105 ease-in duration-300">
                <GrInstagram size={36} />
              </div>
            </div>
          </div>
          <div className="w-[90%] md:w-[70%] lg:w-[36%] rounded-xl m-auto relative pb-[9%] lg:pb-0">
            <div
              className={
                direction === "rtl"
                  ? "hidden md:block absolute w-[450px] motion-safe:animate-spin-slow-reverse h-[450px] z-[1] border-2 border-[#4392c0] dark:border-[#7da0ca] filter blur-md  top-0 right-[6%] lg:right-[-18%] xl:right-11"
                  : "hidden md:block absolute w-[450px] motion-safe:animate-spin-slow-reverse h-[450px] z-[1] border-2 border-[#4392c0] dark:border-[#7da0ca] filter blur-md  top-0 left-[6%] lg:left-[-18%] xl:left-11"
              }
            ></div>
            <iframe
              className="relative z-[2] w-full rounded-xl shadow-md shadow-[#c1e8ff]"
              src="https://www.google.com/maps/d/embed?mid=1U0nKEmH9EA1mixAQjFBeH7CUZ_mH09U&ehbc=2E312F"
              width="640"
              height="480"
            ></iframe>
          </div>
          <div
            className={
              direction === "rtl"
                ? "absolute top-[-15px] right-[6%] bg-[#adc1d7] dark:bg-[#0a1728] px-3"
                : "absolute top-[-15px] left-[6%] bg-[#adc1d7] dark:bg-[#0a1728] px-3"
            }
          >
            <h1 className="text-lg sm:text-2xl">
              راه های <strong className="text-[#c1e8ff] ">ارتباطی </strong> ما
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
