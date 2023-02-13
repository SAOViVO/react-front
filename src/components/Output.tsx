import { ReactComponent as Pen } from "../static/pen.svg"
export const Output = () => {
  return (
    <div className="w-full">
         <h3 className="font-bold text-xl">Output</h3>
         <div className="flex space-x-1">
            <input placeholder='Ingresá tu clave de emision'
                   className="border border-solid border-black 
                   h-12 w-10/12 rounded-lg px-4 placeholder:font-poppins"></input>
            <div className="border border-solid border-[#333333] w-12 flex items-center justify-center rounded-lg">
                <Pen/>
            </div>
         </div>
    </div>
  )
}
