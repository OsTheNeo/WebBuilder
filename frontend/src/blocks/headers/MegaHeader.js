import React from 'react';

const MegaHeader = ({ data = {} }) => {
 const {
 title = 'Mega Header',
 subtitle = 'An impressive header section',
 buttonText = 'Get Started'
 } = data;

 return (
 <header className="w-full flex items-center justify-center px-8 py-16">
 <div className="text-center">
 <h1 className="text-5xl font-bold mb-4 text-gray-900">{title}</h1>
 <p className="text-xl text-gray-600 mb-4">{subtitle}</p>
 <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
 {buttonText}
 </button>
 </div>
 </header>
 );
};

// Block metadata and structure for tree mapping
MegaHeader.blockMeta = {
 id: 'header-3',
 name: 'Mega Header',
 category: 'headers',
 height: 'h-64',
 defaultData: {
 title: 'Mega Header',
 subtitle: 'An impressive header section',
 buttonText: 'Get Started'
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'mega-header-root',
 tag: 'header',
 label: 'Header Container',
 className: 'w-full flex items-center justify-center px-8 py-16',
 children: [
 {
 id: 'mega-header-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'text-center',
 children: [
 {
 id: 'mega-header-title',
 tag: 'h1',
 label: 'Title',
 content: data.title || 'Mega Header',
 className: 'text-5xl font-bold mb-4 text-gray-900',
 editable: true
 },
 {
 id: 'mega-header-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'An impressive header section',
 className: 'text-xl text-gray-600 mb-4',
 editable: true
 },
 {
 id: 'mega-header-button',
 tag: 'button',
 label: 'CTA Button',
 content: data.buttonText || 'Get Started',
 className: 'px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition',
 editable: true
 }
 ]
 }
 ]
 })
};

export default MegaHeader;
