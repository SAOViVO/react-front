import { ChangeEvent, useState} from "react"

export const useVideos = () => {
    // const addVideoElement = useRef<any>(null)
    const [ videos, setVideos ] = useState<any>([])
    const addVideo = (e :ChangeEvent<HTMLInputElement>) => {
      console.log("pase")
        if (!e.target.files) return;
        var videoToUpload = e.target.files[0];
        if(!videoToUpload) return;
        var formData = new FormData();
        formData.append('files', videoToUpload);
        console.log("pase")
        fetch("http://127.0.0.1:4000/upload", {
            mode: 'no-cors',
            method: "POST",
            body: formData,
          }).then(function (res) {
            console.log(res)
          }, function (e) {
            console.log(e)
          });
    }

    return {
        videos,
        addVideo
    }
}
