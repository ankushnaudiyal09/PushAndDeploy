import React from "react"
import heroImage from "../assets/heroImage.jpeg"
import { FaAws } from "react-icons/fa";
import { SiNike } from "react-icons/si";

const Home = () => {


    const serviceData = [
        {
            id:1,
            icon:<FaAws  />,
            title:"CI/CD Pipelines",
            description:"CI/CD automates code building, testing, and deployment. It ensures faster delivery, fewer bugs, and streamlined software development lifecycle efficiency.",
            bg:"bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-700",
        },
        {
            id: 2,
            icon: <FaAws  />,
            title: "AWS Integration",
            description: "AWS integration connects applications with cloud services like EC2, S3, and Lambda, enabling scalable, reliable, and cost-effective deployments.",
            bg:"bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-800"
        },
        {
            id: 3,
            icon: <FaAws  />,
            title: "Dockerization",
            description: "Dockerization packages applications into containers, ensuring consistency across environments, faster deployment, scalability, and simplified dependency management in development workflows.",
            bg:"bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-700"
        },
    ]

    const pricingData = [

        {
            id:1,
            level:"Basic",
            pricing:"Free",
            desc1:"Unlimited Repositries",
            desc2:"Community Support",
            desc3:"Basic Ci/Cd features",
        },
        {
            id:2,
            level: "Pro",
            pricing: "₹999",
            desc1: "All Basic Feature ",
            desc2: "Community Support",
            desc3: "Advance Ci/Cd features",
            desc4:"Aws Integration"
        },
        {
            id: 3,
            level: "Enterprise",
            desc1: "Custom Pricing",
            desc2: "Dedicated Support",
            desc3: "Enterprise-Grade Features",
            desc4:"Custom Integrations"
        },

    ]

  return (
      <div className="bg-[#08080e] w-full flex flex-col gap-[20px] pb-14">

        {/* hero section */}

        <div className="min-w-[800px] flex justify-center items-center relative flex-col my-4">

            <img src={heroImage} alt={heroImage} className="w-[700px] object-contain " />

            <p className="font-bold text-[28px] text-white bottom-5 absolute ">
                    
                Streamline your Deployment with PushAndDeploy
            </p>
        </div>

        {/* key servcies */}

        <div className="min-w-[1300px] flex flex-col gap-[10px] items-center w-full mt-10">

            <div  className="flex flex-col gap-[5px]">
                  <p className="font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800">
                      Key Services
                  </p>
                  <p className="font-semibold text-md text-white ml-10">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800 text-2xl text-center">PushAndDeploy</span> provides a suite of services designed to simplify and accelerate your development workflow
                  </p>
            </div>

            {/* card rendering */}

            <div className="w-[1200px] flex gap-[20px] justify-center items-center mt-7">
            {
                serviceData.map((item , index) => {
                          return (
                              <div key={index} className=" bg-[#3D4754] rounded-3xl flex flex-col gap-[2px] w-[30%] h-[250px] mt-4
                                hover:scale-95 transition-all duration-300 cursor-pointer">
                                    
                                    <p className="text-white text-[35px] ml-8 mt-2">{item.icon}</p>

                                  <p className={`text-2xl text-center bg-clip-text text-transparent
                                                ${item.bg} font-bold`}>
                                        {item.title}
                                    </p>

                                    <p className="text-[#ffffffb6] text-sm px-2">
                                        {item.description}
                                    </p>

                              </div>
                          )
                      })
                  }
            </div>

            <div className="w-full flex flex-col gap-10 mt-20">

                <div className="w-full  flex flex-col gap-[7px] items-center justify-center">

                  <p className="text-[43px] font-bold text-start text-transparent bg-clip-text 
                    bg-gradient-to-r from-red-500 to-red-700 tracking-tighter">Ready To Transform Your Development WorkFlow ?</p>

                  <p className="text-lg text-[#ffffffbe] font-medium">
                    Join thousands of developers who enjoying the PushAndDeploy's powerfull features and initiative interface
                  </p>

                  <button type="button" className="btn btn-success text-sm flex justify-start w-[150px]" >Get Started</button>

                </div>

                <div className="w-[1200px] flex gap-[10px] justify-center items-center mx-auto">

                  {
                    pricingData.map((item , index) => {
                        return (
                            <div className="bg-[#2d343d] rounded-[10px] flex flex-col  w-[30%]  mt-4
                            hover:scale-95 transition-all duration-300 cursor-pointer" key={index}>

                                <p className="text-white font-medium text-[22px] ml-10 mt-2">{item.level}</p>

                                {
                                    item.pricing ?
                                        (<p className="text-white font-bold text-[30px] ml-5">
                                        {item.pricing}<span className="text-[#ffffffaf] text-[20px]">/months</span>
                                     </p>) 
                                     : 
                                        (<p className="text-white font-bold text-[28px] ml-6">
                                        Contact Us
                                     </p>)
                                }
                                
                                <button type="button" className="btn btn-success text-sm flex justify-start w-[90%] mx-auto" >Get Started</button>
                                
                                <ul className="flex gap-1 flex-col mt-4">
                                    <li className="flex gap-2 items-center justify-start text-white font-medium">
                                        <SiNike  />
                                        {item.desc1}
                                    </li>
                                    <li className="flex gap-2 items-center justify-start text-white">
                                        <SiNike  />
                                        {item.desc2}
                                    </li>
                                    <li className="flex gap-2 items-center justify-start text-white">
                                        <SiNike  />
                                        {item.desc3}
                                    </li>
                                    {
                                        item.desc4 ? 
                                        (
                                            <li className="flex gap-2 items-center justify-start text-white">
                                                <SiNike />
                                                {item.desc4}
                                            </li>
                                        )
                                        :
                                        (
                                        <li className="flex gap-2 items-center justify-start text-white opacity-0">
                                                <SiNike />
                                                {item.desc3}
                                        </li>
                                        )
                                    }
                                </ul>


                            </div>
                        )
                    })
                  }

                </div>

            </div>
        </div>

      </div>
  )
}

export default Home