import React from 'react'

const VideoCard = ({info}) => {
 console.log("info",info);
 const {snippet, statistics} = info;
 const {channelTitle, title, thumbnails} = snippet;
 return (
    <div className='w-72 p-2 m-2'>
        <img alt='thumbanils'className='rounded-lg' src={thumbnails.medium.url}/>
        <ul>
           <li>{title}</li>
           <li>{channelTitle}</li>    
           <li>{statistics.viewCount}</li>
        </ul>      
    </div>
  )
}

export default VideoCard;