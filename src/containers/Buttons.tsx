import { ChangeEvent } from 'react'
import { InitBtn , AddVideoBtn, StopBtn, AddLinkBtn, StopPopup } from '../components'
import { Videos } from '../hooks/interfaces';
import { useModal } from '../hooks';
interface Props {
  addVideo: (event: ChangeEvent<HTMLInputElement>) => void;
  isStreaming: boolean;
  initStream: () => void;
  stopStream: () => void;
  output: string|undefined;
  videos: Videos;
}
export const Buttons = (props: Props) => {
  const { isShowing, toggle }=useModal()
  const { isStreaming, stopStream , initStream , addVideo, output, videos } = props
  return (
    <div className='flex space-x-4'>
        <StopPopup isShowing={isShowing} close={toggle} stop={stopStream}/>
        {isStreaming ? <StopBtn stop={toggle} /> : <InitBtn init={initStream} available={output !== '' && videos.videoQueue.length >= 1 }/>}
        <AddVideoBtn disabled={isStreaming} addVideo={addVideo} />
        <AddLinkBtn disabled={isStreaming} addVideo={addVideo} />
    </div>
  )
}
