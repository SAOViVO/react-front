import { ReactComponent as Add } from '../static/add.svg'

interface Props {
  disabled: boolean;
}
export const AddVideoBtn = ({ disabled }: Props) => {
  return (
      <label className={`bg-[#333333] text-white w-64 h-14 rounded-full font-poppins uppercase flex items-center justify-center
                          ${disabled && 'bg-opacity-50'}`}>
          <Add className='mr-2'/> Agregar video
          <input type="file" accept="video/*" disabled={disabled}
                 className="w-1/3 border hidden  h-10 border-[#000000] rounded-full mx-auto bg-whiute" /> 
      </label> 
     )
}
