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
        console.log(json)
        setVideos(json.items.snippet)
    }
  return (
    <div className=''>
      <VideoCard {...Videos}/>
      h1    
    </div>
  )
}

export default VideoContainer
