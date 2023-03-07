import { useState, useEffect } from "react"
type add = (status: number, message: string) => void

export const useStream = (addMessage: add) => {
  console.log(addMessage)
    const [ isStreaming, setIsStreaming ] = useState<boolean>(false);
    const [ output, setOutput ] = useState<string>('');
    const initStream = async () => {
       let bodyFetch = { status: 'start'}
       fetch("http://127.0.0.1:4000/playlist", {
        method: "PUT",
        body: JSON.stringify(bodyFetch),
      }).then((response) => {
         if(response.ok){
          response.json().then((json) => {
            console.log("soy json", json)
            addMessage(response.status, json.message)
            setIsStreaming(true); 
            console.log("bien")
          })
         }
        })
        .catch((err) => { 
          setIsStreaming(false); 
          addMessage(err.status, err.error)
          console.log(err)
        })
    }
    const stopStream = async () => {
        let bodyFetch = { status: 'stop'}
        fetch("http://127.0.0.1:4000/playlist", {
         method: "PUT",
         body: JSON.stringify(bodyFetch),
       }).then((response) => {
          console.log(response);
          setIsStreaming(false); 
      }
       )
         .catch(() => setIsStreaming(false))
    }
    const addOutput = async (output: string) => {
        let bodyFetch = { output: output }
        fetch("http://127.0.0.1:4000/playlist", {
          method: 'PATCH',
          body: JSON.stringify(bodyFetch),
      }).then((response) => response.json()
        .then((json) => { addMessage(response.status, json.message); setOutput(output)}))
        .catch((err) => addMessage(err.status, err.error))
    }
    useEffect(() => {
        fetch("http://127.0.0.1:4000/playlist")
        .then((response) => response.json()
        .then((json) => {
          console.log(json)
          let status = json.status === 'start';
          setIsStreaming(status)
          setOutput(json.output)
        }))
    }, [])
    return {
        isStreaming,
        initStream, 
        stopStream,
        addOutput,
        output
    }
}