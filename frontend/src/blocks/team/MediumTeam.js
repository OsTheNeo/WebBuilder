import React from 'react';

const MediumTeam = ({ data = {} }) => {
 const {
 title = 'Meet the Team',
 subtitle = 'The people behind our success',
 members = [
 { name: 'Sarah Johnson', role: 'CEO & Founder', initials: 'SJ', color: 'bg-teal-600', bio: 'Leading with vision' },
 { name: 'Mike Chen', role: 'CTO', initials: 'MC', color: 'bg-teal-700', bio: 'Building the future' },
 { name: 'Emma Davis', role: 'Design Lead', initials: 'ED', color: 'bg-teal-800', bio: 'Creating experiences' },
 { name: 'Alex Rodriguez', role: 'Marketing', initials: 'AR', color: 'bg-cyan-600', bio: 'Spreading the word' }
 ]
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-6">
 <div className="w-full">
 <div className="text-center mb-6">
 <h2 className="text-3xl font-bold text-gray-900 mb-1">{title}</h2>
 <p className="text-gray-600">{subtitle}</p>
 </div>
 <div className="grid grid-cols-4 gap-4">
 {members.map((member, index) => (
 <div key={index} className="bg-white/15 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/25 transition-all hover:scale-105">
 <div className={`w-16 ${member.color} rounded-full flex items-center justify-center text-gray-900 font-bold text-xl mx-auto mb-2`}>
 {member.initials}
 </div>
 <div className="font-bold text-gray-900 text-lg">{member.name}</div>
 <div className="text-teal-200 text-sm font-semibold mb-1">{member.role}</div>
 <div className="text-gray-600 text-xs italic">{member.bio}</div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
MediumTeam.blockMeta = {
 id: 'team-2',
 name: 'Medium Team',
 category: 'team',
 height: 'h-48',
 defaultData: {
 title: 'Meet the Team',
 subtitle: 'The people behind our success',
 members: [
 { name: 'Sarah Johnson', role: 'CEO & Founder', initials: 'SJ', color: 'bg-teal-600', bio: 'Leading with vision' },
 { name: 'Mike Chen', role: 'CTO', initials: 'MC', color: 'bg-teal-700', bio: 'Building the future' },
 { name: 'Emma Davis', role: 'Design Lead', initials: 'ED', color: 'bg-teal-800', bio: 'Creating experiences' },
 { name: 'Alex Rodriguez', role: 'Marketing', initials: 'AR', color: 'bg-cyan-600', bio: 'Spreading the word' }
 ]
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'medium-team-root',
 tag: 'section',
 label: 'Team Section',
 className: 'w-full flex items-center justify-center px-8 py-6',
 children: [
 {
 id: 'medium-team-container',
 tag: 'div',
 label: 'Container',
 className: 'w-full',
 children: [
 {
 id: 'medium-team-header',
 tag: 'div',
 label: 'Header',
 className: 'text-center mb-6',
 children: [
 {
 id: 'medium-team-title',
 tag: 'h2',
 label: 'Section Title',
 content: data.title || 'Meet the Team',
 className: 'text-3xl font-bold text-gray-900 mb-1',
 editable: true
 },
 {
 id: 'medium-team-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'The people behind our success',
 className: 'text-gray-600',
 editable: true
 }
 ]
 },
 {
 id: 'medium-team-grid',
 tag: 'div',
 label: 'Team Grid',
 className: 'grid grid-cols-4 gap-4',
 children: (data.members || MediumTeam.blockMeta.defaultData.members).map((member, index) => ({
 id: `medium-team-member-${index}`,
 tag: 'div',
 label: `Team Member ${index + 1}`,
 className: 'bg-white/15 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/25 transition-all hover:scale-105',
 children: [
 {
 id: `medium-team-avatar-${index}`,
 tag: 'div',
 label: `Avatar ${index + 1}`,
 content: member.initials,
 className: `w-16 ${member.color} rounded-full flex items-center justify-center text-gray-900 font-bold text-xl mx-auto mb-2`,
 editable: true
 },
 {
 id: `medium-team-name-${index}`,
 tag: 'div',
 label: `Name ${index + 1}`,
 content: member.name,
 className: 'font-bold text-gray-900 text-lg',
 editable: true
 },
 {
 id: `medium-team-role-${index}`,
 tag: 'div',
 label: `Role ${index + 1}`,
 content: member.role,
 className: 'text-teal-200 text-sm font-semibold mb-1',
 editable: true
 },
 {
 id: `medium-team-bio-${index}`,
 tag: 'div',
 label: `Bio ${index + 1}`,
 content: member.bio,
 className: 'text-gray-600 text-xs italic',
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

export default MediumTeam;
