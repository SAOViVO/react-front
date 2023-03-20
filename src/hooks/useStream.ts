import { useState, useEffect } from "react"
import { baseUrl } from "../config";
type add = (status: number, message: string) => void
type toggle = () => void;
export const useStream = (addMessage: add, toggle: toggle) => {
    const [ isStreaming, setIsStreaming ] = useState<boolean>(false);
    const initStream = async () => {
       let bodyFetch = { status: 'start'}
       fetch(baseUrl + "/playlist", {
        method: "PUT",
        body: JSON.stringify(bodyFetch),
      }).then((response) => {
         if(response.ok){
          response.json().then((json) => {
            addMessage(response.status, json.message)
            setIsStreaming(true); 
            toggle()
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
        fetch(baseUrl + "/playlist", {
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
        fetch(baseUrl + "/playlist")
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