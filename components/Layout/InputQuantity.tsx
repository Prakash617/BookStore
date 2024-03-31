"use client"
import React, { useState } from 'react'

type Props = {}

const InputQuantity = (props: Props) => {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) { // Ensuring quantity doesn't go below 1
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <>
  
          <div className="flex items-center h-full">
                                    <button onClick={decrementQuantity} 
                                        className="group rounded-l-full px-5 py-[10px] border border-gray-300 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-green-50 hover:border-green-300 hover:shadow-green-300 focus-within:outline-green-300">
                                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                        </svg>
                                    </button>
                                    <input type="text" value={quantity} 
                                        className="border-y border-gray-300 outline-none text-green-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[7px]  text-center bg-transparent"
                                        placeholder="1" />
                                    <button onClick={()=> setQuantity(quantity+1)}
                                        className="group rounded-r-full px-5 py-[10px] border border-gray-300 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-green-50 hover:border-green-300 hover:shadow-green-300 focus-within:outline-green-300">
                                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                stroke-width="1.6" stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                stroke-width="1.6" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                </div>
     </>
  )
}

export default InputQuantity