import React from "react";
import { useState, useEffect } from "react";

const Productcard = ({ product }) => {
  const [showimage, setshowimage] = useState(false);

  return (
    <div className="   border-2   border-balack  mr-12  shadow-2xl min-h-[355px]  h-auto">
      <div>
        {/* -----image- */}

        <div className="w-full h-[222px]">
          <img
            onMouseEnter={() => setshowimage(true)}
            onMouseLeave={() => setshowimage(false)}
            className={`  w-full h-full  ${
              showimage ? "animate" : ""
            }      object-contain`}
            src={showimage ? product.image2 : product.image1}
            alt=""
          />
        </div>

        <div className=" relative">
          <div className=" absolute   top-[-214px]  right-[18px]">
            <img
              className=" w-6 h-6   img1 "
              src="https://cdn0.iconfinder.com/data/icons/business-office-1-7/55/35-256.png
    "
              alt=""
            />

           
          </div>
        </div>

        {/* -----contain--- */}
        <div className=" mt-4">
          <div className="    ">
            <div className="  transition-all  duration-200  hideme">
              <h1 className="  text-md   text-center">{product.name} </h1>

              <p className=" text-center">{product.brand}</p>

              {/* ---price- */}

              <div className="   text-xl  mb-2  ml-4  font-bold">
                <p> {product.price}$</p>
              </div>
            </div>

            {/* -when hover  brand or name show those---- */}

            <div className=" transition-all  text-center show-me      ">
              <p> Avaliable</p>
              <p> Seee all sizes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
