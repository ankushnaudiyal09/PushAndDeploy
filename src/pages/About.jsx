import React from "react";
import { NavLink } from "react-router-dom";
import {
    FaRocket, FaUsers, FaCogs, FaCloud, FaLock, FaAward, FaGlobe, FaChartLine, FaHandshake, FaRegLightbulb, FaMapMarkerAlt, FaStar
} from "react-icons/fa";

import { motion } from "framer-motion";

<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap" rel="stylesheet"></link>

const team = [
    {
        name: "Aryan Negi",
        role: "Founder & Lead DevOps Engineer",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Aryan architects scalable, secure solutions for global brands, leading with a passion for automation.",
        socials: { linkedin: "#",
             github: "#" }
    },
    {
        name: "Ankush Naudiyal",
        role: "Co-Founder & Lead Devops Engineer",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        bio: "Ankush specializes in multi-cloud deployments and compliance, ensuring seamless delivery.",
        socials: { linkedin: "https://www.linkedin.com/in/ankush-naudiyal-39674924b/",
            github: "https://github.com/ankushnaudiyal09" }
    },

];


const values = [
    {
        icon: <FaRocket className="text-cyan-400 text-3xl" />,
        title: "Innovation",
        desc: "We experiment, iterate, and disrupt the status quo."
    },
    {
        icon: <FaUsers className="text-pink-400 text-3xl" />,
        title: "Transparency",
        desc: "Open communication with clients and teammates alike."
    },
    {
        icon: <FaCogs className="text-yellow-400 text-3xl" />,
        title: "Automation First",
        desc: "Manual is our enemy. We automate everything possible."
    },
    {
        icon: <FaCloud className="text-blue-400 text-3xl" />,
        title: "Cloud-Native",
        desc: "Modern infrastructure for modern problems."
    },
    {
        icon: <FaLock className="text-red-400 text-3xl" />,
        title: "Security by Design",
        desc: "Every pipeline, every deployment, every time."
    },
];


const AboutUs = () => (

    <>
        <style>{`
            @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
            }
        `}
        </style>

        <div className="bg-gradient-to-b from-gray-950 via-gray-800 to-gray-700  text-white font-sora" style={{ fontFamily: "'Sora', sans-serif" }}>
            {/* HERO */}
            <section className="relative flex flex-col items-center justify-center text-center py-16 md:py-23 px-4 md:px-0 w-full">
                {/* Layered SVG blob background */}

                <div className="relative z-10 max-w-7xl w-full mx-auto">
                    <h1 className="text-[38px] md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg mb-8">
                        PushAndDeploy
                    </h1>
                    <p className="mt-8 text-md sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto font-light tracking-wide leading-snug">
                        <span className=" text-md sm:text-xl md:text-2xl font-semibold">
                            <span className="text-purple-600">"</span>Engineering the backbone of digital products<span className="text-purple-600">"</span>
                        </span>
                        <br />
                        We deliver reliable, scalable, and secure cloud infrastructure so you can focus on building your vision.
                    </p>
                    <div className="mt-14 flex flex-wrap gap-8 justify-center">
                        <span className="px-4 md:px-8 py-2 md:py-4 rounded-full bg-gradient-to-r from-cyan-600 to-purple-700 text-white font-semibold text-xl shadow-xl hover:scale-110 transition-all duration-300  cursor-pointer">
                            AWS Premier Partner
                        </span>
                        <span className="px-4 md:px-8 py-2 md:py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-400 text-white font-semibold text-xl shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer">
                            Kubernetes Certified
                        </span>
                        <span className="px-4 md:px-8 py-2 md:py-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold text-xl shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer">
                            24/7 Global Support
                        </span>
                    </div>
                </div>
            </section>

            {/* STORY TIMELINE */}
            <section className="relative pt-10 pb-10 px-4 md:px-0">
                <h2 className="text-[60px]  py-4 font-extrabold mb-20 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r 
             from-cyan-400 via-purple-400 to-pink-500">
                    Our Story
                </h2>
                <div className="relative max-w-6xl mx-auto mt-12">
                    <div className="relative z-10 grid md:grid-cols-3 gap-10">
                        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl shadow-purple-600 hover:scale-90 transition-all duration-300">
                            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-800 mb-4">2021: The Spark</h3>
                            <p className="text-gray-400 text-xl">
                                Founded by engineers passionate about automation, Push & Deploy started as a two-person team with a bold vision: simplify DevOps for all.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-2xl shadow-cyan-300  hover:scale-90 transition-all duration-300">
                            <h3 className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-800 mb-4">2022: Scaling Up</h3>
                            <p className="text-gray-400 text-xl">
                                Expanded to a global team, delivering robust pipelines for startups and enterprises. Launched our first SaaS automation toolkit.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-2xl shadow-purple-600  hover:scale-90 transition-all duration-300">
                            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-800 mb-4">2024: Today & Beyond</h3>
                            <p className="text-gray-400 text-xl">
                                25+ experts, 100+ deployments, and clients across three continents. We continue to innovate, automate, and scale digital infrastructure worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="pt-28 pb-16 px-6 md:px-0 bg-gradient-to-b from-transparent via-[#181828] to-black">
                <h2 className="text-[60px] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-cyan-400 to-pink-500 tracking-tight mb-20">
                    Our Core Beliefs
                </h2>

                <div className="max-w-6xl mx-auto relative border-l-4 border-cyan-500 pl-6 space-y-10 mt-10">

                    {/* Mission */}
                    <div>
                        <div className="flex gap-2">
                            <span className="flex  text-4xl">🚀</span>
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-cyan-200 mb-4"> Our Mission</h3>
                        </div>
                        <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
                            Empower businesses to innovate by simplifying complex cloud infrastructure and enabling continuous delivery with confidence.
                        </p>
                    </div>

                    {/* Vision */}
                    <div>
                        <div  className="flex gap-2 ">
                            <span className="flex  text-4xl">🌍</span>
                            <h3 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-cyan-200 mb-4">
                                 Our Vision
                            </h3>
                        </div>
                        <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
                            To be the world’s most trusted DevOps partner, delivering automation, security, and agility for every digital product.
                        </p>
                    </div>

                    {/* Values */}
                    <div>
                        <div  className="flex gap-2">
                            <span  className="flex text-4xl">💡</span>
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-cyan-200 mb-6"> Our Values</h3>
                        </div>
                        <ul className="text-gray-300 space-y-5 text-xl md:text-2xl leading-relaxed list-disc list-inside">
                            {values.map((val) => (
                                <li key={val.title}>
                                    <span className="font-semibold text-white">{val.title}:</span> {val.desc}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>


            {/* TEAM GRID */}
            {/* <section className="pt-20 pb-10 px-4 md:px-0 bg-gradient-to-b from-gray-950 via-gray-800 to-gray-800">
                <h2 className="text-[60px] font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-cyan-800 tracking-tight ">
                    Meet Our Team
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="relative bg-gradient-to-br from-[#181828] to-black border border-white/10 rounded-3xl p-10 flex flex-col items-center
                             hover:scale-90 duration-300 transition-all hover:border-cyan-400"
                        >
                            <div  className="flex w-full justify-center gap-3">
                                <div  className="w-[50%] flex items-start justify-center">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-[80%] md:w-[50%] h-24 rounded-full border-4 border-cyan-400 shadow-lg object-cover "
                                    />
                                </div>
                                <h3 className="font-extrabold text-2xl text-cyan-200 mt-2 flex items-center justify-start">{member.name}</h3>

                            </div>
                            <p className=" w-full text-center place-content-center bg-gradient-to-r my-4 py-2 from-cyan-500 to-pink-500 text-white text-xl font-semibold px-2 rounded-3xl shadow-lg uppercase tracking-tighter">
                                    {member.role}
                            </p>
                            <p className="text-gray-400 mb-2 text-lg">{member.role}</p>
                            <p className="text-gray-500 text-base text-center">{member.bio}</p>
                            <div className="flex gap-4 mt-4">
                                <a href={member.socials.linkedin} className="hover:text-cyan-400 transition font-bold" target="_blank">LinkedIn</a>
                                <a href={member.socials.github} className="hover:text-pink-400 transition font-bold" target="_blank">GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center text-2xl text-gray-400 italic max-w-3xl mx-auto">
                    “We believe DevOps is not just a process—it's a culture. Our team’s diversity, passion, and expertise drive every success story.”
                </div>
            </section>  */}

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-800 to-gray-800">
                <div className="max-w-7xl mx-auto">
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-[60px] font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 tracking-tight"
                    >
                        Meet Our Team
                    </motion.h2>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 max-w-4xl mx-auto gap-8 mt-4">
                        {team.map((member) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ y: -5 }}
                                className="relative group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-400/30"
                            >
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Content */}
                                <div className="p-6 flex flex-col items-center h-full">
                                    {/* Avatar */}
                                    <div className="relative mb-4">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-32 h-32 rounded-full border-4 border-cyan-400/80 object-cover shadow-lg group-hover:border-cyan-400 transition-all duration-300"
                                        />
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                                            {member.role}
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-xl font-bold text-white mt-4 text-center">{member.name}</h3>

                                    {/* Bio */}
                                    <p className="text-gray-400 text-lg mt-2 text-center line-clamp-3">{member.bio}</p>

                                    {/* Social Links */}
                                    <div className="flex gap-4 mt-6">
                                        <a
                                            href={member.socials.linkedin}
                                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                                            target="_blank"
                                        >
                                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a
                                            href={member.socials.github}
                                            className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                                            target="_blank"
                                        >
                                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quote */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-20 text-center max-w-3xl mx-auto"
                    >
                        <blockquote className="text-xl sm:text-2xl text-gray-400 italic relative">
                            <div className="absolute -top-6 left-0 text-5xl text-cyan-400/30">“</div>
                            <p className="relative z-10">
                                We believe DevOps is not just a process—it's a culture. Our team's diversity, passion, and expertise drive every success story.
                            </p>
                            <div className="absolute -bottom-6 right-0 text-5xl text-cyan-400/30">”</div>
                        </blockquote>
                    </motion.div>
                </div>
            </section>
            


        </div>
    </>


);

export default AboutUs;

