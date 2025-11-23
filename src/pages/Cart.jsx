import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { CartItem } from '../components/CartItem';

export const Cart = () => {

    const {cart} =useSelector((state) => state);
    console.log("printing cart");
    console.log(cart);
    const [totalAmount,setTotalAmount]=useState(0);

    useEffect(() =>{
         setTotalAmount( cart.reduce( (acc,curr) => acc+ curr.price,0));
    },[cart])

   

  return (
    <div>
      {
        cart.length > 0 ?
        (<div className='flex'>


            <div className=''>
                {
                    cart.map((item,index) =>(
                        <CartItem key={item.id} item={item} itemIndex={index}/>
                    ))
                }
            </div>

            <div className='flex flex-col justify-between'>
                <div>
                    <div className='uppercase text-green-600 text-md  font-bold'>Your Cart</div>
                    <div className='uppercase text-3xl text-green-600 font-bold'>Summary</div>
                    <p>
                        <span className='font-bold text-gray-800 text-md mt-3'>Total Items: {cart.length}</span>
                    </p>
                </div>

                <div >
                    <p className='font-bold text-gray-800 text-md'>Total Amount: <span className='font-bold text-black'>${totalAmount}</span></p>
                    <button className='w-full rounded-lg bg-green-600 text-white font-bold py-3 px-6 shadow-md transition-all duration-200 ease-in-out hover:bg-green-700 hover:scale-105'>
                        CheckOut Now
                    </button>
                </div>
            </div>

            

        </div>):
        (<div className='flex flex-col  items-center'>
            <h1 className='font-bold text-black mt-4'>Cart Empty!</h1>
            <Link to="/">
               <button className='w-fit rounded-lg bg-green-600 text-white font-bold py-3 px-6 shadow-md transition-all duration-200 ease-in-out hover:bg-green-700 hover:scale-105'>
                Shop Now
               </button>
            </Link>
        </div>)
      }
    </div>
  )
}
