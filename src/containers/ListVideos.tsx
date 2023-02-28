import React, { useRef, useState, useEffect } from 'react'
import { ItemVideo, DraggableItemVideo} from '../components'
import { IVideo, Videos } from '../hooks/interfaces';
interface Props {
  videos: Videos;
  changePosition: (id: string, position: number) => void;
  deleteVideo: (id: string) => void;
}
export const ListVideos = ({ videos, changePosition, deleteVideo } : Props) => {
	const dragItem = useRef<any>(null)
	const dragOverItem = useRef<any>(null)
  const { videoQueue, inPlay, reproduced } = videos;
  const [ videosState, setVideosState ] = useState(videoQueue)
  const handleSort = () => {
		//duplicate items
		let _videosQueue = [...videosState]
		//remove and save the dragged item content
		const itemToSwap = _videosQueue.splice(dragItem.current, 1)[0]
   	  console.log(itemToSwap.id, "to", dragOverItem.current)

		_videosQueue.splice(dragOverItem.current, 0, itemToSwap)
    changePosition(itemToSwap.id, dragOverItem.current)
		//reset the position ref
		dragItem.current = null
		dragOverItem.current = null
		//update the actual array
		setVideosState(_videosQueue)
	}
  useEffect(() => {
    setVideosState(videoQueue)
  }, [videoQueue])
  
  return (
    <div className='w-full flex max-h-[33rem] space-y-0.5 flex-col border border-[#828282] p-4 mt-4'>
        {reproduced && reproduced.map((item) => (
           <ItemVideo key={item.id} video={item} /> 
        ))}
        {inPlay && <h2> Ahora en vivo </h2>}
        {inPlay && <ItemVideo video={inPlay} />}
        <h2> A continuación </h2>
        {videosState && videosState.map((item, i) => (
           <DraggableItemVideo 
           deleteVideo={() => deleteVideo(item.id)}
           i={i}
           key={item.id} 
           video={item} 
           dragItem={dragItem} 
           dragOverItem={dragOverItem} 
           handleSort={handleSort}/> 
        ))}
    </div>
  )
}
