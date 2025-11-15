import React from 'react';

const TallTestimonial = ({ data = {} }) => {
  const {
    title = 'Stories from Our Community',
    subtitle = 'Real results from real customers',
    description = 'Join thousands of satisfied customers who have transformed their business',
    testimonials = [
      {
        quote: 'Implementing this platform was the turning point for our company. The ROI was evident within weeks, and our team productivity skyrocketed.',
        author: 'Alexandra Thompson',
        role: 'Director of Technology',
        company: 'FutureTech Solutions',
        image: '👩‍💼',
        rating: 5,
        metric: '300% ROI'
      },
      {
        quote: 'The customer support is phenomenal. Every question answered promptly, every feature works flawlessly. This is what enterprise software should be.',
        author: 'Robert Martinez',
        role: 'Chief Information Officer',
        company: 'GlobalCorp',
        image: '👨‍💼',
        rating: 5,
        metric: '99.9% Uptime'
      },
      {
        quote: 'We tried many solutions before finding this one. Nothing compares in terms of features, ease of use, and value for money. Absolutely recommended!',
        author: 'Lisa Wang',
        role: 'Founder & CEO',
        company: 'StartupHub',
        image: '👩‍💻',
        rating: 5,
        metric: '5000+ Users'
      }
    ]
  } = data;

  return (
    <div className="w-full h-80 bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-600 flex items-center justify-center px-8 py-10">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-white mb-3">{title}</h2>
          <p className="text-2xl text-yellow-100 mb-2">{subtitle}</p>
          <p className="text-lg text-yellow-200 max-w-3xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/25 hover:bg-white/25 transition-all transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-5xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-white text-lg">{testimonial.author}</div>
                  <div className="text-yellow-100 text-sm">{testimonial.role}</div>
                  <div className="text-yellow-200 text-sm font-semibold">{testimonial.company}</div>
                </div>
              </div>
              <div className="text-yellow-300 text-xl mb-3">{'⭐'.repeat(testimonial.rating)}</div>
              <p className="text-white font-medium mb-3 italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="bg-yellow-700/30 text-yellow-100 text-sm font-bold px-3 py-2 rounded-lg inline-block">
                {testimonial.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TallTestimonial;
