import React from "react";
// import categories  from "./data";
import { arr, categories, arr2 } from "./data";
import { useState, useEffect } from "react";
import SectionOne from "../components/sectionOne";
const Home = () => {
  console.log(categories);
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(3);
  const [left, setLeft] = useState(`left-[${index * 12 + "px"}]`);

  const [submenu, setSubmenu] = useState([]);
  const [list, setList] = useState([]);
  const [active, setActive] = useState(false);
  const [activeSub, setActiveSub] = useState(false);
  const [activeList, setActiveList] = useState(false);

  //     const indexlefthandler = (index) => {
  // setLeft(index+12);
  // console.log(left,'left');

  //     }

  return (
    <div>
      <div className=" flex gap-4    font-bold mt-8 ml-12 relative  z-20">
        {categories.map((cat, index) => (
          <div className="  group ">
            <div
              // onMouseDown={ indexlefthandler}
              className="  "
            >
              {cat?.name}
            </div>

            {/* --drop down when hover- */}

            <div
              className={`h-0 absolute min-w-[100%]   ${
                index > 0 ? ` left-${index} ` : " "
              }  bottom-[-44px]  
    group-hover:min-h-[89vh]
        
border-gray-600  transition-all duration-100 w-[88%] mr-12 top-[29px]   shadow-2xl   bg-white   `}
            >
              {/* --content- */}

              <div
                className={` group-hover:h-auto transition-all duration-150 hidden group-hover:block mt-[-6px] inside-it  b h-0  pl-12  pt-5      pb-12`}
              >
                {/* -list sub- */}

                {/* -------- */}

                {/* --grid list and cat image- */}
                <div className=" grid  grid-cols-12">
                  <div className="flex gap-12 justify-between  col-span-7  mr-12">
                    {cat?.submenu?.map((sub, index) => (
                      <div>
                        <div className=" mt-4text-xl">{sub?.name}</div>

                        {/* -sub list-- */}

                        <div>
                          <ul className=" text-left">
                            {sub?.list?.map((item, index) => (
                              <li className=" mb-4  first:mt-6 font-thin">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className=" col-span-4">
                    <div>
                      {/* -----image- */}

                      <div>
                        <img src={cat.image} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* ---------- */}

                {/* ----right side image */}
              </div>
            </div>
          </div>
        ))}
      </div>
    
{/* ---------filter products- section-- */}

<div className="  mt-12  mb-12">

<SectionOne/>

</div>



    </div>
  );
};

export default Home;
