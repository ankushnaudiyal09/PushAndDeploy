
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';


// ==================== 3D CLOUD CLUSTER MODEL ====================
const CloudClusterModel = () => {
    const groupRef = useRef();
    const nodesRef = useRef([]);

    useFrame(({ clock }) => {
        groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;

        // Animate individual nodes
        nodesRef.current.forEach((node, i) => {
            if (node) {
                node.position.y = Math.sin(clock.getElapsedTime() * 2 + i) * 0.05;
            }
        });
    });

    return (
        <group ref={groupRef}>
            {/* Cloud cluster base */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial
                    color="#0a0a14"
                    transparent
                    opacity={0.2}
                    wireframe
                />
            </mesh>

            {/* Floating nodes */}
            {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const radius = 1.2 + Math.random() * 0.3;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;

                return (
                    <mesh
                        key={i}
                        ref={el => nodesRef.current[i] = el}
                        position={[x, 0, z]}
                    >
                        <sphereGeometry args={[0.1 + Math.random() * 0.1, 16, 16]} />
                        <meshStandardMaterial
                            color={i % 3 === 0 ? "#00f0ff" : "#ff2d75"}
                            emissive={i % 3 === 0 ? "#00f0ff" : "#ff2d75"}
                            emissiveIntensity={0.5}
                        />
                    </mesh>
                );
            })}

            {/* Floating text
            <Text
                position={[0, 1.5, 0]}
                fontSize={0.3}
                color="#00f0ff"
            >
                {`CLOUD_NET`}
            </Text> */}
        </group>
    );
};


// ==================== MAIN COMPONENT ====================
const FuturisticDevOpsLanding = () => {
    const controls = useAnimation();
    const terminalRef = useRef();
    const isInView = useInView(terminalRef, { once: true });
    const [activeTab, setActiveTab] = useState('ci-cd');
    const [commandIndex, setCommandIndex] = useState(0);

    const [selectedPlan, setSelectedPlan] = useState(null);

    // Terminal commands data
    const terminalCommands = [
        {
            title: "DEPLOY",
            cmd: "kubectl apply -f deployment.yaml",
            output: [
                "✅ Deployment configured",
                "🔄 Rolling out update...",
                "🌐 Service/web-app exposed",
                "🚀 Deployment complete"
            ]
        },
        {
            title: "PROVISION",
            cmd: "terraform apply -auto-approve",
            output: [
                "Plan: 18 to add, 0 to change, 0 to destroy.",
                "aws_eks_cluster.main: Creating...",
                "aws_lb.web: Creating...",
                "Apply complete! Resources: 18 added."
            ]
        },
        {
            title: "MONITOR",
            cmd: "prometheus --config.file=prometheus.yml",
            output: [
                "Starting Prometheus...",
                "Loaded configuration file",
                "Server is ready to receive web requests.",
                "Listening on :9090"
            ]
        }
    ];

    // Animated typing effect
    useEffect(() => {
        if (isInView) {
            controls.start("visible");

            const interval = setInterval(() => {
                setCommandIndex(prev => (prev + 1) % terminalCommands.length);
            }, 8000);

            return () => clearInterval(interval);
        }
    }, [isInView]);

    // Feature blocks data
    const features = [
        {
            title: "Zero-Downtime Deploys",
            description: "Automated blue-green deployments with instant rollback",
            icon: "⚡",
            stats: "99.99% uptime"
        },
        {
            title: "Infra as Code",
            description: "Version-controlled infrastructure with Terraform",
            icon: "λ",
            stats: "90% faster provisioning"
        },
        {
            title: "K8s Orchestration",
            description: "Managed clusters with auto-scaling",
            icon: "⎈",
            stats: "15,000+ containers"
        },
        {
            title: "Security First",
            description: "Built-in vulnerability scanning",
            icon: "🔒",
            stats: "100% compliance"
        },
    ];

    const testimonials = [
        {
            id: 1,
            name: "Alex Chen",
            company: "TechNova",
            quote: "Deployment frequency increased 5x with 90% fewer failures",
            role: "CTO",
            avatar: "AC"
        },
        {
            id: 2,
            name: "Sarah K.",
            company: "FinSecure",
            quote: "Achieved 100% compliance while cutting cloud costs by 40%",
            role: "DevOps Director",
            avatar: "SK"
        },
        {
            id: 3,
            name: "Miguel R.",
            company: "HealthCloud",
            quote: "Security architecture enabled sensitive workload migration",
            role: "Cloud Architect",
            avatar: "MR"
        },
        {
            id: 4,
            name: "James L.",
            company: "RetailGiant",
            quote: "Scaled to handle Black Friday traffic with zero downtime",
            role: "Platform Engineer",
            avatar: "JL"
        },
        {
            id: 5,
            name: "Priya K.",
            company: "AutoScale",
            quote: "Infrastructure as Code reduced provisioning time by 85%",
            role: "DevOps Lead",
            avatar: "PK"
        },
        {
            id: 6,
            name: "David T.",
            company: "GameCloud",
            quote: "Kubernetes implementation boosted deployment speed 3x",
            role: "Technical Director",
            avatar: "DT"
        },
        {
            id: 1,
            name: "Alex Chen",
            company: "TechNova",
            quote: "Deployment frequency increased 5x with 90% fewer failures",
            role: "CTO",
            avatar: "AC"
        },
        {
            id: 2,
            name: "Sarah K.",
            company: "FinSecure",
            quote: "Achieved 100% compliance while cutting cloud costs by 40%",
            role: "DevOps Director",
            avatar: "SK"
        },
        {
            id: 3,
            name: "Miguel R.",
            company: "HealthCloud",
            quote: "Security architecture enabled sensitive workload migration",
            role: "Cloud Architect",
            avatar: "MR"
        },
        {
            id: 4,
            name: "James L.",
            company: "RetailGiant",
            quote: "Scaled to handle Black Friday traffic with zero downtime",
            role: "Platform Engineer",
            avatar: "JL"
        },
        {
            id: 5,
            name: "Priya K.",
            company: "AutoScale",
            quote: "Infrastructure as Code reduced provisioning time by 85%",
            role: "DevOps Lead",
            avatar: "PK"
        },
        {
            id: 6,
            name: "David T.",
            company: "GameCloud",
            quote: "Kubernetes implementation boosted deployment speed 3x",
            role: "Technical Director",
            avatar: "DT"
        },
    ];

    const [activeSet, setActiveSet] = useState(0);

    // Auto-rotate every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSet(prev => (prev + 1) % Math.ceil(testimonials.length / 3));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="futuristic-devops-site">

            {/* ============ HERO SECTION ============ */}
            <section className="hero-section">
                {/* 3D Canvas */}
          <div className="hero-canvas">
                    <Canvas shadows camera={{ position: [0, 1, 5], fov: 50 }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
                        <CloudClusterModel />
                    </Canvas>
                </div>

                {/* Hero Content */}
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>
                            <span className="">Push And</span>
                            <br />
                            <span className="highlight">Deploy</span>
                        </h1>
                        <p className="text-sm sm:text-xl md:text-2xl">
                            We transform infrastructure into competitive advantage with
                            battle-tested automation frameworks and cloud-native architectures
                        </p>
                    </motion.div>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <button className="cta-primary interactive hover:scale-90 duration-200 transition-all w-[200px] text-sm md:text-2xl my-1 md:my-2 py-1 md:py-2">
                            Get Connect
                            <span className="arrow-home">→</span>
                        </button>
                        <button className="cta-secondary interactive  hover:scale-90 duration-200 transition-all">
                            <div className="play-icon">▶</div>
                            Watch Case Study
                        </button>
                    </motion.div>
                </div>

                {/* Scrolling marquee */}
                <div className="tech-marquee">
                    <div className="marquee-container">
                        <div className="marquee-inner">
                            {["Kubernetes", "Terraform", "AWS", "Azure", "GCP", "Docker", "Jenkins", "ArgoCD", "Prometheus", "Grafana"].map((tech) => (
                                <div key={tech} className="tech-pill interactive hover:scale-90 duration-200 transition-all">
                                    {tech}
                                </div>
                            ))}
                            {/* Duplicate the items for seamless looping */}
                            {["Kubernetes", "Terraform", "AWS", "Azure", "GCP", "Docker", "Jenkins", "ArgoCD", "Prometheus", "Grafana"].map((tech) => (
                                <div key={`${tech}-clone`} className="tech-pill interactive hover:scale-90 duration-200 transition-all" aria-hidden="true">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* ============ GLOWING TERMINAL SECTION ============ */}
            <section className="terminal-showcase" ref={terminalRef}>
                <motion.div
                    className="terminal-container"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 1 },
                        visible: { opacity: 1, transition: { duration: 0.8 } }
                    }}
                >
                    <div className="terminal-glass">
                        <div className="terminal-header">
                            <div className="dots">
                                <span className="red"></span>
                                <span className="yellow"></span>
                                <span className="green"></span>
                            </div>
                            <span className="title">terminal — zsh</span>
                        </div>

                        <div className="terminal-body">
                            <TerminalAnimation
                                command={terminalCommands[commandIndex].cmd}
                                output={terminalCommands[commandIndex].output}
                            />
                        </div>
                    </div>

                    <div className="terminal-tabs">
                        {terminalCommands.map((cmd, i) => (
                            <button
                                key={i}
                                className={`tab interactive hover:scale-90 transition-all duaration-200  ${i === commandIndex ? 'active' : ''}`}
                                onClick={() => setCommandIndex(i)}
                            >
                                {cmd.title}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="terminal-content">
                    <h2>
                        Infrastructure Automation
                        <span className="highlight"> At Scale</span>
                    </h2>
                    <p>
                        Our battle-tested frameworks handle the most demanding workloads with
                        precision and reliability. From startups to Fortune 500 enterprises.
                    </p>

                    <div className="terminal-stats">
                        <div className="stat hover:scale-90 duration-300 transition-all shadow-2xl shadow-purple-600">
                            <h3>15,000+</h3>
                            <p>Containers Managed</p>
                        </div>
                        <div className="stat hover:scale-90 duration-300 transition-all  shadow-2xl shadow-purple-600">
                            <h3>99.99%</h3>
                            <p>Uptime SLA</p>
                        </div>
                        <div className="stat hover:scale-90 duration-300 transition-all  shadow-2xl shadow-purple-600">
                            <h3>3.2s</h3>
                            <p>Avg Build Time</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ============ FEATURE CARDS ============ */}
            <section className="features-section">
                <div className="section-header">
                    <h2>
                        <span className="gradient-text text-4xl md:text-6xl">Enterprise-Grade</span> Capabilities
                    </h2>
                    <p>
                        Comprehensive DevOps solutions tailored for your technology stack
                        and business requirements
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            className="feature-card interactive"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 10px 30px rgba(0, 240, 255, 0.3)"
                            }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <div className="feature-stat">
                                <div className="pulse-dot"></div>
                                <span>{feature.stats}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/*    second terminal */ }
            <section className="terminal-showcase" ref={terminalRef}>

                <div className="terminal-content">
                    <h2>
                        Infrastructure Automation
                        <span className="highlight"> At Scale</span>
                    </h2>
                    <p>
                        Our battle-tested frameworks handle the most demanding workloads with
                        precision and reliability. From startups to Fortune 500 enterprises.
                    </p>

                    <div className="terminal-stats">
                        <div className="stat  hover:scale-90 duration-300 transition-all shadow-2xl shadow-cyan-500">
                            <h3>15,000+</h3>
                            <p>Containers Managed</p>
                        </div>
                        <div className="stat hover:scale-90 duration-300 transition-all shadow-2xl shadow-cyan-500">
                            <h3>99.99%</h3>
                            <p>Uptime SLA</p>
                        </div>
                        <div className="stat hover:scale-90 duration-300 transition-all shadow-2xl shadow-cyan-500">
                            <h3>3.2s</h3>
                            <p>Avg Build Time</p>
                        </div>
                    </div>
                </div>

                <motion.div
                    className="terminal-container"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.8 } }
                    }}
                >
                    <div className="terminal-glass">
                        <div className="terminal-header">
                            <div className="dots">
                                <span className="red"></span>
                                <span className="yellow"></span>
                                <span className="green"></span>
                            </div>
                            <span className="title">terminal — zsh</span>
                        </div>

                        <div className="terminal-body">
                            <TerminalAnimation
                                command={terminalCommands[commandIndex].cmd}
                                output={terminalCommands[commandIndex].output}
                            />
                        </div>
                    </div>

                    <div className="terminal-tabs">
                        {terminalCommands.map((cmd, i) => (
                            <button
                                key={i}
                                className={`tab interactive hover:scale-90 transition-all duration-200 ${i === commandIndex ? 'active' : ''}`}
                                onClick={() => setCommandIndex(i)}
                            >
                                {cmd.title}
                            </button>
                        ))}
                    </div>
                </motion.div>


            </section>

            {/* ============ CTA SECTION ============ */}
            <section className="cta-section">
                <div className="cta-container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>
                            Ready to Transform Your
                            <span className="highlight"> Infrastructure?</span>
                        </h2>
                        <p>
                            Schedule a free 60-minute consultation with our DevOps architects
                            to analyze your current workflow and identify optimization opportunities.
                        </p>
                    </motion.div>

                    <motion.form
                        className="cta-form"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required className="interactive" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email Address" required className="interactive" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder='Enter your message'>

                            </textarea>
                        </div>
                        <button type="submit" className="cta-submit interactive">
                            Request Free Consultation
                            <span className="arrow">→</span>
                        </button>
                    </motion.form>
                </div>
            </section>

            {/* ============ GLOBAL STYLES ============ */}
            <style jsx="true" global="true">{`
        :root {
          --primary: #00f0ff;
          --secondary: #ff2d75;
          --dark: #0a0a14;
          --darker: #05050a;
          --text: #e0e0ff;
          --text-dim: #a0a0b0;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          cursor: none !important;
        }
        
        body {
          background-color: var(--dark);
          color: var(--text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
          line-height: 1.6;
        }
        
        .futuristic-devops-site {
          position: relative;
        }
        

        
        /* ===== HERO SECTION ===== */
        .hero-section {
          height: 100vh;
          min-height: 800px;
          position: relative;
          display: flex;
          align-items: start;
          justify-content: center;
          overflow: hidden;
          padding-top:40px;
        }
        
        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.7;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          padding: 0 5%;
          text-align:center;
        }
        
        .hero-text h1 {
          font-size: 6rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 2rem;
        }
        
        .gradient-text {
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .highlight {
          background: linear-gradient(90deg, var(--primary), #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 700;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto 3rem;
          color: var(--text-dim);
        }
        
        .hero-cta {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-bottom: 4rem;
        }
        
        .cta-primary, .cta-secondary {
          padding: 1.2rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .cta-primary {
          background: linear-gradient(90deg, var(--primary), #0095ff);
          color: var(--darker);
          box-shadow: 0 4px 30px rgba(0, 240, 255, 0.4);
          border: none;
        }
        
        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 40px rgba(0, 240, 255, 0.6);
        }
        
        .cta-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }
        
        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
        }
        
        .play-icon {
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          color: var(--dark);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          padding-left: 2px;
        }
        
        .arrow {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        
        .cta-primary:hover .arrow {
          transform: translateX(5px);
        }
        
        /* Tech marquee */
    
        .tech-marquee {
            position: absolute;
            bottom: 5%;
            width: 100%;
            margin: 0 auto;
            overflow: hidden;
            z-index: 2;
            }

            .marquee-container {
            display: flex;
            width: 100%;
            }

            .marquee-inner {
            display: flex;
            gap: 1rem;
            flex-shrink: 0;
            min-width: 100%;
            animation: scroll 20s linear infinite;
            }

            @keyframes scroll {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
            }

            .tech-pill {
            background: rgba(200, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50px;
            padding: 1rem 1.5rem;
            font-family: 'SF Mono', 'Roboto Mono', monospace;
            font-size: 0.9rem;
            color: var(--text-dim);
            transition: all 0.3s ease;
            flex-shrink: 0;
            white-space: nowrap;
            }

            .tech-pill:hover {
            background: rgba(330, 255, 255, 0.1);
            color: white;
            }

            /* Hide the duplicate items from screen readers */
            .tech-pill[aria-hidden="true"] {
            visibility: visible; /* Keep visible for animation */
            }
        
        /* ===== TERMINAL SHOWCASE ===== */
        .terminal-showcase {
          padding: 10rem 5%;
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1400px;
          margin: 0 auto;
          align-items: center;
        }
        

        .terminal-container {
          position: relative;
        }
        
        .terminal-glass {
          background: rgba(10, 10, 20, 0.5);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow: 0 0 30px rgba(0, 240, 255, 0.1);
          transition: box-shadow 0.3s ease;
        }
        
        .terminal-glass:hover {
          box-shadow: 0 0 50px rgba(0, 240, 255, 0.2);
        }
        
        .terminal-header {
          background: rgba(26, 26, 46, 0.8);
          padding: 0.8rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .terminal-header .dots {
          display: flex;
          gap: 0.5rem;
        }
        
        .terminal-header .dots span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .terminal-header .dots .red { background: #ff5f56; }
        .terminal-header .dots .yellow { background: #ffbd2e; }
        .terminal-header .dots .green { background: #27c93f; }
        
        .terminal-header .title {
          font-family: 'SF Mono', 'Roboto Mono', monospace;
          font-size: 0.9rem;
          color: var(--text-dim);
        }
        
        .terminal-body {
          padding: 1.5rem;
          min-height: 300px;
          font-family: 'SF Mono', 'Roboto Mono', monospace;
          line-height: 1.8;
        }
        
        .terminal-line {
          margin-bottom: 1rem;
        }
        
        .terminal-line .prompt {
          color: var(--primary);
          margin-right: 0.5rem;
        }
        
        .terminal-line .command {
          color: white;
        }
        
        .terminal-line.output {
          color: var(--text-dim);
        }
        
        .cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: var(--primary);
          vertical-align: middle;
          margin-left: 2px;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .terminal-tabs {
          display: flex;
          gap: 2rem;
          margin-top: 1rem;
          justify-content: center;

        }
        
        .terminal-tabs .tab {
          background: rgba(255, 255, 255, 0.05);
          border: none;
          border-radius: 8px;
          padding: 0.8rem 1.5rem;
          font-family: 'SF Mono', 'Roboto Mono', monospace;
          color: var(--text-dim);
          transition: all 0.3s ease;

        }
        
        .terminal-tabs .tab.active {
          background: rgba(0, 240, 255, 0.1);
          color: var(--primary);
          border-bottom: 2px solid var(--primary);
        }
        
        .terminal-content h2 {
          font-size: 3rem;
          margin-bottom: 2rem;
          line-height: 1.2;
        }
        
        .terminal-content p {
          font-size: 1.2rem;
          color: var(--text-dim);
          margin-bottom: 3rem;
        }
        
        .terminal-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 2rem;
        }
        
        .terminal-stats .stat {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
        }
        
        .terminal-stats .stat h3 {
          font-size: 2.5rem;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 0.5rem;
        }
        
        .terminal-stats .stat p {
          font-size: 0.9rem;
          margin: 0;
          color: var(--text-dim);
        }

        .terminal-showcase {
        padding: 10rem 5%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        max-width: 1400px;
        margin: 0 auto;
        align-items: center;
      }

      /* Mobile styles */
      @media (max-width: 768px) {
        .terminal-showcase {
          grid-template-columns: 1fr;
          padding: 5rem 5%;
          gap: 3rem;
        }
      }

      /* Small mobile fixes (below 425px) */
      @media (max-width: 425px) {
        .terminal-showcase {
          padding: 3rem 5%;
          gap: 2rem;
          width: 100%;
          overflow: hidden;
        }

        .terminal-container {
          width: 100%;
          max-width: 100%;
          padding: 0;
        }

        .terminal-glass {
          border-radius: 12px;
        }

        .terminal-header {
          padding: 0.6rem 1rem;
        }

        .terminal-body {
          padding: 1rem;
          min-height: 250px;
        }

        .terminal-tabs {
          flex-wrap: wrap;
          gap: 0.8rem;
          justify-content: center;
        }

        .terminal-tabs .tab {
          padding: 0.6rem 1rem;
          font-size: 0.8rem;
        }

        .terminal-content h2 {
          font-size: 2rem;
          text-align: center;
        }

        .terminal-content p {
          font-size: 1rem;
          text-align: center;
        }

        .terminal-stats {
          grid-template-columns: 1fr;
          gap: 1rem;
        }
      }

        
        /* ===== FEATURES SECTION ===== */
        .features-section {
          padding: 10rem 5%;
          background: linear-gradient(to bottom, var(--darker), rgba(5, 5, 10, 0.9));
          position: relative;
          overflow: hidden;
        }
        
        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 6rem;
        }
        
        .section-header h2 {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;

        }
        
        .section-header p {
          font-size: 1.2rem;
          color: var(--text-dim);
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          padding: 2.5rem 2rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.1s ease;
          position: relative;
          overflow: hidden;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.05);
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 0;
          background: linear-gradient(to bottom, var(--primary), var(--secondary));
          transition: height 1s ease;
        }
        
        .feature-card:hover::before {
          height: 100%;
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .feature-card p {
          color: var(--text-dim);
          margin-bottom: 1.5rem;
        }
        
        .feature-stat {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 500;
        }
        
        .pulse-dot {
          width: 10px;
          height: 10px;
          background-color: var(--primary);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(0.95); opacity: 1; }
        }

        
        /* ===== 3D HOLOGRAPHIC CAROUSEL ===== */
        .holographic-carousel {
        padding: 10rem 5%;
        background: linear-gradient(to bottom, #050510, #0a0a1a);
        position: relative;
        overflow: hidden;
        }

        .holo-platform-3d {
        background: rgba(10, 10, 20, 0.5);
        border-radius: 20px;
        padding: 3rem 2rem;
        position: relative;
        border: 1px solid rgba(0, 240, 255, 0.1);
        box-shadow: 0 0 50px rgba(0, 240, 255, 0.05);
        max-width: 1200px;
        margin: 3rem auto 0;
        perspective: 1000px;
        }

        .holo-grid-lines {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px);
        background-size: 30px 30px;
        border-radius: 20px;
        opacity: 0.3;
        }

        .carousel-container-3d {
        overflow: hidden;
        position: relative;
        padding: 1rem 0;
        }

        .carousel-track-3d {
        display: flex;
        transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        will-change: transform;
        gap:10px;
        }

        .holo-card-3d {
        flex: 0 0 calc(100% / 3);
        padding: 0 1.5rem;
        position: relative;
        transform-style: preserve-3d;
        }

        .holo-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: hsl(var(--hue), 80%, 50%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: bold;
        color: white;
        margin: 0 auto 2rem;
        position: relative;
        box-shadow: 0 0 20px hsl(var(--hue), 80%, 50%);
        transform: translateZ(20px);
        }

        .holo-quote {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
        color: var(--text);
        position: relative;
        z-index: 2;
        transform: translateZ(30px);
        text-align: center;
        }

        .holo-author {
        text-align: center;
        transform: translateZ(20px);
        }

        .holo-author h4 {
        font-size: 1.3rem;
        margin-bottom: 0.3rem;
        color: white;
        }

        .holo-author p {
        color: var(--text-dim);
        font-size: 0.9rem;
        }

        .holo-glow {
        position: absolute;
        top: 0;
        left: 1.5rem;
        right: 1.5rem;
        bottom: 0;
        background: radial-gradient(circle at center, rgba(0, 240, 255, 0.1), transparent 70%);
        border-radius: 15px;
        z-index: 1;
        opacity: 0.7;
        }

        .card-reflection {
        position: absolute;
        bottom: -20px;
        left: 1.5rem;
        right: 1.5rem;
        height: 30px;
        background: linear-gradient(to bottom, rgba(0, 240, 255, 0.2), transparent);
        border-radius: 0 0 15px 15px;
        filter: blur(5px);
        transform: scaleY(0.5) rotateX(60deg);
        transform-origin: top center;
        opacity: 0.5;
        }

        /* 3D Card Effect */
        .holo-card-3d {
        background: rgba(20, 20, 30, 0.7);
        border-radius: 15px;
        padding: 2.5rem;
        border: 1px solid rgba(0, 240, 255, 0.2);
        backdrop-filter: blur(10px);
        transform: perspective(500px) rotateY(10deg);
        transition: all 0.5s ease;
        height: 380px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        }

        .holo-card-3d:nth-child(3n+2) {
        transform: perspective(500px) rotateY(0deg);
        }

        .holo-card-3d:nth-child(3n+3) {
        transform: perspective(500px) rotateY(-10deg);
        }

        .holo-card-3d:hover {
        transform: perspective(500px) rotateY(0deg) scale(1.05) !important;
        box-shadow: 0 20px 50px rgba(0, 240, 255, 0.2);
        }

        /* Responsive */
        @media (max-width: 1024px) {
        .holo-card-3d {
            flex: 0 0 50%;
            height: 400px;
        }
        }

        @media (max-width: 768px) {
        .holo-card-3d {
            flex: 0 0 100%;
            height: auto;
            padding: 2rem;
            transform: perspective(500px) rotateY(0deg) !important;
        }
        
        .holo-platform-3d {
            padding: 2rem 1rem;
        }
        }
        
       
        /* ===== CTA SECTION ===== */
        .cta-section {
          padding: 10rem 5%;
          background: linear-gradient(to bottom, var(--darker), #000);
        }
        
        .cta-container {
          max-width: 1200px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          padding: 6rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        }
        
        .cta-content h2 {
          font-size: 2.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        
        .cta-content p {
          font-size: 1.2rem;
          color: var(--text-dim);
          margin-bottom: 2rem;
        }
        
        .cta-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-group {
          position: relative;
        }
        
        .cta-form input, 
        .cta-form textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1.2rem 1.5rem;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .cta-form input:focus, 
        .cta-form textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(0, 240, 255, 0.2);
        }
        
        .cta-submit {
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          color: var(--darker);
          border: none;
          padding: 1.2rem 2.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        
        .cta-submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.4);
        }
        
        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .terminal-showcase {
            grid-template-columns: 1fr;
            gap: 6rem;
          }
          
          .cta-container {
            grid-template-columns: 1fr;
            padding: 4rem;
          }

          
        }
        
        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 3.5rem;
          }
          
          .hero-cta {
            flex-direction: column;
            align-items: center;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          .cta-content h2 {
            font-size: 2rem;
            line-height: 1.2;
            margin-bottom: 1.5rem;
          }
          .cta-content p {
            font-size: 1rem;
            line-height: 1.2;
            margin-bottom: 0.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-text h1 {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .terminal-content h2, .section-header h2 {
            font-size: 2.2rem;
          }
          
          .cta-container {
            padding: 2rem;
          }
        }
            `}
            </style>
        </div>
    );
};

// Terminal animation component (same as before)
const TerminalAnimation = ({ command, output }) => {
    const [typedCommand, setTypedCommand] = useState('');
    const [displayedOutput, setDisplayedOutput] = useState([]);

    useEffect(() => {
        // Reset on command change
        setTypedCommand('');
        setDisplayedOutput([]);

        // Type command
        let i = 0;
        const cmdInterval = setInterval(() => {
            if (i < command.length) {
                setTypedCommand(command.substring(0, i + 1));
                i++;
            } else {
                clearInterval(cmdInterval);

                // Show output lines one by one
                let j = 0;
                const outputInterval = setInterval(() => {
                    if (j < output.length) {
                        setDisplayedOutput(prev => [...prev, output[j]]);
                        j++;
                    } else {
                        clearInterval(outputInterval);
                    }
                }, 500);
            }
        }, 50 + Math.random() * 30);

        return () => {
            clearInterval(cmdInterval);
        };
    }, [command, output]);

    return (
        <>
            <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command">{typedCommand}</span>
                {typedCommand.length < command.length && (
                    <span className="cursor"></span>
                )}
            </div>

            {displayedOutput.map((line, i) => (
                <div key={i} className="terminal-line output">
                    <span>{line}</span>
                </div>
            ))}
        </>
    );
};

export default FuturisticDevOpsLanding;