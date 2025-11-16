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
 <section className="w-full flex items-center justify-center px-8 py-8">
 <div className="w-full">
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
 </section>
 );
};

// Block metadata and structure for tree mapping
LargeTestimonial.blockMeta = {
 id: 'testimonial-3',
 name: 'Large Testimonial',
 category: 'testimonials',
 height: 'h-64',
 defaultData: {
 title: 'Trusted by Industry Leaders',
 subtitle: 'See what our customers are saying',
 testimonials: [
 { quote: 'This platform revolutionized our entire workflow. We saw a 300% increase in productivity within the first month.', author: 'Michael Chen', role: 'VP of Operations', company: 'TechGiant Inc.', rating: 5 },
 { quote: 'Outstanding support and incredible features. Could not be happier with our decision to switch.', author: 'Emily Rodriguez', role: 'Product Manager', company: 'InnovateCo', rating: 5 },
 { quote: 'The best investment we made this year. Our team loves it and our customers notice the difference.', author: 'David Park', role: 'CEO', company: 'GrowthLabs', rating: 5 }
 ]
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'large-testimonial-root',
 tag: 'section',
 label: 'Testimonial Container',
 className: 'w-full flex items-center justify-center px-8 py-8',
 children: [
 {
 id: 'large-testimonial-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'w-full',
 children: [
 {
 id: 'large-testimonial-header',
 tag: 'div',
 label: 'Header',
 className: 'text-center mb-8',
 children: [
 {
 id: 'large-testimonial-title',
 tag: 'h2',
 label: 'Title',
 content: data.title || 'Trusted by Industry Leaders',
 className: 'text-4xl font-bold text-yellow-900 mb-2',
 editable: true
 },
 {
 id: 'large-testimonial-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'See what our customers are saying',
 className: 'text-xl text-yellow-800',
 editable: true
 }
 ]
 },
 {
 id: 'large-testimonial-grid',
 tag: 'div',
 label: 'Testimonials Grid',
 className: 'grid grid-cols-3 gap-6',
 children: (data.testimonials || LargeTestimonial.blockMeta.defaultData.testimonials).map((testimonial, index) => ({
 id: `large-testimonial-card-${index}`,
 tag: 'div',
 label: `Testimonial ${index + 1}`,
 className: 'bg-white/20 backdrop-blur-md rounded-xl p-6 border border-yellow-300/50 hover:bg-white/30 transition-all',
 children: [
 {
 id: `large-testimonial-rating-${index}`,
 tag: 'div',
 label: 'Rating',
 content: '⭐'.repeat(testimonial.rating),
 className: 'text-yellow-700 text-2xl mb-3',
 editable: false
 },
 {
 id: `large-testimonial-quote-${index}`,
 tag: 'p',
 label: 'Quote',
 content: testimonial.quote,
 className: 'text-yellow-900 font-semibold mb-4 italic leading-relaxed',
 editable: true
 },
 {
 id: `large-testimonial-attribution-${index}`,
 tag: 'div',
 label: 'Attribution',
 className: 'text-yellow-800',
 children: [
 {
 id: `large-testimonial-author-${index}`,
 tag: 'div',
 label: 'Author',
 content: testimonial.author,
 className: 'font-bold text-lg',
 editable: true
 },
 {
 id: `large-testimonial-role-${index}`,
 tag: 'div',
 label: 'Role',
 content: testimonial.role,
 className: 'text-sm',
 editable: true
 },
 {
 id: `large-testimonial-company-${index}`,
 tag: 'div',
 label: 'Company',
 content: testimonial.company,
 className: 'text-sm font-semibold',
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

export default LargeTestimonial;
