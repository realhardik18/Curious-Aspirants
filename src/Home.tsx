import React from 'react'
import Navbar from './Navbar'
import Particels from './Particels';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      <Particels />
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Hero Text Section */}
        <div className="text-center mt-12 mb-6 z-20 relative">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">Empower Your JEE & NEET Journey</h2>
          <p className="text-lg sm:text-xl text-gray-300">Design personalized Daily Practice Papers to tackle your weakest areas and ace your exams.</p>
        </div>
        <div className="text-center mb-12">
          <a
            href="/generate"
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
      <Footer/>
    </div>
  )
}

export default Home
