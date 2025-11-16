import React from 'react';

const DetailedFooter = ({ data = {} }) => {
 const {
 companyName = 'Your Company',
 tagline = 'Innovation meets excellence',
 description = 'We build powerful tools and services that help businesses grow and succeed in the digital age.',
 copyright = '2024',
 newsletterTitle = 'Subscribe to our newsletter',
 newsletterPlaceholder = 'Enter your email',
 newsletterButton = 'Subscribe',
 sections = [
 { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Security', 'Changelog', 'Roadmap'] },
 { title: 'Solutions', links: ['Enterprise', 'Startups', 'Agencies', 'Freelancers', 'Developers', 'Education'] },
 { title: 'Resources', links: ['Documentation', 'API Reference', 'Guides', 'Tutorials', 'Community', 'Support'] },
 { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press', 'Partners', 'Contact'] }
 ],
 socialLinks = [
 { name: 'Twitter', icon: '🐦' },
 { name: 'LinkedIn', icon: '💼' },
 { name: 'GitHub', icon: '⚙️' },
 { name: 'Discord', icon: '💬' }
 ]
 } = data;

 return (
 <footer className="w-full bg-gray-900 flex items-center justify-center px-8 py-10">
 <div className="max-w-7xl w-full">
 <div className="grid grid-cols-6 gap-6 mb-8">
 <div className="col-span-2">
 <div className="font-bold text-gray-900 text-4xl mb-3">{companyName}</div>
 <p className="text-gray-300 text-base font-semibold mb-3">{tagline}</p>
 <p className="text-gray-300 text-sm leading-relaxed mb-6">{description}</p>
 <div>
 <h4 className="text-gray-900 font-bold mb-2 text-sm">{newsletterTitle}</h4>
 <div className="flex gap-2">
 <input
 type="email"
 placeholder={newsletterPlaceholder}
 className="flex-1 px-3 py-2 bg-gray-800 text-gray-900 rounded border border-gray-700 focus:outline-none focus:border-gray-600 text-sm"
 />
 <button className="bg-white text-gray-900 px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors text-sm">
 {newsletterButton}
 </button>
 </div>
 </div>
 </div>
 {sections.map((section, index) => (
 <div key={index}>
 <h3 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-wider">{section.title}</h3>
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
 <div className="border-t border-gray-700 pt-6">
 <div className="flex justify-between items-center mb-4">
 <div className="text-gray-300 text-sm">
 © {copyright} {companyName}. All rights reserved.
 </div>
 <div className="flex gap-6">
 {socialLinks.map((social, index) => (
 <a key={index} href="#" className="group text-gray-300 hover:text-gray-900 transition-all flex flex-col items-center">
 <span className="text-2xl mb-1 transform group-hover:scale-110 transition-transform">{social.icon}</span>
 <span className="text-xs font-medium">{social.name}</span>
 </a>
 ))}
 </div>
 </div>
 </div>
 </div>
 </footer>
 );
};

// Block metadata and structure for tree mapping
DetailedFooter.blockMeta = {
 id: 'footer-4',
 name: 'Detailed Footer',
 category: 'footers',
 height: 'h-80',
 defaultData: {
 companyName: 'Your Company',
 tagline: 'Innovation meets excellence',
 description: 'We build powerful tools and services that help businesses grow and succeed in the digital age.',
 copyright: '2024',
 newsletterTitle: 'Subscribe to our newsletter',
 newsletterPlaceholder: 'Enter your email',
 newsletterButton: 'Subscribe',
 sections: [
 { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Security', 'Changelog', 'Roadmap'] },
 { title: 'Solutions', links: ['Enterprise', 'Startups', 'Agencies', 'Freelancers', 'Developers', 'Education'] },
 { title: 'Resources', links: ['Documentation', 'API Reference', 'Guides', 'Tutorials', 'Community', 'Support'] },
 { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press', 'Partners', 'Contact'] }
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
 id: 'detailed-footer-root',
 tag: 'footer',
 label: 'Footer Container',
 className: 'w-full bg-gray-900 flex items-center justify-center px-8 py-10',
 children: [
 {
 id: 'detailed-footer-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'max-w-7xl w-full',
 children: [
 {
 id: 'detailed-footer-grid',
 tag: 'div',
 label: 'Grid Layout',
 className: 'grid grid-cols-6 gap-6 mb-8',
 children: [
 {
 id: 'detailed-footer-brand',
 tag: 'div',
 label: 'Brand Section',
 className: 'col-span-2',
 children: [
 {
 id: 'detailed-footer-company',
 tag: 'div',
 label: 'Company Name',
 content: data.companyName || 'Your Company',
 className: 'font-bold text-gray-900 text-4xl mb-3',
 editable: true
 },
 {
 id: 'detailed-footer-tagline',
 tag: 'p',
 label: 'Tagline',
 content: data.tagline || 'Innovation meets excellence',
 className: 'text-gray-300 text-base font-semibold mb-3',
 editable: true
 },
 {
 id: 'detailed-footer-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'We build powerful tools and services that help businesses grow and succeed in the digital age.',
 className: 'text-gray-300 text-sm leading-relaxed mb-6',
 editable: true
 },
 {
 id: 'detailed-footer-newsletter',
 tag: 'div',
 label: 'Newsletter Section',
 children: [
 {
 id: 'detailed-footer-newsletter-title',
 tag: 'h4',
 label: 'Newsletter Title',
 content: data.newsletterTitle || 'Subscribe to our newsletter',
 className: 'text-gray-900 font-bold mb-2 text-sm',
 editable: true
 }
 ]
 }
 ]
 },
 ...(data.sections || DetailedFooter.blockMeta.defaultData.sections).map((section, index) => ({
 id: `detailed-footer-section-${index}`,
 tag: 'div',
 label: `Section: ${section.title}`,
 children: [
 {
 id: `detailed-footer-section-title-${index}`,
 tag: 'h3',
 label: 'Section Title',
 content: section.title,
 className: 'font-bold text-gray-900 mb-4 text-xs uppercase tracking-wider',
 editable: true
 },
 {
 id: `detailed-footer-section-links-${index}`,
 tag: 'div',
 label: 'Link Group',
 className: 'space-y-2',
 children: section.links.map((link, idx) => ({
 id: `detailed-footer-link-${index}-${idx}`,
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
 id: 'detailed-footer-bottom',
 tag: 'div',
 label: 'Bottom Section',
 className: 'border-t border-gray-700 pt-6',
 children: [
 {
 id: 'detailed-footer-bottom-content',
 tag: 'div',
 label: 'Bottom Content',
 className: 'flex justify-between items-center mb-4',
 children: [
 {
 id: 'detailed-footer-copyright',
 tag: 'div',
 label: 'Copyright',
 content: `© ${data.copyright || '2024'} ${data.companyName || 'Your Company'}. All rights reserved.`,
 className: 'text-gray-300 text-sm',
 editable: true
 },
 {
 id: 'detailed-footer-social',
 tag: 'div',
 label: 'Social Links',
 className: 'flex gap-6',
 children: (data.socialLinks || DetailedFooter.blockMeta.defaultData.socialLinks).map((social, index) => ({
 id: `detailed-footer-social-${index}`,
 tag: 'a',
 label: `Social: ${social.name}`,
 className: 'group text-gray-300 hover:text-gray-900 transition-all flex flex-col items-center',
 children: [
 {
 id: `detailed-footer-social-icon-${index}`,
 tag: 'span',
 label: 'Icon',
 content: social.icon,
 className: 'text-2xl mb-1 transform group-hover:scale-110 transition-transform',
 editable: true
 },
 {
 id: `detailed-footer-social-name-${index}`,
 tag: 'span',
 label: 'Name',
 content: social.name,
 className: 'text-xs font-medium',
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
 }
 ]
 })
};

export default DetailedFooter;
