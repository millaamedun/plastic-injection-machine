import React from "react";
import LanguageContext from '../context/LanguageContext';
import { useContext } from 'react';



const Hero = ({language, direction}) => {


  const translations = require(`locales/${language}.json`);

  return (
    <div className={direction==='rtl'? 'rtl' : ''}>
      <div className="w-full h-[100vh] bg-[#adc1d7]/20 dark:bg-[#142133]/70 absolute top-0 right-0 left-0 z-[1]"></div>
      <div className="w-full h-[100vh] object-contain relative">
        <video
          autoPlay
          loop
          muted
          id="video"
          className="absolute w-full h-full object-cover z-[-2]"
        >
          <source
            src="https://commapcb.com/assests/video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-[30%] sm:top-[39%] w-[70%] m-auto right-0 left-0 flex flex-col items-start text-white max-w-[1100px] z-[1]">
            <h1 className="font-medium text-3xl lg:tracking-widest lg:font-semibold  lg:text-3xl xl:text-4xl">{translations.title} <strong className="text-[#c1e8ff]">{translations.strong}</strong> </h1>
            <p className="py-11 text-xs sm:text-sm lg:text-base  max-w-[900px] ">{translations.body}</p>
            <button className="text-sm sm:text-base py-2 px-6 sm:px-9 border-2 bg-transparent border-[#c1e8ff] hover:bg-[#c1e8ff] hover:text-[#3B4359] rounded-full ease-in duration-300">{translations.info} </button>
        </div>
        <div className={direction==='rtl'?"hidden md:block absolute w-[600px] motion-safe:animate-spin-slow  h-[600px] z-[1] bg-gradient-to-b from-[#4581a3]/30 dark:from-[#c1e8ff]/30 to-transparent filter blur-lg rounded-full top-[18%] left-[18%]":"hidden md:block absolute w-[600px] motion-safe:animate-spin-slow  h-[600px] z-[1] bg-gradient-to-b from-[#4581a3]/30 dark:from-[#c1e8ff]/30 to-transparent filter blur-lg rounded-full top-[18%] right-[18%]"}></div>
      </div>
    </div>
  );
};

export default Hero;
