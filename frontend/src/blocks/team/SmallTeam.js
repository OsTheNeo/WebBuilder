import React from 'react';

const SmallTeam = ({ data = {} }) => {
 const {
 title = 'Our Team',
 members = [
 { name: 'Alice Johnson', role: 'CEO', initials: 'AJ', color: 'bg-teal-600' },
 { name: 'Bob Smith', role: 'CTO', initials: 'BS', color: 'bg-teal-700' },
 { name: 'Carol Davis', role: 'Designer', initials: 'CD', color: 'bg-teal-800' }
 ]
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-16">
 <div className="max-w-5xl w-full">
 <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">{title}</h2>
 <div className="grid grid-cols-3 gap-4">
 {members.map((member, index) => (
 <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/30 transition-all">
 <div className={`w-12 ${member.color} rounded-full flex items-center justify-center text-gray-900 font-bold text-lg mx-auto mb-2`}>
 {member.initials}
 </div>
 <div className="font-bold text-gray-900">{member.name}</div>
 <div className="text-gray-600 text-sm">{member.role}</div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
SmallTeam.blockMeta = {
 id: 'team-1',
 name: 'Small Team',
 category: 'team',
 height: 'h-32',
 defaultData: {
 title: 'Our Team',
 members: [
 { name: 'Alice Johnson', role: 'CEO', initials: 'AJ', color: 'bg-teal-600' },
 { name: 'Bob Smith', role: 'CTO', initials: 'BS', color: 'bg-teal-700' },
 { name: 'Carol Davis', role: 'Designer', initials: 'CD', color: 'bg-teal-800' }
 ]
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'small-team-root',
 tag: 'section',
 label: 'Team Section',
 className: 'w-full flex items-center justify-center px-8',
 children: [
 {
 id: 'small-team-container',
 tag: 'div',
 label: 'Container',
 className: 'max-w-5xl w-full',
 children: [
 {
 id: 'small-team-title',
 tag: 'h2',
 label: 'Section Title',
 content: data.title || 'Our Team',
 className: 'text-2xl font-bold text-gray-900 text-center mb-4',
 editable: true
 },
 {
 id: 'small-team-grid',
 tag: 'div',
 label: 'Team Grid',
 className: 'grid grid-cols-3 gap-4',
 children: (data.members || SmallTeam.blockMeta.defaultData.members).map((member, index) => ({
 id: `small-team-member-${index}`,
 tag: 'div',
 label: `Team Member ${index + 1}`,
 className: 'bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/30 transition-all',
 children: [
 {
 id: `small-team-avatar-${index}`,
 tag: 'div',
 label: `Avatar ${index + 1}`,
 content: member.initials,
 className: `w-12 ${member.color} rounded-full flex items-center justify-center text-gray-900 font-bold text-lg mx-auto mb-2`,
 editable: true
 },
 {
 id: `small-team-name-${index}`,
 tag: 'div',
 label: `Name ${index + 1}`,
 content: member.name,
 className: 'font-bold text-gray-900',
 editable: true
 },
 {
 id: `small-team-role-${index}`,
 tag: 'div',
 label: `Role ${index + 1}`,
 content: member.role,
 className: 'text-gray-600 text-sm',
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

export default SmallTeam;
