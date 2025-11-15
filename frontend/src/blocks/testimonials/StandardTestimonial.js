import React from 'react';

const StandardTestimonial = ({ data = {} }) => {
  const {
    title = 'What Our Customers Say',
    testimonials = [
      { quote: 'Absolutely game-changing!', author: 'John Doe', role: 'Founder, StartupXYZ', rating: 5 },
      { quote: 'Best decision we ever made.', author: 'Jane Smith', role: 'CTO, InnovateCo', rating: 5 }
    ]
  } = data;

  return (
    <div className="w-full h-48 bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center px-8 py-6">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-yellow-900 text-center mb-6">{title}</h2>
        <div className="grid grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/30 backdrop-blur-sm rounded-lg p-5">
              <div className="text-yellow-600 text-xl mb-2">{'⭐'.repeat(testimonial.rating)}</div>
              <p className="text-yellow-900 font-semibold mb-3 italic">"{testimonial.quote}"</p>
              <div className="text-yellow-800 text-sm">
                <div className="font-bold">{testimonial.author}</div>
                <div>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StandardTestimonial;
