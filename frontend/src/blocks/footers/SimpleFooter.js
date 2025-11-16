import React from 'react';

const SimpleFooter = ({ data = {} }) => {
 const {
 companyName = 'Your Company',
 copyright = '2024',
 links = ['Privacy', 'Terms', 'Contact']
 } = data;

 return (
 <footer className="w-full bg-gray-800 flex items-center justify-center px-8">
 <div className="max-w-6xl w-full flex items-center justify-between">
 <div className="text-gray-900">
 <div className="font-bold text-xl mb-1">{companyName}</div>
 <div className="text-gray-300 text-sm">© {copyright} All rights reserved.</div>
 </div>
 <div className="flex gap-6">
 {links.map((link, index) => (
 <a key={index} href="#" className="text-gray-300 hover:text-gray-900 transition-colors font-medium">
 {link}
 </a>
 ))}
 </div>
 </div>
 </footer>
 );
};

// Block metadata and structure for tree mapping
SimpleFooter.blockMeta = {
 id: 'footer-1',
 name: 'Simple Footer',
 category: 'footers',
 height: 'h-32',
 defaultData: {
 companyName: 'Your Company',
 copyright: '2024',
 links: ['Privacy', 'Terms', 'Contact']
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'simple-footer-root',
 tag: 'footer',
 label: 'Footer Container',
 className: 'w-full bg-gray-800 flex items-center justify-center px-8',
 children: [
 {
 id: 'simple-footer-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'max-w-6xl w-full flex items-center justify-between',
 children: [
 {
 id: 'simple-footer-brand',
 tag: 'div',
 label: 'Brand Section',
 className: 'text-gray-900',
 children: [
 {
 id: 'simple-footer-company',
 tag: 'div',
 label: 'Company Name',
 content: data.companyName || 'Your Company',
 className: 'font-bold text-xl mb-1',
 editable: true
 },
 {
 id: 'simple-footer-copyright',
 tag: 'div',
 label: 'Copyright',
 content: `© ${data.copyright || '2024'} All rights reserved.`,
 className: 'text-gray-300 text-sm',
 editable: true
 }
 ]
 },
 {
 id: 'simple-footer-links',
 tag: 'div',
 label: 'Footer Links',
 className: 'flex gap-6',
 children: (data.links || ['Privacy', 'Terms', 'Contact']).map((link, index) => ({
 id: `simple-footer-link-${index}`,
 tag: 'a',
 label: `Link: ${link}`,
 content: link,
 className: 'text-gray-300 hover:text-gray-900 transition-colors font-medium',
 editable: true
 }))
 }
 ]
 }
 ]
 })
};

export default SimpleFooter;
