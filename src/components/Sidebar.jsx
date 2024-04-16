import React from 'react'
import { useSelector } from 'react-redux'
import store from '../store/store'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
  return !isMenuOpen?(null): (
    <div className='col-span-1 shadow-md min-h-screen overflow-auto p-4'>
      <h1 className='bg-gray-500  text-white font-bold p-2 rounded m-2 '> <Link to="/">Home </Link>  </h1>
      <h1 className='bg-gray-500 text-white font-bold p-2 rounded m-2'> <Link to="/">Home </Link>  </h1>
      <h1 className='bg-gray-500 text-white font-bold p-2 rounded m-2'> <Link to="/">Home </Link>  </h1>
      <h1 className='bg-gray-500 text-white font-bold p-2 rounded m-2'> <Link to="/">Home </Link>  </h1>
      <h1 className='bg-gray-500 text-white font-bold p-2 rounded m-2'> <Link to="/">Home </Link>  </h1>
      <h1 className='bg-gray-500 text-white font-bold p-2 rounded m-2'> <Link to="/">Home </Link>  </h1>
      <h1 className='bg-gray-500 text-white font-bold p-2 rounded m-2'> <Link to="/">Home </Link>  </h1>
      <h1 className='bg-gray-500 text-white font-bold p-2 rounded m-2'> <Link to="/">Home </Link>  </h1>
      <h1 className='bg-gray-500 text-white font-bold p-2 rounded m-2'> <Link to="/">Home </Link>  </h1>
      <h1 className='bg-gray-500 text-white font-bold p-2 rounded m-2'> <Link to="/">Home </Link>  </h1>
      <h1 className='bg-gray-500 text-white font-bold p-2 rounded m-2'> <Link to="/">Home </Link>  </h1>
      <h1 className='bg-gray-500 text-white font-bold p-2 rounded m-2'> <Link to="/">Home </Link>  </h1>
      <h1 className='bg-gray-500 text-white font-bold p-2 rounded m-2'> <Link to="/">Home </Link>  </h1>
      <h1 className='bg-gray-500 text-white font-bold p-2 rounded m-2'> <Link to="/">Home </Link>  </h1>
      <h1>Subscriptions </h1>
      
      <h1>Subscriptions </h1>


    
    </div>
  )
}

export default Sidebar
