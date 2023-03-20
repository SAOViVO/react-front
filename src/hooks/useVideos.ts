import { ChangeEvent, useState, useEffect } from "react"
import axios from "axios"
import { baseUrl } from "../config"
type add = (status: number, message: string) => void

export const useVideos = (addMessage: add) => {
    // const addVideoElement = useRef<any>(null)
    const [ videos, setVideos ] = useState<any>([])
    const [ toggle, setToggle ] = useState<boolean>(false);
    const [ output, setOutput ] = useState<string>('');

    const addOutput = async (output: string) => {
      let bodyFetch = { output: output }
      fetch(baseUrl + "/playlist", {
        method: 'PATCH',
        body: JSON.stringify(bodyFetch),
    }).then((response) => response.json()
      .then((json) => { addMessage(response.status, json.message); setOutput(output)}))
      .catch((err) => addMessage(err.status, err.error))
  }
    const addVideo = (e :ChangeEvent<HTMLInputElement>) => {
        console.log("entre")
        if (!e.target.files) return;
        var videoToUpload;
        var formData = new FormData();
        if(e.target.files.length > 1){
          for(let i = 0; i < e.target.files.length; i++) {
             videoToUpload = e.target.files[i];
             formData.append('files', videoToUpload);
           }
        }else {
          console.log(e.target.files.length)
          videoToUpload = e.target.files[0];
          if(!videoToUpload) return;
          formData.append('files', videoToUpload);
        }
        fetch(baseUrl + "/playlist", {
            mode: 'no-cors',
            method: "POST",
            body: formData,
          }).then(() => setToggle(!toggle));
    }
    const changePosition = (id: string, position: number) => {
      const bodyFetch = { id: id, position: position }
      fetch(baseUrl + "/playlist", {
       method: 'PATCH',
       body: JSON.stringify(bodyFetch),
      }).then((response) => {
        response.json().then((json) => {
          setToggle(!toggle); 
          addMessage(response.status, json.message)
        })
       })
       .catch((err) =>  addMessage(err.status, err.error))
    }    
    const deleteVideo = async (id: string) => {
      const bodyFetch = { id: id }
      fetch(baseUrl + "/playlist", {
        method: 'DELETE',
        body: JSON.stringify(bodyFetch),
       }).then((response) =>{
        response.json().then((json) => {
               if(response.ok){ 
                setToggle(!toggle);  addMessage(response.status, json.message)
              }})
         } )
       .catch((err) =>  addMessage(err.status, err.error))
    }
    const handleToggle = () => setToggle(!toggle)
    useEffect(() => {
      const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
        axios.get(baseUrl + '/playlist')
        .then(({data}) => {setVideos(data); setOutput(data.output)  })
        .catch((err) => console.log(err))
      }, 10000)
      return () => clearInterval(intervalId); //This is important
    }, [])
    useEffect(() => {
      console.log('entre toggle')
      axios.get(baseUrl + '/playlist')
      .then(({data}) => { 
        setVideos(data); 
        setOutput(data.output) 
      })
      .catch((err) => console.log("axios,", err))
    }, [toggle])
  
    return {
        videos,
        addVideo,
        changePosition, 
        deleteVideo,
        addOutput,
        output,
        handleToggle
    }
}
