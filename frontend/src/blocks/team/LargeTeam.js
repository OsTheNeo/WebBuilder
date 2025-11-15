import React from 'react';

const LargeTeam = ({ data = {} }) => {
  const {
    title = 'Our Amazing Team',
    subtitle = 'Meet the talented people driving innovation',
    members = [
      {
        name: 'Jennifer Smith',
        role: 'Chief Executive Officer',
        initials: 'JS',
        color: 'bg-teal-600',
        bio: '15+ years of industry experience leading global teams'
      },
      {
        name: 'David Park',
        role: 'Chief Technology Officer',
        initials: 'DP',
        color: 'bg-teal-700',
        bio: 'Former Google engineer, passionate about scalable systems'
      },
      {
        name: 'Lisa Wang',
        role: 'Head of Design',
        initials: 'LW',
        color: 'bg-teal-800',
        bio: 'Award-winning designer focused on user experience'
      },
      {
        name: 'Marcus Johnson',
        role: 'VP of Engineering',
        initials: 'MJ',
        color: 'bg-cyan-600',
        bio: 'Building robust, reliable, and innovative solutions'
      },
      {
        name: 'Emily Chen',
        role: 'Head of Marketing',
        initials: 'EC',
        color: 'bg-cyan-700',
        bio: 'Growth expert with a track record of success'
      },
      {
        name: 'Robert Taylor',
        role: 'Customer Success Lead',
        initials: 'RT',
        color: 'bg-cyan-800',
        bio: 'Dedicated to customer satisfaction and retention'
      }
    ]
  } = data;

  return (
    <section className="w-full h-64 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center px-8 py-8">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
          <p className="text-xl text-teal-100">{subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              <div className="flex items-start gap-4 mb-3">
                <div className={`w-16 h-16 ${member.color} rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                  {member.initials}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg leading-tight">{member.name}</h3>
                  <p className="text-teal-200 text-sm font-semibold">{member.role}</p>
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
LargeTeam.blockMeta = {
  id: 'team-3',
  name: 'Large Team',
  category: 'team',
  height: 'h-64',
  defaultData: {
    title: 'Our Amazing Team',
    subtitle: 'Meet the talented people driving innovation',
    members: [
      {
        name: 'Jennifer Smith',
        role: 'Chief Executive Officer',
        initials: 'JS',
        color: 'bg-teal-600',
        bio: '15+ years of industry experience leading global teams'
      },
      {
        name: 'David Park',
        role: 'Chief Technology Officer',
        initials: 'DP',
        color: 'bg-teal-700',
        bio: 'Former Google engineer, passionate about scalable systems'
      },
      {
        name: 'Lisa Wang',
        role: 'Head of Design',
        initials: 'LW',
        color: 'bg-teal-800',
        bio: 'Award-winning designer focused on user experience'
      },
      {
        name: 'Marcus Johnson',
        role: 'VP of Engineering',
        initials: 'MJ',
        color: 'bg-cyan-600',
        bio: 'Building robust, reliable, and innovative solutions'
      },
      {
        name: 'Emily Chen',
        role: 'Head of Marketing',
        initials: 'EC',
        color: 'bg-cyan-700',
        bio: 'Growth expert with a track record of success'
      },
      {
        name: 'Robert Taylor',
        role: 'Customer Success Lead',
        initials: 'RT',
        color: 'bg-cyan-800',
        bio: 'Dedicated to customer satisfaction and retention'
      }
    ]
  },
  // Tree structure definition
  getTree: (data = {}) => ({
    id: 'large-team-root',
    tag: 'section',
    label: 'Team Section',
    className: 'w-full h-64 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center px-8 py-8',
    children: [
      {
        id: 'large-team-container',
        tag: 'div',
        label: 'Container',
        className: 'max-w-7xl w-full',
        children: [
          {
            id: 'large-team-header',
            tag: 'div',
            label: 'Header',
            className: 'text-center mb-8',
            children: [
              {
                id: 'large-team-title',
                tag: 'h2',
                label: 'Section Title',
                content: data.title || 'Our Amazing Team',
                className: 'text-4xl font-bold text-white mb-2',
                editable: true
              },
              {
                id: 'large-team-subtitle',
                tag: 'p',
                label: 'Subtitle',
                content: data.subtitle || 'Meet the talented people driving innovation',
                className: 'text-xl text-teal-100',
                editable: true
              }
            ]
          },
          {
            id: 'large-team-grid',
            tag: 'div',
            label: 'Team Grid',
            className: 'grid grid-cols-3 gap-6',
            children: (data.members || LargeTeam.blockMeta.defaultData.members).map((member, index) => ({
              id: `large-team-member-${index}`,
              tag: 'div',
              label: `Team Member ${index + 1}`,
              className: 'bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all hover:scale-105',
              children: [
                {
                  id: `large-team-member-header-${index}`,
                  tag: 'div',
                  label: `Member Header ${index + 1}`,
                  className: 'flex items-start gap-4 mb-3',
                  children: [
                    {
                      id: `large-team-avatar-${index}`,
                      tag: 'div',
                      label: `Avatar ${index + 1}`,
                      content: member.initials,
                      className: `w-16 h-16 ${member.color} rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0`,
                      editable: true
                    },
                    {
                      id: `large-team-info-${index}`,
                      tag: 'div',
                      label: `Info ${index + 1}`,
                      className: 'flex-1',
                      children: [
                        {
                          id: `large-team-name-${index}`,
                          tag: 'h3',
                          label: `Name ${index + 1}`,
                          content: member.name,
                          className: 'font-bold text-white text-lg leading-tight',
                          editable: true
                        },
                        {
                          id: `large-team-role-${index}`,
                          tag: 'p',
                          label: `Role ${index + 1}`,
                          content: member.role,
                          className: 'text-teal-200 text-sm font-semibold',
                          editable: true
                        }
                      ]
                    }
                  ]
                },
                {
                  id: `large-team-bio-${index}`,
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

export default LargeTeam;
