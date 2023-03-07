import { ReactComponent as Move } from '../static/move.svg'
import { ReactComponent as More } from '../static/more.svg'
import { IVideo } from '../hooks/interfaces'
interface Props {
  video: IVideo
  className?: string
}
export const ItemVideo = ({ video, className }: Props) => {
  const { name, duration } = video
  return (
    <div className={`w-full border font-poppins justify-between px-4 flex border-black h-24 ${className}`}>
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
