import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from "../utils/constants";
import VideoCard, {AdVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
 const [videos, setVideos] = useState([]);
  useEffect(()=>{

     getVideos();
    
  },[])

  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
     
    setVideos(json.items);
  }

  return (
    <div className='flex flex-wrap'>
      {videos[0] && <AdVideoCard info={videos[0]}/>} {/*Higher order component --> we have done videos[0] && bcoz at first reload our video state is null so to avoid code break we have used*/} 
      {videos.map(video => <Link key={video.id} to={"/watch?v=" + video.id}><VideoCard info={video}/></Link>)}
    </div>  
  )
}

export default VideoContainer 