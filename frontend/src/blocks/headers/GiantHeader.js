import React from 'react';

const GiantHeader = ({ data = {} }) => {
 const {
 title = 'Giant Header',
 subtitle = 'The ultimate header experience',
 primaryButtonText = 'Get Started Now',
 secondaryButtonText = 'Learn More'
 } = data;

 return (
 <header className="w-full flex items-center justify-center px-8 py-16 relative overflow-hidden">
 {/* Background Pattern */}
 <div className="absolute inset-0 opacity-5">
 <div className="absolute inset-0" style={{
 backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
 backgroundSize: '32px 32px'
 }}></div>
 </div>

 <div className="text-center relative z-10">
 <h1 className="text-7xl font-bold mb-8 text-gray-900">{title}</h1>
 <p className="text-3xl text-gray-600 mb-10">{subtitle}</p>
 <div className="flex gap-6 justify-center">
 <button className="px-10 py-5 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-xl">
 {primaryButtonText}
 </button>
 <button className="px-10 py-5 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-lg hover:bg-gray-50 transition">
 {secondaryButtonText}
 </button>
 </div>
 </div>
 </header>
 );
};

// Block metadata and structure for tree mapping
GiantHeader.blockMeta = {
 id: 'header-5',
 name: 'Giant Header',
 category: 'headers',
 height: 'h-96',
 defaultData: {
 title: 'Giant Header',
 subtitle: 'The ultimate header experience',
 primaryButtonText: 'Get Started Now',
 secondaryButtonText: 'Learn More'
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'giant-header-root',
 tag: 'header',
 label: 'Header Container',
 className: 'w-full flex items-center justify-center px-8 py-16 relative overflow-hidden',
 children: [
 {
 id: 'giant-header-background-pattern',
 tag: 'div',
 label: 'Background Pattern',
 className: 'absolute inset-0 opacity-5',
 children: [
 {
 id: 'giant-header-pattern-grid',
 tag: 'div',
 label: 'Pattern Grid',
 className: 'absolute inset-0',
 style: {
 backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
 backgroundSize: '32px 32px'
 }
 }
 ]
 },
 {
 id: 'giant-header-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'text-center relative z-10',
 children: [
 {
 id: 'giant-header-title',
 tag: 'h1',
 label: 'Title',
 content: data.title || 'Giant Header',
 className: 'text-7xl font-bold mb-8 text-gray-900',
 editable: true
 },
 {
 id: 'giant-header-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'The ultimate header experience',
 className: 'text-3xl text-gray-600 mb-10',
 editable: true
 },
 {
 id: 'giant-header-button-group',
 tag: 'div',
 label: 'Button Group',
 className: 'flex gap-6 justify-center',
 children: [
 {
 id: 'giant-header-primary-button',
 tag: 'button',
 label: 'Primary Button',
 content: data.primaryButtonText || 'Get Started Now',
 className: 'px-10 py-5 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-xl',
 editable: true
 },
 {
 id: 'giant-header-secondary-button',
 tag: 'button',
 label: 'Secondary Button',
 content: data.secondaryButtonText || 'Learn More',
 className: 'px-10 py-5 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-lg hover:bg-gray-50 transition',
 editable: true
 }
 ]
 }
 ]
 }
 ]
 })
};

export default GiantHeader;
