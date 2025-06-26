import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 px-6 py-12 md:px-20 space-y-16">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">About Dragon News</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Dragon News is your reliable source for up-to-date, accurate, and engaging news from
          around the globe. We deliver quality journalism with integrity, backed by modern
          technology and a passion for storytelling.
        </p>
      </motion.div>

      {/* Mission + Vision Section */}
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">🎯 Our Mission</h2>
          <p className="text-gray-600">
            To empower people with trusted information, ensure journalistic transparency, and deliver
            news that matters — when it matters. We believe in facts, clarity, and unbiased reporting.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">🚀 Our Vision</h2>
          <p className="text-gray-600">
            To become a global leader in digital journalism through innovation, inclusivity, and the
            highest ethical standards — creating a better-informed society.
          </p>
        </motion.div>
      </div>

      {/* Technologies Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-50 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4 text-blue-800">🔧 Built With</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 font-medium">
          <li>⚛️ React</li>
          <li>🎨 Tailwind CSS</li>
          <li>🔥 Firebase</li>
          <li>🧭 React Router</li>
          <li>🚀 Vite</li>
          <li>📱 Responsive Design</li>
        </ul>
      </motion.div>

      {/* Team (Optional Static) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">👨‍💻 Developer</h2>
        <p className="text-gray-600">
          This site is designed and developed by <span className="font-semibold text-green-600">Md. Royel Ali</span>, a passionate Full Stack Web Developer focused on building elegant and performant user experiences.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
