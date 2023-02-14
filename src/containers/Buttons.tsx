import { InitBtn , AddVideoBtn } from '../components'
export const Buttons = () => {
  return (
    <div className='flex space-x-4'>
        <InitBtn />
        <AddVideoBtn disabled={true} />
    </div>
  )
}
