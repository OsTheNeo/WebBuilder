import React from 'react';

const XLGallery = ({ data = {} }) => {
  const {
    title = 'Visual Collection',
    subtitle = 'Stunning imagery from around the world',
    description = 'Browse through our curated collection of breathtaking photographs',
    images = [
      { title: 'Tropical Paradise', color: 'bg-gradient-to-br from-teal-400 to-blue-500', icon: '🏝️', description: 'Crystal beaches', tags: ['Beach', 'Tropical'] },
      { title: 'Urban Nights', color: 'bg-gradient-to-br from-indigo-500 to-purple-600', icon: '🌃', description: 'City lights', tags: ['City', 'Night'] },
      { title: 'Wild Nature', color: 'bg-gradient-to-br from-green-500 to-emerald-600', icon: '🦁', description: 'Wildlife safari', tags: ['Nature', 'Wildlife'] },
      { title: 'Winter Wonder', color: 'bg-gradient-to-br from-blue-300 to-cyan-500', icon: '❄️', description: 'Snowy landscapes', tags: ['Winter', 'Snow'] },
      { title: 'Ancient Culture', color: 'bg-gradient-to-br from-amber-400 to-orange-600', icon: '🏛️', description: 'Historic sites', tags: ['History', 'Culture'] },
      { title: 'Space & Stars', color: 'bg-gradient-to-br from-purple-600 to-indigo-900', icon: '🌌', description: 'Night sky', tags: ['Space', 'Stars'] }
    ]
  } = data;

  return (
    <div className="w-full h-80 bg-gradient-to-br from-pink-500 via-pink-600 to-purple-700 flex items-center justify-center px-8 py-10">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-white mb-3">{title}</h2>
          <p className="text-2xl text-pink-100 mb-2">{subtitle}</p>
          <p className="text-lg text-pink-200 max-w-3xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative">
              <div className={`${image.color} rounded-2xl h-40 flex flex-col items-center justify-center text-white shadow-2xl group-hover:scale-105 transition-all cursor-pointer p-6 border-2 border-white/20`}>
                <span className="text-6xl mb-4 group-hover:scale-110 transition-transform">{image.icon}</span>
                <span className="font-bold text-xl mb-2">{image.title}</span>
                <span className="text-sm opacity-90 mb-3">{image.description}</span>
                <div className="flex gap-2">
                  {image.tags.map((tag, idx) => (
                    <span key={idx} className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XLGallery;
