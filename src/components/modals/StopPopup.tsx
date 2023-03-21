import React from 'react'
import ReactDOM from 'react-dom'

interface Props {
  isShowing: boolean;
  close: () => void;
  stop: () => void;
}
export const StopPopup = ({ isShowing, close, stop } : Props ) => isShowing ? ReactDOM.createPortal( 
    <React.Fragment>
      <div className="fixed inset-0 bg-black bg-opacity-50 font-encode flex items-center justify-center">
        <div className='bg-white px-4 h-40'>
            <h3 className='font-poppins text-2xl'>
                ¿Estás seguro que querés detener la transmisión?
            </h3>
            <div className='flex w-full font-bold justify end items-end'>
            <button className='bg-[#EB5757] text-white w-48 text-sm h-11 rounded-full font-poppins uppercase flex items-center justify-center
                     disabled:bg-opacity-50' onClick={() => {stop(); close();}}>
                detener transmisión
            </button>
            <button className={`bg-[#333333] text-white w-48 text-sm h-11 px-2
                    rounded-full font-poppins uppercase flex items-center justify-center`} onClick={close}>
                seguir reproduciendo
            </button>
            </div>
        </div>
      </div>
      </React.Fragment>, document.body
    ) : null
  