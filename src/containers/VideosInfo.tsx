import React from 'react'
import { CleanListBtn, ListInfo } from '../components'
interface Props {
    isStreaming: boolean;
    quantityVideos: number;
}
export const VideosInfo = ({ isStreaming, quantityVideos }: Props) => {
  return (
    <div className='w-full flex space-x-2 mt-2'>
        <CleanListBtn isStreaming={isStreaming} quantityVideos={quantityVideos} />
        <ListInfo quantityVideos={quantityVideos} />
    </div>
  )
}
