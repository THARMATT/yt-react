import React from 'react'

const VideoCard = ({info}) => {
console.log(info)
// const {snippet}=info;
// const {channelId ,channelTitle,thumbnails,title}=snippet;
  return (
    <div className='border border-gray h-[280px] w-[320px] rounded'>
        <img  className=" h-[180px] w-[320px] rounded"src={info.snippet.thumbnails.medium.url} alt="thumbnail" />
        <div className="flex flex-col ">
            <h1 className='font-bold ml-2'>{info.snippet.channelTitle}</h1>

            <p className='m-2'>{info.snippet.title}</p>
        </div>
        
    </div>
  )
}

export default VideoCard
