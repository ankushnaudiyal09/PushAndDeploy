import React from 'react'
import { FaAws } from 'react-icons/fa'

const Navbar = () => {
  return (
    
      <div className="bg-[#08080e] flex justify-between h-20 w-[100%] px-4 py-1 items-center">

        <div className="text-white font-bold text-[25px] px-1 justify-center items-center mx-4 flex gap-3 cursor-pointer">
            <FaAws  />
            PushAndDeploy
        </div>

        <div className="w-full h-full flex items-center justify-center">

            <ul  className="flex gap-[25px] text-[22px] justify-center items-center text-white ">
                <li className="hover:scale-90 transition-all duration-300 cursor-pointer hover:text-amber-400">
                    Services
                </li>
                  <li className="hover:scale-90 transition-all duration-300 cursor-pointer hover:text-amber-400">
                    Pricing
                </li>
                  <li className="hover:scale-90 transition-all duration-300 cursor-pointer hover:text-amber-400">
                    Documentation
                </li>
                  <li className="hover:scale-90 transition-all duration-300 cursor-pointer hover:text-amber-400">
                    Support
                </li>
            </ul>
        </div>

        <button type="button" className="btn btn-success text-sm flex justify-start w-[150px] mr-3 " >Get Started</button>


    </div>
  )
}

export default Navbar