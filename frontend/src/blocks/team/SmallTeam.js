import React from 'react';

const SmallTeam = ({ data = {} }) => {
  const {
    title = 'Our Team',
    members = [
      { name: 'Alice', role: 'CEO', icon: '👩‍💼' },
      { name: 'Bob', role: 'CTO', icon: '👨‍💻' },
      { name: 'Carol', role: 'Designer', icon: '👩‍🎨' }
    ]
  } = data;

  return (
    <div className="w-full h-32 bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center px-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-4">{title}</h2>
        <div className="grid grid-cols-3 gap-4">
          {members.map((member, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/30 transition-all">
              <div className="text-4xl mb-1">{member.icon}</div>
              <div className="font-bold text-white">{member.name}</div>
              <div className="text-teal-100 text-sm">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallTeam;
