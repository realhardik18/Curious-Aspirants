import React from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from "tsparticles-slim"
import type { Engine } from 'tsparticles-engine'

const Home: React.FC = () => {
  const particlesInit = React.useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-50 backdrop-blur-sm border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">DPP Maker</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#features" className="text-white hover:text-gray-300 transition duration-300">Features</a></li>
              <li><a href="#about" className="text-white hover:text-gray-300 transition duration-300">About</a></li>
              <li><a href="#contact" className="text-white hover:text-gray-300 transition duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Hero Text Section */}
        <div className="text-center mt-12 mb-6 z-20 relative">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">Empower Your JEE & NEET Journey</h2>
          <p className="text-lg sm:text-xl text-gray-300">Design personalized Daily Practice Papers to tackle your weakest areas and ace your exams.</p>
        </div>
        <div className="text-center mb-12">
          <a
            href="#get-started"
            className="inline-block bg-white text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          >
            Generate PDF Now
          </a>
        </div>
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black bg-opacity-70 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">Customizable DPPs</h3>
            <p className="text-gray-300">
              Tailor your practice with personalized Daily Practice Papers. Choose from a vast collection of previous year questions, focusing on specific topics or exam patterns to maximize your preparation efficiency.
            </p>
          </div>
          <div className="bg-black bg-opacity-70 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">Printable PDFs</h3>
            <p className="text-gray-300">
              Generate high-quality, printable PDF documents of your custom DPPs. Perfect for offline study sessions or for those who prefer working with physical papers, enhancing your learning experience.
            </p>
          </div>
          <div className="bg-black bg-opacity-70 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-white">100% Free</h3>
            <p className="text-gray-300">
              Access all features completely free. Create unlimited DPPs, download PDFs, and boost your exam preparation without any cost. Our platform supports all students equally in their journey to success.
            </p>
          </div>
        </div>
      </main>
      <footer className="py-4 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-50 backdrop-blur-sm border-t border-white border-opacity-10 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          &copy; 2023 DPP Maker by Curious Aspirants. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Home
