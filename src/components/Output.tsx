import { useState } from "react";
import { ReactComponent as Pen } from "../static/pen.svg";
import { ReactComponent as Checked } from "../static/checked.svg"
interface Props {
  add: (output: string) => Promise<void>;
  output?: string;
  isStreaming: boolean;
}
export const Output = ({ add, output, isStreaming }: Props) => {
  const [input, setInput] = useState<string>('')
  const handleSubmit = () => {
    if(!output){
      add(input)
      setInput('')
    }
  }
  return (
    <div className="w-full">
         <h3 className="font-bold text-xl">Youtube</h3>
         <div className="flex space-x-1">
            <input placeholder={output ? output : 'Ingresá tu clave del vivo de YouTube'}
                   disabled={isStreaming ? true : false}
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   className="border border-solid border-black disabled:cursor-not-allowed
                   h-12 w-10/12 rounded-lg px-4 placeholder:font-poppins"></input>
            <div className="border border-solid border-[#333333] w-12 flex items-center justify-center rounded-lg">
              <button onClick={handleSubmit}>
                {output ? <Checked/> : <Pen/>}
              </button>
            </div>
         </div>
    </div>
  )
}
