import React from 'react';

const LargeFooter = ({ data = {} }) => {
 const {
 companyName = 'Your Company',
 tagline = 'Empowering businesses worldwide',
 description = 'The complete platform for modern teams to build, ship, and scale their products.',
 copyright = '2024',
 sections = [
 { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Security', 'Roadmap'] },
 { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Partners'] },
 { title: 'Resources', links: ['Documentation', 'Guides', 'API Reference', 'Community', 'Status'] },
 { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'Licenses', 'GDPR'] }
 ],
 socialLinks = [
 { name: 'Twitter', icon: '🐦' },
 { name: 'LinkedIn', icon: '💼' },
 { name: 'GitHub', icon: '⚙️' },
 { name: 'Discord', icon: '💬' }
 ]
 } = data;

 return (
 <footer className="w-full bg-gray-800 flex items-center justify-center px-8 py-8">
 <div className="max-w-7xl w-full">
 <div className="grid grid-cols-5 gap-8 mb-8">
 <div className="col-span-1">
 <div className="font-bold text-gray-900 text-3xl mb-2">{companyName}</div>
 <p className="text-gray-300 text-sm mb-3">{tagline}</p>
 <p className="text-gray-300 text-xs leading-relaxed">{description}</p>
 </div>
 {sections.map((section, index) => (
 <div key={index}>
 <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">{section.title}</h3>
 <div className="space-y-2">
 {section.links.map((link, idx) => (
 <a key={idx} href="#" className="block text-gray-300 hover:text-gray-900 transition-colors text-sm">
 {link}
 </a>
 ))}
 </div>
 </div>
 ))}
 </div>
 <div className="border-t border-gray-700 pt-6 flex justify-between items-center">
 <div className="text-gray-300 text-sm">
 © {copyright} {companyName}. All rights reserved.
 </div>
 <div className="flex gap-6">
 {socialLinks.map((social, index) => (
 <a key={index} href="#" className="text-gray-300 hover:text-gray-900 transition-all transform hover:scale-110 flex items-center gap-2">
 <span className="text-xl">{social.icon}</span>
 <span className="text-sm font-medium">{social.name}</span>
 </a>
 ))}
 </div>
 </div>
 </div>
 </footer>
 );
};

// Block metadata and structure for tree mapping
LargeFooter.blockMeta = {
 id: 'footer-3',
 name: 'Large Footer',
 category: 'footers',
 height: 'h-64',
 defaultData: {
 companyName: 'Your Company',
 tagline: 'Empowering businesses worldwide',
 description: 'The complete platform for modern teams to build, ship, and scale their products.',
 copyright: '2024',
 sections: [
 { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Security', 'Roadmap'] },
 { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Partners'] },
 { title: 'Resources', links: ['Documentation', 'Guides', 'API Reference', 'Community', 'Status'] },
 { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'Licenses', 'GDPR'] }
 ],
 socialLinks: [
 { name: 'Twitter', icon: '🐦' },
 { name: 'LinkedIn', icon: '💼' },
 { name: 'GitHub', icon: '⚙️' },
 { name: 'Discord', icon: '💬' }
 ]
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'large-footer-root',
 tag: 'footer',
 label: 'Footer Container',
 className: 'w-full bg-gray-800 flex items-center justify-center px-8 py-8',
 children: [
 {
 id: 'large-footer-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'max-w-7xl w-full',
 children: [
 {
 id: 'large-footer-grid',
 tag: 'div',
 label: 'Grid Layout',
 className: 'grid grid-cols-5 gap-8 mb-8',
 children: [
 {
 id: 'large-footer-brand',
 tag: 'div',
 label: 'Brand Section',
 className: 'col-span-1',
 children: [
 {
 id: 'large-footer-company',
 tag: 'div',
 label: 'Company Name',
 content: data.companyName || 'Your Company',
 className: 'font-bold text-gray-900 text-3xl mb-2',
 editable: true
 },
 {
 id: 'large-footer-tagline',
 tag: 'p',
 label: 'Tagline',
 content: data.tagline || 'Empowering businesses worldwide',
 className: 'text-gray-300 text-sm mb-3',
 editable: true
 },
 {
 id: 'large-footer-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'The complete platform for modern teams to build, ship, and scale their products.',
 className: 'text-gray-300 text-xs leading-relaxed',
 editable: true
 }
 ]
 },
 ...(data.sections || LargeFooter.blockMeta.defaultData.sections).map((section, index) => ({
 id: `large-footer-section-${index}`,
 tag: 'div',
 label: `Section: ${section.title}`,
 children: [
 {
 id: `large-footer-section-title-${index}`,
 tag: 'h3',
 label: 'Section Title',
 content: section.title,
 className: 'font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider',
 editable: true
 },
 {
 id: `large-footer-section-links-${index}`,
 tag: 'div',
 label: 'Link Group',
 className: 'space-y-2',
 children: section.links.map((link, idx) => ({
 id: `large-footer-link-${index}-${idx}`,
 tag: 'a',
 label: `Link: ${link}`,
 content: link,
 className: 'block text-gray-300 hover:text-gray-900 transition-colors text-sm',
 editable: true
 }))
 }
 ]
 }))
 ]
 },
 {
 id: 'large-footer-bottom',
 tag: 'div',
 label: 'Bottom Section',
 className: 'border-t border-gray-700 pt-6 flex justify-between items-center',
 children: [
 {
 id: 'large-footer-copyright',
 tag: 'div',
 label: 'Copyright',
 content: `© ${data.copyright || '2024'} ${data.companyName || 'Your Company'}. All rights reserved.`,
 className: 'text-gray-300 text-sm',
 editable: true
 },
 {
 id: 'large-footer-social',
 tag: 'div',
 label: 'Social Links',
 className: 'flex gap-6',
 children: (data.socialLinks || LargeFooter.blockMeta.defaultData.socialLinks).map((social, index) => ({
 id: `large-footer-social-${index}`,
 tag: 'a',
 label: `Social: ${social.name}`,
 className: 'text-gray-300 hover:text-gray-900 transition-all transform hover:scale-110 flex items-center gap-2',
 children: [
 {
 id: `large-footer-social-icon-${index}`,
 tag: 'span',
 label: 'Icon',
 content: social.icon,
 className: 'text-xl',
 editable: true
 },
 {
 id: `large-footer-social-name-${index}`,
 tag: 'span',
 label: 'Name',
 content: social.name,
 className: 'text-sm font-medium',
 editable: true
 }
 ]
 }))
 }
 ]
 }
 ]
 }
 ]
 })
};

export default LargeFooter;
