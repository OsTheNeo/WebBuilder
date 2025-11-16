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
 <section className="w-full flex items-center justify-center px-8 py-6">
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
 </section>
 );
};

// Block metadata and structure for tree mapping
StandardTestimonial.blockMeta = {
 id: 'testimonial-2',
 name: 'Standard Testimonial',
 category: 'testimonials',
 height: 'h-48',
 defaultData: {
 title: 'What Our Customers Say',
 testimonials: [
 { quote: 'Absolutely game-changing!', author: 'John Doe', role: 'Founder, StartupXYZ', rating: 5 },
 { quote: 'Best decision we ever made.', author: 'Jane Smith', role: 'CTO, InnovateCo', rating: 5 }
 ]
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'standard-testimonial-root',
 tag: 'section',
 label: 'Testimonial Container',
 className: 'w-full flex items-center justify-center px-8 py-6',
 children: [
 {
 id: 'standard-testimonial-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'max-w-5xl w-full',
 children: [
 {
 id: 'standard-testimonial-title',
 tag: 'h2',
 label: 'Title',
 content: data.title || 'What Our Customers Say',
 className: 'text-3xl font-bold text-yellow-900 text-center mb-6',
 editable: true
 },
 {
 id: 'standard-testimonial-grid',
 tag: 'div',
 label: 'Testimonials Grid',
 className: 'grid grid-cols-2 gap-6',
 children: (data.testimonials || StandardTestimonial.blockMeta.defaultData.testimonials).map((testimonial, index) => ({
 id: `standard-testimonial-card-${index}`,
 tag: 'div',
 label: `Testimonial ${index + 1}`,
 className: 'bg-white/30 backdrop-blur-sm rounded-lg p-5',
 children: [
 {
 id: `standard-testimonial-rating-${index}`,
 tag: 'div',
 label: 'Rating',
 content: '⭐'.repeat(testimonial.rating),
 className: 'text-yellow-600 text-xl mb-2',
 editable: false
 },
 {
 id: `standard-testimonial-quote-${index}`,
 tag: 'p',
 label: 'Quote',
 content: testimonial.quote,
 className: 'text-yellow-900 font-semibold mb-3 italic',
 editable: true
 },
 {
 id: `standard-testimonial-attribution-${index}`,
 tag: 'div',
 label: 'Attribution',
 className: 'text-yellow-800 text-sm',
 children: [
 {
 id: `standard-testimonial-author-${index}`,
 tag: 'div',
 label: 'Author',
 content: testimonial.author,
 className: 'font-bold',
 editable: true
 },
 {
 id: `standard-testimonial-role-${index}`,
 tag: 'div',
 label: 'Role',
 content: testimonial.role,
 className: '',
 editable: true
 }
 ]
 }
 ]
 }))
 }
 ]
 }
 ]
 })
};

export default StandardTestimonial;
