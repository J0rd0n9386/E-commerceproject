import React from 'react'

import { useSelector } from 'react-redux'
export const Addtocart = () => {
    const selector = useSelector((state) => state.addtocart.value);
    console.log(selector);
    
    return (


        <div class="cart">
            <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/512/2306/2306781.png" alt="cart" />
            <span class="cart-count">{selector}</span>
        </div>
    )
}
export default Addtocart