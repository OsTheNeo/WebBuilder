import React from 'react';

const GiantTestimonial = ({ data = {} }) => {
 const {
 title = 'Customer Success Stories',
 subtitle = 'Powering success for companies worldwide',
 description = 'From startups to enterprises, see how our platform drives real business results',
 testimonials = [
 {
 quote: 'This is hands down the best platform we have ever used. The features are incredible, the performance is outstanding, and the support team goes above and beyond every single time.',
 author: 'Jennifer Adams',
 role: 'VP of Engineering',
 company: 'MegaCorp Industries',
 image: '👩‍💼',
 rating: 5,
 metrics: ['500% Growth', '50K+ Users', '99.99% Uptime']
 },
 {
 quote: 'After evaluating dozens of solutions, we chose this platform and never looked back. The ROI has been exceptional, and our team productivity has increased dramatically.',
 author: 'Marcus Johnson',
 role: 'Chief Technology Officer',
 company: 'InnovateTech Corp',
 image: '👨‍💼',
 rating: 5,
 metrics: ['$2M Saved', '10x Faster', 'SOC 2 Certified']
 },
 {
 quote: 'The platform scaled seamlessly with our rapid growth. Features we needed were already built-in, and custom integrations were a breeze. Truly enterprise-grade.',
 author: 'Samantha Lee',
 role: 'Head of Product',
 company: 'ScaleUp Technologies',
 image: '👩‍💻',
 rating: 5,
 metrics: ['1M+ Requests/day', 'Global CDN', 'Auto-scaling']
 },
 {
 quote: 'Security, reliability, and performance - all in one package. Our compliance team was impressed, our developers were delighted, and our customers noticed the improvement.',
 author: 'Thomas Wright',
 role: 'Director of Operations',
 company: 'SecureData Inc',
 image: '👨‍💻',
 rating: 5,
 metrics: ['GDPR Compliant', 'Zero Downtime', 'Military-grade Encryption']
 }
 ]
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-12">
 <div className="w-full">
 <div className="text-center mb-12">
 <h2 className="text-6xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent">
 {title}
 </h2>
 <p className="text-2xl text-yellow-100 font-semibold mb-3">{subtitle}</p>
 <p className="text-xl text-yellow-200 mx-auto leading-relaxed">{description}</p>
 </div>
 <div className="grid grid-cols-4 gap-5">
 {testimonials.map((testimonial, index) => (
 <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border-2 border-gray-300/30 hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-2xl">
 <div className="flex items-start gap-3 mb-3">
 <div className="text-4xl">{testimonial.image}</div>
 <div className="flex-1">
 <div className="font-bold text-gray-900 text-base">{testimonial.author}</div>
 <div className="text-yellow-100 text-xs">{testimonial.role}</div>
 <div className="text-yellow-200 text-xs font-semibold">{testimonial.company}</div>
 </div>
 </div>
 <div className="text-yellow-300 text-lg mb-2">{'⭐'.repeat(testimonial.rating)}</div>
 <p className="text-gray-900 text-sm font-medium mb-3 italic leading-relaxed line-clamp-4">"{testimonial.quote}"</p>
 <div className="flex flex-wrap gap-1">
 {testimonial.metrics.map((metric, idx) => (
 <div key={idx} className="bg-yellow-700/40 text-yellow-100 text-xs font-bold px-2 py-1 rounded">
 {metric}
 </div>
 ))}
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
GiantTestimonial.blockMeta = {
 id: 'testimonial-5',
 name: 'Giant Testimonial',
 category: 'testimonials',
 height: 'h-96',
 defaultData: {
 title: 'Customer Success Stories',
 subtitle: 'Powering success for companies worldwide',
 description: 'From startups to enterprises, see how our platform drives real business results',
 testimonials: [
 {
 quote: 'This is hands down the best platform we have ever used. The features are incredible, the performance is outstanding, and the support team goes above and beyond every single time.',
 author: 'Jennifer Adams',
 role: 'VP of Engineering',
 company: 'MegaCorp Industries',
 image: '👩‍💼',
 rating: 5,
 metrics: ['500% Growth', '50K+ Users', '99.99% Uptime']
 },
 {
 quote: 'After evaluating dozens of solutions, we chose this platform and never looked back. The ROI has been exceptional, and our team productivity has increased dramatically.',
 author: 'Marcus Johnson',
 role: 'Chief Technology Officer',
 company: 'InnovateTech Corp',
 image: '👨‍💼',
 rating: 5,
 metrics: ['$2M Saved', '10x Faster', 'SOC 2 Certified']
 },
 {
 quote: 'The platform scaled seamlessly with our rapid growth. Features we needed were already built-in, and custom integrations were a breeze. Truly enterprise-grade.',
 author: 'Samantha Lee',
 role: 'Head of Product',
 company: 'ScaleUp Technologies',
 image: '👩‍💻',
 rating: 5,
 metrics: ['1M+ Requests/day', 'Global CDN', 'Auto-scaling']
 },
 {
 quote: 'Security, reliability, and performance - all in one package. Our compliance team was impressed, our developers were delighted, and our customers noticed the improvement.',
 author: 'Thomas Wright',
 role: 'Director of Operations',
 company: 'SecureData Inc',
 image: '👨‍💻',
 rating: 5,
 metrics: ['GDPR Compliant', 'Zero Downtime', 'Military-grade Encryption']
 }
 ]
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'giant-testimonial-root',
 tag: 'section',
 label: 'Testimonial Container',
 className: 'w-full flex items-center justify-center px-8 py-12',
 children: [
 {
 id: 'giant-testimonial-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'w-full',
 children: [
 {
 id: 'giant-testimonial-header',
 tag: 'div',
 label: 'Header',
 className: 'text-center mb-12',
 children: [
 {
 id: 'giant-testimonial-title',
 tag: 'h2',
 label: 'Title',
 content: data.title || 'Customer Success Stories',
 className: 'text-6xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent',
 editable: true
 },
 {
 id: 'giant-testimonial-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'Powering success for companies worldwide',
 className: 'text-2xl text-yellow-100 font-semibold mb-3',
 editable: true
 },
 {
 id: 'giant-testimonial-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'From startups to enterprises, see how our platform drives real business results',
 className: 'text-xl text-yellow-200 mx-auto leading-relaxed',
 editable: true
 }
 ]
 },
 {
 id: 'giant-testimonial-grid',
 tag: 'div',
 label: 'Testimonials Grid',
 className: 'grid grid-cols-4 gap-5',
 children: (data.testimonials || GiantTestimonial.blockMeta.defaultData.testimonials).map((testimonial, index) => ({
 id: `giant-testimonial-card-${index}`,
 tag: 'div',
 label: `Testimonial ${index + 1}`,
 className: 'bg-white/10 backdrop-blur-xl rounded-2xl p-5 border-2 border-gray-300/30 hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-2xl',
 children: [
 {
 id: `giant-testimonial-profile-${index}`,
 tag: 'div',
 label: 'Profile',
 className: 'flex items-start gap-3 mb-3',
 children: [
 {
 id: `giant-testimonial-image-${index}`,
 tag: 'div',
 label: 'Avatar',
 content: testimonial.image,
 className: 'text-4xl',
 editable: false
 },
 {
 id: `giant-testimonial-info-${index}`,
 tag: 'div',
 label: 'Info',
 className: 'flex-1',
 children: [
 {
 id: `giant-testimonial-author-${index}`,
 tag: 'div',
 label: 'Author',
 content: testimonial.author,
 className: 'font-bold text-gray-900 text-base',
 editable: true
 },
 {
 id: `giant-testimonial-role-${index}`,
 tag: 'div',
 label: 'Role',
 content: testimonial.role,
 className: 'text-yellow-100 text-xs',
 editable: true
 },
 {
 id: `giant-testimonial-company-${index}`,
 tag: 'div',
 label: 'Company',
 content: testimonial.company,
 className: 'text-yellow-200 text-xs font-semibold',
 editable: true
 }
 ]
 }
 ]
 },
 {
 id: `giant-testimonial-rating-${index}`,
 tag: 'div',
 label: 'Rating',
 content: '⭐'.repeat(testimonial.rating),
 className: 'text-yellow-300 text-lg mb-2',
 editable: false
 },
 {
 id: `giant-testimonial-quote-${index}`,
 tag: 'p',
 label: 'Quote',
 content: testimonial.quote,
 className: 'text-gray-900 text-sm font-medium mb-3 italic leading-relaxed line-clamp-4',
 editable: true
 },
 {
 id: `giant-testimonial-metrics-${index}`,
 tag: 'div',
 label: 'Metrics Container',
 className: 'flex flex-wrap gap-1',
 children: testimonial.metrics.map((metric, idx) => ({
 id: `giant-testimonial-metric-${index}-${idx}`,
 tag: 'div',
 label: `Metric ${idx + 1}`,
 content: metric,
 className: 'bg-yellow-700/40 text-yellow-100 text-xs font-bold px-2 py-1 rounded',
 editable: true
 }))
 }
 ]
 }))
 }
 ]
 }
 ]
 })
};

export default GiantTestimonial;
