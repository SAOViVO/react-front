import { ReactComponent as Cuadrado } from '../../static/cuadrado.svg'
interface Props {
    stop: () => void;
    isStreaming?: boolean
}
export const StopBtn = ({ stop }: Props) => {
  return (
        <button className='bg-[#EB5757] text-white w-72 h-14 rounded-full font-poppins uppercase flex items-center justify-center
        disabled:bg-opacity-50' onClick={stop}>
             <Cuadrado className='mr-2'/> Detener transmisión
         </button>
    )
}