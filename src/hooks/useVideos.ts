import { ChangeEvent, useState} from "react"

export const useVideos = () => {
    // const addVideoElement = useRef<any>(null)
    const [ videos, setVideos ] = useState<any>([])
    const addVideo = (e :ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        console.log(e.target.files)
        var videoToUpload = e.target.files[0];
        console.log(videoToUpload)
        if(!videoToUpload) return;
        var formData = new FormData();
        formData.append('files', videoToUpload);
        fetch("http://127.0.0.1:4000/upload", {
            mode: 'no-cors',
            method: "POST",
            body: formData,
            headers: {
                "Content-type": "multipart/form-data",
            }
          }).then(function (res) {
            console.log(res)
          }, function (e) {
            console.log(e)
            // alert("Error submitting form!");
          });
    }

    return {
        videos,
        addVideo
    }
}
