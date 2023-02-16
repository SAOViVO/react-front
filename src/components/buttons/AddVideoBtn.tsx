import { MutableRefObject } from 'react';
import { ReactComponent as Add } from '../../static/add.svg'

interface Props {
  disabled: boolean;
  innerRef: MutableRefObject<null>;
}
export const AddVideoBtn = ({ disabled, innerRef }: Props) => {
  return (
      <label className={`bg-[#333333] text-white w-64 h-14 rounded-full font-poppins uppercase flex items-center justify-center
                          ${disabled && 'bg-opacity-50 cursor-not-allowed'}`}>
          <Add className='mr-2'/> Agregar video
          <input type="file" accept="/*" disabled={disabled}
                 ref={innerRef}
                 className="w-1/3 border hidden  h-10 border-[#000000] rounded-full mx-auto bg-whiute" /> 
      </label> 
     )
}
