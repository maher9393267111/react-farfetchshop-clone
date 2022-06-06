import React from 'react';
import { useState,useEffect } from 'react';
const SectionOne = () => {

const [slide,setSlide] = useState(false);

    return (
        <div>

<div>

{/* ----grid- */}
<div className={` w-screen min-h-[100px] ${slide ? 'slide-in-left' : ''} flex justify-between`}>

{/* -----filter left- */}

<div className={`w-[22rem]  bg-blue-400 `}>
<h1

onClick = {() => setSlide(!slide)}
>
    filter
</h1>


</div>



{/* ---all products right- */}


<div className={`  ${ slide ? ' w-full ml-24' : "w-3/4"}  bg-green-400`}>
    all products
</div>





</div>



</div>


        </div>
    );
}

export default SectionOne;
