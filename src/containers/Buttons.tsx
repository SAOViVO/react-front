import { ChangeEvent } from 'react'
import { InitBtn , AddVideoBtn, StopBtn } from '../components'
interface Props {
  addVideo: (event: ChangeEvent<HTMLInputElement>) => void;
  isStreaming: boolean;
  initStream: () => void;
  stopStream: () => void

}
export const Buttons = (props: Props) => {
  const { isStreaming, stopStream , initStream , addVideo } = props
  return (
    <div className='flex space-x-4'>
        {isStreaming ? <StopBtn stop={stopStream}/> : <InitBtn init={initStream} />}
        <AddVideoBtn disabled={isStreaming} addVideo={addVideo} />
    </div>
  )
}
