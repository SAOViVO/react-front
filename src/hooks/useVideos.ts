import { useState, useRef, useLayoutEffect } from "react"

export const useVideos = () => {
    const addVideoElement = useRef<any>(null)
    const [ videos, setVideos ] = useState<any>([])
    useLayoutEffect(() => {
    //    let array = videos;
    //    setVideos(array.push(URL.createObjectURL(addVideoElement.current.files[0])));
    }, [addVideoElement.current])
    return {
        videos,
        addVideoElement
    }
}
