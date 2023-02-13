import circle from "../static/circle.png"
import triangle from "../static/triangle.png"

const Navbar = () => {
  return (
    <nav className='flex justify-between px-12 py-6 w-full bg-[#FFFFFF] border-bottom border shadow-lg'>
        <div className=" font-numans text-4xl flex w-2/4 items-center">
            <img src={triangle} alt="triangle" className="h-5 mr-1"/>       
            <h4 className="mr-1">Sao </h4>
            <h4 className="text-[#07863D]">Vivo</h4>
        </div>
        <div className="flex space-x-10 items-center">
            <img src={circle} alt="circle" className="h-8" />
            <img src={circle} alt="circle" className="h-8" />
            <img src={circle} alt="circle" className="h-8" />
        </div>
    </nav>
  )
}

export default Navbar;