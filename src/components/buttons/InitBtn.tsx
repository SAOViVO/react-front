import { ReactComponent as Triangle } from '../../static/triangle-white.svg'
interface Props {
    init: () => void;
    isStreaming?: boolean
}
export const InitBtn = ({ init }: Props) => {
  return (
        <button className='bg-[#07863D] text-white w-72 h-14 rounded-full font-poppins uppercase flex items-center justify-center
        disabled:bg-opacity-50' onClick={init}>
             <Triangle className='mr-2'/> Iniciar transmisión
         </button>
    )
}