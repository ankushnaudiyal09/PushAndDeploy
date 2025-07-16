import React, { useState , useRef , useEffect} from 'react';
import './App.css'
import Home from './pages/Home'
import Navbar from "./component/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import MainLayout from './pages/MainLayout';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import Services from './pages/Services';
import { Analytics } from '@vercel/analytics/react';


function App() {

  // ==================== ENHANCED PARTICLE CURSOR ====================
  
  const CyberMouse = () => {
      const cursorRef = useRef();
      const trailRef = useRef();
      const [positions, setPositions] = useState([]);
      const [isHovering, setIsHovering] = useState(false);
      const maxPositions = 15; // Number of trail points to remember
  
      useEffect(() => {
          const handleMouseMove = (e) => {
              // Update cursor position
              cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  
              // Update trail positions
              setPositions(prev => {
                  const newPositions = [{ x: e.clientX, y: e.clientY }, ...prev];
                  return newPositions.slice(0, maxPositions);
              });
          };
  
          const handleHover = (e) => {
              const interactive = e.target.closest('button, a, input, .interactive');
              setIsHovering(!!interactive);
          };
  
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseover', handleHover);
          document.addEventListener('mouseout', handleHover);
  
          return () => {
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseover', handleHover);
              document.removeEventListener('mouseout', handleHover);
          };
      }, []);
  
      // Draw connecting lines between points
      useEffect(() => {
          const canvas = trailRef.current;
          const ctx = canvas.getContext('2d');
  
          // Set canvas size
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
  
          // Clear canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);
  
          // Draw connecting lines
          if (positions.length > 1) {
              ctx.beginPath();
              ctx.moveTo(positions[0].x, positions[0].y);
  
              for (let i = 1; i < positions.length; i++) {
                  const alpha = 1 - (i / positions.length); // Fade out effect
                  ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
                  ctx.lineWidth = isHovering ? 3 : 2;
                  ctx.lineTo(positions[i].x, positions[i].y);
                  ctx.stroke();
                  ctx.beginPath();
                  ctx.moveTo(positions[i].x, positions[i].y);
              }
          }
      }, [positions, isHovering]);
  
      return (
          <>
              {/* Canvas for the trail */}
              <canvas
                  ref={trailRef}
                  className="cyber-trail"
                  style={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      pointerEvents: 'none',
                      zIndex: 9998
                  }}
              />
  
              {/* Main cursor */}
              <div
                  ref={cursorRef}
                  className="cyber-cursor"
                  style={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      width: isHovering ? '20px' : '15px',
                      height: isHovering ? '20px' : '15px',
                      borderRadius: '50%',
                      background: isHovering ? '#ff2d75' : '#00f0ff',
                      boxShadow: `0 0 ${isHovering ? '15px' : '10px'} ${isHovering ? '#ff2d75' : '#00f0ff'}`,
                      pointerEvents: 'none',
                      zIndex: 9999,
                      transform: 'translate(-50%, -50%)',
                      transition: 'all 0.2s ease',
                      mixBlendMode: 'screen'
                  }}
              />
  
              {/* Style for hiding default cursor */}
              <style jsx="true" global="true">{`
          * {
            cursor: none !important;
          }
        `}</style>
          </>
      );
  };

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<>  <CyberMouse   />  <Analytics /> <MainLayout  /></>,
      children:[
        {
          path:"/",
          element:<Home  />
        },
        {
          path:"/service",
          element:<Services />

        },
        {
          path:"/about",
          element:<About  />
        },
        {
          path:"/contact",
          element:<Contact  />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/SignUp",
          element:<Signup  />
        }
      ]
    }
  ])
  


  const [login , setLogin] = useState(true);

  return (
    <RouterProvider  router={appRouter} />
  )
}

export default App
