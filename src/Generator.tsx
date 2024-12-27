import React, { useState } from 'react';
import Particels from './Particels';
import Navbar from './Navbar';

const Generator: React.FC = () => {
  const subjects = ['Mathematics', 'Physics', 'Chemistry'];
  const subSubjects = {
    Mathematics: {
      Coordinate: ['Straight Lines', 'Circles', 'Parabola', 'Ellipse', 'Hyperbola'],
      Algebra: ['Quadratic Equations', 'Progressions', 'Binomial Theorem', 'Complex Numbers'],
      Trigonometry: ['Trigonometric Ratios', 'Inverse Trigonometry', 'Properties of Triangles']
    },
    Physics: {
      Mechanics: ['Kinematics', 'Laws of Motion', 'Work, Power, Energy', 'Rotational Motion'],
      Thermodynamics: ['Heat Transfer', 'Thermal Expansion', 'Thermodynamic Processes'],
      Electrodynamics: ['Current Electricity', 'Electrostatics', 'Magnetism']
    },
    Chemistry: {
      Organic: ['Hydrocarbons', 'Alcohols', 'Aldehydes', 'Carboxylic Acids'],
      Inorganic: ['Periodic Table', 'Chemical Bonding', 'Coordination Compounds'],
      Physical: ['Mole Concept', 'Thermochemistry', 'Electrochemistry']
    }
  };

  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedSubSubjects, setSelectedSubSubjects] = useState<string[]>([]);
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
  const [numQuestions, setNumQuestions] = useState(10);

  const handleSubSubjectSelection = (subSubject: string) => {
    setSelectedSubSubjects((prev) =>
      prev.includes(subSubject)
        ? prev.filter((ss) => ss !== subSubject)
        : [...prev, subSubject]
    );
    setSelectedChapters([]); // Reset chapters on sub-subject change
  };

  const handleChapterSelection = (chapter: string) => {
    setSelectedChapters((prev) =>
      prev.includes(chapter)
        ? prev.filter((ch) => ch !== chapter)
        : [...prev, chapter]
    );
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
              className="w-full p-3 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
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
                    setSelectedSubSubjects([]);
                    setSelectedChapters([]);
                  }}
                  className={`p-3 rounded-lg font-semibold transition ${
        selectedSubject === subject
          ? 'bg-white text-black'
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>

          {/* Sub-Subject Selection */}
          {selectedSubject && (
            <div className="mb-8 w-full">
              <label className="block text-gray-300 mb-2">
                Select Sub-Subjects for {selectedSubject}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.keys(subSubjects[selectedSubject]).map((subSubject) => (
                  <label key={subSubject} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={selectedSubSubjects.includes(subSubject)}
                      onChange={() => handleSubSubjectSelection(subSubject)}
                      className="form-checkbox h-5 w-5 text-white border-gray-700 rounded"
                    />
                    <span className="text-gray-300">{subSubject}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Chapters Selection */}
          {selectedSubSubjects.length > 0 && (
            <div className="mb-8 w-full">
              <label className="block text-gray-300 mb-2">Select Chapters</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedSubSubjects.flatMap((subSubject) =>
                  subSubjects[selectedSubject][subSubject].map((chapter) => (
                    <label key={chapter} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedChapters.includes(chapter)}
                        onChange={() => handleChapterSelection(chapter)}
                        className="form-checkbox h-5 w-5 text-white border-gray-700 rounded"
                      />
                      <span className="text-gray-300">{chapter}</span>
                    </label>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Generate Button */}
          <button
            className="mt-4 w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
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
