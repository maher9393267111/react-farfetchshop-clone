import React from "react";
import { useState, useEffect } from "react";
const SectionOne = () => {
  const [slide, setSlide] = useState(false);

  return (
    <div>
      <div>
        {/* --flex filter and sort */}

        <div className=" mb-6">
          <div className=" flex justify-between  ml-6 mr-6">
            {/* left- */}

            <div>

<div className=" flex gap-4 font-bold">
<p>Filter</p>

<div>
    <span>
        <img
        className={ ` w-6 h-6  ${  slide ? 'rotate-[-87deg]' : '  rotate-[87deg]'}  transform  transition-all  duration-500  ease-in-out  ` }
        src="
        https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-256.png" alt="" />
    </span>
</div>


</div>



            </div>

            {/* right-- */}

            <div>sortby</div>
          </div>
        </div>

        {/* ----grid- */}
        <div
          className={` w-screen min-h-[100px] ${
            slide ? "slide-in-left" : ""
          } flex justify-between`}
        >
          {/* -----filter left- */}

          <div className={`w-[22rem]   `}>
            <h1 onClick={() => setSlide(!slide)}>filter</h1>
          </div>

          {/* ---all products right- */}

          <div
            className={`  ${slide ? " w-full ml-24" : "w-3/4"} `}
          >
            all products
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
