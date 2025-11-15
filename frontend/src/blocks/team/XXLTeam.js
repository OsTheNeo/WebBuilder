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
        role: 'Chief Executive Officer & Co-Founder',
        icon: '👩‍💼',
        bio: 'Former VP of Product at Google, MBA from Stanford. Led teams that built products used by billions. Passionate about democratizing technology.',
        longBio: '20+ years in tech leadership',
        expertise: ['Strategy', 'Product', 'Leadership', 'AI'],
        achievements: ['Forbes 40 Under 40', 'TechCrunch Founder'],
        social: { linkedin: '#', twitter: '#', email: '#', website: '#' }
      },
      {
        name: 'Dr. James Anderson',
        role: 'Chief Technology Officer & Co-Founder',
        icon: '👨‍💻',
        bio: 'Ph.D. in Computer Science from MIT. Former Principal Engineer at Amazon Web Services. Built systems handling 100M+ requests/second.',
        longBio: 'Expert in distributed systems',
        expertise: ['Cloud', 'Architecture', 'Security', 'DevOps'],
        achievements: ['ACM Fellow', '15 Patents'],
        social: { linkedin: '#', twitter: '#', email: '#', website: '#' }
      },
      {
        name: 'Isabella Garcia',
        role: 'Chief Design Officer',
        icon: '👩‍🎨',
        bio: 'Former Design Director at Apple. Led the design of award-winning products. Believer in design that makes technology accessible to everyone.',
        longBio: 'Pioneer in human-centered design',
        expertise: ['UX/UI', 'Branding', 'Product Design', 'Research'],
        achievements: ['Red Dot Award', 'iF Design Award'],
        social: { linkedin: '#', twitter: '#', email: '#', website: '#' }
      },
      {
        name: 'Marcus Thompson',
        role: 'Chief Operating Officer',
        icon: '👨‍💼',
        bio: 'Ex-McKinsey consultant and former COO at Salesforce. Expert in scaling operations and building high-performance organizations.',
        longBio: 'Operational excellence expert',
        expertise: ['Operations', 'Strategy', 'Scaling', 'Process'],
        achievements: ['MBA Harvard', 'Best COO 2023'],
        social: { linkedin: '#', twitter: '#', email: '#', website: '#' }
      },
      {
        name: 'Dr. Rachel Kim',
        role: 'Chief Data & AI Officer',
        icon: '👩‍💻',
        bio: 'Ph.D. in Machine Learning from Stanford. Former Research Scientist at DeepMind. Published 50+ papers in top AI conferences.',
        longBio: 'AI researcher and innovator',
        expertise: ['Machine Learning', 'AI', 'Data Science', 'Research'],
        achievements: ['AI Pioneer Award', '50+ Publications'],
        social: { linkedin: '#', twitter: '#', email: '#', website: '#' }
      },
      {
        name: 'Christopher Lee',
        role: 'Chief Financial Officer',
        icon: '👨‍💼',
        bio: 'Former CFO at Stripe and investment banker at Goldman Sachs. Expert in SaaS metrics, fundraising, and strategic finance.',
        longBio: 'Financial strategy expert',
        expertise: ['Finance', 'SaaS Metrics', 'M&A', 'Strategy'],
        achievements: ['CFO of Year', 'CFA Charter'],
        social: { linkedin: '#', twitter: '#', email: '#', website: '#' }
      },
      {
        name: 'Amanda Rodriguez',
        role: 'Chief Marketing Officer',
        icon: '👩‍💼',
        bio: 'Former VP Marketing at HubSpot. Built marketing teams that drove 10x growth. Expert in brand building and customer acquisition.',
        longBio: 'Growth marketing leader',
        expertise: ['Marketing', 'Growth', 'Brand', 'Content'],
        achievements: ['Marketing Leader 2023', 'CMO Award'],
        social: { linkedin: '#', twitter: '#', email: '#', website: '#' }
      },
      {
        name: 'David Patel',
        role: 'Chief Customer Officer',
        icon: '👨‍💼',
        bio: 'Customer success pioneer from Zendesk. Built world-class support organizations. Net Promoter Score consistently above 90.',
        longBio: 'Customer experience expert',
        expertise: ['Customer Success', 'Support', 'Training', 'Community'],
        achievements: ['CX Leader Award', 'NPS Champion'],
        social: { linkedin: '#', twitter: '#', email: '#', website: '#' }
      }
    ]
  } = data;

  return (
    <div className="w-full h-96 bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 flex items-center justify-center px-8 py-12">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-6xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-100">
            {title}
          </h2>
          <p className="text-2xl text-teal-100 font-semibold mb-3">{subtitle}</p>
          <p className="text-xl text-teal-200 max-w-5xl mx-auto leading-relaxed mb-6">{description}</p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/15 backdrop-blur-sm rounded-lg p-3 border border-white/25">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-teal-100 text-xs font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {members.map((member, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border-2 border-white/30 hover:bg-white/20 transition-all hover:scale-105">
              <div className="text-center mb-3">
                <div className="text-5xl mb-2">{member.icon}</div>
                <h3 className="font-bold text-white text-base leading-tight mb-1">{member.name}</h3>
                <p className="text-teal-200 text-xs font-semibold mb-2">{member.role}</p>
                <p className="text-teal-100 text-xs italic mb-2">{member.longBio}</p>
              </div>

              <p className="text-teal-50 text-xs leading-relaxed mb-3 line-clamp-3">{member.bio}</p>

              {/* Expertise */}
              <div className="flex flex-wrap gap-1 mb-2">
                {member.expertise.slice(0, 3).map((skill, idx) => (
                  <span key={idx} className="bg-teal-900/40 text-teal-100 text-xs px-2 py-0.5 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Achievements */}
              <div className="flex flex-wrap gap-1 mb-3">
                {member.achievements.map((achievement, idx) => (
                  <span key={idx} className="bg-yellow-600/30 text-yellow-100 text-xs px-2 py-0.5 rounded-full">
                    🏆 {achievement}
                  </span>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-2 pt-2 border-t border-white/10 justify-center">
                <a href={member.social.linkedin} className="text-teal-100 hover:text-white transition-colors text-lg">
                  💼
                </a>
                <a href={member.social.twitter} className="text-teal-100 hover:text-white transition-colors text-lg">
                  🐦
                </a>
                <a href={member.social.email} className="text-teal-100 hover:text-white transition-colors text-lg">
                  ✉️
                </a>
                <a href={member.social.website} className="text-teal-100 hover:text-white transition-colors text-lg">
                  🌐
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XXLTeam;
