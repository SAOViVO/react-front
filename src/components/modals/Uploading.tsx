import React from "react";
import ReactDOM from 'react-dom'
import { ReactComponent as Loading } from '../../static/loading.svg'
interface Props {
    isShowing: boolean;
}
export const Uploading = ({ isShowing} : Props ) => isShowing ? ReactDOM.createPortal( 
    <React.Fragment>
      <div className="fixed inset-0 bg-black bg-opacity-50 font-encode flex items-center justify-center">
        <div className='bg-white px-6 py-8 w-4/5 xl:w-2/5 border border-[#333333] rounded-xl space-y-2'>
             <h4 className='font-poppins font-semibold text-xl text-center'>
             Estamos cargando tus videos.
             <br className="mb-4" />
             Esto demorará unos segundos.
             </h4>
             <div className="pt-4">
             <Loading className="mx-auto "/>
             </div>
        </div>
      </div>
      </React.Fragment>, document.body
    ) : null
  