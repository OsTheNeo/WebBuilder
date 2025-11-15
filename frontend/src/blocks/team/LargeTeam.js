import React from 'react';

const LargeTeam = ({ data = {} }) => {
  const {
    title = 'Our Amazing Team',
    subtitle = 'Meet the talented people driving innovation',
    members = [
      {
        name: 'Jennifer Smith',
        role: 'Chief Executive Officer',
        icon: '👩‍💼',
        bio: '15+ years of industry experience leading global teams',
        social: { linkedin: '#', twitter: '#' }
      },
      {
        name: 'David Park',
        role: 'Chief Technology Officer',
        icon: '👨‍💻',
        bio: 'Former Google engineer, passionate about scalable systems',
        social: { linkedin: '#', twitter: '#' }
      },
      {
        name: 'Lisa Wang',
        role: 'Head of Design',
        icon: '👩‍🎨',
        bio: 'Award-winning designer focused on user experience',
        social: { linkedin: '#', twitter: '#' }
      },
      {
        name: 'Marcus Johnson',
        role: 'VP of Engineering',
        icon: '👨‍🔧',
        bio: 'Building robust, reliable, and innovative solutions',
        social: { linkedin: '#', twitter: '#' }
      },
      {
        name: 'Emily Chen',
        role: 'Head of Marketing',
        icon: '👩‍💼',
        bio: 'Growth expert with a track record of success',
        social: { linkedin: '#', twitter: '#' }
      },
      {
        name: 'Robert Taylor',
        role: 'Customer Success Lead',
        icon: '👨‍💼',
        bio: 'Dedicated to customer satisfaction and retention',
        social: { linkedin: '#', twitter: '#' }
      }
    ]
  } = data;

  return (
    <div className="w-full h-64 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center px-8 py-8">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
          <p className="text-xl text-teal-100">{subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              <div className="flex items-start gap-4 mb-3">
                <div className="text-5xl">{member.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg leading-tight">{member.name}</h3>
                  <p className="text-teal-200 text-sm font-semibold">{member.role}</p>
                </div>
              </div>
              <p className="text-teal-50 text-sm leading-relaxed mb-3">{member.bio}</p>
              <div className="flex gap-3">
                <a href={member.social.linkedin} className="text-white hover:text-teal-200 transition-colors text-sm">
                  💼 LinkedIn
                </a>
                <a href={member.social.twitter} className="text-white hover:text-teal-200 transition-colors text-sm">
                  🐦 Twitter
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LargeTeam;
