import { ChangeEvent } from 'react'
import { InitBtn , AddVideoBtn, StopBtn, AddLinkBtn, StopPopup } from '../components'
import { Videos } from '../hooks/interfaces';
import { useModal } from '../hooks';
interface Props {
  addVideo: (event: ChangeEvent<HTMLInputElement>) => void;
  addLink: (link: string) => Promise<void>;
  isStreaming: boolean;
  initStream: () => void;
  stopStream: () => void;
  output: string|undefined;
  videos: Videos;
}
export const Buttons = (props: Props) => {
  const { isShowing, toggle } = useModal()
  const { isStreaming, stopStream , initStream , addVideo, output, videos, addLink } = props
  return (
    <div className='flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 w-full'>
        <StopPopup isShowing={isShowing} close={toggle} stop={stopStream}/>
        {isStreaming ? <StopBtn stop={toggle} /> : <InitBtn init={initStream} available={output !== '' && videos.videoQueue.length >= 1 }/>}
        <AddVideoBtn disabled={isStreaming} addVideo={addVideo} />
        <AddLinkBtn disabled={isStreaming} addLink={addLink} />
    </div>
  )
}
