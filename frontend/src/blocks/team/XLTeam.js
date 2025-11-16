import React from 'react';

const XLTeam = ({ data = {} }) => {
 const {
 title = 'Leadership Team',
 subtitle = 'Experienced leaders dedicated to your success',
 description = 'Our diverse team brings together decades of expertise from leading companies',
 members = [
 {
 name: 'Alexandra Thompson',
 role: 'Chief Executive Officer',
 initials: 'AT',
 color: 'bg-teal-600',
 bio: 'Former VP at Microsoft with 20+ years of experience in enterprise software. Leading our mission to transform the industry.',
 expertise: ['Strategy', 'Leadership', 'Growth']
 },
 {
 name: 'James Rodriguez',
 role: 'Chief Technology Officer',
 initials: 'JR',
 color: 'bg-teal-700',
 bio: 'Ex-Google engineer who architected systems serving billions. Passionate about building scalable, reliable infrastructure.',
 expertise: ['Architecture', 'Cloud', 'AI/ML']
 },
 {
 name: 'Sophia Kim',
 role: 'Chief Design Officer',
 initials: 'SK',
 color: 'bg-teal-800',
 bio: 'Award-winning designer from Apple. Obsessed with creating intuitive, beautiful user experiences that delight customers.',
 expertise: ['UX/UI', 'Branding', 'Product']
 },
 {
 name: 'Michael Chen',
 role: 'VP of Engineering',
 initials: 'MC',
 color: 'bg-cyan-600',
 bio: 'Built engineering teams at Amazon and Uber. Expert in scaling organizations and delivering high-quality products.',
 expertise: ['DevOps', 'Teams', 'Quality']
 },
 {
 name: 'Emily Davis',
 role: 'VP of Marketing',
 initials: 'ED',
 color: 'bg-cyan-700',
 bio: 'Growth marketing expert from Salesforce. Proven track record of building brands and driving customer acquisition.',
 expertise: ['Marketing', 'Growth', 'Brand']
 },
 {
 name: 'Daniel Martinez',
 role: 'VP of Customer Success',
 initials: 'DM',
 color: 'bg-cyan-800',
 bio: 'Customer success leader from Stripe. Committed to ensuring every customer achieves their goals with our platform.',
 expertise: ['Support', 'Success', 'Training']
 }
 ]
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-10">
 <div className="max-w-7xl w-full">
 <div className="text-center mb-10">
 <h2 className="text-5xl font-bold text-gray-900 mb-3">{title}</h2>
 <p className="text-2xl text-gray-600 mb-2">{subtitle}</p>
 <p className="text-lg text-teal-200 max-w-3xl mx-auto">{description}</p>
 </div>
 <div className="grid grid-cols-3 gap-6">
 {members.map((member, index) => (
 <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-gray-300/25 hover:bg-white/20 transition-all hover:scale-105">
 <div className="flex items-start gap-4 mb-4">
 <div className={`w-20 ${member.color} rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl flex-shrink-0`}>
 {member.initials}
 </div>
 <div className="flex-1">
 <h3 className="font-bold text-gray-900 text-xl leading-tight mb-1">{member.name}</h3>
 <p className="text-teal-200 font-semibold mb-2">{member.role}</p>
 <div className="flex flex-wrap gap-1">
 {member.expertise.map((skill, idx) => (
 <span key={idx} className="bg-teal-900/40 text-gray-600 text-xs px-2 py-1 rounded-full">
 {skill}
 </span>
 ))}
 </div>
 </div>
 </div>
 <p className="text-teal-50 text-sm leading-relaxed">{member.bio}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
XLTeam.blockMeta = {
 id: 'team-4',
 name: 'XL Team',
 category: 'team',
 height: 'h-80',
 defaultData: {
 title: 'Leadership Team',
 subtitle: 'Experienced leaders dedicated to your success',
 description: 'Our diverse team brings together decades of expertise from leading companies',
 members: [
 {
 name: 'Alexandra Thompson',
 role: 'Chief Executive Officer',
 initials: 'AT',
 color: 'bg-teal-600',
 bio: 'Former VP at Microsoft with 20+ years of experience in enterprise software. Leading our mission to transform the industry.',
 expertise: ['Strategy', 'Leadership', 'Growth']
 },
 {
 name: 'James Rodriguez',
 role: 'Chief Technology Officer',
 initials: 'JR',
 color: 'bg-teal-700',
 bio: 'Ex-Google engineer who architected systems serving billions. Passionate about building scalable, reliable infrastructure.',
 expertise: ['Architecture', 'Cloud', 'AI/ML']
 },
 {
 name: 'Sophia Kim',
 role: 'Chief Design Officer',
 initials: 'SK',
 color: 'bg-teal-800',
 bio: 'Award-winning designer from Apple. Obsessed with creating intuitive, beautiful user experiences that delight customers.',
 expertise: ['UX/UI', 'Branding', 'Product']
 },
 {
 name: 'Michael Chen',
 role: 'VP of Engineering',
 initials: 'MC',
 color: 'bg-cyan-600',
 bio: 'Built engineering teams at Amazon and Uber. Expert in scaling organizations and delivering high-quality products.',
 expertise: ['DevOps', 'Teams', 'Quality']
 },
 {
 name: 'Emily Davis',
 role: 'VP of Marketing',
 initials: 'ED',
 color: 'bg-cyan-700',
 bio: 'Growth marketing expert from Salesforce. Proven track record of building brands and driving customer acquisition.',
 expertise: ['Marketing', 'Growth', 'Brand']
 },
 {
 name: 'Daniel Martinez',
 role: 'VP of Customer Success',
 initials: 'DM',
 color: 'bg-cyan-800',
 bio: 'Customer success leader from Stripe. Committed to ensuring every customer achieves their goals with our platform.',
 expertise: ['Support', 'Success', 'Training']
 }
 ]
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'xl-team-root',
 tag: 'section',
 label: 'Team Section',
 className: 'w-full flex items-center justify-center px-8 py-10',
 children: [
 {
 id: 'xl-team-container',
 tag: 'div',
 label: 'Container',
 className: 'max-w-7xl w-full',
 children: [
 {
 id: 'xl-team-header',
 tag: 'div',
 label: 'Header',
 className: 'text-center mb-10',
 children: [
 {
 id: 'xl-team-title',
 tag: 'h2',
 label: 'Section Title',
 content: data.title || 'Leadership Team',
 className: 'text-5xl font-bold text-gray-900 mb-3',
 editable: true
 },
 {
 id: 'xl-team-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'Experienced leaders dedicated to your success',
 className: 'text-2xl text-gray-600 mb-2',
 editable: true
 },
 {
 id: 'xl-team-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'Our diverse team brings together decades of expertise from leading companies',
 className: 'text-lg text-teal-200 max-w-3xl mx-auto',
 editable: true
 }
 ]
 },
 {
 id: 'xl-team-grid',
 tag: 'div',
 label: 'Team Grid',
 className: 'grid grid-cols-3 gap-6',
 children: (data.members || XLTeam.blockMeta.defaultData.members).map((member, index) => ({
 id: `xl-team-member-${index}`,
 tag: 'div',
 label: `Team Member ${index + 1}`,
 className: 'bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-gray-300/25 hover:bg-white/20 transition-all hover:scale-105',
 children: [
 {
 id: `xl-team-member-header-${index}`,
 tag: 'div',
 label: `Member Header ${index + 1}`,
 className: 'flex items-start gap-4 mb-4',
 children: [
 {
 id: `xl-team-avatar-${index}`,
 tag: 'div',
 label: `Avatar ${index + 1}`,
 content: member.initials,
 className: `w-20 ${member.color} rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl flex-shrink-0`,
 editable: true
 },
 {
 id: `xl-team-info-${index}`,
 tag: 'div',
 label: `Info ${index + 1}`,
 className: 'flex-1',
 children: [
 {
 id: `xl-team-name-${index}`,
 tag: 'h3',
 label: `Name ${index + 1}`,
 content: member.name,
 className: 'font-bold text-gray-900 text-xl leading-tight mb-1',
 editable: true
 },
 {
 id: `xl-team-role-${index}`,
 tag: 'p',
 label: `Role ${index + 1}`,
 content: member.role,
 className: 'text-teal-200 font-semibold mb-2',
 editable: true
 },
 {
 id: `xl-team-expertise-${index}`,
 tag: 'div',
 label: `Expertise Tags ${index + 1}`,
 className: 'flex flex-wrap gap-1',
 children: member.expertise.map((skill, skillIdx) => ({
 id: `xl-team-skill-${index}-${skillIdx}`,
 tag: 'span',
 label: `Skill ${skillIdx + 1}`,
 content: skill,
 className: 'bg-teal-900/40 text-gray-600 text-xs px-2 py-1 rounded-full',
 editable: true
 }))
 }
 ]
 }
 ]
 },
 {
 id: `xl-team-bio-${index}`,
 tag: 'p',
 label: `Bio ${index + 1}`,
 content: member.bio,
 className: 'text-teal-50 text-sm leading-relaxed',
 editable: true
 }
 ]
 }))
 }
 ]
 }
 ]
 })
};

export default XLTeam;
