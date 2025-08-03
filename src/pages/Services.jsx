import React ,{ useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Float, Stars, Points, PointMaterial } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {
    Cloud,
    Server,
    Code,
    Shield,
    Database,
    Globe,
    Zap,
    ArrowRight,
    ChevronRight,
    Cpu,
    GitBranch,
    HardDrive,
    Lock,
    BarChart2,
    Users,
    Check,
    Monitor,
    LayoutDashboard,
    Settings,
    Terminal
} from 'lucide-react'
import { NavLink } from 'react-router-dom'



// Enhanced Typing Effect Component
const TypingHero = () => {
    const [text] = useTypewriter({
        words: [
            'Cloud Infrastructure',
            'DevOps Solutions',
            'CI/CD Pipelines',
            'Security Services',
            'Database Management',
            'Scalable Systems'
        ],
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 50,
        delaySpeed: 2000,
    })

    return (
        <p className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 text-center">
            Enterprise <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{text}</span>
            <Cursor cursorColor="#3b82f6" />
        </p>
    )
}

// Enhanced Service Card Component
const ServiceCard = ({ icon, title, description, features, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-br from-gray-900/70 to-gray-950/70 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-8 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
            whileHover={{ y: -10 }}
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-black/50 border border-gray-800">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>

            <p className="text-gray-400 mb-6">{description}</p>

            <ul className="space-y-3">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mr-3 animate-pulse"></div>
                        <span className="text-gray-300">{feature}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}



// Main Page Component
export default function ModernCloudPage() {

    const tabs = [
        { name: "Architecture", icon: <Server size={18} /> },
        { name: "Security", icon: <Shield size={18} /> },
        { name: "Databases", icon: <Database size={18} /> },
        { name: "Networking", icon: <Globe size={18} /> },
        { name: "Monitoring", icon: <Monitor size={18} /> }
    ]


    const [mounted, setMounted] = useState(false)
    const [activeTab, setActiveTab] = useState(0)

    useEffect(() => {
        setMounted(true)
    }, [])


    // Add this state variable
    const [isAutoRotating, setIsAutoRotating] = useState(true);

    // Update your useEffect
    useEffect(() => {
        if (!isAutoRotating) return;

        const id = setInterval(() => {
            setActiveTab(prev => (prev === 4 ? 0 : prev + 1));
        }, 10000);

        return () => {
            clearInterval(id);
        };
    }, [isAutoRotating]); // Add dependency

    const services = [
        {
            icon: <Cloud size={24} className="text-blue-400" />,
            title: "Cloud Deployment",
            description: "Automated cloud infrastructure provisioning and management",
            features: [
                "AWS/GCP/Azure",
                "Terraform",
                "Kubernetes",
                "Auto-scaling"
            ]
        },
        {
            icon: <GitBranch size={24} className="text-purple-400" />,
            title: "CI/CD Pipelines",
            description: "End-to-end automated deployment workflows",
            features: [
                "GitHub Actions",
                "Jenkins",
                "ArgoCD",
                "Rollback systems"
            ]
        },
        {
            icon: <Shield size={24} className="text-emerald-400" />,
            title: "Security Hardening",
            description: "Enterprise-grade security configuration",
            features: [
                "IAM Policies",
                "Network Security",
                "Compliance",
                "Penetration Testing"
            ]
        },
        {
            icon: <Database size={24} className="text-amber-400" />,
            title: "Database Solutions",
            description: "Optimized cloud database architectures",
            features: [
                "RDS/Aurora",
                "Redis",
                "MongoDB",
                "Backup Systems"
            ]
        },
        {
            icon: <Globe size={24} className="text-rose-400" />,
            title: "Global Networking",
            description: "Low-latency global network infrastructure",
            features: [
                "CDN Setup",
                "Load Balancing",
                "DDoS Protection",
                "Edge Computing"
            ]
        },
        {
            icon: <BarChart2 size={24} className="text-cyan-400" />,
            title: "Performance Analytics",
            description: "Real-time monitoring and optimization",
            features: [
                "Dashboards",
                "Alert Systems",
                "Log Analysis",
                "Resource Optimization"
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white overflow-x-hidden">

            {/* 2. Services Showcase */}
            <section className="py-12 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <p className="text-[40px] sm:text-[80px] font-bold mb-4">
                            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
                        </p>
                        <p className="text-xl md:text-2xl text-gray-400">
                            Comprehensive cloud solutions tailored to your business needs
                        </p>
                    </motion.div>

                    <div
                        style={{
                            display: 'grid',
                            gap: '32px',
                            gridTemplateColumns: '1fr',
                            width: '100%'
                        }}
                    >
                        {/* Dynamic style injection for responsive breakpoints */}
                        <style>
                            {`
                                @media (min-width: 768px) {
                                    .services-grid {
                                    grid-template-columns: repeat(2, 1fr) !important;
                                    }
                                }
                                @media (min-width: 1024px) {
                                    .services-grid {
                                    grid-template-columns: repeat(3, 1fr) !important;
                                    }
                                }
                                `}
                        </style>

                        {services.map((service, i) => (
                            <ServiceCard key={i} {...service} index={i} />
                        ))}
                    </div>

                </div>
            </section>
            

            {/* 1. Hero Section with Three.js and Typing Effect */}
            <section className="relative min-h-screen flex items-start justify-center overflow-hidden mt-20">

                <div className="container mx-auto px-6 relative z-10 flex justify-center items-center">
                    <div className="max-w-6xl mx-auto text-center ">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className=""
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-gray-800 mb-8"
                            >
                                <Zap className="w-5 h-5 text-blue-400 mr-2" />
                                <span className="text-sm font-medium">PREMIUM CLOUD SERVICES</span>
                            </motion.div>

                            <TypingHero />

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-md md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto mt-4"
                            >
                                We architect, deploy, and optimize cloud-native solutions with enterprise-grade security and performance.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex gap-1 md:gap-4 justify-center flex-wrap"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 font-medium flex items-center gap-2 mt-4 rounded-full"
                                >
                                    Get Started <ArrowRight className="w-5 h-5" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-transparent border border-gray-700  font-medium mt-4 rounded-full"
                                >
                                    Learn More
                                </motion.button>
                            </motion.div>
                        
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center "
                >
                    <span className="text-gray-400 mb-2">Scroll to explore</span>
                    <div className="w-8 h-12 rounded-3xl border-2 border-gray-700 flex justify-center p-2">
                        <motion.div
                            animate={{
                                y: [0, 10, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            className="w-2 h-2 rounded-full bg-blue-500"
                        />
                    </div>
                </motion.div>
            </section>

            {/* 3. Tabs Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm relative mx-auto">
                <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[length:24px_24px] -z-10"></div>
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="lg:w-2/3 mx-auto ">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <p className="text-4xl md:text-6xl font-bold mb-8 w-full text-center">
                                        Solutions for <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Every Need</span>
                                    </p>

                                    <p className="text-gray-400 mb-8 text-center">
                                        Our comprehensive suite of cloud services covers all aspects of modern infrastructure, security, and operations.
                                    </p>

                                    <div className="hidden lg:block">
                                        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="p-3 rounded-lg bg-black/50 border border-gray-800">
                                                    <Settings className="text-blue-400" size={24} />
                                                </div>
                                                <h3 className="text-xl font-semibold text-white">Custom Solutions</h3>
                                            </div>
                                            <p className="text-gray-400 mb-6">
                                                Need something specific? Our team will build custom solutions tailored to your unique requirements.
                                            </p>
                                            <button className="text-blue-400 flex items-center gap-2 group">
                                                Learn more
                                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="lg:w-2/3 mx-auto">
                                <div
                                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 flex-wrap gap-2 mb-8"
                                    onMouseEnter={() => setIsAutoRotating(false)}
                                    onMouseLeave={() => setIsAutoRotating(true)}
                                >
                                    {tabs.map((tab, i) => (
                                        <motion.button
                                            key={i}
                                            onClick={() => {
                                                setActiveTab(i);
                                                setIsAutoRotating(false); // Also pause when manually clicking a tab
                                            }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className={`px-4 py-3 rounded-lg flex items-center gap-2 transition-all ${activeTab === i ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white' : 'bg-gray-900 text-gray-300 hover:bg-gray-800'}`}
                                        >
                                            {tab.icon}
                                            {tab.name}
                                        </motion.button>
                                    ))}
                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-gradient-to-br from-gray-900/70 to-gray-950/70 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-8 shadow-2xl shadow-cyan-600"
                                    >
                                        {activeTab === 0 && (
                                            <div>
                                                <h3 className="text-2xl font-semibold text-white mb-4 ">Cloud Architecture</h3>
                                                <p className="text-gray-400 mb-6">
                                                    Design and implementation of scalable, resilient cloud infrastructure using
                                                    industry best practices and cutting-edge technologies.
                                                </p>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {['Terraform', 'Kubernetes', 'Serverless', 'Microservices', 'Auto-scaling', 'Load Balancing'].map((item, i) => (
                                                        <li key={i} className="flex items-center">
                                                            <Check className="w-5 h-5 text-emerald-400 mr-2" />
                                                            <span className="text-gray-300">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {activeTab === 1 && (
                                            <div>
                                                <h3 className="text-2xl font-semibold text-white mb-4">Security Solutions</h3>
                                                <p className="text-gray-400 mb-6">
                                                    Comprehensive security measures to protect your infrastructure, data,
                                                    and applications from modern threats.
                                                </p>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {['IAM Policies', 'Network Security', 'Encryption', 'Compliance', 'Pen Testing', 'SIEM Integration'].map((item, i) => (
                                                        <li key={i} className="flex items-center">
                                                            <Check className="w-5 h-5 text-emerald-400 mr-2" />
                                                            <span className="text-gray-300">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {activeTab === 2 && (
                                            <div>
                                                <h3 className="text-2xl font-semibold text-white mb-4">Database Management</h3>
                                                <p className="text-gray-400 mb-6">
                                                    High-performance, scalable database solutions with optimized queries,
                                                    caching, and backup strategies.
                                                </p>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {['RDS/Aurora', 'Redis', 'MongoDB', 'Cassandra', 'Backup Systems', 'Query Optimization'].map((item, i) => (
                                                        <li key={i} className="flex items-center">
                                                            <Check className="w-5 h-5 text-emerald-400 mr-2" />
                                                            <span className="text-gray-300">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {activeTab === 3 && (
                                            <div>
                                                <h3 className="text-2xl font-semibold text-white mb-4">Global Networking</h3>
                                                <p className="text-gray-400 mb-6">
                                                    Low-latency, high-throughput network architecture with global
                                                    content delivery and DDoS protection.
                                                </p>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {['CDN Setup', 'Load Balancing', 'DNS Management', 'VPN Solutions', 'DDoS Protection', 'Edge Computing'].map((item, i) => (
                                                        <li key={i} className="flex items-center">
                                                            <Check className="w-5 h-5 text-emerald-400 mr-2" />
                                                            <span className="text-gray-300">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {activeTab === 4 && (
                                            <div>
                                                <h3 className="text-2xl font-semibold text-white mb-4">Monitoring & Analytics</h3>
                                                <p className="text-gray-400 mb-6">
                                                    Real-time monitoring, alerting, and analytics to keep your systems
                                                    performing at their best.
                                                </p>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {['Real-time Dashboards', 'Alert Systems', 'Log Analysis', 'Performance Metrics', 'Anomaly Detection', 'Cost Optimization'].map((item, i) => (
                                                        <li key={i} className="flex items-center">
                                                            <Check className="w-5 h-5 text-emerald-400 mr-2" />
                                                            <span className="text-gray-300">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="py-32 bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:24px_24px] -z-10"></div>
                <div className="container mx-auto px-6 ">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center "
                    >
                        <p className="text-3xl md:text-6xl font-bold mb-6">
                            Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Transform</span> Your Infrastructure?
                        </p>
                        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto mt-3">
                            Schedule a consultation with our cloud architects today.
                        </p>
                        <div className="flex gap-4 justify-center mt-3">
                            <NavLink to="/" >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-medium text-white"
                                >
                                    Get Started
                                </motion.button>                            
                            </NavLink>
                            <NavLink  to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-2 bg-transparent  bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-medium text-white"
                                >
                                    Contact Us
                                </motion.button>                            
                            </NavLink>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}