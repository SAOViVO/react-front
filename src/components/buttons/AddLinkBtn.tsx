import { ChangeEvent, useState } from 'react';
import { ReactComponent as Add } from '../../static/add.svg'
import { useModal } from '../../hooks';
import { AddLink as AddLinkModal } from '../modals/AddLink';
interface Props {
  disabled: boolean;
  addLink: (link: string) => Promise<void>;
}
export const AddLinkBtn = ({ disabled, addLink }: Props) => {
  let { isShowing, toggle } = useModal()
  const [input, setInput] = useState<string>('');
  console.log(input)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  return (

        <button onClick={toggle}
        className={`bg-[#333333] text-white w-56 h-14 rounded-full font-poppins uppercase flex items-center justify-center`}>
         <Add className='mr-2'/> Agregar link 
        </button> 
     )
}
