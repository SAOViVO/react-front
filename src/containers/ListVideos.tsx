import React from 'react'
import { ItemVideo } from '../components'
import { Videos } from '../hooks/interfaces';
interface Props {
  videos: Videos
}
export const ListVideos = ({ videos } : Props) => {
  const { videoQueue } = videos;
  return (
    <div className='w-full flex max-h-[33rem] space-y-0.5 flex-col border border-[#828282] p-4 mt-4'>
        <h2> Ahora en vivo </h2>
        {videoQueue && videoQueue.map((item) => (
           <ItemVideo video={item}/> 
        ))}
    </div>
  )
}
