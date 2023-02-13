import Navbar from "../components/Navbar";
import { Input, Output, List, Notifications, Advertisement } from "../components";
const Home = () => {
  return (
    <div className="h-screen border-2 border-solid border-blue-700">
        <Navbar></Navbar>
        <div className="flex items-center h-auto border border-black py-4 px-8 space-x-4">
            <div className="w-2/4 rounded-sm space-y-4">
                <div className='px-6 rounded-lg py-4 border-[#828282] border border-solid'>
                    <Input />
                    <List />
                    <Output />
                    <p>No sabés cómo conseguir tu link? {" "}
                        <a href="!#">
                          <span className='text-[#2F80ED]'>
                              mirá este tutorial 
                          </span>
                        </a>
                    </p>
                </div>
                <div className='flex flex-col'>
                    <Notifications />
                    <Advertisement /> 
                </div>
            </div>
            <div className="flex items-center h-full border w-2/4 border-black py-4 px-8">
              
            </div>
        </div>
 
    </div>
  )
}
export default Home;