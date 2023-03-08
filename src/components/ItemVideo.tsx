import { ReactComponent as Move } from '../static/move.svg'
import { ReactComponent as More } from '../static/more.svg'
import { IVideo } from '../hooks/interfaces'
import { toHoursAndMinutes } from './utils'
interface Props {
  video: IVideo;
  className?: string;
  inPlay: boolean;
}
export const ItemVideo = ({ video, className, inPlay }: Props) => {
  const { name, duration } = video
  return (
    <div className={`w-full border font-poppins justify-between px-4 flex border-[#828282] h-20 rounded-lg
                  ${inPlay ? '' : ' text-[#828282]'}`}>
        <div className='items-center flex space-x-4'>
            <Move /> 
            <h3 className={inPlay ? 'font-bold' : ''}>{name}</h3>
        </div>
        <div className='flex items-center space-x-4'>
            <span>{toHoursAndMinutes(parseInt(duration))}</span>
            <span><More /></span>
        </div>

    </div>
  )
}
