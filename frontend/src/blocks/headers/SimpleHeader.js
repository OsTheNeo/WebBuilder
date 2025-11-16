import React from 'react';

const SimpleHeader = ({ data = {} }) => {
 const { title = 'Simple Header', subtitle = 'A clean and minimal header section' } = data;

 return (
 <header className="w-full flex items-center justify-center px-8 py-12">
 <div className="text-center">
 <h1 className="text-3xl font-bold mb-2 text-gray-900">{title}</h1>
 <p className="text-gray-600 text-base">{subtitle}</p>
 </div>
 </header>
 );
};

// Block metadata and structure for tree mapping
SimpleHeader.blockMeta = {
 id: 'header-1',
 name: 'Simple Header',
 category: 'headers',
 height: 'h-32',
 defaultData: {
 title: 'Simple Header',
 subtitle: 'A clean and minimal header section'
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'simple-header-root',
 tag: 'header',
 label: 'Header Container',
 className: 'w-full flex items-center justify-center px-8 py-12',
 children: [
 {
 id: 'simple-header-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'text-center',
 children: [
 {
 id: 'simple-header-title',
 tag: 'h1',
 label: 'Title',
 content: data.title || 'Simple Header',
 className: 'text-3xl font-bold mb-2 text-gray-900',
 editable: true
 },
 {
 id: 'simple-header-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'A clean and minimal header section',
 className: 'text-gray-600 text-base',
 editable: true
 }
 ]
 }
 ]
 })
};

export default SimpleHeader;
