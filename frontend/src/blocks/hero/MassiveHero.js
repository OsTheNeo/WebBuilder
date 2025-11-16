import React from 'react';

const MassiveHero = ({ data = {} }) => {
 const {
 title = 'Build Something Extraordinary',
 subtitle = 'The ultimate platform for ambitious creators',
 description = 'Experience the next generation of web development with our cutting-edge tools and features',
 features = ['Fast & Reliable', 'Scalable Solutions', 'Expert Support'],
 ctaText = 'Get Started Now',
 secondaryCtaText = 'View Demo'
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-16">
 <div className="text-center space-y-8">
 <div className="space-y-4">
 <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-gray-900">
 {title}
 </h1>
 <p className="text-2xl md:text-3xl text-gray-700 font-semibold">{subtitle}</p>
 <p className="text-xl text-gray-600 mx-auto leading-relaxed">{description}</p>
 </div>

 <div className="flex gap-6 justify-center flex-wrap">
 {features.map((feature, index) => (
 <div key={index} className="bg-gray-100 px-6 py-2 rounded-full text-gray-700 font-medium border border-gray-200">
 {feature}
 </div>
 ))}
 </div>

 <div className="flex gap-4 justify-center pt-6">
 <button className="bg-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-all transform hover:scale-105 shadow-2xl">
 {ctaText}
 </button>
 <button className="bg-gray-100 text-gray-700 border-2 border-gray-300 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl">
 {secondaryCtaText}
 </button>
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
MassiveHero.blockMeta = {
 id: 'hero-5',
 name: 'Massive Hero',
 category: 'hero',
 height: 'h-96',
 defaultData: {
 title: 'Build Something Extraordinary',
 subtitle: 'The ultimate platform for ambitious creators',
 description: 'Experience the next generation of web development with our cutting-edge tools and features',
 features: ['Fast & Reliable', 'Scalable Solutions', 'Expert Support'],
 ctaText: 'Get Started Now',
 secondaryCtaText: 'View Demo'
 },
 getTree: (data = {}) => ({
 id: 'massive-hero-root',
 tag: 'section',
 label: 'Hero Section',
 className: 'w-full flex items-center justify-center px-8 py-16',
 children: [
 {
 id: 'massive-hero-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'text-center space-y-8',
 children: [
 {
 id: 'massive-hero-header',
 tag: 'div',
 label: 'Header Section',
 className: 'space-y-4',
 children: [
 {
 id: 'massive-hero-title',
 tag: 'h1',
 label: 'Title',
 content: data.title || 'Build Something Extraordinary',
 className: 'text-6xl md:text-7xl font-extrabold leading-tight text-gray-900',
 editable: true
 },
 {
 id: 'massive-hero-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'The ultimate platform for ambitious creators',
 className: 'text-2xl md:text-3xl text-gray-700 font-semibold',
 editable: true
 },
 {
 id: 'massive-hero-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'Experience the next generation of web development with our cutting-edge tools and features',
 className: 'text-xl text-gray-600 mx-auto leading-relaxed',
 editable: true
 }
 ]
 },
 {
 id: 'massive-hero-features',
 tag: 'div',
 label: 'Features Section',
 className: 'flex gap-6 justify-center flex-wrap',
 children: (data.features || ['Fast & Reliable', 'Scalable Solutions', 'Expert Support']).map((feature, index) => ({
 id: `massive-hero-feature-${index}`,
 tag: 'div',
 label: `Feature ${index + 1}`,
 content: feature,
 className: 'bg-gray-100 px-6 py-2 rounded-full text-gray-700 font-medium border border-gray-200',
 editable: true
 }))
 },
 {
 id: 'massive-hero-cta-wrapper',
 tag: 'div',
 label: 'CTA Wrapper',
 className: 'flex gap-4 justify-center pt-6',
 children: [
 {
 id: 'massive-hero-primary-cta',
 tag: 'button',
 label: 'Primary CTA',
 content: data.ctaText || 'Get Started Now',
 className: 'bg-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-all transform hover:scale-105 shadow-2xl',
 editable: true
 },
 {
 id: 'massive-hero-secondary-cta',
 tag: 'button',
 label: 'Secondary CTA',
 content: data.secondaryCtaText || 'View Demo',
 className: 'bg-gray-100 text-gray-700 border-2 border-gray-300 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl',
 editable: true
 }
 ]
 }
 ]
 }
 ]
 })
};

export default MassiveHero;
