import React from 'react';

const MediumGallery = ({ data = {} }) => {
  const {
    title = 'Image Gallery',
    subtitle = 'Explore our collection',
    images = [
      { title: 'Nature', color: 'bg-pink-400', icon: '🌲' },
      { title: 'City', color: 'bg-pink-500', icon: '🏙️' },
      { title: 'Beach', color: 'bg-pink-600', icon: '🏖️' },
      { title: 'Mountains', color: 'bg-pink-700', icon: '⛰️' }
    ]
  } = data;

  return (
    <div className="w-full h-48 bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center px-8 py-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-1">{title}</h2>
          <p className="text-pink-100">{subtitle}</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className={`${image.color} rounded-xl h-24 flex flex-col items-center justify-center text-white shadow-xl hover:scale-105 transition-all cursor-pointer`}>
              <span className="text-3xl mb-2">{image.icon}</span>
              <span className="font-bold">{image.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediumGallery;
