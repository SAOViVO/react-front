import { ChangeEvent } from 'react';
import { ReactComponent as Add } from '../../static/add.svg'
import { useModal } from '../../hooks';
import { AddLink } from '../modals/AddLink';
interface Props {
  disabled: boolean;
  addVideo: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const AddLinkBtn = ({ disabled, addVideo }: Props) => {
  let { isShowing, toggle } = useModal()
  return (
      <form>
        <AddLink isShowing={isShowing} close={toggle}/>
        <label onClick={toggle}
        className={`bg-[#333333] text-white w-56 h-14 rounded-full font-poppins uppercase flex items-center justify-center`}>
         <Add className='mr-2'/> Agregar link 
        </label> 
      </form>    
     )
}
