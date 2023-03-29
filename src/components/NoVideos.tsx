import React, { ChangeEvent } from 'react'
import { ReactComponent as Add } from '../static/add-xl.svg'
interface Props {
  addVideo: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const NoVideos = ({ addVideo } : Props) => {
  return (
    <div className='h-full w-full flex items-center' >
      <label className='flex flex-col  justify-center items-center w-3/4 mx-auto space-y-4 cursor-pointer'>
        <Add />
        <h3 className='font-poppins text-[#333333] text-4xl text-center'>
             Hacé click acá para agregar videos a la lista de reproducción
        </h3>
      <input type="file" id="files" name="files" multiple 
                  onChange={addVideo}
                  className="hidden h-full cursor-pointer" /> 
      </label>
    </div>
  )
}

