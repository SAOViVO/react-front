import { ReactComponent as Add } from '../static/add.svg'

export const AddVideoBtn = () => {
  return (
    <button className='bg-[#333333] text-white w-64 h-14 rounded-full font-poppins uppercase flex items-center justify-center
    disabled:bg-opacity-50' disabled>
         <Add className='mr-2'/> Agregar video
     </button>  )
}
