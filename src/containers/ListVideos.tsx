import React, { useRef, useState, useEffect } from 'react'
import { ItemVideo, DraggableItemVideo} from '../components'
import { Videos } from '../hooks/interfaces';
import { Popup } from '../components';
import { useModal } from '../hooks';
interface Props {
  videos: Videos;
  changePosition: (id: string, position: number) => void;
  deleteVideo: (id: string) => void;
}
export const ListVideos = ({ videos, changePosition, deleteVideo } : Props) => {
  let { isShowing, toggle, open, id } = useModal()
	const dragItem = useRef<any>(null)
	const dragOverItem = useRef<any>(null)
  const { videoQueue, inPlay, reproduced } = videos;
  const [ videosState, setVideosState ] = useState(videoQueue)
  const handleSort = () => {
		let _videosQueue = [...videosState]
		const itemToSwap = _videosQueue.splice(dragItem.current, 1)[0]
   	  console.log(itemToSwap.id, "to", dragOverItem.current)
		_videosQueue.splice(dragOverItem.current, 0, itemToSwap)
    changePosition(itemToSwap.id, dragOverItem.current)
		dragItem.current = null
		dragOverItem.current = null
		setVideosState(_videosQueue)
	}
  useEffect(() => {
    setVideosState(videoQueue)
  }, [videoQueue])
  console.log(id)
  return (
    <div className='w-full flex max-h-[33rem] space-y-0.5 flex-col border border-[#828282] p-4 mt-4'>
      <Popup isShowing={isShowing} 
             close={toggle}
             deleteVideo={() => deleteVideo(id)} />
        {reproduced && reproduced.map((item) => (
           <ItemVideo key={item.id} video={item} inPlay={false} /> 
        ))}
        {inPlay && <h2> Ahora en vivo </h2>}
        {inPlay && <ItemVideo video={inPlay} inPlay={true} />}
        <h2> A continuación </h2>
        {videosState && videosState.map((item, i) => (
           <DraggableItemVideo 
           deleteVideo={() => deleteVideo(item.id)}
           i={i}
           key={item.id} 
           video={item} 
           dragItem={dragItem} 
           dragOverItem={dragOverItem} 
           moreOptions={() => open(item.id)}
           handleSort={handleSort}/> 
        ))}
    </div>
  )
}
