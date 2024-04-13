import React from 'react'

const Button = ({name}) => {
  return (
    <div className='bg-gray border border-gray-600 p-2 w-28 text-center shadow-sm cursor-pointer rounded-full bg-slate-50'>
    {name}
    </div>
  )
}

export default Button
