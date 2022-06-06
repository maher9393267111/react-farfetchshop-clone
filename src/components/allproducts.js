import React from 'react';
import { useState, useEffect } from 'react';
import { allproducts } from './datafilter';
import Productcard from './productcard';
const Allproducts = () => {
    return (
        <div   className='   pb-14'>
            
<div className=' container'>

<div className=' gap-4  grid grid-cols-12'>


{allproducts.map((product, index) => {

return (

<div className=' sm:col-span-6  lg:col-span-4'>

    <Productcard product={product} key={index} />
</div>


)})}

</div>


</div>



        </div>
    );
}

export default Allproducts;
