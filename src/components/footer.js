import React from 'react';
import { useState, useEffect } from 'react';

const Footer = () => {

const  [smallscreen, setSmallscreen] = useState(false);


//  execute resize event when screen size changes

useEffect(() => {
   
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            setSmallscreen(true);
            console.log('small screen', smallscreen);
        } else {
            setSmallscreen(false);
            console.log('not small screen and ' ,smallscreen);
        }
    }

    );
    

}, [])



    return (
        <div  className=' pb-12'>
            <div>
<div className='  min-h-[355px]   bg-slate-900 text-white  w-full '>


{/* -----big screen----- */}

{  !smallscreen  &&
<div>
    big
</div>
}


{/* smallscree------ */}


{  smallscreen  &&
<div>
    small
</div>
}





</div>






            </div>


        </div>
    );
}

export default Footer;
