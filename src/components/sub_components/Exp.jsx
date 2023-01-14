import React from 'react'
import { GoTriangleUp } from 'react-icons/go';

const Exp = (props) => {
  return (
    <div className='relative z-20 bg-gray-100 shadow-2xl font-["Poppins"] mt-6'>
      <GoTriangleUp size={50}  className='absolute z-0 left-0 top-0 rotate-[-45deg] translate-x-[-18px] translate-y-[-18px] text-color1 text-color1'/>
      <div className='p-3 mt-2 w-4/5 m-auto'>
        <p className='text-sm'>{props.date}</p>
        <p className='text-violet-600 font-semibold'>{props.work}</p>
        <p className='text-justify text-sm'>{props.descrip}</p>
      </div>
    </div>
  )
}

export default Exp