import React from 'react'
import ReactDOM from 'react-dom'
import { ReactComponent as Up } from '../../static/up.svg'
import { ReactComponent as Down } from '../../static/down.svg'
import { ReactComponent as Trash } from '../../static/basura.svg'
import { ReactComponent as Close } from '../../static/exit.svg'
interface Props {
  // close: () => void
  toFirst: () => void
  toLast: () => void
  deleteVideo: () => void;
  isShowing: boolean;
  close: () => void;
}
export const Popup = ({ isShowing, close, deleteVideo, toLast, toFirst } : Props ) => isShowing ? ReactDOM.createPortal( 
  <React.Fragment>
    <div className="fixed inset-0 bg-black bg-opacity-50 font-encode flex items-center justify-center">
         <div className="h-48 p-6 w-64 bg-white">
            <div className='w-full flex justify-end mb-4'>
              <button onClick={close}>
                <Close />
              </button>
            </div>
            <ul className='flex items-center flex-col font-poppins space-y-4 font-light'>
              <li className='list' onClick={() => { deleteVideo(); close() }}>
                  <Trash className='item' /> Eliminar video
              </li>
              <li className='list' onClick={() => { toFirst(); close()}}>
                  <Up className='item' /> Mover al principio
              </li>
              <li className='list' onClick={() => { toLast(); close()}}>
                  <Down className='item' /> Mover al último lugar
              </li>
            </ul>
         </div>
    </div>
    </React.Fragment>, document.body
  ) : null
