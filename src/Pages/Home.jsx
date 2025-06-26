import React from 'react';
import { Link } from 'react-router-dom';

const dummyNews = [
  {
    id: 1,
    title: 'Breaking: Major Storm Expected Tomorrow',
    summary: 'Meteorologists warn of severe storms in coastal areas with heavy rain and winds...',
    image: 'https://i.ibb.co/8x4fHbn/storm-news.jpg',
    category: 'Weather',
  },
  {
    id: 2,
    title: 'Elections 2025: Key Candidates Announced',
    summary: 'The election commission has released the official list of candidates for the upcoming general elections...',
    image: 'https://i.ibb.co/xhf5rRW/election.jpg',
    category: 'Politics',
  },
  {
    id: 3,
    title: 'Technology: New AI Model Beats Expectations',
    summary: 'A revolutionary AI model has outperformed current systems, says research published today...',
    image: 'https://i.ibb.co/PMcpYQ1/ai-news.jpg',
    category: 'Technology',
  },
];

const Home = () => {
  return (
    <div className="bg-base-100 min-h-screen p-5 md:p-10 space-y-10">
      
      {/* Banner / Headline */}
      <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://i.ibb.co/w6ZcBL7/news-banner.jpg"
          alt="Top Headline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center px-6">
          <div className="text-white max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold">Stay Informed with Dragon News</h1>
            <p className="mt-2 text-gray-300">
              Your daily source of reliable news across politics, weather, tech, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Top Categories</h2>
        <div className="flex gap-4 flex-wrap">
          {['Politics', 'Weather', 'Technology', 'Health', 'Business', 'Sports'].map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat.toLowerCase()}`}
              className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium px-4 py-2 rounded-full transition"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Latest News */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {dummyNews.map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={news.image} alt={news.title} className="w-full h-40 object-cover" />
              <div className="p-4 space-y-2">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-600">
                  {news.category}
                </span>
                <h3 className="text-lg font-bold text-gray-800">{news.title}</h3>
                <p className="text-sm text-gray-600">{news.summary}</p>
                <Link
                  to={`/news/${news.id}`}
                  className="inline-block mt-2 text-green-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm pt-10">
        &copy; {new Date().getFullYear()} Dragon News. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
