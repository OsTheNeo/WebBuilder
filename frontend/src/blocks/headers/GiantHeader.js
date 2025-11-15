import React from 'react';

const GiantHeader = ({ data = {} }) => {
  const { title = 'Giant Header', subtitle = 'The ultimate header experience' } = data;

  return (
    <div className="w-full h-96 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="text-center text-white max-w-5xl relative z-10">
        <h1 className="text-7xl font-bold mb-8">{title}</h1>
        <p className="text-3xl text-blue-200 mb-10">{subtitle}</p>
        <div className="flex gap-6 justify-center">
          <button className="px-10 py-5 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition shadow-xl">
            Get Started Now
          </button>
          <button className="px-10 py-5 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiantHeader;
