import React from "react";
import { NavLink } from "react-router-dom";
import {
    FaRocket, FaUsers, FaCogs, FaCloud, FaLock, FaAward, FaGlobe, FaChartLine, FaHandshake, FaRegLightbulb, FaMapMarkerAlt, FaStar
} from "react-icons/fa";

<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap" rel="stylesheet"></link>

const team = [
    {
        name: "Aman Sharma",
        role: "Founder & Lead DevOps Engineer",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Aman architects scalable, secure solutions for global brands, leading with a passion for automation.",
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        name: "Neha Joshi",
        role: "Cloud Solutions Architect",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        bio: "Neha specializes in multi-cloud deployments and compliance, ensuring seamless delivery.",
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        name: "Daniel Weber",
        role: "CI/CD Specialist",
        img: "https://randomuser.me/api/portraits/men/54.jpg",
        bio: "Daniel automates pipelines for speed and reliability, enabling 100+ deployments/month.",
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        name: "Priya Singh",
        role: "Security Engineer",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
        bio: "Priya ensures every deployment meets the highest security standards and best practices.",
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        name: "Jonas Müller",
        role: "Infrastructure Lead",
        img: "https://randomuser.me/api/portraits/men/61.jpg",
        bio: "Jonas leads our global infrastructure, optimizing for uptime and cost-efficiency.",
        socials: { linkedin: "#", twitter: "#" }
    },
];

const testimonials = [
    {
        name: "Sophie Turner",
        company: "FintechX",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
        quote: "Push & Deploy transformed our release cycle. Their team is fast, transparent, and deeply knowledgeable.",
        rating: 5,
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
        name: "Raj Patel",
        company: "EcomNova",
        img: "https://randomuser.me/api/portraits/men/78.jpg",
        quote: "We scaled to millions of users without a hitch. Their infrastructure expertise is world-class.",
        rating: 5,
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
        name: "Emily Chen",
        company: "HealthSync",
        img: "https://randomuser.me/api/portraits/women/22.jpg",
        quote: "Security and uptime are critical in healthcare. Push & Deploy exceeded every expectation.",
        rating: 5,
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
        name: "Sophie Turner",
        company: "FintechX",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
        quote: "Push & Deploy transformed our release cycle. Their team is fast, transparent, and deeply knowledgeable.",
        rating: 5,
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
        name: "Raj Patel",
        company: "EcomNova",
        img: "https://randomuser.me/api/portraits/men/78.jpg",
        quote: "We scaled to millions of users without a hitch. Their infrastructure expertise is world-class.",
        rating: 5,
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
        name: "Emily Chen",
        company: "HealthSync",
        img: "https://randomuser.me/api/portraits/women/22.jpg",
        quote: "Security and uptime are critical in healthcare. Push & Deploy exceeded every expectation.",
        rating: 5,
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
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

const metrics = [
    {
        icon: <FaAward className="text-yellow-400 text-3xl" />,
        label: "100+",
        desc: "Successful Deployments"
    },
    {
        icon: <FaGlobe className="text-blue-400 text-3xl" />,
        label: "3",
        desc: "Continents Served"
    },
    {
        icon: <FaUsers className="text-pink-400 text-3xl" />,
        label: "25+",
        desc: "Global Experts"
    },
    {
        icon: <FaChartLine className="text-green-400 text-3xl" />,
        label: "50%",
        desc: "Faster Time-to-Market"
    },
    {
        icon: <FaHandshake className="text-cyan-400 text-3xl" />,
        label: "98%",
        desc: "Client Retention Rate"
    },
];

const offices = [
    { city: "Bangalore", country: "India", icon: <FaMapMarkerAlt className="text-pink-400" /> },
    { city: "London", country: "UK", icon: <FaMapMarkerAlt className="text-blue-400" /> },
    { city: "Berlin", country: "Germany", icon: <FaMapMarkerAlt className="text-yellow-400" /> },
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

        <div className="bg-black text-white font-sora" style={{ fontFamily: "'Sora', sans-serif" }}>
            {/* HERO */}
            <section className="relative flex flex-col items-center justify-center text-center py-23 px-4 md:px-0 overflow-hidden w-full">
                {/* Layered SVG blob background */}
                <svg
                    className="absolute top-0 left-1/2 -translate-x-1/2 z-0"
                    width="1800"
                    height="800"
                    viewBox="0 0 1800 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ filter: "blur(100px)" }}
                >
                    <ellipse cx="900" cy="350" rx="700" ry="250" fill="#18122B" />
                    <ellipse cx="700" cy="250" rx="400" ry="180" fill="#23234d" />
                    <ellipse cx="1200" cy="500" rx="300" ry="120" fill="#6a1b9a" fillOpacity="0.7" />
                    <ellipse cx="1000" cy="200" rx="200" ry="100" fill="#00bcd4" fillOpacity="0.4" />
                    <ellipse cx="1500" cy="600" rx="160" ry="90" fill="#ff4081" fillOpacity="0.3" />
                </svg>
                <div className="relative z-10 max-w-7xl w-full mx-auto">
                    <h1 className="text-[120px] md:text-[140px] font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg mb-8 leading-tight">
                        PushAndDeploy
                    </h1>
                    <p className="mt-8 text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto font-light tracking-wide leading-snug">
                        <span className=" font-semibold">
                            <span className="text-purple-600">"</span>Engineering the backbone of digital products<span className="text-purple-600">"</span>
                        </span>
                        <br />
                        We deliver reliable, scalable, and secure cloud infrastructure so you can focus on building your vision.
                    </p>
                    <div className="mt-14 flex flex-wrap gap-8 justify-center">
                        <span className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-purple-700 text-white font-semibold text-xl shadow-xl hover:scale-110 transition-all duration-300  cursor-pointer">
                            AWS Premier Partner
                        </span>
                        <span className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-400 text-white font-semibold text-xl shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer">
                            Kubernetes Certified
                        </span>
                        <span className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold text-xl shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer">
                            24/7 Global Support
                        </span>
                    </div>
                </div>
            </section>

            {/* METRICS */}
            <section className="pb-5 pt-20 px-4 md:px-0 bg-gradient-to-b from-purple-950 via-[#181717] to-black">
                <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-5 gap-14 text-center">
                    {metrics.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center bg-white/10 rounded-2xl px-10 py-10 shadow-xl border border-white/10
                        hover:scale-90 transition-all duration-300"
                        >
                            {stat.icon}
                            <span className="mt-3 text-5xl font-extrabold tracking-tight">{stat.label}</span>
                            <span className="text-gray-300 text-lg mt-1">{stat.desc}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* STORY TIMELINE */}
            <section className="relative pt-10 pb-10 px-4 md:px-0">
                <h2 className="text-[90px] py-4 font-extrabold mb-20 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r 
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

            {/* MISSION, VISION, VALUES */}
            {/* <section className="pt-28 pb-0 px-4 md:px-0 bg-gradient-to-b from- via-[#181828] to-black">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20">
                    <div>
                        <h2 className="text-4xl font-extrabold text-pink-400 mb-6 tracking-wide">Our Mission</h2>
                        <p className="text-gray-200 leading-8 text-2xl">
                            Empower businesses to innovate by simplifying complex cloud infrastructure and enabling continuous delivery with confidence.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-extrabold text-cyan-400 mb-6 tracking-wide">Our Vision</h2>
                        <p className="text-gray-200 leading-8 text-2xl">
                            To be the world’s most trusted DevOps partner, delivering automation, security, and agility for every digital product.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 tracking-wide">Our Values</h2>
                        <ul className="space-y-7">
                            {values.map((val) => (
                                <li key={val.title} className="flex items-start gap-4 text-2xl">
                                    {val.icon}
                                    <span>
                                        <span className="font-semibold">{val.title}:</span> {val.desc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section> */}

            <section className="pt-28 pb-16 px-6 md:px-0 bg-gradient-to-b from-transparent via-[#181828] to-black">
                <h2 className="text-[80px] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-cyan-400 to-pink-500 tracking-tight mb-20">
                    Our Core Beliefs
                </h2>

                <div className="max-w-6xl mx-auto relative border-l-4 border-cyan-500 pl-6 space-y-10 mt-10">

                    {/* Mission */}
                    <div>
                        <div className="flex gap-2">
                            <span className="flex  text-4xl">🚀</span>
                            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-cyan-200 mb-4"> Our Mission</h3>
                        </div>
                        <p className="text-gray-300 text-2xl leading-relaxed">
                            Empower businesses to innovate by simplifying complex cloud infrastructure and enabling continuous delivery with confidence.
                        </p>
                    </div>

                    {/* Vision */}
                    <div>
                        <div  className="flex gap-2 ">
                            <span className="flex  text-4xl">🌍</span>
                            <h3 className="text-[30px] bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-cyan-200 mb-4">
                                 Our Vision
                            </h3>
                        </div>
                        <p className="text-gray-300 text-2xl leading-relaxed">
                            To be the world’s most trusted DevOps partner, delivering automation, security, and agility for every digital product.
                        </p>
                    </div>

                    {/* Values */}
                    <div>
                        <div  className="flex gap-2">
                            <span  className="flex text-4xl">💡</span>
                            <h3 className="text-[30px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-cyan-200 mb-6"> Our Values</h3>
                        </div>
                        <ul className="text-gray-300 space-y-5 text-2xl leading-relaxed list-disc list-inside">
                            {values.map((val) => (
                                <li key={val.title}>
                                    <span className="font-semibold text-white">{val.title}:</span> {val.desc}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>


            {/* WHAT WE DO */}
            <section className="pt-0 pb-10 px-4 md:px-0">
                <h2 className="text-[90px] font-bold pt-20 pb-10 text-center text-[#4a6fe7] tracking-tight ">What we Do</h2>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
                    <ul className="space-y-10 text-2xl">
                        <li className="bg-gray-800 w-full p-4 rounded-4xl hover:scale-90 transition-all duration-300">
                            <span className="font-bold text-cyan-400">Cloud Architecture:</span> Design, deploy, and manage AWS, Azure, and GCP environments for startups and enterprises.
                        </li>
                        <li className="bg-gray-800 w-full p-4 rounded-4xl hover:scale-90 transition-all duration-300">
                            <span className="font-bold text-yellow-400">CI/CD Automation:</span> Build secure, scalable pipelines using GitHub Actions, Jenkins, and GitLab CI.
                        </li>
                        <li className="bg-gray-800 w-full p-4 rounded-4xl hover:scale-90 transition-all duration-300">
                            <span className="font-bold text-pink-400">Containerization:</span> Docker, Kubernetes, and serverless deployments for modern, resilient applications.
                        </li>
                        <li className="bg-gray-800 w-full p-4 rounded-4xl hover:scale-90 transition-all duration-300">
                            <span className="font-bold text-blue-400">Infrastructure as Code:</span> Terraform, CloudFormation, and Ansible for repeatable, auditable infrastructure.
                        </li>
                        <li className="bg-gray-800 w-full p-4 rounded-4xl hover:scale-90 transition-all duration-300">
                            <span className="font-bold text-red-400">Security & Compliance:</span> Automated vulnerability scanning, SOC2, and GDPR readiness.
                        </li>
                    </ul>
                    <div className="flex flex-col gap-10">
                        <div className="bg-white/10 rounded-2xl p-10 shadow-xl border border-white/10 hover:scale-90 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-cyan-200 mb-3">Case Study: Fintech Scale-Up</h3>
                            <p className="text-gray-300 text-xl">
                                We reduced deployment time by 60% for a leading fintech client, enabling them to launch features weekly instead of monthly.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-10 shadow-xl border border-white/10 hover:scale-90 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-pink-200 mb-3">Case Study: E-commerce Giant</h3>
                            <p className="text-gray-300 text-xl">
                                Migrated 200+ microservices to Kubernetes, achieving 99.99% uptime and seamless Black Friday scaling.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-10 shadow-xl border border-white/10 hover:scale-90 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-cyan-200 mb-3">Case Study: Fintech Scale-Up</h3>
                            <p className="text-gray-300 text-xl">
                                We reduced deployment time by 60% for a leading fintech client, enabling them to launch features weekly instead of monthly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="pt-28 pb-14 px-4 md:px-0 bg-gradient-to-b from-black via-[#181828] to-black overflow-hidden">
                <h2 className="text-[80px] font-bold text-center text-cyan-300 tracking-tight">What Clients Say</h2>

                <div className="mt-20 overflow-hidden whitespace-normal">
                    <div
                        className="flex gap-8 w-max"
                        style={{
                            animation: "scroll-left 30s linear infinite"
                        }}
                    >
                        {/* Repeat testimonials twice for smoother loop */}
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div key={i} className="bg-white/10 rounded-3xl p-4 shadow-xl border border-white/10 flex flex-col items-center w-[300px] max-w-[300]">
                                <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full border-4 border-cyan-400 shadow-lg mb-4 object-cover" />
                                <div className="flex items-center gap-2 mb-2">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-md text-gray-200 mb-2">{t.quote}</p>
                                <div className="flex items-center gap-2 w-full justify-center">
                                    <div  className="w-[50%]">
                                        <img src={t.logo} alt={t.company} className="w-16 h-8 object-contain " />
                                    </div>
                                    <div  className="flex flex-col gap-2 w-[40%] justify-start">
                                        <span className="font-bold text-md text-cyan-200">{t.name}</span>
                                        <span className="text-gray-400 text-sm">{t.company}</span> 
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        
            {/* TEAM GRID */}
             <section className="pt-20 pb-10 px-4 md:px-0">
                <h2 className="text-[80px] font-extrabold mb-16 text-center bg-clip-text text-transparent bg-purple-500 to-purple-900 tracking-tight ">
                    Meet Our Team
                </h2>
                <div className="max-w-7xl mx-auto grid grid-cols-3  gap-10 mt-10 ">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="relative bg-gradient-to-br from-[#181828] to-black border border-white/10 rounded-3xl p-10 flex flex-col items-center
                             hover:scale-90 duration-300 transition-all hover:border-cyan-400"
                        >
                            <div  className="flex gap-2 w-full">
                                <div  className="w-[50%] flex items-center justify-center">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-[70%] h-24 rounded-full border-4 border-cyan-400 shadow-lg object-cover "
                                    />
                                </div>
                                <span className=" w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white text-md font-semibold px-2 rounded-3xl shadow-lg uppercase tracking-tighter place-content-center">
                                    {member.role}
                                </span>
                            </div>
                            <h3 className="font-extrabold text-2xl text-cyan-200 mt-2">{member.name}</h3>
                            <p className="text-gray-400 mb-2 text-lg">{member.role}</p>
                            <p className="text-gray-500 text-base text-center">{member.bio}</p>
                            <div className="flex gap-4 mt-4">
                                <a href={member.socials.linkedin} className="hover:text-cyan-400 transition font-bold">LinkedIn</a>
                                <a href={member.socials.twitter} className="hover:text-pink-400 transition font-bold">Twitter</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center text-2xl text-gray-400 italic max-w-3xl mx-auto">
                    “We believe DevOps is not just a process—it's a culture. Our team’s diversity, passion, and expertise drive every success story.”
                </div>
            </section> 
            

            {/* CALL TO ACTION */}
            <section className="flex justify-center mt-32 pb-24">
                <div className="bg-black/90 backdrop-blur-lg border-2 border-gradient-to-r from-cyan-400 to-pink-500 rounded-3xl px-16 py-20 flex flex-col items-center w-full max-w-4xl
                shadow-2xl shadow-cyan-200">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 text-center tracking-tight">
                        Ready to Build the Future?
                    </h2>
                    <p className="text-2xl text-gray-300 mb-10 text-center">
                        Let’s architect your next-gen infrastructure.<br />
                        <span className="text-cyan-300">We’ll handle DevOps, you handle growth.</span>
                    </p>
                    <NavLink to="/contact">
                        <button className=" mt-3 px-10 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white text-2xl font-bold shadow-xl animate-bounce">
                            Get in Touch
                        </button>
                    </NavLink>
                </div>
            </section>
        </div>
    </>


);

export default AboutUs;

