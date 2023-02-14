import React from 'react'
import { ItemVideo } from '../components'
export const ListVideos = () => {
  return (
    <div className='w-full flex max-h-[33rem]  space-y-0.5 flex-col border border-[#828282] p-4 mt-4'>
        <h2> Ahora en vivo </h2>
        <ItemVideo />
        <h2> A continuación </h2>
        <ItemVideo />
        <ItemVideo />
        <ItemVideo />
        <ItemVideo />
        <ItemVideo />
        <ItemVideo />
        <ItemVideo />
        <ItemVideo />
        <ItemVideo />
        <ItemVideo />
        <ItemVideo />
    </div>
  )
}
