import { ReactComponent as Move } from '../static/move.svg'
import { ReactComponent as More } from '../static/more.svg'
import { IVideo } from '../hooks/interfaces'
interface Props {
  data: IVideo
}
export const ItemVideo = ({ data }: Props) => {
  return (
    <div className='w-full border font-poppins justify-between px-4 flex border-black h-24'>
        <div className='items-center flex space-x-2'>
            <Move /> 
            <h3>Titulo video</h3>
        </div>
        <div className='flex items-center space-x-2'>
            <span>00:14:03</span>
            <span><More /></span>
        </div>

    </div>
  )
}
