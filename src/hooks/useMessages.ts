import { useState } from "react"
interface IMessage {
    message: string,
    status: number,
}
export const useMessages = () => {
    const [messages, setMessages] = useState<Array<IMessage>>([])
    const addMessage = (status: number, message: string) => {
        let array = [...messages];
        array.unshift({ status: status, message: message})
        setMessages(array)
    }
    return { messages, addMessage }
}

