import { ReactComponent as Trash } from '../../static/basura.svg'
interface Props {
    cleanList?: () => void;
    isStreaming: boolean;
    quantityVideos: number;
    deleteList: (id: string) => void;
}
export const CleanListBtn = ({ isStreaming, quantityVideos, deleteList } : Props) => {
  return (
    <button onClick={() => deleteList('all')} disabled={isStreaming || quantityVideos === 0} className={` border-2 border-black w-[30%] h-14 
       rounded-lg font-poppins text-lg font-bold uppercase flex items-center justify-center disabled:border-[#333333] disabled:opacity-50`}>
       <Trash className='mr-2 '/> Limpiar lista
    </button> 
  )
}
