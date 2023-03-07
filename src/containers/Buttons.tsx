import { ChangeEvent } from 'react'
import { InitBtn , AddVideoBtn, StopBtn } from '../components'
import { Videos } from '../hooks/interfaces';
interface Props {
  addVideo: (event: ChangeEvent<HTMLInputElement>) => void;
  isStreaming: boolean;
  initStream: () => void;
  stopStream: () => void;
  output: string|undefined;
  videos: Videos;
}
export const Buttons = (props: Props) => {
  const { isStreaming, stopStream , initStream , addVideo, output, videos } = props
  return (
    <div className='flex space-x-4'>
        {isStreaming ? <StopBtn stop={stopStream} /> : <InitBtn init={initStream} available={output !== '' && videos.videoQueue.length >= 1 }/>}
        <AddVideoBtn disabled={isStreaming} addVideo={addVideo} />
    </div>
  )
}
