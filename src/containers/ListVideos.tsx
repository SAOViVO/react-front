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
  const [ reproducedState, setReproducedState ] = useState(reproduced)

  const handleSort = () => {
		let _videosQueue = [...videosState]
    console.log("current",dragItem.current)
		const itemToSwap = _videosQueue.splice(dragItem.current, 1)[0]
		_videosQueue.splice(dragOverItem.current, 0, itemToSwap)
    changePosition(itemToSwap.id, dragOverItem.current)
		dragItem.current = null
		dragOverItem.current = null
		setVideosState(_videosQueue)
	}
  const handleReproduceSort = () => {
    if(!reproduced) return;
		let _videosReproduced = reproduced
    console.log("current", dragItem.current)
		const itemToSwap = _videosReproduced.splice(dragItem.current, 1)[0]
    console.log('toSwap', itemToSwap)
    // let _videosQueue = [...videosState]
    console.log(dragOverItem.current)
    console.log('toSwap', itemToSwap.id, 'toSwapped', dragOverItem.current)
    console.log(videoQueue)
		// _videosQueue.splice(dragOverItem.current, 0, itemToSwap)
    changePosition(itemToSwap.id, dragOverItem.current)
		dragItem.current = null
		dragOverItem.current = null
		// setVideosState(_videosQueue)
	}
  useEffect(() => {
    setVideosState(videoQueue)
  }, [videoQueue])
  useEffect(() => {
    setReproducedState(reproduced)
  }, [reproduced])
  return (
    <div className='w-full flex h-[30rem] space-y-0.5 flex-col border border-[#828282] xl:p-4 mt-4 font-poppins overflow-y-auto	'>
   
      {(videosState && videosState.length  > 0 ) || inPlay !== null || (reproduced && reproduced.length > 0) ? 
        <div> 
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
          {reproducedState && reproducedState.length > 0 &&         
           <div className='w-full h-12 flex items-center'>
              <ReproducedLine className='w-full' />
          </div>}
          {reproducedState && reproducedState.map((item, i) => {
            return (
              <DraggableItemVideo 
              deleteVideo={() => deleteVideo(item.id)}
              i={i}
              key={`${item.id},i${i}`} 
              video={item} 
              dragItem={dragItem} 
              dragOverItem={dragOverItem} 
              moreOptions={() => open(item.id)}
              handleSort={handleReproduceSort}
              reproduced={true}/> 
            )
          })}
          
            </div> : <NoVideos addVideo={addVideo}/>}
   
    </div>
  )
}
