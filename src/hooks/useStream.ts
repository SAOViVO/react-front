import { useState } from "react"

export const useStream = () => {
    const [ isStreaming, setIsStreaming ] = useState<boolean>(false);
    const initStream = async () => {
       let bodyFetch = { status: 'start'}
       fetch("http://127.0.0.1:4000/playlist", {
        method: "PUT",
        body: JSON.stringify(bodyFetch),
      }).then((response) => response.json()  
        .then((json) => setIsStreaming(true))
        .catch(() => setIsStreaming(false)))
    }
    const stopStream = async () => {
        let bodyFetch = { status: 'stop'}
        fetch("http://127.0.0.1:4000/playlist", {
         method: "PUT",
         body: JSON.stringify(bodyFetch),
       }).then((response) => response.json()
         .then((json) => console.log(json)))
         .catch(() => setIsStreaming(false))
    }
    return {
        isStreaming,
        initStream, 
        stopStream
    }
}