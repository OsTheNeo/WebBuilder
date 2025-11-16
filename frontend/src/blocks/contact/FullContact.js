import React from 'react';

const FullContact = ({ data = {} }) => {
 const {
 title = 'We\'re Here to Help',
 subtitle = 'Reach out to us through any of these channels',
 description = 'Our team is available 24/7 to answer your questions and provide support',
 departments = [
 {
 name: 'Sales Inquiries',
 icon: '💼',
 email: 'sales@company.com',
 phone: '+1 (555) 123-4567',
 hours: 'Mon-Fri, 9AM-6PM EST',
 description: 'Questions about products, pricing, and demos',
 responseTime: 'Within 2 hours'
 },
 {
 name: 'Technical Support',
 icon: '🛟',
 email: 'support@company.com',
 phone: '+1 (555) 234-5678',
 hours: '24/7 Available',
 description: 'Help with technical issues and troubleshooting',
 responseTime: 'Within 30 minutes'
 },
 {
 name: 'Enterprise Solutions',
 icon: '🏢',
 email: 'enterprise@company.com',
 phone: '+1 (555) 345-6789',
 hours: 'Mon-Fri, 9AM-6PM EST',
 description: 'Custom solutions for large organizations',
 responseTime: 'Within 4 hours'
 },
 {
 name: 'Partnerships',
 icon: '🤝',
 email: 'partners@company.com',
 phone: '+1 (555) 456-7890',
 hours: 'Mon-Fri, 10AM-5PM EST',
 description: 'Collaboration and partnership opportunities',
 responseTime: 'Within 1 business day'
 }
 ],
 offices = [
 {
 city: 'San Francisco',
 country: 'USA',
 address: '123 Market Street, Suite 400, San Francisco, CA 94102',
 icon: '🌉',
 isHeadquarters: true,
 timezone: 'PST (UTC-8)'
 },
 {
 city: 'New York',
 country: 'USA',
 address: '456 5th Avenue, Floor 12, New York, NY 10001',
 icon: '🗽',
 isHeadquarters: false,
 timezone: 'EST (UTC-5)'
 },
 {
 city: 'London',
 country: 'UK',
 address: '789 Oxford Street, London W1D 2HG',
 icon: '🇬🇧',
 isHeadquarters: false,
 timezone: 'GMT (UTC+0)'
 },
 {
 city: 'Tokyo',
 country: 'Japan',
 address: '321 Shibuya, Tokyo 150-0002',
 icon: '🗼',
 isHeadquarters: false,
 timezone: 'JST (UTC+9)'
 }
 ],
 socialLinks = [
 { name: 'Twitter', icon: '🐦', url: '#', followers: '100K+', handle: '@company' },
 { name: 'LinkedIn', icon: '💼', url: '#', followers: '50K+', handle: 'company' },
 { name: 'GitHub', icon: '⚙️', url: '#', followers: '25K+', handle: 'company' },
 { name: 'Discord', icon: '💬', url: '#', followers: '15K+', handle: 'company' },
 { name: 'YouTube', icon: '📹', url: '#', followers: '30K+', handle: 'company' },
 { name: 'Instagram', icon: '📷', url: '#', followers: '40K+', handle: '@company' }
 ],
 faqs = [
 { question: 'Response time?', answer: 'Within 24 hours' },
 { question: 'Support languages?', answer: 'English, Spanish, French, Japanese' }
 ]
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-12">
 <div className="max-w-7xl w-full">
 <div className="text-center mb-8">
 <h2 className="text-6xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent">
 {title}
 </h2>
 <p className="text-2xl text-orange-100 font-semibold mb-2">{subtitle}</p>
 <p className="text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed">{description}</p>
 </div>

 <div className="grid grid-cols-7 gap-4">
 {/* Left Side - Departments (4 cols) */}
 <div className="col-span-4 space-y-3">
 {departments.map((dept, index) => (
 <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border-2 border-gray-300/30 hover:bg-white/20 transition-all flex gap-4">
 <div className="text-4xl">{dept.icon}</div>
 <div className="flex-1">
 <h3 className="font-bold text-gray-900 text-lg mb-1">{dept.name}</h3>
 <p className="text-orange-100 text-xs mb-2">{dept.description}</p>
 <div className="grid grid-cols-2 gap-2 text-xs">
 <div className="flex items-center gap-1 text-gray-900">
 <span>📧</span>
 <span>{dept.email}</span>
 </div>
 <div className="flex items-center gap-1 text-gray-900">
 <span>📞</span>
 <span>{dept.phone}</span>
 </div>
 <div className="flex items-center gap-1 text-orange-200">
 <span>🕒</span>
 <span>{dept.hours}</span>
 </div>
 <div className="flex items-center gap-1 text-orange-200">
 <span>⚡</span>
 <span>{dept.responseTime}</span>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* Right Side (3 cols) */}
 <div className="col-span-3 space-y-3">
 {/* Office Locations */}
 <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border-2 border-gray-300/30">
 <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
 <span>📍</span>
 <span>Global Offices</span>
 </h3>
 <div className="space-y-2">
 {offices.map((office, index) => (
 <div key={index} className="bg-white/10 rounded-lg p-2 text-xs">
 <div className="flex items-start gap-2">
 <span className="text-xl">{office.icon}</span>
 <div className="flex-1">
 <div className="font-bold text-gray-900 flex items-center gap-2">
 {office.city}, {office.country}
 {office.isHeadquarters && (
 <span className="bg-orange-500 text-gray-900 text-xs px-1.5 py-0.5 rounded">HQ</span>
 )}
 </div>
 <p className="text-orange-100 leading-tight mb-1">{office.address}</p>
 <p className="text-orange-200 text-xs">{office.timezone}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Contact Form */}
 <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border-2 border-gray-300/30">
 <h3 className="font-bold text-gray-900 text-lg mb-3">Quick Contact</h3>
 <div className="space-y-2">
 <input
 type="text"
 placeholder="Name"
 className="w-full px-3 py-2 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-xs"
 />
 <input
 type="email"
 placeholder="Email"
 className="w-full px-3 py-2 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-xs"
 />
 <button className="w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50 transition-all shadow-lg text-sm">
 Send Message
 </button>
 </div>

 {/* Social Media Grid */}
 <div className="pt-3 border-t border-gray-300/20 mt-3">
 <h4 className="text-gray-900 font-semibold text-sm mb-2">Connect With Us</h4>
 <div className="grid grid-cols-3 gap-1">
 {socialLinks.map((social, index) => (
 <a key={index} href={social.url} className="bg-white/10 rounded p-1.5 hover:bg-white/20 transition-all text-center">
 <span className="text-xl block">{social.icon}</span>
 <div className="text-gray-900 text-xs font-semibold">{social.name}</div>
 <div className="text-orange-200 text-xs">{social.followers}</div>
 </a>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
FullContact.blockMeta = {
 id: 'contact-5',
 name: 'Full Contact',
 category: 'contact',
 height: 'h-96',
 defaultData: {
 title: 'We\'re Here to Help',
 subtitle: 'Reach out to us through any of these channels',
 description: 'Our team is available 24/7 to answer your questions and provide support',
 departments: [
 {
 name: 'Sales Inquiries',
 icon: '💼',
 email: 'sales@company.com',
 phone: '+1 (555) 123-4567',
 hours: 'Mon-Fri, 9AM-6PM EST',
 description: 'Questions about products, pricing, and demos',
 responseTime: 'Within 2 hours'
 },
 {
 name: 'Technical Support',
 icon: '🛟',
 email: 'support@company.com',
 phone: '+1 (555) 234-5678',
 hours: '24/7 Available',
 description: 'Help with technical issues and troubleshooting',
 responseTime: 'Within 30 minutes'
 },
 {
 name: 'Enterprise Solutions',
 icon: '🏢',
 email: 'enterprise@company.com',
 phone: '+1 (555) 345-6789',
 hours: 'Mon-Fri, 9AM-6PM EST',
 description: 'Custom solutions for large organizations',
 responseTime: 'Within 4 hours'
 },
 {
 name: 'Partnerships',
 icon: '🤝',
 email: 'partners@company.com',
 phone: '+1 (555) 456-7890',
 hours: 'Mon-Fri, 10AM-5PM EST',
 description: 'Collaboration and partnership opportunities',
 responseTime: 'Within 1 business day'
 }
 ],
 offices: [
 {
 city: 'San Francisco',
 country: 'USA',
 address: '123 Market Street, Suite 400, San Francisco, CA 94102',
 icon: '🌉',
 isHeadquarters: true,
 timezone: 'PST (UTC-8)'
 },
 {
 city: 'New York',
 country: 'USA',
 address: '456 5th Avenue, Floor 12, New York, NY 10001',
 icon: '🗽',
 isHeadquarters: false,
 timezone: 'EST (UTC-5)'
 },
 {
 city: 'London',
 country: 'UK',
 address: '789 Oxford Street, London W1D 2HG',
 icon: '🇬🇧',
 isHeadquarters: false,
 timezone: 'GMT (UTC+0)'
 },
 {
 city: 'Tokyo',
 country: 'Japan',
 address: '321 Shibuya, Tokyo 150-0002',
 icon: '🗼',
 isHeadquarters: false,
 timezone: 'JST (UTC+9)'
 }
 ],
 socialLinks: [
 { name: 'Twitter', icon: '🐦', url: '#', followers: '100K+', handle: '@company' },
 { name: 'LinkedIn', icon: '💼', url: '#', followers: '50K+', handle: 'company' },
 { name: 'GitHub', icon: '⚙️', url: '#', followers: '25K+', handle: 'company' },
 { name: 'Discord', icon: '💬', url: '#', followers: '15K+', handle: 'company' },
 { name: 'YouTube', icon: '📹', url: '#', followers: '30K+', handle: 'company' },
 { name: 'Instagram', icon: '📷', url: '#', followers: '40K+', handle: '@company' }
 ]
 },
 getTree: (data = {}) => {
 const departments = data.departments || [];
 const offices = data.offices || [];
 const socials = data.socialLinks || [];

 return {
 id: 'full-contact-root',
 tag: 'section',
 label: 'Contact Section',
 className: 'w-full flex items-center justify-center px-8 py-12',
 children: [
 {
 id: 'full-contact-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'max-w-7xl w-full',
 children: [
 {
 id: 'full-contact-header',
 tag: 'div',
 label: 'Header',
 className: 'text-center mb-8',
 children: [
 {
 id: 'full-contact-title',
 tag: 'h2',
 label: 'Title',
 content: data.title || 'We\'re Here to Help',
 className: 'text-6xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent',
 editable: true
 },
 {
 id: 'full-contact-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'Reach out to us through any of these channels',
 className: 'text-2xl text-orange-100 font-semibold mb-2',
 editable: true
 },
 {
 id: 'full-contact-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'Our team is available 24/7 to answer your questions and provide support',
 className: 'text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed',
 editable: true
 }
 ]
 },
 {
 id: 'full-contact-main-grid',
 tag: 'div',
 label: 'Main Grid',
 className: 'grid grid-cols-7 gap-4',
 children: [
 {
 id: 'full-contact-departments',
 tag: 'div',
 label: 'Departments',
 className: 'col-span-4 space-y-3',
 children: departments.map((dept, index) => ({
 id: `full-contact-dept-${index}`,
 tag: 'div',
 label: dept.name,
 className: 'bg-white/10 backdrop-blur-xl rounded-xl p-4 border-2 border-gray-300/30 hover:bg-white/20 transition-all flex gap-4',
 children: [
 {
 id: `full-contact-dept-icon-${index}`,
 tag: 'div',
 label: 'Icon',
 content: dept.icon,
 className: 'text-4xl',
 editable: false
 },
 {
 id: `full-contact-dept-details-${index}`,
 tag: 'div',
 label: 'Details',
 className: 'flex-1',
 children: [
 {
 id: `full-contact-dept-name-${index}`,
 tag: 'h3',
 label: 'Name',
 content: dept.name,
 className: 'font-bold text-gray-900 text-lg mb-1',
 editable: true
 },
 {
 id: `full-contact-dept-desc-${index}`,
 tag: 'p',
 label: 'Description',
 content: dept.description,
 className: 'text-orange-100 text-xs mb-2',
 editable: true
 },
 {
 id: `full-contact-dept-info-${index}`,
 tag: 'div',
 label: 'Contact Info',
 className: 'grid grid-cols-2 gap-2 text-xs',
 children: [
 {
 id: `full-contact-dept-email-${index}`,
 tag: 'div',
 label: 'Email',
 className: 'flex items-center gap-1 text-gray-900',
 children: [
 {
 id: `full-contact-dept-email-icon-${index}`,
 tag: 'span',
 content: '📧',
 editable: false
 },
 {
 id: `full-contact-dept-email-value-${index}`,
 tag: 'span',
 content: dept.email,
 editable: true
 }
 ]
 },
 {
 id: `full-contact-dept-phone-${index}`,
 tag: 'div',
 label: 'Phone',
 className: 'flex items-center gap-1 text-gray-900',
 children: [
 {
 id: `full-contact-dept-phone-icon-${index}`,
 tag: 'span',
 content: '📞',
 editable: false
 },
 {
 id: `full-contact-dept-phone-value-${index}`,
 tag: 'span',
 content: dept.phone,
 editable: true
 }
 ]
 },
 {
 id: `full-contact-dept-hours-${index}`,
 tag: 'div',
 label: 'Hours',
 className: 'flex items-center gap-1 text-orange-200',
 children: [
 {
 id: `full-contact-dept-hours-icon-${index}`,
 tag: 'span',
 content: '🕒',
 editable: false
 },
 {
 id: `full-contact-dept-hours-value-${index}`,
 tag: 'span',
 content: dept.hours,
 editable: true
 }
 ]
 },
 {
 id: `full-contact-dept-response-${index}`,
 tag: 'div',
 label: 'Response Time',
 className: 'flex items-center gap-1 text-orange-200',
 children: [
 {
 id: `full-contact-dept-response-icon-${index}`,
 tag: 'span',
 content: '⚡',
 editable: false
 },
 {
 id: `full-contact-dept-response-value-${index}`,
 tag: 'span',
 content: dept.responseTime,
 editable: true
 }
 ]
 }
 ]
 }
 ]
 }
 ]
 }))
 },
 {
 id: 'full-contact-right-panel',
 tag: 'div',
 label: 'Right Panel',
 className: 'col-span-3 space-y-3',
 children: [
 {
 id: 'full-contact-offices',
 tag: 'div',
 label: 'Office Locations',
 className: 'bg-white/10 backdrop-blur-xl rounded-xl p-4 border-2 border-gray-300/30',
 children: [
 {
 id: 'full-contact-offices-title',
 tag: 'h3',
 label: 'Offices Title',
 className: 'font-bold text-gray-900 text-lg mb-3 flex items-center gap-2',
 children: [
 {
 id: 'full-contact-offices-icon',
 tag: 'span',
 content: '📍',
 editable: false
 },
 {
 id: 'full-contact-offices-text',
 tag: 'span',
 content: 'Global Offices',
 editable: true
 }
 ]
 },
 {
 id: 'full-contact-offices-list',
 tag: 'div',
 label: 'Offices List',
 className: 'space-y-2',
 children: offices.map((office, index) => ({
 id: `full-contact-office-${index}`,
 tag: 'div',
 label: `${office.city}, ${office.country}`,
 className: 'bg-white/10 rounded-lg p-2 text-xs',
 children: [
 {
 id: `full-contact-office-wrapper-${index}`,
 tag: 'div',
 label: 'Office Wrapper',
 className: 'flex items-start gap-2',
 children: [
 {
 id: `full-contact-office-icon-${index}`,
 tag: 'span',
 label: 'Icon',
 content: office.icon,
 className: 'text-xl',
 editable: false
 },
 {
 id: `full-contact-office-details-${index}`,
 tag: 'div',
 label: 'Details',
 className: 'flex-1',
 children: [
 {
 id: `full-contact-office-city-${index}`,
 tag: 'div',
 label: 'City',
 content: `${office.city}, ${office.country}${office.isHeadquarters ? ' (HQ)' : ''}`,
 className: 'font-bold text-gray-900 flex items-center gap-2',
 editable: true
 },
 {
 id: `full-contact-office-address-${index}`,
 tag: 'p',
 label: 'Address',
 content: office.address,
 className: 'text-orange-100 leading-tight mb-1',
 editable: true
 },
 {
 id: `full-contact-office-timezone-${index}`,
 tag: 'p',
 label: 'Timezone',
 content: office.timezone,
 className: 'text-orange-200 text-xs',
 editable: true
 }
 ]
 }
 ]
 }
 ]
 }))
 }
 ]
 },
 {
 id: 'full-contact-form-social',
 tag: 'div',
 label: 'Form & Social',
 className: 'bg-white/10 backdrop-blur-xl rounded-xl p-4 border-2 border-gray-300/30',
 children: [
 {
 id: 'full-contact-form-title',
 tag: 'h3',
 label: 'Form Title',
 content: 'Quick Contact',
 className: 'font-bold text-gray-900 text-lg mb-3',
 editable: true
 },
 {
 id: 'full-contact-form',
 tag: 'div',
 label: 'Form Fields',
 className: 'space-y-2',
 children: [
 {
 id: 'full-contact-form-name',
 tag: 'input',
 label: 'Name Input',
 className: 'w-full px-3 py-2 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-xs',
 editable: false
 },
 {
 id: 'full-contact-form-email',
 tag: 'input',
 label: 'Email Input',
 className: 'w-full px-3 py-2 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-xs',
 editable: false
 },
 {
 id: 'full-contact-form-button',
 tag: 'button',
 label: 'Submit Button',
 content: 'Send Message',
 className: 'w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50 transition-all shadow-lg text-sm',
 editable: true
 }
 ]
 },
 {
 id: 'full-contact-social',
 tag: 'div',
 label: 'Social Media',
 className: 'pt-3 border-t border-gray-300/20 mt-3',
 children: [
 {
 id: 'full-contact-social-title',
 tag: 'h4',
 label: 'Social Title',
 content: 'Connect With Us',
 className: 'text-gray-900 font-semibold text-sm mb-2',
 editable: true
 },
 {
 id: 'full-contact-social-grid',
 tag: 'div',
 label: 'Social Grid',
 className: 'grid grid-cols-3 gap-1',
 children: socials.map((social, index) => ({
 id: `full-contact-social-${index}`,
 tag: 'a',
 label: social.name,
 className: 'bg-white/10 rounded p-1.5 hover:bg-white/20 transition-all text-center',
 children: [
 {
 id: `full-contact-social-icon-${index}`,
 tag: 'span',
 label: 'Icon',
 content: social.icon,
 className: 'text-xl block',
 editable: false
 },
 {
 id: `full-contact-social-name-${index}`,
 tag: 'div',
 label: 'Name',
 content: social.name,
 className: 'text-gray-900 text-xs font-semibold',
 editable: true
 },
 {
 id: `full-contact-social-followers-${index}`,
 tag: 'div',
 label: 'Followers',
 content: social.followers,
 className: 'text-orange-200 text-xs',
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
 }
 ]
 }
 ]
 };
 }
};

export default FullContact;
