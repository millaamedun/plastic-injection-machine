import React, { useState } from "react";

import Image from "next/image";

import pic from "../public/assets/7.png";
import pic2 from "../public/assets/3.png";
import pic3 from "../public/assets/5.png";


const ProductNew = () => {

    const [detail, setDitail] = useState('');

  return (
    <div>
      <div className="h-full pt-[180px] pb-[72px] max-w-[1320px] m-auto px-11">
        <div className="relative h-full border-2 border-[#c1e8ff] rounded-2xl text-white">
          <div className=" py-[6%] px-[6%]">
        
          <Image
           className={detail==='160-CP'?"hidden":"block"}
            src={pic}
            alt=""
          />
            <p className={detail==='160-CP'?'my-9 text-sm md:text-base  block':'mb-9 text-sm md:text-base hidden'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          </div>
          <div className="absolute top-[-15px] right-[6%] bg-[#021024] px-3">
            <h1 className="text-xl sm:text-3xl">
              {" "}
              KM <strong className="text-[#c1e8ff] ">160-CP </strong>
            </h1>
          </div>
          <div className="absolute bottom-[-21px] left-[6%] bg-[#021024] py-2 px-6 border-2 border-[#c1e8ff] rounded-full">
            
                    {detail==='160-CP' && <span onClick={()=>setDitail('')} className="text-sm md:text-lg cursor-pointer">بستن جزئیات..</span>}
                    {detail!=='160-CP' && <span onClick={()=>setDitail('160-CP')} className="text-sm md:text-lg cursor-pointer">مشاهده جزئیات..</span>}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNew;
