import React from 'react';

const LargeHeader = ({ data = {} }) => {
 const { title = 'Large Header', subtitle = 'A more spacious header with room for content' } = data;

 return (
 <header className="w-full flex items-center justify-center px-8 py-16">
 <div className="text-center">
 <h1 className="text-4xl font-bold mb-3 text-gray-900">{title}</h1>
 <p className="text-lg text-gray-600">{subtitle}</p>
 </div>
 </header>
 );
};

// Block metadata and structure for tree mapping
LargeHeader.blockMeta = {
 id: 'header-2',
 name: 'Large Header',
 category: 'headers',
 height: 'h-48',
 defaultData: {
 title: 'Large Header',
 subtitle: 'A more spacious header with room for content'
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'large-header-root',
 tag: 'header',
 label: 'Header Container',
 className: 'w-full flex items-center justify-center px-8 py-16',
 children: [
 {
 id: 'large-header-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'text-center',
 children: [
 {
 id: 'large-header-title',
 tag: 'h1',
 label: 'Title',
 content: data.title || 'Large Header',
 className: 'text-4xl font-bold mb-3 text-gray-900',
 editable: true
 },
 {
 id: 'large-header-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'A more spacious header with room for content',
 className: 'text-lg text-gray-600',
 editable: true
 }
 ]
 }
 ]
 })
};

export default LargeHeader;
