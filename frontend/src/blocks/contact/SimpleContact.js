import React from 'react';

const SimpleContact = ({ data = {} }) => {
 const {
 title = 'Get in Touch',
 email = 'hello@company.com',
 phone = '+1 (555) 123-4567'
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-16">
 <div className="w-full text-center">
 <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
 <div className="flex gap-8 justify-center">
 <div className="flex items-center gap-2 text-gray-900">
 <span className="text-xl">📧</span>
 <span className="font-semibold">{email}</span>
 </div>
 <div className="flex items-center gap-2 text-gray-900">
 <span className="text-xl">📞</span>
 <span className="font-semibold">{phone}</span>
 </div>
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
SimpleContact.blockMeta = {
 id: 'contact-1',
 name: 'Simple Contact',
 category: 'contact',
 height: 'h-32',
 defaultData: {
 title: 'Get in Touch',
 email: 'hello@company.com',
 phone: '+1 (555) 123-4567'
 },
 getTree: (data = {}) => ({
 id: 'simple-contact-root',
 tag: 'section',
 label: 'Contact Section',
 className: 'w-full flex items-center justify-center px-8',
 children: [
 {
 id: 'simple-contact-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'w-full text-center',
 children: [
 {
 id: 'simple-contact-title',
 tag: 'h2',
 label: 'Title',
 content: data.title || 'Get in Touch',
 className: 'text-2xl font-bold text-gray-900 mb-3',
 editable: true
 },
 {
 id: 'simple-contact-methods',
 tag: 'div',
 label: 'Contact Methods',
 className: 'flex gap-8 justify-center',
 children: [
 {
 id: 'simple-contact-email-wrapper',
 tag: 'div',
 label: 'Email Wrapper',
 className: 'flex items-center gap-2 text-gray-900',
 children: [
 {
 id: 'simple-contact-email-icon',
 tag: 'span',
 label: 'Email Icon',
 content: '📧',
 className: 'text-xl',
 editable: false
 },
 {
 id: 'simple-contact-email',
 tag: 'span',
 label: 'Email',
 content: data.email || 'hello@company.com',
 className: 'font-semibold',
 editable: true
 }
 ]
 },
 {
 id: 'simple-contact-phone-wrapper',
 tag: 'div',
 label: 'Phone Wrapper',
 className: 'flex items-center gap-2 text-gray-900',
 children: [
 {
 id: 'simple-contact-phone-icon',
 tag: 'span',
 label: 'Phone Icon',
 content: '📞',
 className: 'text-xl',
 editable: false
 },
 {
 id: 'simple-contact-phone',
 tag: 'span',
 label: 'Phone',
 content: data.phone || '+1 (555) 123-4567',
 className: 'font-semibold',
 editable: true
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

export default SimpleContact;
