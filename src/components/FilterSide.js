import React from "react";
import { Collapse, Slider, Switch } from "antd";
import { useState, useEffect } from "react";
import { catfilter, brandsfilter,colors } from "./datafilter";

const Panel = Collapse.Panel;

const FilterSide = () => {

    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState(0);
    const [min, setMin] = useState(8);
    const [max, setMax] = useState(66);
    const [rangevalues, setRangevalues] = useState([min, max]);

    const onChangehandle = (value) => {
    setValue(value)
    console.log('value----->',value);
    setMin(value[0])
    setMax(value[1])
    console.log('min----->',min);
    console.log('max----->',max);
    
    };



     






  const text = "hello";
  return (
    <div className="  w-3/4">
      <div>
          {min}  --------- {max}
        <div>
          <Collapse
            Bordered={false}
            expandIconPosition="right"
            ghost={true}
            accordion
          >
            <Panel Bordered={false} header="Categories" key="1">
              <div>
                <ul>
                  {catfilter.map((item, index) => {
                    return <li>{item}</li>;
                  })}
                </ul>
              </div>

              {/* ----Brands0 */}
            </Panel>
            <Panel header="Brands" key="2">
              {/* ---div overflow --- */}

              <div className="h-[200px]  overflow-y-scroll">
                {/* -content--- */}

                <div className="    h-[300px]">
                  <ul className=" ml-4">
                    {brandsfilter.map((item, index) => {
                      return (
                        <li className="  mb-[3px]">
                          <input type="checkbox" className="  mr-2" />
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Panel>
            <Panel header="Colors" key="3">
              
<div>


<div>


<ul>


{colors.map((item, index) => {


return (

<li>

<span
className={` circle  ${item.color}    ${item.name ==='white' ? ' border-2 border-black' : ''}  `}

// className=" circle  bg-{{item.color}}"
// style ={{ backgroundColor: item.color}}


>  </span>
<p

className=" 

   self-center  
   ml-[17px]
   top-[-10px]
   relative

inline-block"
>{item.name}</p>

</li>



)})}


</ul>



</div>





</div>
 


            </Panel>



{/* -price - */}


<Panel header="Price" key="4">
<div>

<>

<div>

<div className=" flex gap-6">


{/* -min cart- */}

<div>
    <p>

        <input type="text "   value={min} 
        onChange={(e) => { setMin(e.target.value) }}
        />
    </p>
</div>


{/* ---max cart- */}

<div>
<p>

<input type="text"  value={max}
onChange={(e) => { setMax(e.target.value) }}

/>

</p>

</div>

</div>

</div>

{/* tooltipVisible  */}
 <Slider range defaultValue={[min, max]} 
onChange={(value) => onChangehandle(value)}

/>;


      
    </>



</div>


    </Panel>


          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FilterSide;
