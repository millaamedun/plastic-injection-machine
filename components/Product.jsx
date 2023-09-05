import React from "react";
import Image from "next/image";

import pic from "../public/assets/7.png";
import pic2 from "../public/assets/3.png";
import pic3 from "../public/assets/5.png";

const Product = () => {
  return (
    <>
     <div className="w-full h-[300px] bg-gradient-to-b from-transparent to-[#adc1d7]/20 dark:to-[#142133]/70 mt-[-300px]"></div>
    <div className="bg-[#9db5cfd6] dark:bg-[#0a1728] w-full h-full pt-[111px] pb-[42px] text-white relative">
      <div className="max-w-[1300px] m-auto px-6 flex justify-between items-center flex-col lg:flex-row">
        <div className="group max-w-[360px] sm:max-w-full  w-full sm:w-[84%] lg:w-[32%] h-[39vh] lg:h-[78vh] border-2 border-[#c1e8ff] rounded-full py-0 lg:py-11 lg:rounded-t-full lg:rounded-b-3xl bg-gradient-to-t dark:bg-gradient-to-b from-[#052659] to-[#517fa0] relative mt-11 z-[3] flex justify-around items-center flex-col md:flex-row lg:flex-col">
          <Image
            className="w-full sm:w-[60%] md:w-[42%] lg:w-[90%] py-3 md:py-9 mb-0 md:mb-9 group-hover:hidden"
            src={pic}
            alt=""
          />
          <div className="w-[75%]  hidden sm:block md:w-full mb-6 md:mb-0 group-hover:block">
            <h3 className="font-semibold text-xl md:text-2xl mb-6 text-center">
              دستگاه تزریق <strong className="text-[#c1e8ff]">پلاستیک</strong>
            </h3>
            <p className="px-6 lg:px-3 text-xs md:text-sm text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای
            </p>
          </div>
        </div>
        <div className="group max-w-[360px] sm:max-w-full  mt-11 lg:mt-0 w-full sm:w-[84%] lg:w-[32%] h-[39vh] lg:h-[83vh] border-2 border-[#c1e8ff] rounded-full py-0 lg:py-11 lg:rounded-t-full lg:rounded-b-3xl  bg-gradient-to-t dark:bg-gradient-to-b from-[#052659] to-[#517fa0] relative  z-[3] flex justify-around items-center flex-col md:flex-row lg:flex-col">
          <div className="py-3 md:py-9 mt-0 lg:mt-9 w-[75%]  hidden sm:block group-hover:block">
            <h3 className="font-semibold text-xl md:text-2xl mb-6 md:mb-9 text-center">
              دستگاه تزریق <strong className="text-[#c1e8ff]">پلاستیک</strong>
            </h3>
            <p className="px-0 sm:pr-9 sm:pl-3 lg:px-0 text-xs md:text-sm  text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای استفاده از طراحان گرافیک
              است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
              لازم است و برای ستون و سطرآنچنان که لازم است و برای
            </p>
          </div>

          <Image
            className="w-full sm:w-[42%] md:w-[42%] lg:w-[90%] mb-6 md:mb-0 group-hover:hidden"
            src={pic3}
            alt=""
          />
        </div>
        <div className="group max-w-[360px] sm:max-w-full  w-full sm:w-[84%] lg:w-[32%] h-[39vh] lg:h-[78vh] border-2 border-[#c1e8ff] rounded-full py-0 lg:py-11 lg:rounded-t-full lg:rounded-b-3xl bg-gradient-to-t dark:bg-gradient-to-b from-[#052659] to-[#517fa0] relative mt-11 z-[3] flex justify-around items-center flex-col md:flex-row lg:flex-col">
          <Image
            className="w-full sm:w-[36%] md:w-[42%] lg:w-[90%] py-3 md:py-9 mb-0 md:mb-9 md:h-full lg:h-[243px] group-hover:hidden"
            src={pic2}
            alt=""
          />
          <div className="w-[75%]  hidden sm:block md:w-full mb-6 md:mb-0 group-hover:block">
            <h3 className="font-semibold text-xl md:text-2xl mb-6 text-center">
              دستگاه تزریق <strong className="text-[#c1e8ff]">پلاستیک</strong>
            </h3>
            <p className="px-6 lg:px-3 text-xs md:text-sm  text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute w-[300px] motion-safe:animate-spin-slow  h-[300px] z-[1] border-2 border-[#4392c0] dark:border-[#7da0ca] filter blur-md  top-[18%] left-[9%]"></div>
      <div className="hidden md:block absolute w-[210px] motion-safe:animate-spin-slow-reverse  h-[210px] z-[1] border-2 border-[#4392c0] dark:border-[#7da0ca] filter blur-md  top-[12%] right-[6%]"></div>
    </div>
    </>
  );
};

export default Product;
