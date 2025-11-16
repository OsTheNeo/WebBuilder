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
 <section className="w-full flex items-center justify-center px-8 py-10">
 <div className="w-full">
 <div className="text-center mb-10">
 <h2 className="text-5xl font-bold text-gray-900 mb-3">{title}</h2>
 <p className="text-2xl text-yellow-100 mb-2">{subtitle}</p>
 <p className="text-lg text-yellow-200 mx-auto">{description}</p>
 </div>
 <div className="grid grid-cols-3 gap-6">
 {testimonials.map((testimonial, index) => (
 <div key={index} className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-gray-300/25 hover:bg-white/25 transition-all transform hover:scale-105">
 <div className="flex items-center gap-3 mb-4">
 <div className="text-5xl">{testimonial.image}</div>
 <div>
 <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
 <div className="text-yellow-100 text-sm">{testimonial.role}</div>
 <div className="text-yellow-200 text-sm font-semibold">{testimonial.company}</div>
 </div>
 </div>
 <div className="text-yellow-300 text-xl mb-3">{'⭐'.repeat(testimonial.rating)}</div>
 <p className="text-gray-900 font-medium mb-3 italic leading-relaxed">"{testimonial.quote}"</p>
 <div className="bg-yellow-700/30 text-yellow-100 text-sm font-bold px-3 py-2 rounded-lg inline-block">
 {testimonial.metric}
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
TallTestimonial.blockMeta = {
 id: 'testimonial-4',
 name: 'Tall Testimonial',
 category: 'testimonials',
 height: 'h-80',
 defaultData: {
 title: 'Stories from Our Community',
 subtitle: 'Real results from real customers',
 description: 'Join thousands of satisfied customers who have transformed their business',
 testimonials: [
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
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'tall-testimonial-root',
 tag: 'section',
 label: 'Testimonial Container',
 className: 'w-full flex items-center justify-center px-8 py-10',
 children: [
 {
 id: 'tall-testimonial-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'w-full',
 children: [
 {
 id: 'tall-testimonial-header',
 tag: 'div',
 label: 'Header',
 className: 'text-center mb-10',
 children: [
 {
 id: 'tall-testimonial-title',
 tag: 'h2',
 label: 'Title',
 content: data.title || 'Stories from Our Community',
 className: 'text-5xl font-bold text-gray-900 mb-3',
 editable: true
 },
 {
 id: 'tall-testimonial-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'Real results from real customers',
 className: 'text-2xl text-yellow-100 mb-2',
 editable: true
 },
 {
 id: 'tall-testimonial-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'Join thousands of satisfied customers who have transformed their business',
 className: 'text-lg text-yellow-200 mx-auto',
 editable: true
 }
 ]
 },
 {
 id: 'tall-testimonial-grid',
 tag: 'div',
 label: 'Testimonials Grid',
 className: 'grid grid-cols-3 gap-6',
 children: (data.testimonials || TallTestimonial.blockMeta.defaultData.testimonials).map((testimonial, index) => ({
 id: `tall-testimonial-card-${index}`,
 tag: 'div',
 label: `Testimonial ${index + 1}`,
 className: 'bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-gray-300/25 hover:bg-white/25 transition-all transform hover:scale-105',
 children: [
 {
 id: `tall-testimonial-profile-${index}`,
 tag: 'div',
 label: 'Profile',
 className: 'flex items-center gap-3 mb-4',
 children: [
 {
 id: `tall-testimonial-image-${index}`,
 tag: 'div',
 label: 'Avatar',
 content: testimonial.image,
 className: 'text-5xl',
 editable: false
 },
 {
 id: `tall-testimonial-info-${index}`,
 tag: 'div',
 label: 'Info',
 className: '',
 children: [
 {
 id: `tall-testimonial-author-${index}`,
 tag: 'div',
 label: 'Author',
 content: testimonial.author,
 className: 'font-bold text-gray-900 text-lg',
 editable: true
 },
 {
 id: `tall-testimonial-role-${index}`,
 tag: 'div',
 label: 'Role',
 content: testimonial.role,
 className: 'text-yellow-100 text-sm',
 editable: true
 },
 {
 id: `tall-testimonial-company-${index}`,
 tag: 'div',
 label: 'Company',
 content: testimonial.company,
 className: 'text-yellow-200 text-sm font-semibold',
 editable: true
 }
 ]
 }
 ]
 },
 {
 id: `tall-testimonial-rating-${index}`,
 tag: 'div',
 label: 'Rating',
 content: '⭐'.repeat(testimonial.rating),
 className: 'text-yellow-300 text-xl mb-3',
 editable: false
 },
 {
 id: `tall-testimonial-quote-${index}`,
 tag: 'p',
 label: 'Quote',
 content: testimonial.quote,
 className: 'text-gray-900 font-medium mb-3 italic leading-relaxed',
 editable: true
 },
 {
 id: `tall-testimonial-metric-${index}`,
 tag: 'div',
 label: 'Metric',
 content: testimonial.metric,
 className: 'bg-yellow-700/30 text-yellow-100 text-sm font-bold px-3 py-2 rounded-lg inline-block',
 editable: true
 }
 ]
 }))
 }
 ]
 }
 ]
 })
};

export default TallTestimonial;
