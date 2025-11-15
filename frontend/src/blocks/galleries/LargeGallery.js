import React from 'react';

const LargeGallery = ({ data = {} }) => {
  const {
    title = 'Photo Gallery',
    subtitle = 'Beautiful moments captured',
    images = [
      { title: 'Sunset', color: 'bg-gradient-to-br from-orange-400 to-pink-500', icon: '🌅', description: 'Beautiful sunset views' },
      { title: 'Forest', color: 'bg-gradient-to-br from-green-400 to-teal-500', icon: '🌲', description: 'Deep forest trails' },
      { title: 'Ocean', color: 'bg-gradient-to-br from-blue-400 to-cyan-500', icon: '🌊', description: 'Crystal clear waters' },
      { title: 'Mountains', color: 'bg-gradient-to-br from-gray-400 to-slate-600', icon: '⛰️', description: 'Majestic peaks' },
      { title: 'Desert', color: 'bg-gradient-to-br from-yellow-400 to-orange-500', icon: '🏜️', description: 'Vast sand dunes' },
      { title: 'Aurora', color: 'bg-gradient-to-br from-purple-400 to-pink-500', icon: '✨', description: 'Northern lights' }
    ]
  } = data;

  return (
    <div className="w-full h-64 bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center px-8 py-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
          <p className="text-xl text-pink-100">{subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className={`${image.color} rounded-2xl h-32 flex flex-col items-center justify-center text-white shadow-2xl hover:scale-105 transition-all cursor-pointer p-4`}>
              <span className="text-5xl mb-3">{image.icon}</span>
              <span className="font-bold text-lg mb-1">{image.title}</span>
              <span className="text-sm opacity-90">{image.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LargeGallery;
