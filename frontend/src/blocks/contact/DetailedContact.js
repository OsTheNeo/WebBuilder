import React from 'react';

const DetailedContact = ({ data = {} }) => {
 const {
 title = 'Get In Touch With Us',
 subtitle = 'Multiple ways to reach our team',
 description = 'Choose the best way to contact us. We\'re here to help you succeed.',
 departments = [
 {
 name: 'Sales',
 icon: '💼',
 email: 'sales@company.com',
 phone: '+1 (555) 123-4567',
 hours: 'Mon-Fri, 9AM-6PM EST',
 description: 'Learn about our products and pricing'
 },
 {
 name: 'Support',
 icon: '🛟',
 email: 'support@company.com',
 phone: '+1 (555) 234-5678',
 hours: '24/7 Support Available',
 description: 'Get help with technical issues'
 },
 {
 name: 'Partnerships',
 icon: '🤝',
 email: 'partners@company.com',
 phone: '+1 (555) 345-6789',
 hours: 'Mon-Fri, 10AM-5PM EST',
 description: 'Explore partnership opportunities'
 }
 ],
 offices = [
 {
 city: 'San Francisco',
 address: '123 Market St, Suite 400, San Francisco, CA 94102',
 icon: '🌉',
 isHeadquarters: true
 },
 {
 city: 'New York',
 address: '456 5th Avenue, Floor 12, New York, NY 10001',
 icon: '🗽',
 isHeadquarters: false
 }
 ],
 socialLinks = [
 { name: 'Twitter', icon: '🐦', url: '#', followers: '50K' },
 { name: 'LinkedIn', icon: '💼', url: '#', followers: '25K' },
 { name: 'GitHub', icon: '⚙️', url: '#', followers: '15K' },
 { name: 'Discord', icon: '💬', url: '#', followers: '10K' }
 ]
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-10">
 <div className="w-full">
 <div className="text-center mb-8">
 <h2 className="text-5xl font-bold text-gray-900 mb-3">{title}</h2>
 <p className="text-2xl text-orange-100 mb-2">{subtitle}</p>
 <p className="text-lg text-orange-200 mx-auto">{description}</p>
 </div>

 <div className="grid grid-cols-3 gap-6 mb-6">
 {/* Departments */}
 {departments.map((dept, index) => (
 <div key={index} className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 border-2 border-gray-300/25 hover:bg-white/20 transition-all">
 <div className="text-center mb-4">
 <div className="text-5xl mb-2">{dept.icon}</div>
 <h3 className="font-bold text-gray-900 text-xl mb-2">{dept.name}</h3>
 <p className="text-orange-100 text-sm mb-3">{dept.description}</p>
 </div>
 <div className="space-y-2 text-sm">
 <div className="flex items-center gap-2 text-gray-900">
 <span>📧</span>
 <span>{dept.email}</span>
 </div>
 <div className="flex items-center gap-2 text-gray-900">
 <span>📞</span>
 <span>{dept.phone}</span>
 </div>
 <div className="flex items-center gap-2 text-orange-200">
 <span>🕒</span>
 <span>{dept.hours}</span>
 </div>
 </div>
 </div>
 ))}
 </div>

 <div className="grid grid-cols-2 gap-6">
 {/* Office Locations */}
 <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-gray-300/20">
 <h3 className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2">
 <span>📍</span>
 <span>Our Offices</span>
 </h3>
 <div className="space-y-3">
 {offices.map((office, index) => (
 <div key={index} className="bg-white/10 rounded-lg p-3">
 <div className="flex items-start gap-3">
 <span className="text-3xl">{office.icon}</span>
 <div className="flex-1">
 <div className="font-bold text-gray-900 mb-1">
 {office.city}
 {office.isHeadquarters && (
 <span className="ml-2 bg-orange-500 text-gray-900 text-xs px-2 py-1 rounded-full">HQ</span>
 )}
 </div>
 <p className="text-orange-100 text-sm">{office.address}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Contact Form & Social */}
 <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-gray-300/20">
 <h3 className="font-bold text-gray-900 text-xl mb-4">Quick Contact</h3>
 <div className="space-y-2 mb-4">
 <input
 type="text"
 placeholder="Name"
 className="w-full px-4 py-2 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-sm"
 />
 <input
 type="email"
 placeholder="Email"
 className="w-full px-4 py-2 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-sm"
 />
 <textarea
 placeholder="Message"
 rows="2"
 className="w-full px-4 py-2 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-sm resize-none"
 />
 <button className="w-full bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all shadow-lg">
 Send Message
 </button>
 </div>

 {/* Social Media */}
 <div className="pt-4 border-t border-gray-300/20">
 <h4 className="text-gray-900 font-semibold text-sm mb-3">Follow Us</h4>
 <div className="grid grid-cols-2 gap-2">
 {socialLinks.map((social, index) => (
 <a key={index} href={social.url} className="bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-all flex items-center gap-2">
 <span className="text-2xl">{social.icon}</span>
 <div>
 <div className="text-gray-900 text-sm font-semibold">{social.name}</div>
 <div className="text-orange-200 text-xs">{social.followers}</div>
 </div>
 </a>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
DetailedContact.blockMeta = {
 id: 'contact-4',
 name: 'Detailed Contact',
 category: 'contact',
 height: 'h-80',
 defaultData: {
 title: 'Get In Touch With Us',
 subtitle: 'Multiple ways to reach our team',
 description: 'Choose the best way to contact us. We\'re here to help you succeed.',
 departments: [
 {
 name: 'Sales',
 icon: '💼',
 email: 'sales@company.com',
 phone: '+1 (555) 123-4567',
 hours: 'Mon-Fri, 9AM-6PM EST',
 description: 'Learn about our products and pricing'
 },
 {
 name: 'Support',
 icon: '🛟',
 email: 'support@company.com',
 phone: '+1 (555) 234-5678',
 hours: '24/7 Support Available',
 description: 'Get help with technical issues'
 },
 {
 name: 'Partnerships',
 icon: '🤝',
 email: 'partners@company.com',
 phone: '+1 (555) 345-6789',
 hours: 'Mon-Fri, 10AM-5PM EST',
 description: 'Explore partnership opportunities'
 }
 ],
 offices: [
 {
 city: 'San Francisco',
 address: '123 Market St, Suite 400, San Francisco, CA 94102',
 icon: '🌉',
 isHeadquarters: true
 },
 {
 city: 'New York',
 address: '456 5th Avenue, Floor 12, New York, NY 10001',
 icon: '🗽',
 isHeadquarters: false
 }
 ],
 socialLinks: [
 { name: 'Twitter', icon: '🐦', url: '#', followers: '50K' },
 { name: 'LinkedIn', icon: '💼', url: '#', followers: '25K' },
 { name: 'GitHub', icon: '⚙️', url: '#', followers: '15K' },
 { name: 'Discord', icon: '💬', url: '#', followers: '10K' }
 ]
 },
 getTree: (data = {}) => {
 const departments = data.departments || [];
 const offices = data.offices || [];
 const socials = data.socialLinks || [];

 return {
 id: 'detailed-contact-root',
 tag: 'section',
 label: 'Contact Section',
 className: 'w-full flex items-center justify-center px-8 py-10',
 children: [
 {
 id: 'detailed-contact-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'w-full',
 children: [
 {
 id: 'detailed-contact-header',
 tag: 'div',
 label: 'Header',
 className: 'text-center mb-8',
 children: [
 {
 id: 'detailed-contact-title',
 tag: 'h2',
 label: 'Title',
 content: data.title || 'Get In Touch With Us',
 className: 'text-5xl font-bold text-gray-900 mb-3',
 editable: true
 },
 {
 id: 'detailed-contact-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'Multiple ways to reach our team',
 className: 'text-2xl text-orange-100 mb-2',
 editable: true
 },
 {
 id: 'detailed-contact-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'Choose the best way to contact us. We\'re here to help you succeed.',
 className: 'text-lg text-orange-200 mx-auto',
 editable: true
 }
 ]
 },
 {
 id: 'detailed-contact-departments',
 tag: 'div',
 label: 'Departments Grid',
 className: 'grid grid-cols-3 gap-6 mb-6',
 children: departments.map((dept, index) => ({
 id: `detailed-contact-dept-${index}`,
 tag: 'div',
 label: dept.name,
 className: 'bg-white/15 backdrop-blur-lg rounded-2xl p-5 border-2 border-gray-300/25 hover:bg-white/20 transition-all',
 children: [
 {
 id: `detailed-contact-dept-header-${index}`,
 tag: 'div',
 label: 'Department Header',
 className: 'text-center mb-4',
 children: [
 {
 id: `detailed-contact-dept-icon-${index}`,
 tag: 'div',
 label: 'Icon',
 content: dept.icon,
 className: 'text-5xl mb-2',
 editable: false
 },
 {
 id: `detailed-contact-dept-name-${index}`,
 tag: 'h3',
 label: 'Name',
 content: dept.name,
 className: 'font-bold text-gray-900 text-xl mb-2',
 editable: true
 },
 {
 id: `detailed-contact-dept-desc-${index}`,
 tag: 'p',
 label: 'Description',
 content: dept.description,
 className: 'text-orange-100 text-sm mb-3',
 editable: true
 }
 ]
 },
 {
 id: `detailed-contact-dept-info-${index}`,
 tag: 'div',
 label: 'Contact Info',
 className: 'space-y-2 text-sm',
 children: [
 {
 id: `detailed-contact-dept-email-${index}`,
 tag: 'div',
 label: 'Email',
 className: 'flex items-center gap-2 text-gray-900',
 children: [
 {
 id: `detailed-contact-dept-email-icon-${index}`,
 tag: 'span',
 content: '📧',
 editable: false
 },
 {
 id: `detailed-contact-dept-email-value-${index}`,
 tag: 'span',
 content: dept.email,
 editable: true
 }
 ]
 },
 {
 id: `detailed-contact-dept-phone-${index}`,
 tag: 'div',
 label: 'Phone',
 className: 'flex items-center gap-2 text-gray-900',
 children: [
 {
 id: `detailed-contact-dept-phone-icon-${index}`,
 tag: 'span',
 content: '📞',
 editable: false
 },
 {
 id: `detailed-contact-dept-phone-value-${index}`,
 tag: 'span',
 content: dept.phone,
 editable: true
 }
 ]
 },
 {
 id: `detailed-contact-dept-hours-${index}`,
 tag: 'div',
 label: 'Hours',
 className: 'flex items-center gap-2 text-orange-200',
 children: [
 {
 id: `detailed-contact-dept-hours-icon-${index}`,
 tag: 'span',
 content: '🕒',
 editable: false
 },
 {
 id: `detailed-contact-dept-hours-value-${index}`,
 tag: 'span',
 content: dept.hours,
 editable: true
 }
 ]
 }
 ]
 }
 ]
 }))
 },
 {
 id: 'detailed-contact-bottom',
 tag: 'div',
 label: 'Bottom Grid',
 className: 'grid grid-cols-2 gap-6',
 children: [
 {
 id: 'detailed-contact-offices',
 tag: 'div',
 label: 'Office Locations',
 className: 'bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-gray-300/20',
 children: [
 {
 id: 'detailed-contact-offices-title',
 tag: 'h3',
 label: 'Offices Title',
 className: 'font-bold text-gray-900 text-xl mb-4 flex items-center gap-2',
 children: [
 {
 id: 'detailed-contact-offices-icon',
 tag: 'span',
 content: '📍',
 editable: false
 },
 {
 id: 'detailed-contact-offices-text',
 tag: 'span',
 content: 'Our Offices',
 editable: true
 }
 ]
 },
 {
 id: 'detailed-contact-offices-list',
 tag: 'div',
 label: 'Offices List',
 className: 'space-y-3',
 children: offices.map((office, index) => ({
 id: `detailed-contact-office-${index}`,
 tag: 'div',
 label: office.city,
 className: 'bg-white/10 rounded-lg p-3',
 children: [
 {
 id: `detailed-contact-office-wrapper-${index}`,
 tag: 'div',
 label: 'Office Wrapper',
 className: 'flex items-start gap-3',
 children: [
 {
 id: `detailed-contact-office-icon-${index}`,
 tag: 'span',
 label: 'Icon',
 content: office.icon,
 className: 'text-3xl',
 editable: false
 },
 {
 id: `detailed-contact-office-details-${index}`,
 tag: 'div',
 label: 'Details',
 className: 'flex-1',
 children: [
 {
 id: `detailed-contact-office-city-${index}`,
 tag: 'div',
 label: 'City',
 content: office.city + (office.isHeadquarters ? ' (HQ)' : ''),
 className: 'font-bold text-gray-900 mb-1',
 editable: true
 },
 {
 id: `detailed-contact-office-address-${index}`,
 tag: 'p',
 label: 'Address',
 content: office.address,
 className: 'text-orange-100 text-sm',
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
 id: 'detailed-contact-form-social',
 tag: 'div',
 label: 'Form & Social',
 className: 'bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-gray-300/20',
 children: [
 {
 id: 'detailed-contact-form-title',
 tag: 'h3',
 label: 'Form Title',
 content: 'Quick Contact',
 className: 'font-bold text-gray-900 text-xl mb-4',
 editable: true
 },
 {
 id: 'detailed-contact-form',
 tag: 'div',
 label: 'Form Fields',
 className: 'space-y-2 mb-4',
 children: [
 {
 id: 'detailed-contact-form-name',
 tag: 'input',
 label: 'Name Input',
 className: 'w-full px-4 py-2 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-sm',
 editable: false
 },
 {
 id: 'detailed-contact-form-email',
 tag: 'input',
 label: 'Email Input',
 className: 'w-full px-4 py-2 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-sm',
 editable: false
 },
 {
 id: 'detailed-contact-form-message',
 tag: 'textarea',
 label: 'Message Input',
 className: 'w-full px-4 py-2 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-sm resize-none',
 editable: false
 },
 {
 id: 'detailed-contact-form-button',
 tag: 'button',
 label: 'Submit Button',
 content: 'Send Message',
 className: 'w-full bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all shadow-lg',
 editable: true
 }
 ]
 },
 {
 id: 'detailed-contact-social',
 tag: 'div',
 label: 'Social Media',
 className: 'pt-4 border-t border-gray-300/20',
 children: [
 {
 id: 'detailed-contact-social-title',
 tag: 'h4',
 label: 'Social Title',
 content: 'Follow Us',
 className: 'text-gray-900 font-semibold text-sm mb-3',
 editable: true
 },
 {
 id: 'detailed-contact-social-grid',
 tag: 'div',
 label: 'Social Grid',
 className: 'grid grid-cols-2 gap-2',
 children: socials.map((social, index) => ({
 id: `detailed-contact-social-${index}`,
 tag: 'a',
 label: social.name,
 className: 'bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-all flex items-center gap-2',
 children: [
 {
 id: `detailed-contact-social-icon-${index}`,
 tag: 'span',
 label: 'Icon',
 content: social.icon,
 className: 'text-2xl',
 editable: false
 },
 {
 id: `detailed-contact-social-info-${index}`,
 tag: 'div',
 label: 'Info',
 children: [
 {
 id: `detailed-contact-social-name-${index}`,
 tag: 'div',
 label: 'Name',
 content: social.name,
 className: 'text-gray-900 text-sm font-semibold',
 editable: true
 },
 {
 id: `detailed-contact-social-followers-${index}`,
 tag: 'div',
 label: 'Followers',
 content: social.followers,
 className: 'text-orange-200 text-xs',
 editable: true
 }
 ]
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
 };
 }
};

export default DetailedContact;
