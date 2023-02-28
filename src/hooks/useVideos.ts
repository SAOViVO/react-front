import { ChangeEvent, useState, useEffect } from "react"
import axios from "axios"
export const useVideos = () => {
    // const addVideoElement = useRef<any>(null)
    const [ videos, setVideos ] = useState<any>([])
    const [ toggle, setToggle ] = useState<boolean>(false);
    const addVideo = (e :ChangeEvent<HTMLInputElement>) => {
        console.log("entre")
        if (!e.target.files) return;
        var videoToUpload = e.target.files[0];
        if(!videoToUpload) return;
        var formData = new FormData();
        formData.append('files', videoToUpload);
        fetch("http://127.0.0.1:4000/upload", {
            mode: 'no-cors',
            method: "POST",
            body: formData,
          }).then(function (res) {
            console.log(res)
            setToggle(!toggle)
          }, function (e) {
            console.log(e)
          });
    }
    const changePosition = (id: string, position: number) => {
      const bodyFetch = { id: id, position: position }
      fetch('http://127.0.0.1:4000/playlist', {
       method: 'PATCH',
       body: JSON.stringify(bodyFetch),
      }).then((response) => console.log(response))
    }
    useEffect(() => {
      axios.get('http://127.0.0.1:4000/playlist')
      .then(({data}) => setVideos(data))
      .catch((err) => console.log(err))
    }, [toggle])
    
    return {
        videos,
        addVideo,
        changePosition
    }
}
