import adv from '../static/adv.gif'
export const Advertisement = () => {
  return (
        <div className='w-full bg-[#56CCF2] font-poppins
                        h-32 flex items-center justify-center'>
                          <img src={adv} alt=""  className='w-full h-full'/>
        </div>
  )
}
