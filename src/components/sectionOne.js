import React from "react";
import { useState, useEffect } from "react";
import Allproducts from "./allproducts";
import FilterSide from "./FilterSide";
import Sliderproducts from "./sliderproducts";
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

<div 

onClick={() => setSlide(!slide)}

className=" flex gap-4 font-bold">
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

            <div>

<div>

<div>
    <h1 className=" font-bold">
        Sort by
    </h1>
</div>

</div>


            </div>
          </div>
        </div>

        {/* ----grid- */}
        <div
          className={` w-screen min-h-[100px] ${
            slide ? "slide-in-left" : ""
          } flex justify-between  transition-all  duration-[1.5s]  ml-12`}
        >
          {/* -----filter left- */}

          <div className={`w-[22rem] mr-8  `}>
            <h1 >

<FilterSide/>


            </h1>
          </div>

          {/* ---all products right- */}

          <div
            className={`  ${slide ? " w-full ml-24" : "w-3/4"} `}
          >
            
<div>

    <Allproducts/>


{/* ------slider products */}

<div className="  mb-12 mt-12">





</div>



</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
