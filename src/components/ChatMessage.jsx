import React from 'react'
import { CgProfile } from 'react-icons/cg'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center gap-2 shadow-md p-4 m-2'>
       <div className=""><CgProfile/></div>
       <div className="font-bold px-1">{name}</div>
       <span className=''>{message} </span>
    </div>
  )
}

export default ChatMessage
