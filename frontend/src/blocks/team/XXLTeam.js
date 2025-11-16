import React from 'react';

const XXLTeam = ({ data = {} }) => {
 const {
 title = 'World-Class Leadership Team',
 subtitle = 'Industry veterans building the future together',
 description = 'Our leadership team brings together unparalleled expertise from the world\'s most innovative companies',
 stats = [
 { value: '100+', label: 'Years Combined Experience' },
 { value: '15+', label: 'Fortune 500 Companies' },
 { value: '50+', label: 'Patents & Publications' },
 { value: '10+', label: 'Countries Represented' }
 ],
 members = [
 {
 name: 'Dr. Sarah Mitchell',
 role: 'Chief Executive Officer',
 initials: 'SM',
 color: 'bg-teal-600',
 bio: 'Former VP of Product at Google, MBA from Stanford. Led teams that built products used by billions.',
 expertise: ['Strategy', 'Product', 'Leadership'],
 achievements: ['Forbes 40 Under 40', 'TechCrunch Founder']
 },
 {
 name: 'Dr. James Anderson',
 role: 'Chief Technology Officer',
 initials: 'JA',
 color: 'bg-teal-700',
 bio: 'Ph.D. in CS from MIT. Former Principal Engineer at AWS. Built systems handling 100M+ requests/second.',
 expertise: ['Cloud', 'Architecture', 'Security'],
 achievements: ['ACM Fellow', '15 Patents']
 },
 {
 name: 'Isabella Garcia',
 role: 'Chief Design Officer',
 initials: 'IG',
 color: 'bg-teal-800',
 bio: 'Former Design Director at Apple. Led design of award-winning products used worldwide.',
 expertise: ['UX/UI', 'Branding', 'Product Design'],
 achievements: ['Red Dot Award', 'iF Design Award']
 },
 {
 name: 'Marcus Thompson',
 role: 'Chief Operating Officer',
 initials: 'MT',
 color: 'bg-cyan-600',
 bio: 'Ex-McKinsey consultant and former COO at Salesforce. Expert in scaling operations.',
 expertise: ['Operations', 'Strategy', 'Scaling'],
 achievements: ['MBA Harvard', 'Best COO 2023']
 },
 {
 name: 'Dr. Rachel Kim',
 role: 'Chief Data & AI Officer',
 initials: 'RK',
 color: 'bg-cyan-700',
 bio: 'Ph.D. in ML from Stanford. Former Research Scientist at DeepMind. Published 50+ papers.',
 expertise: ['Machine Learning', 'AI', 'Data Science'],
 achievements: ['AI Pioneer Award', '50+ Publications']
 },
 {
 name: 'Christopher Lee',
 role: 'Chief Financial Officer',
 initials: 'CL',
 color: 'bg-cyan-800',
 bio: 'Former CFO at Stripe and investment banker at Goldman Sachs. Expert in SaaS metrics.',
 expertise: ['Finance', 'SaaS Metrics', 'M&A'],
 achievements: ['CFO of Year', 'CFA Charter']
 },
 {
 name: 'Amanda Rodriguez',
 role: 'Chief Marketing Officer',
 initials: 'AR',
 color: 'bg-teal-500',
 bio: 'Former VP Marketing at HubSpot. Built marketing teams that drove 10x growth.',
 expertise: ['Marketing', 'Growth', 'Brand'],
 achievements: ['Marketing Leader 2023', 'CMO Award']
 },
 {
 name: 'David Patel',
 role: 'Chief Customer Officer',
 initials: 'DP',
 color: 'bg-cyan-500',
 bio: 'Customer success pioneer from Zendesk. Net Promoter Score consistently above 90.',
 expertise: ['Customer Success', 'Support', 'Training'],
 achievements: ['CX Leader Award', 'NPS Champion']
 }
 ]
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-12">
 <div className="w-full">
 <div className="text-center mb-8">
 <h2 className="text-6xl font-extrabold text-gray-900 mb-4">
 {title}
 </h2>
 <p className="text-2xl text-gray-600 font-semibold mb-3">{subtitle}</p>
 <p className="text-xl text-teal-200 mx-auto leading-relaxed mb-6">{description}</p>

 {/* Stats */}
 <div className="grid grid-cols-4 gap-4 mx-auto mb-8">
 {stats.map((stat, index) => (
 <div key={index} className="bg-white/15 backdrop-blur-sm rounded-lg p-3 border border-gray-300/25">
 <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
 <div className="text-gray-600 text-xs font-semibold">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>

 <div className="grid grid-cols-4 gap-4">
 {members.map((member, index) => (
 <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border-2 border-gray-300/30 hover:bg-white/20 transition-all hover:scale-105">
 <div className="text-center mb-3">
 <div className={`w-16 ${member.color} rounded-full flex items-center justify-center text-gray-900 font-bold text-lg mx-auto mb-2`}>
 {member.initials}
 </div>
 <h3 className="font-bold text-gray-900 text-base leading-tight mb-1">{member.name}</h3>
 <p className="text-teal-200 text-xs font-semibold mb-2">{member.role}</p>
 </div>

 <p className="text-teal-50 text-xs leading-relaxed mb-3 line-clamp-3">{member.bio}</p>

 {/* Expertise */}
 <div className="flex flex-wrap gap-1 mb-2">
 {member.expertise.slice(0, 3).map((skill, idx) => (
 <span key={idx} className="bg-teal-900/40 text-gray-600 text-xs px-2 py-0.5 rounded-full">
 {skill}
 </span>
 ))}
 </div>

 {/* Achievements */}
 <div className="flex flex-wrap gap-1">
 {member.achievements.map((achievement, idx) => (
 <span key={idx} className="bg-yellow-600/30 text-yellow-100 text-xs px-2 py-0.5 rounded-full">
 {achievement}
 </span>
 ))}
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
XXLTeam.blockMeta = {
 id: 'team-5',
 name: 'XXL Team',
 category: 'team',
 height: 'h-96',
 defaultData: {
 title: 'World-Class Leadership Team',
 subtitle: 'Industry veterans building the future together',
 description: 'Our leadership team brings together unparalleled expertise from the world\'s most innovative companies',
 stats: [
 { value: '100+', label: 'Years Combined Experience' },
 { value: '15+', label: 'Fortune 500 Companies' },
 { value: '50+', label: 'Patents & Publications' },
 { value: '10+', label: 'Countries Represented' }
 ],
 members: [
 {
 name: 'Dr. Sarah Mitchell',
 role: 'Chief Executive Officer',
 initials: 'SM',
 color: 'bg-teal-600',
 bio: 'Former VP of Product at Google, MBA from Stanford. Led teams that built products used by billions.',
 expertise: ['Strategy', 'Product', 'Leadership'],
 achievements: ['Forbes 40 Under 40', 'TechCrunch Founder']
 },
 {
 name: 'Dr. James Anderson',
 role: 'Chief Technology Officer',
 initials: 'JA',
 color: 'bg-teal-700',
 bio: 'Ph.D. in CS from MIT. Former Principal Engineer at AWS. Built systems handling 100M+ requests/second.',
 expertise: ['Cloud', 'Architecture', 'Security'],
 achievements: ['ACM Fellow', '15 Patents']
 },
 {
 name: 'Isabella Garcia',
 role: 'Chief Design Officer',
 initials: 'IG',
 color: 'bg-teal-800',
 bio: 'Former Design Director at Apple. Led design of award-winning products used worldwide.',
 expertise: ['UX/UI', 'Branding', 'Product Design'],
 achievements: ['Red Dot Award', 'iF Design Award']
 },
 {
 name: 'Marcus Thompson',
 role: 'Chief Operating Officer',
 initials: 'MT',
 color: 'bg-cyan-600',
 bio: 'Ex-McKinsey consultant and former COO at Salesforce. Expert in scaling operations.',
 expertise: ['Operations', 'Strategy', 'Scaling'],
 achievements: ['MBA Harvard', 'Best COO 2023']
 },
 {
 name: 'Dr. Rachel Kim',
 role: 'Chief Data & AI Officer',
 initials: 'RK',
 color: 'bg-cyan-700',
 bio: 'Ph.D. in ML from Stanford. Former Research Scientist at DeepMind. Published 50+ papers.',
 expertise: ['Machine Learning', 'AI', 'Data Science'],
 achievements: ['AI Pioneer Award', '50+ Publications']
 },
 {
 name: 'Christopher Lee',
 role: 'Chief Financial Officer',
 initials: 'CL',
 color: 'bg-cyan-800',
 bio: 'Former CFO at Stripe and investment banker at Goldman Sachs. Expert in SaaS metrics.',
 expertise: ['Finance', 'SaaS Metrics', 'M&A'],
 achievements: ['CFO of Year', 'CFA Charter']
 },
 {
 name: 'Amanda Rodriguez',
 role: 'Chief Marketing Officer',
 initials: 'AR',
 color: 'bg-teal-500',
 bio: 'Former VP Marketing at HubSpot. Built marketing teams that drove 10x growth.',
 expertise: ['Marketing', 'Growth', 'Brand'],
 achievements: ['Marketing Leader 2023', 'CMO Award']
 },
 {
 name: 'David Patel',
 role: 'Chief Customer Officer',
 initials: 'DP',
 color: 'bg-cyan-500',
 bio: 'Customer success pioneer from Zendesk. Net Promoter Score consistently above 90.',
 expertise: ['Customer Success', 'Support', 'Training'],
 achievements: ['CX Leader Award', 'NPS Champion']
 }
 ]
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'xxl-team-root',
 tag: 'section',
 label: 'Team Section',
 className: 'w-full flex items-center justify-center px-8 py-12',
 children: [
 {
 id: 'xxl-team-container',
 tag: 'div',
 label: 'Container',
 className: 'w-full',
 children: [
 {
 id: 'xxl-team-header',
 tag: 'div',
 label: 'Header',
 className: 'text-center mb-8',
 children: [
 {
 id: 'xxl-team-title',
 tag: 'h2',
 label: 'Section Title',
 content: data.title || 'World-Class Leadership Team',
 className: 'text-6xl font-extrabold text-gray-900 mb-4',
 editable: true
 },
 {
 id: 'xxl-team-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'Industry veterans building the future together',
 className: 'text-2xl text-gray-600 font-semibold mb-3',
 editable: true
 },
 {
 id: 'xxl-team-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'Our leadership team brings together unparalleled expertise from the world\'s most innovative companies',
 className: 'text-xl text-teal-200 mx-auto leading-relaxed mb-6',
 editable: true
 },
 {
 id: 'xxl-team-stats-grid',
 tag: 'div',
 label: 'Stats Grid',
 className: 'grid grid-cols-4 gap-4 mx-auto mb-8',
 children: (data.stats || XXLTeam.blockMeta.defaultData.stats).map((stat, index) => ({
 id: `xxl-team-stat-${index}`,
 tag: 'div',
 label: `Stat ${index + 1}`,
 className: 'bg-white/15 backdrop-blur-sm rounded-lg p-3 border border-gray-300/25',
 children: [
 {
 id: `xxl-team-stat-value-${index}`,
 tag: 'div',
 label: `Stat Value ${index + 1}`,
 content: stat.value,
 className: 'text-3xl font-bold text-gray-900',
 editable: true
 },
 {
 id: `xxl-team-stat-label-${index}`,
 tag: 'div',
 label: `Stat Label ${index + 1}`,
 content: stat.label,
 className: 'text-gray-600 text-xs font-semibold',
 editable: true
 }
 ]
 }))
 }
 ]
 },
 {
 id: 'xxl-team-grid',
 tag: 'div',
 label: 'Team Grid',
 className: 'grid grid-cols-4 gap-4',
 children: (data.members || XXLTeam.blockMeta.defaultData.members).map((member, index) => ({
 id: `xxl-team-member-${index}`,
 tag: 'div',
 label: `Team Member ${index + 1}`,
 className: 'bg-white/10 backdrop-blur-xl rounded-2xl p-4 border-2 border-gray-300/30 hover:bg-white/20 transition-all hover:scale-105',
 children: [
 {
 id: `xxl-team-member-header-${index}`,
 tag: 'div',
 label: `Member Header ${index + 1}`,
 className: 'text-center mb-3',
 children: [
 {
 id: `xxl-team-avatar-${index}`,
 tag: 'div',
 label: `Avatar ${index + 1}`,
 content: member.initials,
 className: `w-16 ${member.color} rounded-full flex items-center justify-center text-gray-900 font-bold text-lg mx-auto mb-2`,
 editable: true
 },
 {
 id: `xxl-team-name-${index}`,
 tag: 'h3',
 label: `Name ${index + 1}`,
 content: member.name,
 className: 'font-bold text-gray-900 text-base leading-tight mb-1',
 editable: true
 },
 {
 id: `xxl-team-role-${index}`,
 tag: 'p',
 label: `Role ${index + 1}`,
 content: member.role,
 className: 'text-teal-200 text-xs font-semibold mb-2',
 editable: true
 }
 ]
 },
 {
 id: `xxl-team-bio-${index}`,
 tag: 'p',
 label: `Bio ${index + 1}`,
 content: member.bio,
 className: 'text-teal-50 text-xs leading-relaxed mb-3 line-clamp-3',
 editable: true
 },
 {
 id: `xxl-team-expertise-${index}`,
 tag: 'div',
 label: `Expertise Tags ${index + 1}`,
 className: 'flex flex-wrap gap-1 mb-2',
 children: member.expertise.slice(0, 3).map((skill, skillIdx) => ({
 id: `xxl-team-skill-${index}-${skillIdx}`,
 tag: 'span',
 label: `Skill ${skillIdx + 1}`,
 content: skill,
 className: 'bg-teal-900/40 text-gray-600 text-xs px-2 py-0.5 rounded-full',
 editable: true
 }))
 },
 {
 id: `xxl-team-achievements-${index}`,
 tag: 'div',
 label: `Achievements ${index + 1}`,
 className: 'flex flex-wrap gap-1',
 children: member.achievements.map((achievement, achIdx) => ({
 id: `xxl-team-achievement-${index}-${achIdx}`,
 tag: 'span',
 label: `Achievement ${achIdx + 1}`,
 content: achievement,
 className: 'bg-yellow-600/30 text-yellow-100 text-xs px-2 py-0.5 rounded-full',
 editable: true
 }))
 }
 ]
 }))
 }
 ]
 }
 ]
 })
};

export default XXLTeam;
