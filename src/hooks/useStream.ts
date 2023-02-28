import { useState, useEffect } from "react"

export const useStream = () => {
    const [ isStreaming, setIsStreaming ] = useState<boolean>(false);
    const initStream = async () => {
       let bodyFetch = { 'status': 'play'}
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
    useEffect(() => {
        fetch("http://127.0.0.1:4000/playlist")
        .then((response) => response.json()
        .then((json) => {
          let status = json.status === 'play';
          setIsStreaming(status)
        }))
        
    }, [])
    return {
        isStreaming,
        initStream, 
        stopStream,
      
    }
}