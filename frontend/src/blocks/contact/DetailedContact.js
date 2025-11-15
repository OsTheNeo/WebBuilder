import React from 'react';

const DetailedContact = ({ data = {} }) => {
  const {
    title = 'Get In Touch With Us',
    subtitle = 'Multiple ways to reach our team',
    description = 'Choose the best way to contact us. We\'re here to help you succeed.',
    departments = [
      {
        name: 'Sales',
        icon: '💼',
        email: 'sales@company.com',
        phone: '+1 (555) 123-4567',
        hours: 'Mon-Fri, 9AM-6PM EST',
        description: 'Learn about our products and pricing'
      },
      {
        name: 'Support',
        icon: '🛟',
        email: 'support@company.com',
        phone: '+1 (555) 234-5678',
        hours: '24/7 Support Available',
        description: 'Get help with technical issues'
      },
      {
        name: 'Partnerships',
        icon: '🤝',
        email: 'partners@company.com',
        phone: '+1 (555) 345-6789',
        hours: 'Mon-Fri, 10AM-5PM EST',
        description: 'Explore partnership opportunities'
      }
    ],
    offices = [
      {
        city: 'San Francisco',
        address: '123 Market St, Suite 400, San Francisco, CA 94102',
        icon: '🌉',
        isHeadquarters: true
      },
      {
        city: 'New York',
        address: '456 5th Avenue, Floor 12, New York, NY 10001',
        icon: '🗽',
        isHeadquarters: false
      }
    ],
    socialLinks = [
      { name: 'Twitter', icon: '🐦', url: '#', followers: '50K' },
      { name: 'LinkedIn', icon: '💼', url: '#', followers: '25K' },
      { name: 'GitHub', icon: '⚙️', url: '#', followers: '15K' },
      { name: 'Discord', icon: '💬', url: '#', followers: '10K' }
    ]
  } = data;

  return (
    <div className="w-full h-80 bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 flex items-center justify-center px-8 py-10">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-white mb-3">{title}</h2>
          <p className="text-2xl text-orange-100 mb-2">{subtitle}</p>
          <p className="text-lg text-orange-200 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Departments */}
          {departments.map((dept, index) => (
            <div key={index} className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 border-2 border-white/25 hover:bg-white/20 transition-all">
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">{dept.icon}</div>
                <h3 className="font-bold text-white text-xl mb-2">{dept.name}</h3>
                <p className="text-orange-100 text-sm mb-3">{dept.description}</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-white">
                  <span>📧</span>
                  <span>{dept.email}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <span>📞</span>
                  <span>{dept.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-orange-200">
                  <span>🕒</span>
                  <span>{dept.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Office Locations */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20">
            <h3 className="font-bold text-white text-xl mb-4 flex items-center gap-2">
              <span>📍</span>
              <span>Our Offices</span>
            </h3>
            <div className="space-y-3">
              {offices.map((office, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-3">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{office.icon}</span>
                    <div className="flex-1">
                      <div className="font-bold text-white mb-1">
                        {office.city}
                        {office.isHeadquarters && (
                          <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">HQ</span>
                        )}
                      </div>
                      <p className="text-orange-100 text-sm">{office.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form & Social */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20">
            <h3 className="font-bold text-white text-xl mb-4">Quick Contact</h3>
            <div className="space-y-2 mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-orange-200 border border-white/30 focus:outline-none focus:border-white text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-orange-200 border border-white/30 focus:outline-none focus:border-white text-sm"
              />
              <textarea
                placeholder="Message"
                rows="2"
                className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-orange-200 border border-white/30 focus:outline-none focus:border-white text-sm resize-none"
              />
              <button className="w-full bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all shadow-lg">
                Send Message
              </button>
            </div>

            {/* Social Media */}
            <div className="pt-4 border-t border-white/20">
              <h4 className="text-white font-semibold text-sm mb-3">Follow Us</h4>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} className="bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-all flex items-center gap-2">
                    <span className="text-2xl">{social.icon}</span>
                    <div>
                      <div className="text-white text-sm font-semibold">{social.name}</div>
                      <div className="text-orange-200 text-xs">{social.followers}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedContact;
