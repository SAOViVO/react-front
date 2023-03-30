import React from 'react'
import { CleanListBtn, ListInfo } from '../components'
interface Props {
    isStreaming: boolean;
    quantityVideos: number;
    duration: number;
    deleteList: (id: string) => void;
}
export const VideosInfo = ({ isStreaming, quantityVideos, duration, deleteList }: Props) => {
  return (
    <div className='w-full flex space-x-2 mt-2'>
        <CleanListBtn isStreaming={isStreaming} quantityVideos={quantityVideos} deleteList={deleteList} />
        <ListInfo quantityVideos={quantityVideos} duration={duration}/>
    </div>
  )
}
