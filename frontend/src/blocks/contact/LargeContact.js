import React from 'react';

const LargeContact = ({ data = {} }) => {
 const {
 title = 'Let\'s Connect',
 subtitle = 'Have a question? We\'re here to help',
 contactMethods = [
 {
 type: 'Email Us',
 value: 'support@company.com',
 icon: '📧',
 description: 'Response within 24 hours'
 },
 {
 type: 'Call Us',
 value: '+1 (555) 123-4567',
 icon: '📞',
 description: 'Mon-Fri, 9AM-6PM EST'
 },
 {
 type: 'Visit Us',
 value: '123 Main Street, San Francisco, CA 94102',
 icon: '📍',
 description: 'By appointment only'
 },
 {
 type: 'Live Chat',
 value: 'Available now',
 icon: '💬',
 description: 'Average response: 2 min'
 }
 ],
 socialLinks = [
 { name: 'Twitter', icon: '🐦' },
 { name: 'LinkedIn', icon: '💼' },
 { name: 'Facebook', icon: '📘' }
 ]
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-8">
 <div className="max-w-7xl w-full">
 <div className="text-center mb-8">
 <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
 <p className="text-xl text-orange-100">{subtitle}</p>
 </div>

 <div className="grid grid-cols-2 gap-8">
 {/* Contact Methods */}
 <div className="space-y-4">
 {contactMethods.map((method, index) => (
 <div key={index} className="bg-white/15 backdrop-blur-lg rounded-xl p-4 border border-gray-300/20 hover:bg-white/25 transition-all flex items-start gap-4">
 <span className="text-4xl">{method.icon}</span>
 <div className="flex-1">
 <h3 className="font-bold text-gray-900 text-lg mb-1">{method.type}</h3>
 <p className="text-orange-100 font-semibold mb-1">{method.value}</p>
 <p className="text-orange-200 text-sm">{method.description}</p>
 </div>
 </div>
 ))}
 </div>

 {/* Contact Form */}
 <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-gray-300/25">
 <h3 className="text-gray-900 font-bold text-xl mb-4">Send us a message</h3>
 <div className="space-y-3">
 <input
 type="text"
 placeholder="Your Name"
 className="w-full px-4 py-3 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-sm"
 />
 <input
 type="email"
 placeholder="Your Email"
 className="w-full px-4 py-3 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-sm"
 />
 <textarea
 placeholder="Your Message"
 rows="3"
 className="w-full px-4 py-3 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-sm resize-none"
 />
 <button className="w-full bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all shadow-lg">
 Send Message
 </button>
 </div>

 {/* Social Links */}
 <div className="flex gap-4 justify-center mt-6 pt-4 border-t border-gray-300/20">
 {socialLinks.map((social, index) => (
 <a key={index} href="#" className="text-gray-900 hover:text-orange-200 transition-colors flex items-center gap-2">
 <span className="text-2xl">{social.icon}</span>
 <span className="text-sm font-semibold">{social.name}</span>
 </a>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
LargeContact.blockMeta = {
 id: 'contact-3',
 name: 'Large Contact',
 category: 'contact',
 height: 'h-64',
 defaultData: {
 title: 'Let\'s Connect',
 subtitle: 'Have a question? We\'re here to help',
 contactMethods: [
 {
 type: 'Email Us',
 value: 'support@company.com',
 icon: '📧',
 description: 'Response within 24 hours'
 },
 {
 type: 'Call Us',
 value: '+1 (555) 123-4567',
 icon: '📞',
 description: 'Mon-Fri, 9AM-6PM EST'
 },
 {
 type: 'Visit Us',
 value: '123 Main Street, San Francisco, CA 94102',
 icon: '📍',
 description: 'By appointment only'
 },
 {
 type: 'Live Chat',
 value: 'Available now',
 icon: '💬',
 description: 'Average response: 2 min'
 }
 ],
 socialLinks: [
 { name: 'Twitter', icon: '🐦' },
 { name: 'LinkedIn', icon: '💼' },
 { name: 'Facebook', icon: '📘' }
 ]
 },
 getTree: (data = {}) => {
 const methods = data.contactMethods || [
 {
 type: 'Email Us',
 value: 'support@company.com',
 icon: '📧',
 description: 'Response within 24 hours'
 },
 {
 type: 'Call Us',
 value: '+1 (555) 123-4567',
 icon: '📞',
 description: 'Mon-Fri, 9AM-6PM EST'
 },
 {
 type: 'Visit Us',
 value: '123 Main Street, San Francisco, CA 94102',
 icon: '📍',
 description: 'By appointment only'
 },
 {
 type: 'Live Chat',
 value: 'Available now',
 icon: '💬',
 description: 'Average response: 2 min'
 }
 ];

 const socials = data.socialLinks || [
 { name: 'Twitter', icon: '🐦' },
 { name: 'LinkedIn', icon: '💼' },
 { name: 'Facebook', icon: '📘' }
 ];

 return {
 id: 'large-contact-root',
 tag: 'section',
 label: 'Contact Section',
 className: 'w-full flex items-center justify-center px-8 py-8',
 children: [
 {
 id: 'large-contact-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'max-w-7xl w-full',
 children: [
 {
 id: 'large-contact-header',
 tag: 'div',
 label: 'Header',
 className: 'text-center mb-8',
 children: [
 {
 id: 'large-contact-title',
 tag: 'h2',
 label: 'Title',
 content: data.title || 'Let\'s Connect',
 className: 'text-4xl font-bold text-gray-900 mb-2',
 editable: true
 },
 {
 id: 'large-contact-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'Have a question? We\'re here to help',
 className: 'text-xl text-orange-100',
 editable: true
 }
 ]
 },
 {
 id: 'large-contact-grid',
 tag: 'div',
 label: 'Grid Container',
 className: 'grid grid-cols-2 gap-8',
 children: [
 {
 id: 'large-contact-methods',
 tag: 'div',
 label: 'Contact Methods',
 className: 'space-y-4',
 children: methods.map((method, index) => ({
 id: `large-contact-method-${index}`,
 tag: 'div',
 label: `${method.type}`,
 className: 'bg-white/15 backdrop-blur-lg rounded-xl p-4 border border-gray-300/20 hover:bg-white/25 transition-all flex items-start gap-4',
 children: [
 {
 id: `large-contact-method-icon-${index}`,
 tag: 'span',
 label: 'Icon',
 content: method.icon,
 className: 'text-4xl',
 editable: false
 },
 {
 id: `large-contact-method-details-${index}`,
 tag: 'div',
 label: 'Details',
 className: 'flex-1',
 children: [
 {
 id: `large-contact-method-type-${index}`,
 tag: 'h3',
 label: 'Type',
 content: method.type,
 className: 'font-bold text-gray-900 text-lg mb-1',
 editable: true
 },
 {
 id: `large-contact-method-value-${index}`,
 tag: 'p',
 label: 'Value',
 content: method.value,
 className: 'text-orange-100 font-semibold mb-1',
 editable: true
 },
 {
 id: `large-contact-method-description-${index}`,
 tag: 'p',
 label: 'Description',
 content: method.description,
 className: 'text-orange-200 text-sm',
 editable: true
 }
 ]
 }
 ]
 }))
 },
 {
 id: 'large-contact-form',
 tag: 'div',
 label: 'Contact Form',
 className: 'bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-gray-300/25',
 children: [
 {
 id: 'large-contact-form-title',
 tag: 'h3',
 label: 'Form Title',
 content: 'Send us a message',
 className: 'text-gray-900 font-bold text-xl mb-4',
 editable: true
 },
 {
 id: 'large-contact-form-fields',
 tag: 'div',
 label: 'Form Fields',
 className: 'space-y-3',
 children: [
 {
 id: 'large-contact-form-name',
 tag: 'input',
 label: 'Name Input',
 className: 'w-full px-4 py-3 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-sm',
 editable: false
 },
 {
 id: 'large-contact-form-email',
 tag: 'input',
 label: 'Email Input',
 className: 'w-full px-4 py-3 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-sm',
 editable: false
 },
 {
 id: 'large-contact-form-message',
 tag: 'textarea',
 label: 'Message Input',
 className: 'w-full px-4 py-3 rounded-lg bg-white/30 text-gray-900 placeholder-orange-200 border border-gray-300/30 focus:outline-none focus:border-gray-300 text-sm resize-none',
 editable: false
 },
 {
 id: 'large-contact-form-button',
 tag: 'button',
 label: 'Submit Button',
 content: 'Send Message',
 className: 'w-full bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all shadow-lg',
 editable: true
 }
 ]
 },
 {
 id: 'large-contact-social',
 tag: 'div',
 label: 'Social Links',
 className: 'flex gap-4 justify-center mt-6 pt-4 border-t border-gray-300/20',
 children: socials.map((social, index) => ({
 id: `large-contact-social-${index}`,
 tag: 'a',
 label: social.name,
 className: 'text-gray-900 hover:text-orange-200 transition-colors flex items-center gap-2',
 children: [
 {
 id: `large-contact-social-icon-${index}`,
 tag: 'span',
 label: 'Icon',
 content: social.icon,
 className: 'text-2xl',
 editable: false
 },
 {
 id: `large-contact-social-name-${index}`,
 tag: 'span',
 label: 'Name',
 content: social.name,
 className: 'text-sm font-semibold',
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
 };
 }
};

export default LargeContact;
