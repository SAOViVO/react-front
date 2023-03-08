import { ReactComponent as Move } from '../static/move.svg'
import { ReactComponent as More } from '../static/more.svg'
import { IVideo } from '../hooks/interfaces'
import { toHoursAndMinutes } from './utils'

interface Props {
  video: IVideo;
  dragItem: React.MutableRefObject<any>;
  dragOverItem:  React.MutableRefObject<any>;
  i?: number;
  handleSort: () => void;
  deleteVideo: () => void;
  moreOptions: () => void;
}

export const DraggableItemVideo = (props: Props) => {
  const { dragItem, dragOverItem, i, handleSort, video, moreOptions } = props;
  const { name, duration } = video;
  return (
    <div className='w-full border font-poppins justify-between px-4 flex border-[#828282] h-20 rounded-lg'
         draggable
         onDragStart={(e) => (dragItem.current = i)}
         onDragEnter={(e) => (dragOverItem.current = i)}
         onDragEnd={handleSort}
         onDragOver={(e) => e.preventDefault()}>
        <div className='items-center flex space-x-4'>
            <Move /> 
            <h3>{name}</h3>
        </div>
        <div className='flex items-center space-x-4'>
            <span>{toHoursAndMinutes(parseInt(duration))}</span>
            <button onClick={moreOptions}><More /></button>
        </div>
    </div>
  )
}
