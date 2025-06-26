import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const categories = ['Politics', 'Technology', 'Sports', 'Business', 'World', 'Health'];

  return (
    <div className="bg-base-100 min-h-screen p-5 md:p-10 space-y-16">

      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
      >
        <img
          src="https://i.ibb.co/w6ZcBL7/news-banner.jpg"
          alt="Top Headline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center px-6">
          <div className="text-white max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold">Stay Informed with Dragon News</h1>
            <p className="mt-2 text-gray-300">
              Your daily source of reliable news across politics, tech, health, and more.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Categories */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Top Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to={`/category/${cat.toLowerCase()}`}
                className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium px-4 py-2 rounded-full transition"
              >
                {cat}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Static News Sections */}
      <NewsSection
        title="Latest News"
        delay={0.4}
        newsItems={[
          {
            title: 'Global Market Shakes as Oil Prices Surge',
            image: 'https://i.ibb.co/qJ7D2vX/business.jpg',
            summary: 'Oil prices climbed 8% this week, causing ripples in stock markets worldwide...',
            category: 'Business',
          },
          {
            title: 'AI Revolutionizing Healthcare Diagnostics',
            image: 'https://i.ibb.co/PMcpYQ1/ai-news.jpg',
            summary: 'AI-driven tools are speeding up diagnoses, especially in cancer detection...',
            category: 'Health',
          },
          {
            title: 'Parliament Passes New Data Privacy Law',
            image: 'https://i.ibb.co/xhf5rRW/election.jpg',
            summary: 'The bill sets stricter rules for tech companies on user data handling...',
            category: 'Politics',
          },
        ]}
      />

      <NewsSection
        title="Editorial Picks"
        delay={0.5}
        newsItems={[
          {
            title: 'Climate Crisis: What’s the World Doing?',
            image: 'https://i.ibb.co/8x4fHbn/storm-news.jpg',
            summary: 'Despite pledges, global emissions continue to rise. Experts weigh in...',
            category: 'Environment',
          },
          {
            title: 'Inside Tech Giants: A Culture of Pressure?',
            image: 'https://i.ibb.co/FVsk7yF/workplace.jpg',
            summary: 'Former employees reveal what it’s like working under tight deadlines...',
            category: 'Technology',
          },
        ]}
      />

      <NewsSection
        title="Trending Now"
        delay={0.6}
        newsItems={[
          {
            title: 'Champions League Final: What to Expect',
            image: 'https://i.ibb.co/gVFvdLw/sports.jpg',
            summary: 'With millions watching, two European giants face off in Istanbul...',
            category: 'Sports',
          },
          {
            title: 'Food Prices Hit Record Highs Globally',
            image: 'https://i.ibb.co/GHbKjcW/food.jpg',
            summary: 'Inflation, climate, and conflict all play a part in food shortages...',
            category: 'World',
          },
          {
            title: 'Top 10 Travel Destinations for 2025',
            image: 'https://i.ibb.co/w0P5LGJ/travel.jpg',
            summary: 'From Bali to Iceland, here’s where people are planning their next escape...',
            category: 'Lifestyle',
          },
        ]}
      />

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm pt-10">
        &copy; {new Date().getFullYear()} Dragon News — All rights reserved.
      </footer>
    </div>
  );
};

// News Section Wrapper
const NewsSection = ({ title, newsItems, delay }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
  >
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
    <div className={`grid ${newsItems.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
      {newsItems.map((news, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <NewsCard {...news} />
        </motion.div>
      ))}
    </div>
  </motion.section>
);

// Reusable Card
const NewsCard = ({ title, image, summary, category }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-44 object-cover" />
    <div className="p-4 space-y-2">
      <span className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-600">{category}</span>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{summary}</p>
      <Link to="/" className="inline-block mt-2 text-green-600 font-medium hover:underline">
        Read More →
      </Link>
    </div>
  </div>
);

export default Home;
