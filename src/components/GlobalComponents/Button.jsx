import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

function Button({text, type, logo, onClick}) {
  const btnType = type || 'button'
  const icon = logo || <FaArrowRight />
  const clickHandler = onClick || null;

  return (
    
        <button onClick={clickHandler} type={btnType} className='btn relative bg-transparent border-[1px] border-yellow-500 pl-8 pr-20 py-3 rounded-full'>
            <p className='text-lg'>{text}</p> 
            <div className='absolute flex justify-center items-center right-0 top-1/2 -translate-y-1/2 rounded-full bg-yellow-500 h-full w-16'>
                <FaArrowRight style={{fontSize:'20px'}}/>
            </div>
        </button>
   
  )
}

export default Button
