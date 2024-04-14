import React, { useEffect, useState } from 'react'
import { API_KEY, YOUTUBE_API } from '../config/constants'
import VideoCard from './VideoCard'

const VideoContainer = () => {
const [Videos, setVideos] = useState([])
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        const response=await fetch(YOUTUBE_API);
        const json= await response.json();
        // console.log(json)
        setVideos(json.items)
    }
  return (
    <div className='p-2 ml-4 flex flex-wrap gap-4 items-center'>
      {Videos.map((video)=>(
<VideoCard info={video} key={video.id} />
      ))}
    
      
    </div>
  )
}

export default VideoContainer
