import React from 'react';

const MediumTeam = ({ data = {} }) => {
  const {
    title = 'Meet the Team',
    subtitle = 'The people behind our success',
    members = [
      { name: 'Sarah Johnson', role: 'CEO & Founder', icon: '👩‍💼', bio: 'Leading with vision' },
      { name: 'Mike Chen', role: 'CTO', icon: '👨‍💻', bio: 'Building the future' },
      { name: 'Emma Davis', role: 'Design Lead', icon: '👩‍🎨', bio: 'Creating experiences' },
      { name: 'Alex Rodriguez', role: 'Marketing', icon: '👨‍💼', bio: 'Spreading the word' }
    ]
  } = data;

  return (
    <div className="w-full h-48 bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center px-8 py-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-1">{title}</h2>
          <p className="text-teal-100">{subtitle}</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {members.map((member, index) => (
            <div key={index} className="bg-white/15 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/25 transition-all hover:scale-105">
              <div className="text-5xl mb-2">{member.icon}</div>
              <div className="font-bold text-white text-lg">{member.name}</div>
              <div className="text-teal-200 text-sm font-semibold mb-1">{member.role}</div>
              <div className="text-teal-100 text-xs italic">{member.bio}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediumTeam;
