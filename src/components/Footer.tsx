import footerImg from '../static/saovivo-footer.png'

export const Footer = () => {
  return (
    <footer className='w-full p-4 flex justify-end  '>
        <img src={footerImg} alt='sao-vivo' className='h-3'/>
    </footer>
  )
}
