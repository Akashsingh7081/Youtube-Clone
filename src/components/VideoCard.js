import React from 'react'

const VideoCard = ({info}) => {
//  console.log("info",info);
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

//higher order component 
 export const AdVideoCard = ({info}) => {
   return(
      <div className='p-1 m-1 border-red-900'>
         <VideoCard info={info}/>
      </div>
   )
 }

export default VideoCard;