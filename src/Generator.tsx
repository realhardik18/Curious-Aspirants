import React, { useState } from 'react';
import Particels from './Particels';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const Generator: React.FC = () => {
  const subjects = ['Mathematics', 'Physics', 'Chemistry'];
  const subSubjects = {
    Mathematics: {
      Coordinate: ['Straight Lines', 'Circles', 'Parabola', 'Ellipse', 'Hyperbola'],
      Algebra: ['Quadratic Equations', 'Progressions', 'Binomial Theorem', 'Complex Numbers'],
      Trigonometry: ['Trigonometric Ratios', 'Inverse Trigonometry', 'Properties of Triangles'],
    },
    Physics: {
      Mechanics: ['Kinematics', 'Laws of Motion', 'Work, Power, Energy', 'Rotational Motion'],
      Thermodynamics: ['Heat Transfer', 'Thermal Expansion', 'Thermodynamic Processes'],
      Electrodynamics: ['Current Electricity', 'Electrostatics', 'Magnetism'],
    },
    Chemistry: {
      Organic: ['Hydrocarbons', 'Alcohols', 'Aldehydes', 'Carboxylic Acids'],
      Inorganic: ['Periodic Table', 'Chemical Bonding', 'Coordination Compounds'],
      Physical: ['Mole Concept', 'Thermochemistry', 'Electrochemistry'],
    },
  };

  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [expandedSubSubjects, setExpandedSubSubjects] = useState<string[]>([]);
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
  const [numQuestions, setNumQuestions] = useState(10);

  const toggleSubSubject = (subSubject: string) => {
    setExpandedSubSubjects((prev) =>
      prev.includes(subSubject) ? prev.filter((ss) => ss !== subSubject) : [...prev, subSubject]
    );
  };

  const handleChapterSelection = (chapter: string) => {
    setSelectedChapters((prev) =>
      prev.includes(chapter) ? prev.filter((ch) => ch !== chapter) : [...prev, chapter]
    );
  };

  const countSelectedChapters = selectedChapters.length;

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      <Particels />
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Fullscreen Card */}
        <div className="bg-black bg-opacity-70 p-8 rounded-lg backdrop-blur-sm w-full max-w-4xl flex flex-col items-center">
          <h3 className="text-3xl font-bold mb-6 text-white text-center">Generate Your Daily Practice Paper</h3>

          {/* Number of Questions Selection */}
          <div className="mb-8 w-full">
            <label className="block text-gray-300 mb-2">Number of Questions</label>
            <select
              value={numQuestions}
              onChange={(e) => setNumQuestions(Number(e.target.value))}
              className="w-full p-3 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-0"
            >
              {[10, 15, 20, 25, 30].map((num) => (
                <option key={num} value={num}>
                  {num} Questions
                </option>
              ))}
            </select>
          </div>

          {/* Subject Selection */}
          <div className="mb-8 w-full">
            <label className="block text-gray-300 mb-2">Select a Subject</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => {
                    setSelectedSubject(subject);
                    setExpandedSubSubjects([]);
                    setSelectedChapters([]);
                  }}
                  className={`p-3 rounded-lg font-semibold transition-all ease-in-out duration-300 ${
                    selectedSubject === subject
                      ? 'bg-white text-black transform scale-105'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>

          {/* Sub-Subject and Chapter Selection */}
          {selectedSubject && (
            <div className="mb-8 w-full">
              <label className="block text-gray-300 mb-2">
                Select Chapters for {selectedSubject} ({countSelectedChapters} selected)
              </label>
              <div className="space-y-4">
                {Object.keys(subSubjects[selectedSubject]).map((subSubject) => (
                  <div key={subSubject} className="border border-gray-700 rounded-lg p-4 bg-gray-800">
                    <button
                      onClick={() => toggleSubSubject(subSubject)}
                      className="w-full text-left font-semibold text-white focus:outline-none flex justify-between items-center"
                    >
                      {subSubject}
                      <span>{expandedSubSubjects.includes(subSubject) ? '−' : '+'}</span>
                    </button>
                    <AnimatePresence>
                      {expandedSubSubjects.includes(subSubject) && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={dropdownVariants}
                          className="mt-4 space-y-2 overflow-hidden"
                        >
                          {subSubjects[selectedSubject][subSubject].map((chapter) => (
                            <label key={chapter} className="flex items-center space-x-3">
                              <input
                                type="checkbox"
                                checked={selectedChapters.includes(chapter)}
                                onChange={() => handleChapterSelection(chapter)}
                                className="form-checkbox h-6 w-6 text-gray-800 bg-white rounded-md shadow focus:ring-0"
                              />
                              <span className="text-gray-300">{chapter}</span>
                            </label>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Generate Button */}
          <button
            className="mt-4 w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
          >
            Generate DPP
          </button>
        </div>
      </main>
      <footer className="py-4 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-50 backdrop-blur-sm border-t border-white border-opacity-10 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          &copy; 2023 DPP Maker by Curious Aspirants. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Generator;
