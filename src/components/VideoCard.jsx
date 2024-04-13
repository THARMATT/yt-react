import React from 'react'

const VideoCard = ({channelTitle,thumbnails}) => {
  return (
    <div className='border border-gray h-[300px] w-[350px] p-4'>
        <img  className=" h-[200px]"src={thumbnails} alt="" />
        <div className="catd-items">
            <h1>{channelTitle}</h1>
            <p></p>
        </div>
      
    </div>
  )
}

export default VideoCard
