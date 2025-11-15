import React from 'react';

const XXLGallery = ({ data = {} }) => {
  const {
    title = 'Premium Gallery Collection',
    subtitle = 'Immerse yourself in visual excellence',
    description = 'A carefully curated selection of the world\'s most stunning photography and imagery',
    images = [
      {
        title: 'Tropical Paradise',
        color: 'bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600',
        icon: '🏝️',
        description: 'Pristine beaches with crystal waters',
        tags: ['Beach', 'Tropical', 'Ocean'],
        photographer: 'John Doe'
      },
      {
        title: 'Mountain Majesty',
        color: 'bg-gradient-to-br from-slate-500 via-gray-600 to-stone-700',
        icon: '⛰️',
        description: 'Towering peaks touching clouds',
        tags: ['Mountains', 'Nature', 'Adventure'],
        photographer: 'Jane Smith'
      },
      {
        title: 'Urban Pulse',
        color: 'bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-700',
        icon: '🌃',
        description: 'Vibrant city life at night',
        tags: ['City', 'Night', 'Urban'],
        photographer: 'Mike Johnson'
      },
      {
        title: 'Forest Dreams',
        color: 'bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700',
        icon: '🌲',
        description: 'Enchanted woodland paths',
        tags: ['Forest', 'Nature', 'Trees'],
        photographer: 'Sarah Lee'
      },
      {
        title: 'Desert Solitude',
        color: 'bg-gradient-to-br from-yellow-500 via-orange-600 to-red-700',
        icon: '🏜️',
        description: 'Endless golden sand dunes',
        tags: ['Desert', 'Sand', 'Adventure'],
        photographer: 'Alex Chen'
      },
      {
        title: 'Arctic Wonder',
        color: 'bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-500',
        icon: '❄️',
        description: 'Frozen landscapes and ice',
        tags: ['Arctic', 'Ice', 'Winter'],
        photographer: 'Emma Wilson'
      },
      {
        title: 'Cosmic Beauty',
        color: 'bg-gradient-to-br from-purple-600 via-indigo-700 to-black',
        icon: '🌌',
        description: 'Galaxies and celestial wonders',
        tags: ['Space', 'Stars', 'Galaxy'],
        photographer: 'David Park'
      },
      {
        title: 'Wildlife Kingdom',
        color: 'bg-gradient-to-br from-amber-500 via-orange-600 to-brown-700',
        icon: '🦁',
        description: 'Majestic creatures in nature',
        tags: ['Wildlife', 'Animals', 'Safari'],
        photographer: 'Lisa Martinez'
      }
    ]
  } = data;

  return (
    <div className="w-full h-96 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-800 flex items-center justify-center px-8 py-12">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-100">
            {title}
          </h2>
          <p className="text-2xl text-pink-100 font-semibold mb-3">{subtitle}</p>
          <p className="text-xl text-pink-200 max-w-4xl mx-auto leading-relaxed">{description}</p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {images.map((image, index) => (
            <div key={index} className="group relative">
              <div className={`${image.color} rounded-2xl h-48 flex flex-col items-center justify-center text-white shadow-2xl group-hover:scale-105 transition-all cursor-pointer p-5 border-2 border-white/30 overflow-hidden relative`}>
                {/* Background overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-5xl mb-3 group-hover:scale-110 transition-transform block">{image.icon}</span>
                  <span className="font-bold text-lg mb-2 block text-center">{image.title}</span>
                  <span className="text-xs opacity-90 mb-3 block text-center leading-relaxed">{image.description}</span>

                  {/* Tags */}
                  <div className="flex gap-1 mb-2 justify-center flex-wrap">
                    {image.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white/25 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Photographer */}
                  <div className="text-xs opacity-75 text-center">
                    📸 {image.photographer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XXLGallery;
