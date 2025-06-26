import React from 'react';
import { 
  FaNewspaper, 
  FaGlobe, 
  FaBolt, 
  FaShieldAlt, 
  FaMobileAlt, 
  FaUsers, 
  FaSyncAlt, 
  FaSearch 
} from 'react-icons/fa';

const features = [
  {
    icon: <FaNewspaper size={30} className="text-green-600" />,
    title: 'Trusted Journalism',
    description: 'Accurate and unbiased news delivered daily with integrity and professionalism.',
  },
  {
    icon: <FaGlobe size={30} className="text-blue-600" />,
    title: 'Global Coverage',
    description: 'Stay updated with breaking news and stories from around the world.',
  },
  {
    icon: <FaBolt size={30} className="text-yellow-500" />,
    title: 'Real-Time Updates',
    description: 'Get instant alerts on important events and developments as they happen.',
  },
  {
    icon: <FaShieldAlt size={30} className="text-red-600" />,
    title: 'Privacy & Security',
    description: 'Your data and privacy are our top priority — read news safely and securely.',
  },
  {
    icon: <FaMobileAlt size={30} className="text-purple-600" />,
    title: 'Mobile Friendly',
    description: 'Access news seamlessly on any device, anytime, anywhere.',
  },
  {
    icon: <FaUsers size={30} className="text-pink-600" />,
    title: 'Community Driven',
    description: 'Engage with a vibrant community of readers and share your views.',
  },
  {
    icon: <FaSyncAlt size={30} className="text-teal-600" />,
    title: 'Constantly Updated',
    description: 'Our team works 24/7 to bring you the latest and most relevant stories.',
  },
  {
    icon: <FaSearch size={30} className="text-orange-600" />,
    title: 'Easy Search',
    description: 'Find news articles quickly with our powerful search and filter tools.',
  },
];

const Feature = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 bg-base-100 rounded-lg shadow-md my-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Why Choose Dragon News?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map(({ icon, title, description }, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
