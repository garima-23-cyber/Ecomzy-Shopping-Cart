import React from 'react'
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { remove } from '../redux/Slices/CartSlice'

export const CartItem = ({item, itemIndex}) => {
    const dispatch= useDispatch();


    const removeFromCart = () =>{
        dispatch(remove(item.id));
        toast.success("Item Removed");

    }
   

  return (
    <div className='w-full max-w-11/12 justify-evenly border-b border-gray-600 border-bold flex flex-col p-4'>
        <div className='flex flex-row w-full'>
            <div className='object-cover rounded-md mr-4'>
                <img src={item.image} width={150} height={150}/>
            </div>

            <div className='flex flex-col w-[100%]'>
                <h1 className='text-lg font-bold text-gray-800'>{item.title}</h1>
                <h1 className="text-sm text-gray-600 my-2 w-[50%]">{item.description}</h1>
                <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-bold text-green-600">{item.price}</p>
                    <div onClick={removeFromCart} className="cursor-pointer bg-red-500 rounded-full px-2 py-2 hover:bg-red-400 transition-colors duration-200">
                        <FcDeleteDatabase/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
