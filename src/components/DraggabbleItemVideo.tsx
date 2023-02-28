import { ReactComponent as Move } from '../static/move.svg'
import { ReactComponent as More } from '../static/more.svg'
import { IVideo } from '../hooks/interfaces'
interface Props {
  video: IVideo;
  dragItem: React.MutableRefObject<any>;
  dragOverItem:  React.MutableRefObject<any>;
  i?: number;
  handleSort: () => void;
}
export const DraggableItemVideo = (props: Props) => {
  const { dragItem, dragOverItem, i, handleSort, video} = props;
  const { name, duration } = video;
  return (
    <div className='w-full border font-poppins justify-between px-4 flex border-black h-24'
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
            <span>{duration}</span>
            <span><More /></span>
        </div>
    </div>
  )
}
