import React from 'react'

const Button = (props) => {
  return (
    <p className='bg-[#E7E7E7] px-4 py-2 font-mulish text-[16px] text-gray-600 font-bold rounded-lg'>
      {props.children}
    </p>
  )
}

export default Button