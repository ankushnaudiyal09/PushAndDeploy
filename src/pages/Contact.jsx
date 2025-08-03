import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";

const ContactDetails = () => {
  const contactDetails = [
    {
      icon: "HiChatBubbleLeftRight",
      heading: "Chat us on",
      description: "Our friendly team is here to help.",
      details: "info@PushAndDeploy",
    },
    {
      icon: "BiWorld",
      heading: "Visit us",
      description: "Come and say hello at our office HQ.",
      details:
        "house no.30 Maharana Pratap Chowk near sports college ,Dehradun ,Uttarakhand",
    },
    {
      icon: "IoCall",
      heading: "Call us",
      description: "Mon - Fri From 8am to 5pm",
      details: "+123 456 7869",
    },
  ];
  return (
    <div className="w-full flex flex-col rounded-xl bg-[#132431]  p-4 lg:p-6">
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
        return (
          <div
            className="flex flex-col p-3 text-sm text-gray-500"
            key={i}
          >
            <div className="flex flex-row items-center gap-2">
              <Icon size={25} />
              <h1 className="text-lg font-semibold text-richblack-5 text-white">
                {ele?.heading}
              </h1>
            </div>

            <div className="w-full flex flex-col gap-1">
              <p className="font-medium">{ele?.description}</p>
              <p className="font-semibold">{ele?.details}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}



const Contact = () => {
  return (
      <div className="bg-[#030a0f] flex min-h-screen w-[100%]">
      <div className="mx-auto flex flex-col sm:flex-row w-11/12 justify-between text-white gap-5  py-2">
        


          
        {/* Contact Form */}

        <div className="w-full border-[1px] border-[#065ea7] rounded-2xl ">
            <form    >
            <h1 className="font-bold text-center text-4xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800 ">
              Let's Connect
            </h1>

            <div className="w-[90%] mx-auto flex flex-col">
              {/* fullName */}
              <div className="w-full my-2">
                <p className="text-start text-lg font-semibold">
                  Full Name <span className="ml-1 text-yellow-200">*</span>
                </p>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full rounded-full bg-[#1f3849] focus:border-none h-10 pl-4 focus:outline-none "
                />

              </div>

              {/* email */}
              <div className="w-full my-2">
                <p className="text-start text-lg font-semibold">
                  Email Address<span className="ml-1 text-yellow-200">*</span>
                </p>
                <input
                  type="text"
                  placeholder="xyz@gmail.com"
                    className="w-full rounded-full bg-[#1f3849] focus:border-none mt-2 h-10 pl-6 focus:outline-none"
                />
              </div>

              <div className="w-full my-2">
                <p className="text-start text-lg font-semibold">
                  Phone Number<span className="ml-1 text-yellow-200">*</span>
                </p>
                <input
                  type="text"
                  placeholder="+91 1234567890"
                    className="w-full rounded-full bg-[#1f3849] focus:border-none mt-2 h-10 pl-6 focus:outline-none"
                />
              </div>

              <div className="w-full my-2">
                <p className="text-start text-lg font-semibold">
                  Message<span className="ml-1 text-yellow-200">*</span>
                </p>
                <textarea
                className="w-full rounded-xl bg-[#1f3849] mt-1 h-[100px] pl-2 pt-2 focus:outline-none"
                  placeholder="Enter your Message"
                ></textarea>
              </div>

              <div className="w-[50%] mx-auto my-3 py-1 bg-[#b41d1d] rounded-full">
                <button type="submit" className="w-full rounded-full font-bold text-sm md:text-lg lg:text-2xl px-3 py-3 ">
                  Let's Connect
                </button>
              </div>
            
            </div>
            </form>
        </div>

        {/* Contact Details */}
        <ContactDetails />
      </div>
    </div>
  );
};

export default Contact;




