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
        icon: '👩‍💼',
        bio: 'Former VP at Microsoft with 20+ years of experience in enterprise software. Leading our mission to transform the industry.',
        expertise: ['Strategy', 'Leadership', 'Growth'],
        social: { linkedin: '#', twitter: '#', email: '#' }
      },
      {
        name: 'James Rodriguez',
        role: 'Chief Technology Officer',
        icon: '👨‍💻',
        bio: 'Ex-Google engineer who architected systems serving billions. Passionate about building scalable, reliable infrastructure.',
        expertise: ['Architecture', 'Cloud', 'AI/ML'],
        social: { linkedin: '#', twitter: '#', email: '#' }
      },
      {
        name: 'Sophia Kim',
        role: 'Chief Design Officer',
        icon: '👩‍🎨',
        bio: 'Award-winning designer from Apple. Obsessed with creating intuitive, beautiful user experiences that delight customers.',
        expertise: ['UX/UI', 'Branding', 'Product'],
        social: { linkedin: '#', twitter: '#', email: '#' }
      },
      {
        name: 'Michael Chen',
        role: 'VP of Engineering',
        icon: '👨‍🔧',
        bio: 'Built engineering teams at Amazon and Uber. Expert in scaling organizations and delivering high-quality products.',
        expertise: ['DevOps', 'Teams', 'Quality'],
        social: { linkedin: '#', twitter: '#', email: '#' }
      },
      {
        name: 'Emily Davis',
        role: 'VP of Marketing',
        icon: '👩‍💼',
        bio: 'Growth marketing expert from Salesforce. Proven track record of building brands and driving customer acquisition.',
        expertise: ['Marketing', 'Growth', 'Brand'],
        social: { linkedin: '#', twitter: '#', email: '#' }
      },
      {
        name: 'Daniel Martinez',
        role: 'VP of Customer Success',
        icon: '👨‍💼',
        bio: 'Customer success leader from Stripe. Committed to ensuring every customer achieves their goals with our platform.',
        expertise: ['Support', 'Success', 'Training'],
        social: { linkedin: '#', twitter: '#', email: '#' }
      }
    ]
  } = data;

  return (
    <div className="w-full h-80 bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 flex items-center justify-center px-8 py-10">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-white mb-3">{title}</h2>
          <p className="text-2xl text-teal-100 mb-2">{subtitle}</p>
          <p className="text-lg text-teal-200 max-w-3xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/25 hover:bg-white/20 transition-all hover:scale-105">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-6xl">{member.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-xl leading-tight mb-1">{member.name}</h3>
                  <p className="text-teal-200 font-semibold mb-2">{member.role}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="bg-teal-900/40 text-teal-100 text-xs px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-teal-50 text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="flex gap-3 pt-3 border-t border-white/10">
                <a href={member.social.linkedin} className="text-teal-100 hover:text-white transition-colors text-xs font-semibold">
                  💼 LinkedIn
                </a>
                <a href={member.social.twitter} className="text-teal-100 hover:text-white transition-colors text-xs font-semibold">
                  🐦 Twitter
                </a>
                <a href={member.social.email} className="text-teal-100 hover:text-white transition-colors text-xs font-semibold">
                  ✉️ Email
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XLTeam;
