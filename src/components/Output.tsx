import { useState } from "react";
interface Props {
  add: (output: string) => Promise<void>;
  output?: string;
  isStreaming: boolean;
}
export const Output = ({ add, output, isStreaming }: Props) => {
  const [input, setInput] = useState<string>('')
  const handleSubmit = () => {
    if(input !== ''){
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
                   className="output"></input>
              <button onClick={handleSubmit} disabled={input === ''}
                      className={output && input === '' ? 'btn-confirmated' : 'btn-confirm'}>
                 {output && input === '' ? 'confirmada' : 'confirmar clave' }
              </button>
         </div>
    </div>
  )
}
