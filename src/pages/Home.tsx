import Navbar from "../components/Navbar";
import { Input, Output, List, Notifications, Advertisement } from "../components";
import { ListVideos, Buttons } from "../containers";
import { useStream, useVideos, useMessages } from "../hooks";
const Home = () => {
  const { addMessage, messages } = useMessages()
  const { isStreaming, initStream , stopStream, addOutput, output} = useStream(addMessage);
  const { videos, addVideo , changePosition, deleteVideo } = useVideos(addMessage);
  return (
    <div className="h-screen">
        <Navbar></Navbar>
        <div className="flex items-start h-auto border border-black py-4 px-8 space-x-4">
            <div className="w-2/4 rounded-sm space-y-4">
                <div className='px-6 rounded-lg py-4 border-[#828282] border border-solid'>
                    <Input />
                    <List />
                    <Output output={output} add={addOutput} />
                    <p>No sabés cómo conseguir tu link? {" "}
                        <a href="!#">
                          <span className='text-[#2F80ED]'>
                              mirá este tutorial 
                          </span>
                        </a>
                    </p>
                </div>
                <div className='flex flex-col'>
                    <Notifications notifications={messages} />
                    <Advertisement /> 
                </div>
            </div>
            <div className="flex flex-col  items-start border w-2/4 py-4 px-8">
              <Buttons addVideo={addVideo} isStreaming={isStreaming} 
                       initStream={initStream} stopStream={stopStream}
                       videos={videos} output={output} />
              <ListVideos videos={videos} changePosition={changePosition} deleteVideo={deleteVideo}/>
            </div>
        </div>
 
    </div>
  )
}
export default Home;