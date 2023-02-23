import { InitBtn , AddVideoBtn, StopBtn } from '../components'
import { useStream, useVideos } from '../hooks'

export const Buttons = () => {
  const { isStreaming, initStream } = useStream();
  const { videos, addVideo } = useVideos();
  return (
    <div className='flex space-x-4'>
        {isStreaming ? <StopBtn stop={initStream}/> : <InitBtn init={initStream} />}
        <AddVideoBtn disabled={isStreaming} addVideo={addVideo} />
    </div>
  )
}
