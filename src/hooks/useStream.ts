import { useState, useEffect } from "react"

export const useStream = () => {
    const [ isStreaming, setIsStreaming ] = useState<boolean>(false);
    const [ output, setOutput ] = useState<string|undefined>(undefined);
    const initStream = async () => {
       let bodyFetch = { status: 'start'}
       fetch("http://127.0.0.1:4000/playlist", {
        method: "PUT",
        body: JSON.stringify(bodyFetch),
      }).then(() => { setIsStreaming(true); console.log("bien")})
        .catch((err) => { setIsStreaming(false); console.log(err)})
    }
    const stopStream = async () => {
        let bodyFetch = { status: 'stop'}
        fetch("http://127.0.0.1:4000/playlist", {
         method: "PUT",
         body: JSON.stringify(bodyFetch),
       }).then((json) => setIsStreaming(false))
         .catch(() => setIsStreaming(false))
    }
    const addOutput = async (output: string) => {
        let bodyFetch = { output: output }
        fetch("http://127.0.0.1:4000/playlist", {
          method: 'PATCH',
          body: JSON.stringify(bodyFetch),
      }).then((response) => response.json()
        .then((json) => { console.log(json); setOutput(output)}))
        .catch((err) => console.log(err))
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