import React, { useRef, useState, useEffect, ChangeEvent } from 'react'
import { ItemVideo, DraggableItemVideo, NoVideos, Popup} from '../components'
import { Videos } from '../hooks/interfaces';
import { useModal } from '../hooks';
import { ReactComponent as ReproducedLine } from '../static/reproduced-line.svg'
interface Props {
  videos: Videos;
  changePosition: (id: string, position: number) => void;
  deleteVideo: (id: string) => void;
  addVideo: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const ListVideos = ({ videos, changePosition, deleteVideo, addVideo } : Props) => {
  let { isShowing, toggle, open, id } = useModal()
	const dragItem = useRef<any>(null)
	const dragOverItem = useRef<any>(null)
  const { videoQueue, inPlay, reproduced } = videos;
  const [ videosState, setVideosState ] = useState(videoQueue)
  const handleSort = () => {
		let _videosQueue = [...videosState]
		const itemToSwap = _videosQueue.splice(dragItem.current, 1)[0]
    console.log(itemToSwap)
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
  return (
    <div className='w-full flex h-[33rem] min-h-[20rem] space-y-0.5 flex-col border border-[#828282] xl:p-4 mt-4 font-poppins'>
   
      {(videosState && videosState.length  > 0 ) || inPlay !== null || (reproduced && reproduced.length > 0) ? 
        <> 
        <Popup isShowing={isShowing} 
             close={toggle}
             deleteVideo={() => deleteVideo(id)} 
             toFirst={ () => changePosition(id, 0)}
             toLast={() => changePosition(id, videosState.length - 1)} />
        {inPlay && <h2> Ahora en vivo </h2>}
        {inPlay && <ItemVideo video={inPlay} inPlay={true} />}
        {videosState && videosState.map((item, i) => {
          return (
                <>
                {!inPlay && 
                    <>
                       {i === 0 && <h2> Primero en la lista </h2> }
                       {i === 0 &&  
                         <DraggableItemVideo 
                          deleteVideo={() => deleteVideo(item.id)}
                          i={i}
                          key={'first' + item.id} 
                          video={item} 
                          dragItem={dragItem} 
                          dragOverItem={dragOverItem} 
                          moreOptions={() => open(item.id)}
                          handleSort={handleSort}/> } 
                        {i !== 0 &&  
                          <>      
                            {i === 1  && <h2> A continuación </h2>}
                            <DraggableItemVideo 
                            deleteVideo={() => deleteVideo(item.id)}
                            i={i}
                            key={'sec' + item.id} 
                            video={item} 
                            dragItem={dragItem} 
                            dragOverItem={dragOverItem} 
                            moreOptions={() => open(item.id)}
                            handleSort={handleSort}/> 
                           </>
                          }
                    </>
                }
                {inPlay && 
                  <>
                  {i === 0 && <h2> A continuación </h2>}
                  <DraggableItemVideo 
                          deleteVideo={() => deleteVideo(item.id)}
                          i={i}
                          key={'third' + item.id} 
                          video={item} 
                          dragItem={dragItem} 
                          dragOverItem={dragOverItem} 
                          moreOptions={() => open(item.id)}
                          handleSort={handleSort}/>
                 </>
                }
           </>
          )
       })}
          {reproduced && reproduced.length > 0 &&         
           <div className='w-full h-12 flex items-center'>
              <ReproducedLine className='w-full' />
          </div>}
          {reproduced && reproduced.map((item, i) => (
            <DraggableItemVideo 
              deleteVideo={() => deleteVideo(item.id)}
              i={i}
              key={`${item.id},i${i}`} 
              video={item} 
              dragItem={dragItem} 
              dragOverItem={dragOverItem} 
              moreOptions={() => open(item.id)}
              handleSort={handleSort}
              reproduced={true}/> 
          ))}
        </> : <NoVideos addVideo={addVideo}/>}
   
    </div>
  )
}
