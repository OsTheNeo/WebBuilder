import React from 'react';

const CompactTestimonial = ({ data = {} }) => {
 const {
 quote = 'This product changed how we work!',
 author = 'Sarah Johnson',
 role = 'CEO, TechCorp'
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-16">
 <div className="text-center">
 <p className="text-lg font-semibold text-yellow-900 mb-2 italic">"{quote}"</p>
 <div className="text-yellow-800">
 <span className="font-bold">{author}</span> - <span>{role}</span>
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
CompactTestimonial.blockMeta = {
 id: 'testimonial-1',
 name: 'Compact Testimonial',
 category: 'testimonials',
 height: 'h-32',
 defaultData: {
 quote: 'This product changed how we work!',
 author: 'Sarah Johnson',
 role: 'CEO, TechCorp'
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'compact-testimonial-root',
 tag: 'section',
 label: 'Testimonial Container',
 className: 'w-full flex items-center justify-center px-8',
 children: [
 {
 id: 'compact-testimonial-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'text-center',
 children: [
 {
 id: 'compact-testimonial-quote',
 tag: 'p',
 label: 'Quote',
 content: data.quote || 'This product changed how we work!',
 className: 'text-lg font-semibold text-yellow-900 mb-2 italic',
 editable: true
 },
 {
 id: 'compact-testimonial-attribution',
 tag: 'div',
 label: 'Attribution',
 className: 'text-yellow-800',
 children: [
 {
 id: 'compact-testimonial-author',
 tag: 'span',
 label: 'Author Name',
 content: data.author || 'Sarah Johnson',
 className: 'font-bold',
 editable: true
 },
 {
 id: 'compact-testimonial-separator',
 tag: 'span',
 label: 'Separator',
 content: ' - ',
 className: '',
 editable: false
 },
 {
 id: 'compact-testimonial-role',
 tag: 'span',
 label: 'Role',
 content: data.role || 'CEO, TechCorp',
 className: '',
 editable: true
 }
 ]
 }
 ]
 }
 ]
 })
};

export default CompactTestimonial;
