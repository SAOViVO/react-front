import { ChangeEvent, MutableRefObject } from 'react';
import { ReactComponent as Add } from '../../static/add.svg'

interface Props {
  disabled: boolean;
  addVideo: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const AddVideoBtn = ({ disabled, addVideo }: Props) => {
  return (
      <form >
        <label className={`bg-[#333333] text-white w-64 h-14 rounded-full font-poppins uppercase flex items-center justify-center
                            ${disabled && 'bg-opacity-50 cursor-not-allowed'}`}>
            <Add className='mr-2'/> Agregar video
            <input type="file" id="files" name="files" multiple disabled={disabled}
                  onChange={addVideo}
                  className="w-1/3 border hidden  h-10 border-[#000000] rounded-full mx-auto bg-whiute" /> 
        </label> 
        <button type='submit'>Submit</button>
      </form>    
     )
}
