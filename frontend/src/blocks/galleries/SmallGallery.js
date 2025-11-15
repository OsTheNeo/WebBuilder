import React from 'react';

const SmallGallery = ({ data = {} }) => {
  const {
    title = 'Gallery',
    images = [
      { title: 'Image 1', color: 'bg-pink-300' },
      { title: 'Image 2', color: 'bg-pink-400' },
      { title: 'Image 3', color: 'bg-pink-500' }
    ]
  } = data;

  return (
    <div className="w-full h-32 bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center px-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-3">{title}</h2>
        <div className="grid grid-cols-3 gap-3">
          {images.map((image, index) => (
            <div key={index} className={`${image.color} rounded-lg h-16 flex items-center justify-center text-white font-semibold shadow-lg hover:scale-105 transition-transform cursor-pointer`}>
              {image.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallGallery;
