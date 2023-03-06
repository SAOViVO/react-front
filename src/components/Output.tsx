import { useState } from "react";
import { ReactComponent as Pen } from "../static/pen.svg";
import { ReactComponent as Checked } from "../static/checked.svg"
interface Props {
  add: (output: string) => Promise<void>;
  output?: string;
}
export const Output = ({ add, output }: Props) => {
  const [input, setInput] = useState<string>('')
  return (
    <div className="w-full">
         <h3 className="font-bold text-xl">Output</h3>
         <div className="flex space-x-1">
            <input placeholder={output ? output : 'Ingresá tu clave de emision'}
                   disabled={output ? true : false}
                   onChange={(e) => setInput(e.target.value)}
                   className="border border-solid border-black disabled:cursor-not-allowed
                   h-12 w-10/12 rounded-lg px-4 placeholder:font-poppins"></input>
            <div className="border border-solid border-[#333333] w-12 flex items-center justify-center rounded-lg">
              <button onClick={() => !output && add(input)}>
                {output ? <Checked/> : <Pen/>}
              </button>
            </div>
         </div>
    </div>
  )
}
