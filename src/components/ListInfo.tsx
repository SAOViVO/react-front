import React from 'react'
interface Props {
    quantityVideos: number;
}
export const ListInfo = ({ quantityVideos }: Props) => {
  return (
    <div className={`w-[70%] bg-[#333333] px-10 rounded-lg flex items-center justify-end text-[#F2F2F2] font-poppins text-lg
                   ${quantityVideos === 0 && 'opacity-50'} `}>
        {
           quantityVideos === 0 ? <h3>Tiempo total: --:--:--</h3> : <h3>Cantidad de videos: 13 - Tiempo total: 02:24:53</h3>
        }
    </div>
  )
}
