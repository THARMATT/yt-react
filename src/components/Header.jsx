import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { FaBell, FaYoutube } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineMenu } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../store/AppSlice';

const Header = () => {
  const dispatch=useDispatch()
  const toggleMenuHandler=()=>{
dispatch(toggleMenu())
  }
  return (
    <div className=' grid grid-flow-col shadow-md p-4'>
      <div className="menu flex col-span-1 gap-4">
      <div className="text-lg cursor-pointer" onClick={()=>toggleMenuHandler()}><MdOutlineMenu className='text-3xl '/> </div>
        <div className="text-red-500 flex font-bold"><FaYoutube  className='text-3xl'/>YOUTUBE</div>
        </div> 
        <div className="search col-span-10 flex">
            <input type="text" placeholder='search' className='border w-1/3 outline-none border-gray-300 rounded-l-full p-2' />
            <button className='border border-gray-300 rounded-r-full p-2 w-12'><IoSearch/></button>
        </div>
        <div className="profile col-span-1 flex gap-10 p-2">
            <div className="wellicon"><FaBell/></div>
            <div className="profile-img"><CgProfile/></div>
        </div>
      
    </div>
  )
}

export default Header
