import React from 'react';

const CompactTestimonial = ({ data = {} }) => {
  const {
    quote = 'This product changed how we work!',
    author = 'Sarah Johnson',
    role = 'CEO, TechCorp'
  } = data;

  return (
    <div className="w-full h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center px-8">
      <div className="max-w-3xl text-center">
        <p className="text-lg font-semibold text-yellow-900 mb-2 italic">"{quote}"</p>
        <div className="text-yellow-800">
          <span className="font-bold">{author}</span> - <span>{role}</span>
        </div>
      </div>
    </div>
  );
};

export default CompactTestimonial;
