import React , {useState} from 'react'
import { FaTimes, FaBars } from "react-icons/fa";

function Header() {
    const [isopen, setisopen] = useState(false);
  return (
   <>
   <div className='flex justify-between  h-20 items-center p-6
   '> 
    <div className='text-3xl text-[#051b92] p-2 flex justify-center items-center '>
     
    <svg className='w-6 h-6 fill-[#051b92]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M465.4 409.4l87.1-150.2-32-.3-55.1 95L259.2 0 23 407.4l32 .3L259.2 55.6zm-355.3-44.1h32.1l117.4-202.5L463 511.9l32.5 .1-235.8-404.6z"/></svg>
Hygge<span className='font-extrabold'>X</span>
    </div>

    <div className="h-[80px] flex  justify-evenly ">
            <div
              onClick={() => setisopen(!isopen)}
              className="sm:hidden bg-white text-[#051b92] flex items-center right-10 w-8 h-8 top-6 p-2 rounded-lg shadow-md absolute cursor-pointer"
            >
               {isopen ? <FaTimes /> : <FaBars />}
            </div>
          </div>

    <div className='flex justify-between items-center  p-2 '>
        <ul 
        // className={`flex w-80 justify-between pr-2 pl-2 ${
        //         isopen ? "top-14" : "top-[-500px]"
        //       }`}
        className={` flex justify-between gap-2 bg-white text-gray-700 absolute sm:static left-[-0px] w-full transition-all duration-500 ease-in ${
            isopen ? "top-16" : "top-[-500px]"
          } flex-col  sm:flex-row items-center`}
              >
            <li>Home</li>
            <li>

                Flashcard
            </li>
            <li>
                Contact
            </li>
            <li>
                FAQ
            </li>
            <button className='bg-gradient-to-b from-[#051b92] to-[#0f79f1] rounded-3xl p-2 w-28 text-white ml-4'>Login</button>
        </ul>
      
    </div>
   </div>
   </>
  )
}

export default Header