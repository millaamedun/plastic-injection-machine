import React, { useEffect, useState } from "react";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";
import { BsShopWindow } from "react-icons/bs";
import { FaTimes, FaRegHandshake, FaBars } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi";
import { TbBuildingFactory2 } from "react-icons/tb";

const Navbar = ({switchTheme, theme, handleLanguageChange, direction}) => {
  const [click, setClick] = useState(false);

  const [navColor, setNavColor] = useState(false);


  useEffect(() => {
    const changeNavColor = () => {
      if (window.scrollY >= 120) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };
    window.addEventListener("scroll", changeNavColor);



  }, []);

  return (
<div className={direction==='rtl'?"rtl":''}>
<div
      className={
        navColor
          ? "w-full h-[90px] m-auto fixed top-0 right-0 left-0 z-10  shadow-md shadow-[#c1e8ff] bg-[#adc1d7] dark:bg-[#0a1728]"
          : "w-full h-[90px] m-auto fixed top-0 right-0 left-0 z-10 "
      }
    >
      {/* desktop */}
      <div className="hidden lg:flex max-w-[1200px] w-full py-9 px-6 justify-around items-center m-auto text-white text-center">
        <div className="flex justify-around items-center flex-1">
          <div onClick={handleLanguageChange} className="cursor-pointer hover:text-[#c1e8ff] ease-in duration-300">
            <BiWorld size={24} />
          </div>
          <h3 className="cursor-pointer hover:text-[#c1e8ff] ease-in duration-300">
            محصولات
          </h3>
          <h3 className="cursor-pointer hover:text-[#c1e8ff] ease-in duration-300">
            مقالات
          </h3>
        </div>
        <div className="flex-1 mx-3 font-semibold text-lg cursor-pointer">
          🙜🞄 دستگاه تزریق پلاستیک 🞄🙞
        </div>
        <div className="flex justify-around items-center flex-1">
          <h3 className="cursor-pointer hover:text-[#c1e8ff] ease-in duration-300">
            شرکت
          </h3>
          <h3 className="cursor-pointer hover:text-[#c1e8ff] ease-in duration-300">
            تماس با ما
          </h3>
          <div className="cursor-pointer hover:text-[#c1e8ff] ease-in duration-300">
            {theme!=='dark'?<HiOutlineSun onClick={switchTheme} size={26} />:<HiOutlineMoon onClick={switchTheme} size={24} />}
          </div>
        </div>
      </div>

      {/* tablet and mobile */}
      <div className="flex justify-around items-center py-9 px-6 text-white text-center lg:hidden">
        <div className="hidden sm:block" onClick={() => setClick(!click)}>
          <FaBars size={30} />
        </div>
        <div className="block sm:hidden" onClick={() => setClick(!click)}>
          <FaBars size={21} />
        </div>
        <div className="text-sm flex-1 mx-3 font-semibold sm:text-lg ">
          🙜🞄 دستگاه تزریق پلاستیک 🞄🙞
        </div>
      </div>

      {/* side menu */}
      <div
        className={
          click
            ? "w-full h-screen bg-[#021024]/60 fixed right-[0] top-0 lg:hidden"
            : "w-full h-screen bg-[#3B4359]/60 fixed right-[-100%] top-0"
        }
        onClick={() => setClick(!click)}
      ></div>
      <div
        className={
          click && direction==='rtl'
            ? "flex flex-col items-center h-screen w-full sm:w-[60%] md:w-[40%] lg:hidden bg-gray-200 m-auto py-[30px] px-6 fixed top-0 z-[10] right-0 shadow-[0_4px_60px_0px_rgba(100,100,100,100.3)] text-[#3B4359] ease-in duration-300":
          click && direction!=='rtl'
            ? "flex flex-col items-center h-screen w-full sm:w-[60%] md:w-[40%] lg:hidden bg-gray-200 m-auto py-[30px] px-6 fixed top-0 z-[10] left-0 shadow-[0_4px_60px_0px_rgba(100,100,100,100.3)] text-[#3B4359] ease-in duration-300":
          !click && direction!=='rtl'
            ? "flex flex-col items-center h-screen w-full sm:w-[60%] md:w-[40%] bg-gray-200 m-auto py-[3%] px-6 fixed top-0 z-[10] shadow-[0_4px_60px_0px_rgba(0,0,0,0.3)] ease-in duration-300 text-[#3B4359] left-[-120%]"
            
            : "flex flex-col items-center h-screen w-full sm:w-[60%] md:w-[40%] bg-gray-200 m-auto py-[3%] px-6 fixed top-0 z-[10] shadow-[0_4px_60px_0px_rgba(0,0,0,0.3)] ease-in duration-300 text-[#3B4359] right-[-120%]"
        }
      >
        <div className="flex justify-start items-center w-full relative left-0  mb-9 ">
          <div
            className="bg-[#3B4359] shadow-lg shadow-gray-500 p-2 rounded-full text-white"
            onClick={() => setClick(!click)}
          >
            <FaTimes size={18} />
          </div>
        </div>
        <div className="flex flex-col items-start py-9">
          <div onClick={handleLanguageChange} className="flex justify-start items-center py-6">
            <div>
              <BiWorld size={25} />
            </div>
            <h3 className="mx-3 text-md cursor-pointer"> تغیر زبان</h3>
          </div>
          <div onClick={switchTheme} className="flex justify-start items-center py-6">
            <div>
            {theme!=='dark'?<HiOutlineSun onClick={switchTheme} size={26} />:<HiOutlineMoon onClick={switchTheme} size={24} />}
            </div>
            <h3 className="mx-3 text-md cursor-pointer"> شب و روز </h3>
          </div>
          <div className="flex justify-start items-center w-full  py-6">
            <div>
              <BsShopWindow size={23} />
            </div>
            <h3 className="mx-3 text-md cursor-pointer">محصولات</h3>
          </div>
          <div className="flex justify-start items-center w-full  py-6">
            <div>
              <HiOutlineNewspaper size={26} />
            </div>
            <h3 className="mx-3 text-md cursor-pointer">مقالات</h3>
          </div>
          <div className="flex justify-start items-center w-full  py-6">
            <div>
              <TbBuildingFactory2 size={26} />
            </div>
            <h3 className="mx-3 text-md cursor-pointer">شرکت</h3>
          </div>
          <div className="flex justify-start items-center w-full  py-6">
            <div>
              <FaRegHandshake size={26} />
            </div>
            <h3 className="mx-3 text-md cursor-pointer">تماس با ما</h3>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default Navbar;
