import { ReactComponent as Pen } from "../static/pen.svg"
export const Input = () => {
  return (
    <div className="w-full ">
         <h3 className="font-bold text-xl">Input</h3>
         <div className="flex space-x-1">
            <div className="border border-solid border-[#333333] h-12 w-10/12 rounded-lg"></div>
            <div className="border border-solid border-[#333333] w-12 flex items-center justify-center rounded-lg">
                <Pen/>
            </div>
         </div>
    </div>
  )
}
