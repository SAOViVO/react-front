import { useState, useEffect } from "react"
type add = (status: number, message: string) => void
type toggle = () => void;
export const useStream = (addMessage: add, toggle: toggle) => {
  console.log(addMessage)
    const [ isStreaming, setIsStreaming ] = useState<boolean>(false);
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
            toggle()
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
          response.json()
          .then((json)=> {
            addMessage(response.status, json.message)
            toggle()
            setIsStreaming(false); 
          })})
          .catch((err) => { 
            setIsStreaming(false); 
            addMessage(err.status, err.error)
            console.log(err)
          })
    }

    useEffect(() => {
        fetch("http://127.0.0.1:4000/playlist")
        .then((response) => response.json()
        .then((json) => {
          console.log(json)
          let status = json.status === 'start';
          setIsStreaming(status)
        }))
    }, [])
    return {
        isStreaming,
        initStream, 
        stopStream,

    }
}