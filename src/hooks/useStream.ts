import { useState } from "react"

export const useStream = () => {
    const [ isStreaming, setIsStreaming ] = useState<boolean>(false);
    const initStream = () => setIsStreaming(true)
    return {
        isStreaming,
        initStream
    }
}