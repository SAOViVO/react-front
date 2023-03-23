import React from "react";
import ReactDOM from 'react-dom'

interface Props {
    isShowing: boolean;
    close: () => void;
}

export const AddLink = ({ isShowing, close } : Props ) => isShowing ? ReactDOM.createPortal( 
    <React.Fragment>
      <div className="fixed inset-0 bg-black bg-opacity-50 font-encode flex items-center justify-center">
        <div className='bg-white px-6 py-6 w-2/5 border border-[#333333] rounded-xl space-y-2'>
              <label className="font-bold font-poppins ">Agregar link de Youtube</label>
              <div className="w-full flex">
                <input type="text" className="output" placeholder="Ingresá el link de YouTube"/>
                <button className="btn-confirm" onClick={close}>
                    agregar link
                </button>
              </div>
        </div>
      </div>
      </React.Fragment>, document.body
    ) : null
  