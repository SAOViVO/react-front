import React from 'react'
import { ItemVideo } from '../components'
import { Videos } from '../hooks/interfaces';
interface Props {
  videos: Videos
}
export const ListVideos = ({ videos } : Props) => {
  console.log(videos)
  const { videoQueue, inPlay, reproduced } = videos;
  return (
    <div className='w-full flex max-h-[33rem] space-y-0.5 flex-col border border-[#828282] p-4 mt-4'>
        {reproduced && reproduced.map((item) => (
           <ItemVideo key={item.id} video={item} /> 
        ))}
        {inPlay && <h2> Ahora en vivo </h2>}
        {inPlay && <ItemVideo video={inPlay} />}
        <h2> A continuación </h2>
        {videoQueue && videoQueue.map((item) => (
           <ItemVideo key={item.id} video={item}/> 
        ))}
    </div>
  )
}
