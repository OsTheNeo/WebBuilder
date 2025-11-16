import React from 'react';

const MegaFooter = ({ data = {} }) => {
 const {
 companyName = 'Your Company',
 tagline = 'Building the future of technology',
 description = 'We empower businesses worldwide with cutting-edge solutions, innovative tools, and exceptional support to achieve their goals.',
 copyright = '2024',
 newsletterTitle = 'Stay Updated',
 newsletterPlaceholder = 'Your email address',
 newsletterButton = 'Subscribe',
 newsletterSubtext = 'Join 10,000+ subscribers',
 sections = [
 { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Security', 'Changelog', 'Roadmap', 'API', 'Mobile App'] },
 { title: 'Solutions', links: ['Enterprise', 'Startups', 'Agencies', 'Freelancers', 'Developers', 'Education', 'Non-Profit'] },
 { title: 'Resources', links: ['Documentation', 'API Docs', 'Guides', 'Tutorials', 'Video Library', 'Webinars', 'Community'] },
 { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Partners', 'Contact', 'Investors'] },
 { title: 'Support', links: ['Help Center', 'Status', 'Report Issue', 'Feature Request', 'Contact Support', 'Live Chat'] }
 ],
 socialLinks = [
 { name: 'Twitter', icon: '🐦' },
 { name: 'LinkedIn', icon: '💼' },
 { name: 'GitHub', icon: '⚙️' },
 { name: 'Discord', icon: '💬' },
 { name: 'YouTube', icon: '📹' },
 { name: 'Instagram', icon: '📷' }
 ],
 stats = [
 { value: '50K+', label: 'Customers' },
 { value: '99.99%', label: 'Uptime' },
 { value: '150+', label: 'Countries' },
 { value: '24/7', label: 'Support' }
 ],
 contactInfo = { email: 'contact@company.com', phone: '+1 (555) 123-4567', address: '123 Tech Street, San Francisco, CA 94105' }
 } = data;

 return (
 <footer className="w-full bg-gray-900 flex items-center justify-center px-8 py-12">
 <div className="max-w-7xl w-full">
 {/* Top Section */}
 <div className="grid grid-cols-7 gap-6 mb-8">
 {/* Company Info */}
 <div className="col-span-2">
 <div className="font-extrabold text-gray-900 text-4xl mb-3">{companyName}</div>
 <p className="text-gray-300 text-lg font-bold mb-3">{tagline}</p>
 <p className="text-gray-300 text-sm leading-relaxed mb-6">{description}</p>

 {/* Newsletter */}
 <div className="mb-6">
 <h4 className="text-gray-900 font-bold mb-3 text-sm">{newsletterTitle}</h4>
 <div className="flex gap-2 mb-2">
 <input
 type="email"
 placeholder={newsletterPlaceholder}
 className="flex-1 px-3 py-2 bg-gray-800 text-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-gray-600 text-sm"
 />
 <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-all text-sm">
 {newsletterButton}
 </button>
 </div>
 <p className="text-gray-300 text-xs">{newsletterSubtext}</p>
 </div>

 {/* Stats */}
 <div className="grid grid-cols-2 gap-2">
 {stats.map((stat, index) => (
 <div key={index} className="bg-gray-800 rounded-lg p-2 text-center border border-gray-700">
 <div className="text-gray-900 font-bold text-lg">{stat.value}</div>
 <div className="text-gray-300 text-xs">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>

 {/* Links Sections */}
 {sections.map((section, index) => (
 <div key={index}>
 <h3 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-wider">{section.title}</h3>
 <div className="space-y-2">
 {section.links.map((link, idx) => (
 <a key={idx} href="#" className="block text-gray-300 hover:text-gray-900 transition-colors text-xs">
 {link}
 </a>
 ))}
 </div>
 </div>
 ))}
 </div>

 {/* Middle Section - Social & Contact */}
 <div className="border-t border-gray-800 pt-6 pb-6">
 <div className="flex justify-between items-center">
 {/* Social Links */}
 <div className="flex gap-6">
 {socialLinks.map((social, index) => (
 <a key={index} href="#" className="group flex flex-col items-center">
 <div className="bg-gray-800 rounded-full p-3 group-hover:bg-gray-700 transition-all transform group-hover:scale-110">
 <span className="text-2xl">{social.icon}</span>
 </div>
 <span className="text-xs text-gray-300 mt-1 font-medium">{social.name}</span>
 </a>
 ))}
 </div>

 {/* Contact Info */}
 <div className="text-right">
 <div className="text-xs text-gray-300 mb-1">{contactInfo.email}</div>
 <div className="text-xs text-gray-300 mb-1">{contactInfo.phone}</div>
 <div className="text-xs text-gray-300">{contactInfo.address}</div>
 </div>
 </div>
 </div>

 {/* Bottom Section */}
 <div className="border-t border-gray-800 pt-4">
 <div className="flex justify-between items-center">
 <div className="text-gray-300 text-xs">
 © {copyright} {companyName}. All rights reserved worldwide.
 </div>
 <div className="flex gap-6 text-xs">
 <a href="#" className="text-gray-300 hover:text-gray-900 transition-colors">Privacy Policy</a>
 <a href="#" className="text-gray-300 hover:text-gray-900 transition-colors">Terms of Service</a>
 <a href="#" className="text-gray-300 hover:text-gray-900 transition-colors">Cookie Settings</a>
 <a href="#" className="text-gray-300 hover:text-gray-900 transition-colors">Accessibility</a>
 </div>
 </div>
 </div>
 </div>
 </footer>
 );
};

// Block metadata and structure for tree mapping
MegaFooter.blockMeta = {
 id: 'footer-5',
 name: 'Mega Footer',
 category: 'footers',
 height: 'h-96',
 defaultData: {
 companyName: 'Your Company',
 tagline: 'Building the future of technology',
 description: 'We empower businesses worldwide with cutting-edge solutions, innovative tools, and exceptional support to achieve their goals.',
 copyright: '2024',
 newsletterTitle: 'Stay Updated',
 newsletterPlaceholder: 'Your email address',
 newsletterButton: 'Subscribe',
 newsletterSubtext: 'Join 10,000+ subscribers',
 sections: [
 { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Security', 'Changelog', 'Roadmap', 'API', 'Mobile App'] },
 { title: 'Solutions', links: ['Enterprise', 'Startups', 'Agencies', 'Freelancers', 'Developers', 'Education', 'Non-Profit'] },
 { title: 'Resources', links: ['Documentation', 'API Docs', 'Guides', 'Tutorials', 'Video Library', 'Webinars', 'Community'] },
 { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Partners', 'Contact', 'Investors'] },
 { title: 'Support', links: ['Help Center', 'Status', 'Report Issue', 'Feature Request', 'Contact Support', 'Live Chat'] }
 ],
 socialLinks: [
 { name: 'Twitter', icon: '🐦' },
 { name: 'LinkedIn', icon: '💼' },
 { name: 'GitHub', icon: '⚙️' },
 { name: 'Discord', icon: '💬' },
 { name: 'YouTube', icon: '📹' },
 { name: 'Instagram', icon: '📷' }
 ],
 stats: [
 { value: '50K+', label: 'Customers' },
 { value: '99.99%', label: 'Uptime' },
 { value: '150+', label: 'Countries' },
 { value: '24/7', label: 'Support' }
 ],
 contactInfo: { email: 'contact@company.com', phone: '+1 (555) 123-4567', address: '123 Tech Street, San Francisco, CA 94105' }
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'mega-footer-root',
 tag: 'footer',
 label: 'Footer Container',
 className: 'w-full bg-gray-900 flex items-center justify-center px-8 py-12',
 children: [
 {
 id: 'mega-footer-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'max-w-7xl w-full',
 children: [
 {
 id: 'mega-footer-grid',
 tag: 'div',
 label: 'Grid Layout',
 className: 'grid grid-cols-7 gap-6 mb-8',
 children: [
 {
 id: 'mega-footer-brand',
 tag: 'div',
 label: 'Brand Section',
 className: 'col-span-2',
 children: [
 {
 id: 'mega-footer-company',
 tag: 'div',
 label: 'Company Name',
 content: data.companyName || 'Your Company',
 className: 'font-extrabold text-gray-900 text-4xl mb-3',
 editable: true
 },
 {
 id: 'mega-footer-tagline',
 tag: 'p',
 label: 'Tagline',
 content: data.tagline || 'Building the future of technology',
 className: 'text-gray-300 text-lg font-bold mb-3',
 editable: true
 },
 {
 id: 'mega-footer-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'We empower businesses worldwide with cutting-edge solutions, innovative tools, and exceptional support to achieve their goals.',
 className: 'text-gray-300 text-sm leading-relaxed mb-6',
 editable: true
 },
 {
 id: 'mega-footer-newsletter',
 tag: 'div',
 label: 'Newsletter Section',
 className: 'mb-6',
 children: [
 {
 id: 'mega-footer-newsletter-title',
 tag: 'h4',
 label: 'Newsletter Title',
 content: data.newsletterTitle || 'Stay Updated',
 className: 'text-gray-900 font-bold mb-3 text-sm',
 editable: true
 },
 {
 id: 'mega-footer-newsletter-subtext',
 tag: 'p',
 label: 'Newsletter Subtext',
 content: data.newsletterSubtext || 'Join 10,000+ subscribers',
 className: 'text-gray-300 text-xs',
 editable: true
 }
 ]
 },
 {
 id: 'mega-footer-stats',
 tag: 'div',
 label: 'Stats Grid',
 className: 'grid grid-cols-2 gap-2',
 children: (data.stats || MegaFooter.blockMeta.defaultData.stats).map((stat, index) => ({
 id: `mega-footer-stat-${index}`,
 tag: 'div',
 label: `Stat: ${stat.label}`,
 className: 'bg-gray-800 rounded-lg p-2 text-center border border-gray-700',
 children: [
 {
 id: `mega-footer-stat-value-${index}`,
 tag: 'div',
 label: 'Value',
 content: stat.value,
 className: 'text-gray-900 font-bold text-lg',
 editable: true
 },
 {
 id: `mega-footer-stat-label-${index}`,
 tag: 'div',
 label: 'Label',
 content: stat.label,
 className: 'text-gray-300 text-xs',
 editable: true
 }
 ]
 }))
 }
 ]
 },
 ...(data.sections || MegaFooter.blockMeta.defaultData.sections).map((section, index) => ({
 id: `mega-footer-section-${index}`,
 tag: 'div',
 label: `Section: ${section.title}`,
 children: [
 {
 id: `mega-footer-section-title-${index}`,
 tag: 'h3',
 label: 'Section Title',
 content: section.title,
 className: 'font-bold text-gray-900 mb-4 text-xs uppercase tracking-wider',
 editable: true
 },
 {
 id: `mega-footer-section-links-${index}`,
 tag: 'div',
 label: 'Link Group',
 className: 'space-y-2',
 children: section.links.map((link, idx) => ({
 id: `mega-footer-link-${index}-${idx}`,
 tag: 'a',
 label: `Link: ${link}`,
 content: link,
 className: 'block text-gray-300 hover:text-gray-900 transition-colors text-xs',
 editable: true
 }))
 }
 ]
 }))
 ]
 },
 {
 id: 'mega-footer-middle',
 tag: 'div',
 label: 'Middle Section',
 className: 'border-t border-gray-800 pt-6 pb-6',
 children: [
 {
 id: 'mega-footer-middle-content',
 tag: 'div',
 label: 'Middle Content',
 className: 'flex justify-between items-center',
 children: [
 {
 id: 'mega-footer-social',
 tag: 'div',
 label: 'Social Links',
 className: 'flex gap-6',
 children: (data.socialLinks || MegaFooter.blockMeta.defaultData.socialLinks).map((social, index) => ({
 id: `mega-footer-social-${index}`,
 tag: 'a',
 label: `Social: ${social.name}`,
 className: 'group flex flex-col items-center',
 children: [
 {
 id: `mega-footer-social-icon-wrapper-${index}`,
 tag: 'div',
 label: 'Icon Wrapper',
 className: 'bg-gray-800 rounded-full p-3 group-hover:bg-gray-700 transition-all transform group-hover:scale-110',
 children: [
 {
 id: `mega-footer-social-icon-${index}`,
 tag: 'span',
 label: 'Icon',
 content: social.icon,
 className: 'text-2xl',
 editable: true
 }
 ]
 },
 {
 id: `mega-footer-social-name-${index}`,
 tag: 'span',
 label: 'Name',
 content: social.name,
 className: 'text-xs text-gray-300 mt-1 font-medium',
 editable: true
 }
 ]
 }))
 },
 {
 id: 'mega-footer-contact',
 tag: 'div',
 label: 'Contact Info',
 className: 'text-right',
 children: [
 {
 id: 'mega-footer-contact-email',
 tag: 'div',
 label: 'Email',
 content: data.contactInfo?.email || 'contact@company.com',
 className: 'text-xs text-gray-300 mb-1',
 editable: true
 },
 {
 id: 'mega-footer-contact-phone',
 tag: 'div',
 label: 'Phone',
 content: data.contactInfo?.phone || '+1 (555) 123-4567',
 className: 'text-xs text-gray-300 mb-1',
 editable: true
 },
 {
 id: 'mega-footer-contact-address',
 tag: 'div',
 label: 'Address',
 content: data.contactInfo?.address || '123 Tech Street, San Francisco, CA 94105',
 className: 'text-xs text-gray-300',
 editable: true
 }
 ]
 }
 ]
 }
 ]
 },
 {
 id: 'mega-footer-bottom',
 tag: 'div',
 label: 'Bottom Section',
 className: 'border-t border-gray-800 pt-4',
 children: [
 {
 id: 'mega-footer-bottom-content',
 tag: 'div',
 label: 'Bottom Content',
 className: 'flex justify-between items-center',
 children: [
 {
 id: 'mega-footer-copyright',
 tag: 'div',
 label: 'Copyright',
 content: `© ${data.copyright || '2024'} ${data.companyName || 'Your Company'}. All rights reserved worldwide.`,
 className: 'text-gray-300 text-xs',
 editable: true
 },
 {
 id: 'mega-footer-legal-links',
 tag: 'div',
 label: 'Legal Links',
 className: 'flex gap-6 text-xs',
 children: [
 {
 id: 'mega-footer-legal-privacy',
 tag: 'a',
 label: 'Privacy Link',
 content: 'Privacy Policy',
 className: 'text-gray-300 hover:text-gray-900 transition-colors',
 editable: true
 },
 {
 id: 'mega-footer-legal-terms',
 tag: 'a',
 label: 'Terms Link',
 content: 'Terms of Service',
 className: 'text-gray-300 hover:text-gray-900 transition-colors',
 editable: true
 },
 {
 id: 'mega-footer-legal-cookies',
 tag: 'a',
 label: 'Cookie Link',
 content: 'Cookie Settings',
 className: 'text-gray-300 hover:text-gray-900 transition-colors',
 editable: true
 },
 {
 id: 'mega-footer-legal-accessibility',
 tag: 'a',
 label: 'Accessibility Link',
 content: 'Accessibility',
 className: 'text-gray-300 hover:text-gray-900 transition-colors',
 editable: true
 }
 ]
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

export default MegaFooter;
