import Image from "next/image";
import React from "react";

import hat from "../public/assets/hat1.png";

const About = ({direction}) => {
  return (
    <div className={direction==='rtl'?"rtl bg-[#adc1d7] dark:bg-[#0a1728] w-full h-full":" bg-[#adc1d7] dark:bg-[#0a1728] w-full h-full"}>
      <div className="h-full pt-[120px] pb-[72px] max-w-[1320px] m-auto px-11">
        <div className="relative h-full border-2 border-[#c1e8ff] rounded-2xl text-white">
          <div className=" py-[15%] px-[9%]">
            <p className="mb-9 text-sm md:text-base">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p className="text-sm md:text-base">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className={direction==='rtl'?"absolute top-[-15px] right-[6%] bg-[#adc1d7] dark:bg-[#0a1728] px-3":"absolute top-[-15px] left-[6%] bg-[#adc1d7] dark:bg-[#0a1728] px-3"}>
            <h1 className="text-lg sm:text-2xl">
              
              درباره <strong className="text-[#c1e8ff] ">شرکت </strong> ما
            </h1>
          </div>
          <div className={direction==='rtl'?"absolute w-[90px] sm:w-[150px] md:w-[180px] bottom-[-3%] sm:bottom-[-54px] left-[6%] bg-[#adc1d7] dark:bg-[#0a1728] ":"absolute w-[90px] sm:w-[150px] md:w-[180px] bottom-[-3%] sm:bottom-[-54px] right-[6%] bg-[#adc1d7] dark:bg-[#0a1728] "}>
            <Image src={hat} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
