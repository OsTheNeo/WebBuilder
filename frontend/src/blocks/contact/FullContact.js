import React from 'react';

const FullContact = ({ data = {} }) => {
  const {
    title = 'We\'re Here to Help',
    subtitle = 'Reach out to us through any of these channels',
    description = 'Our team is available 24/7 to answer your questions and provide support',
    departments = [
      {
        name: 'Sales Inquiries',
        icon: '💼',
        email: 'sales@company.com',
        phone: '+1 (555) 123-4567',
        hours: 'Mon-Fri, 9AM-6PM EST',
        description: 'Questions about products, pricing, and demos',
        responseTime: 'Within 2 hours'
      },
      {
        name: 'Technical Support',
        icon: '🛟',
        email: 'support@company.com',
        phone: '+1 (555) 234-5678',
        hours: '24/7 Available',
        description: 'Help with technical issues and troubleshooting',
        responseTime: 'Within 30 minutes'
      },
      {
        name: 'Enterprise Solutions',
        icon: '🏢',
        email: 'enterprise@company.com',
        phone: '+1 (555) 345-6789',
        hours: 'Mon-Fri, 9AM-6PM EST',
        description: 'Custom solutions for large organizations',
        responseTime: 'Within 4 hours'
      },
      {
        name: 'Partnerships',
        icon: '🤝',
        email: 'partners@company.com',
        phone: '+1 (555) 456-7890',
        hours: 'Mon-Fri, 10AM-5PM EST',
        description: 'Collaboration and partnership opportunities',
        responseTime: 'Within 1 business day'
      }
    ],
    offices = [
      {
        city: 'San Francisco',
        country: 'USA',
        address: '123 Market Street, Suite 400, San Francisco, CA 94102',
        icon: '🌉',
        isHeadquarters: true,
        timezone: 'PST (UTC-8)'
      },
      {
        city: 'New York',
        country: 'USA',
        address: '456 5th Avenue, Floor 12, New York, NY 10001',
        icon: '🗽',
        isHeadquarters: false,
        timezone: 'EST (UTC-5)'
      },
      {
        city: 'London',
        country: 'UK',
        address: '789 Oxford Street, London W1D 2HG',
        icon: '🇬🇧',
        isHeadquarters: false,
        timezone: 'GMT (UTC+0)'
      },
      {
        city: 'Tokyo',
        country: 'Japan',
        address: '321 Shibuya, Tokyo 150-0002',
        icon: '🗼',
        isHeadquarters: false,
        timezone: 'JST (UTC+9)'
      }
    ],
    socialLinks = [
      { name: 'Twitter', icon: '🐦', url: '#', followers: '100K+', handle: '@company' },
      { name: 'LinkedIn', icon: '💼', url: '#', followers: '50K+', handle: 'company' },
      { name: 'GitHub', icon: '⚙️', url: '#', followers: '25K+', handle: 'company' },
      { name: 'Discord', icon: '💬', url: '#', followers: '15K+', handle: 'company' },
      { name: 'YouTube', icon: '📹', url: '#', followers: '30K+', handle: 'company' },
      { name: 'Instagram', icon: '📷', url: '#', followers: '40K+', handle: '@company' }
    ],
    faqs = [
      { question: 'Response time?', answer: 'Within 24 hours' },
      { question: 'Support languages?', answer: 'English, Spanish, French, Japanese' }
    ]
  } = data;

  return (
    <div className="w-full h-96 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 flex items-center justify-center px-8 py-12">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-6xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-100">
            {title}
          </h2>
          <p className="text-2xl text-orange-100 font-semibold mb-2">{subtitle}</p>
          <p className="text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-7 gap-4">
          {/* Left Side - Departments (4 cols) */}
          <div className="col-span-4 space-y-3">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border-2 border-white/30 hover:bg-white/20 transition-all flex gap-4">
                <div className="text-4xl">{dept.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg mb-1">{dept.name}</h3>
                  <p className="text-orange-100 text-xs mb-2">{dept.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1 text-white">
                      <span>📧</span>
                      <span>{dept.email}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <span>📞</span>
                      <span>{dept.phone}</span>
                    </div>
                    <div className="flex items-center gap-1 text-orange-200">
                      <span>🕒</span>
                      <span>{dept.hours}</span>
                    </div>
                    <div className="flex items-center gap-1 text-orange-200">
                      <span>⚡</span>
                      <span>{dept.responseTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side (3 cols) */}
          <div className="col-span-3 space-y-3">
            {/* Office Locations */}
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border-2 border-white/30">
              <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                <span>📍</span>
                <span>Global Offices</span>
              </h3>
              <div className="space-y-2">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-xl">{office.icon}</span>
                      <div className="flex-1">
                        <div className="font-bold text-white flex items-center gap-2">
                          {office.city}, {office.country}
                          {office.isHeadquarters && (
                            <span className="bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded">HQ</span>
                          )}
                        </div>
                        <p className="text-orange-100 leading-tight mb-1">{office.address}</p>
                        <p className="text-orange-200 text-xs">{office.timezone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border-2 border-white/30">
              <h3 className="font-bold text-white text-lg mb-3">Quick Contact</h3>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 rounded-lg bg-white/30 text-white placeholder-orange-200 border border-white/30 focus:outline-none focus:border-white text-xs"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 rounded-lg bg-white/30 text-white placeholder-orange-200 border border-white/30 focus:outline-none focus:border-white text-xs"
                />
                <button className="w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50 transition-all shadow-lg text-sm">
                  Send Message
                </button>
              </div>

              {/* Social Media Grid */}
              <div className="pt-3 border-t border-white/20 mt-3">
                <h4 className="text-white font-semibold text-sm mb-2">Connect With Us</h4>
                <div className="grid grid-cols-3 gap-1">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.url} className="bg-white/10 rounded p-1.5 hover:bg-white/20 transition-all text-center">
                      <span className="text-xl block">{social.icon}</span>
                      <div className="text-white text-xs font-semibold">{social.name}</div>
                      <div className="text-orange-200 text-xs">{social.followers}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullContact;
