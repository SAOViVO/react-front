import React from 'react'
import { ItemVideo } from '../components'
import { useVideos } from '../hooks'
import { IVideo } from '../hooks/interfaces';
export const ListVideos = () => {
  let { videos } = useVideos();
  console.log("list", videos)
  return (
    <div className='w-full flex max-h-[33rem] space-y-0.5 flex-col border border-[#828282] p-4 mt-4'>
        <h2> Ahora en vivo </h2>
        {/* {videos && videos.map(({videoQueue}): IVideo => (
           <ItemVideo data={videoQueue}/> 
        ))} */}

    </div>
  )
}
