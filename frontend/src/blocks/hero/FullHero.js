import React from 'react';

const FullHero = ({ data = {} }) => {
 const {
 title = 'Transform Your Vision Into Reality',
 subtitle = 'Powerful tools and services to help you succeed',
 description = 'Join thousands of satisfied customers who have achieved their goals with our platform',
 ctaText = 'Start Free Trial',
 secondaryCtaText = 'Learn More'
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-16">
 <div className="text-center space-y-6">
 <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">{title}</h1>
 <p className="text-xl md:text-2xl text-gray-700 font-medium">{subtitle}</p>
 <p className="text-lg text-gray-600 mx-auto">{description}</p>
 <div className="flex gap-4 justify-center pt-4">
 <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg">
 {ctaText}
 </button>
 <button className="bg-gray-100 text-gray-700 border-2 border-gray-300 px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-all transform hover:scale-105">
 {secondaryCtaText}
 </button>
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
FullHero.blockMeta = {
 id: 'hero-4',
 name: 'Full Hero',
 category: 'hero',
 height: 'h-80',
 defaultData: {
 title: 'Transform Your Vision Into Reality',
 subtitle: 'Powerful tools and services to help you succeed',
 description: 'Join thousands of satisfied customers who have achieved their goals with our platform',
 ctaText: 'Start Free Trial',
 secondaryCtaText: 'Learn More'
 },
 getTree: (data = {}) => ({
 id: 'full-hero-root',
 tag: 'section',
 label: 'Hero Section',
 className: 'w-full flex items-center justify-center px-8 py-16',
 children: [
 {
 id: 'full-hero-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'text-center space-y-6',
 children: [
 {
 id: 'full-hero-title',
 tag: 'h1',
 label: 'Title',
 content: data.title || 'Transform Your Vision Into Reality',
 className: 'text-5xl md:text-6xl font-bold leading-tight text-gray-900',
 editable: true
 },
 {
 id: 'full-hero-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'Powerful tools and services to help you succeed',
 className: 'text-xl md:text-2xl text-gray-700 font-medium',
 editable: true
 },
 {
 id: 'full-hero-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'Join thousands of satisfied customers who have achieved their goals with our platform',
 className: 'text-lg text-gray-600 mx-auto',
 editable: true
 },
 {
 id: 'full-hero-cta-wrapper',
 tag: 'div',
 label: 'CTA Wrapper',
 className: 'flex gap-4 justify-center pt-4',
 children: [
 {
 id: 'full-hero-primary-cta',
 tag: 'button',
 label: 'Primary CTA',
 content: data.ctaText || 'Start Free Trial',
 className: 'bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg',
 editable: true
 },
 {
 id: 'full-hero-secondary-cta',
 tag: 'button',
 label: 'Secondary CTA',
 content: data.secondaryCtaText || 'Learn More',
 className: 'bg-gray-100 text-gray-700 border-2 border-gray-300 px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-all transform hover:scale-105',
 editable: true
 }
 ]
 }
 ]
 }
 ]
 })
};

export default FullHero;
