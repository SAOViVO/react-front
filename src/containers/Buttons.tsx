import { InitBtn , AddVideoBtn } from '../components'
import { useStream } from '../hooks'
export const Buttons = () => {
  const { isStreaming, initStream } = useStream()
  return (
    <div className='flex space-x-4'>
        <InitBtn init={initStream} />
        <AddVideoBtn disabled={isStreaming} />
    </div>
  )
}
