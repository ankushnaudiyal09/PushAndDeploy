import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {NavLink} from "react-router-dom"

const Login = () => {

    const [showPassword , setShowPassword] = useState(false);


  return (
    
    
      <div className="min-h-[100vh] w-[100vw] flex items-center justify-center bg-[#181827]">

        <div className="">

            <div  className="flex flex-col items-center justify-start ">
                  <p className="text-5xl font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900 leading-tight">
                      PushAndDeploy
                  </p>

                <p className="text-gray-400 text-lg ">
                    Log in to your account
                </p>
            </div>

            {/* input box */}
              <div className="flex flex-col gap-[20px] justify-center bg-gray-800 py-4 rounded-2xl p-2 lg:w-[450px]">

                <div  className="flex flex-col px-3 mt-2">
                      <label htmlFor='email_address' className="text-gray-400 ">Email</label>
                    <input  type='email' placeholder='Enter your Email' required id='email_address'
                          className="rounded-2xl h-10 bg-gray-900 placeholder:text-gray-400 pl-3.5 text-white focus:outline-none"/>
                </div>

                <div className="flex flex-col px-3 relative">
                    <label htmlFor='password' className="text-gray-400 ">Password</label>
                    <input type={showPassword ? 'text' : 'password'} placeholder='Enter your password'  id="password"  required
                        className="rounded-2xl h-10 bg-gray-900 placeholder:text-gray-400 pl-3.5 text-white focus:outline-none"
                        />
                    {
                          showPassword ? <FaEyeSlash size={20} className="absolute text-white right-8 bottom-2.5 cursor-pointer" 
                          onClick={() => setShowPassword((prev) => !prev)}/> 
                          :
                           <FaEye size={20} className="absolute text-white right-8 bottom-2.5 cursor-pointer"
                                  onClick={() => setShowPassword((prev) => !prev)}
                           />
                    }
                </div>
                
                  <div className="w-[50%] mx-auto text-white bg-gradient-to-r from-red-600 to-red-900 rounded-4xl flex items-center 
                  justify-center h-8 hover:cursor-pointer"  >
                    Log In
                </div>


                <div className="flex items-center justify-center mx-2 w-full">

                    <div className="bg-gray-600 w-[30%] h-[1px] mr-1 flex items-center justify-center"></div>

                    <span className="text-gray-400 font-light text-lg ">Or Continue with</span>

                      <div className="bg-gray-600 w-[30%] h-[1px] ml-1 flex items-center justify-center mr-1"></div>

                </div>

                
                  <div className="w-[50%] mx-auto flex items-center justify-center bg-gradient-to-r from-green-600 to-green-900 
                   h-8 text-white rounded-4xl text-center hover:cursor-pointer">
                      Google
                  </div>

                
            </div>

            <div className="flex items-center justify-center">
                <p className="text-gray-400 mt-3">Dont't have an account? 
                  <NavLink to={"/SignUp"} className="font-bold text-gray-300">Sign Up</NavLink>
                </p>
            </div>

        </div>


    </div>
  )
}

export default Login