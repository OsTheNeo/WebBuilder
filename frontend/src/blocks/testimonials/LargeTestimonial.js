import React from 'react';

const LargeTestimonial = ({ data = {} }) => {
  const {
    title = 'Trusted by Industry Leaders',
    subtitle = 'See what our customers are saying',
    testimonials = [
      { quote: 'This platform revolutionized our entire workflow. We saw a 300% increase in productivity within the first month.', author: 'Michael Chen', role: 'VP of Operations', company: 'TechGiant Inc.', rating: 5 },
      { quote: 'Outstanding support and incredible features. Could not be happier with our decision to switch.', author: 'Emily Rodriguez', role: 'Product Manager', company: 'InnovateCo', rating: 5 },
      { quote: 'The best investment we made this year. Our team loves it and our customers notice the difference.', author: 'David Park', role: 'CEO', company: 'GrowthLabs', rating: 5 }
    ]
  } = data;

  return (
    <div className="w-full h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center px-8 py-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-yellow-900 mb-2">{title}</h2>
          <p className="text-xl text-yellow-800">{subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-yellow-300/50 hover:bg-white/30 transition-all">
              <div className="text-yellow-700 text-2xl mb-3">{'⭐'.repeat(testimonial.rating)}</div>
              <p className="text-yellow-900 font-semibold mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="text-yellow-800">
                <div className="font-bold text-lg">{testimonial.author}</div>
                <div className="text-sm">{testimonial.role}</div>
                <div className="text-sm font-semibold">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LargeTestimonial;
