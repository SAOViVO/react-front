import { ChangeEvent, useState} from "react"

export const useVideos = () => {
    // const addVideoElement = useRef<any>(null)
    const [ videos, setVideos ] = useState<any>([])
    const addVideo = (e :ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        var videoToUpload = e.target.files[0];
        console.log(videoToUpload)
        // if(!videoToUpload) return;
        var formData = new FormData();
        formData.append('file', videoToUpload);
        fetch("http://127.0.0.1:4000/upload", {
            mode: 'no-cors',
            method: "POST",
            body: formData,
            headers: {
                "Content-type": "multipart/form-data",
            }
          }).then(function (res) {
            if (res.ok) {
              console.log('ok')
            } else if (res.status == 401) {
              console.log('error')
            }
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
