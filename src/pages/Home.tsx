import { Output, Notifications, Advertisement, Uploading, Stop, Footer, Navbar } from "../components";
import { ListVideos, Buttons, VideosInfo } from "../containers";
import { useStream, useVideos, useMessages } from "../hooks";
const Home = () => {
  const { addMessage, messages } = useMessages();
  const { videos, addVideo , changePosition, deleteVideo, addOutput, output, handleToggle, addLink, isUploading} = useVideos(addMessage);
  const { isStreaming, initStream , stopStream, isStopping } = useStream(addMessage, handleToggle);
  return (
    <div className="homes">
        <Uploading isShowing={isUploading} />
        <Stop isShowing={isStopping} />
        <Navbar></Navbar>
        <div className="flex flex-col xl:flex-row items-start h-auto border border-black py-4 px-8 xl:space-x-4">
            <div className="w-full xl:w-2/5 rounded-sm space-y-4">
                <div className='px-6 rounded-lg py-4 border-[#828282] border border-solid'>
                    <Output output={output} add={addOutput}  isStreaming={isStreaming} />
                    <p>¿No sabés cómo conseguir tu clave? 
                        <a href="https://youtu.be/RNtwx71wVMo" target='_blank' rel='noreferrer'>
                          <span className='text-[#2F80ED]'>
                               Mirá este tutorial
                          </span>
                        </a>
                    </p>
                </div>
                <div className='flex flex-col'>
                    <Notifications notifications={messages} />
                    <Advertisement /> 
                </div>
            </div>
            <div className="flex w-full xl:w-3/5 flex-col items-start  h-full   xl:px-8">
              <Buttons addVideo={addVideo} isStreaming={isStreaming} addLink={addLink}
                       initStream={initStream} stopStream={stopStream}
                       videos={videos} output={output} />
              <ListVideos videos={videos} changePosition={changePosition} deleteVideo={deleteVideo} addVideo={addVideo}/>
              <VideosInfo isStreaming={isStreaming} quantityVideos={videos.total ? videos.total : 0} duration={videos.duration} deleteList={deleteVideo}/>
            </div>
        </div>
        <Footer />
 
    </div>
  )
}
export default Home;