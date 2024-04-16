import React, { useEffect, useState } from 'react'
import { API_KEY, YOUTUBE_API } from '../config/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
const [Videos, setVideos] = useState([])
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
       try {
        const response=await fetch(YOUTUBE_API);
        const json= await response.json();
        // console.log(json)
        setVideos(json.items)
       } catch (error) {
        console.log(error)
       }
    }
  return (
    <div className='p-4 ml-4 flex flex-wrap gap-4 items-center'>
      {Videos.map((video)=>(
<Link to={`/watch?v=${video.id.videoId}`} key={video.id.videoId}>
<VideoCard info={video}  /></Link>

      ))}
    
      
    </div>
  )
}

export default VideoContainer
