import React from 'react';

const DetailedFooter = ({ data = {} }) => {
  const {
    companyName = 'Your Company',
    tagline = 'Innovation meets excellence',
    description = 'We build powerful tools and services that help businesses grow and succeed in the digital age.',
    copyright = '2024',
    sections = [
      { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Security', 'Changelog', 'Roadmap'] },
      { title: 'Solutions', links: ['Enterprise', 'Startups', 'Agencies', 'Freelancers', 'Developers', 'Education'] },
      { title: 'Resources', links: ['Documentation', 'API Reference', 'Guides', 'Tutorials', 'Community', 'Support'] },
      { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press', 'Partners', 'Contact'] },
      { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security', 'Compliance'] }
    ],
    socialLinks = [
      { name: 'Twitter', icon: '🐦', followers: '10K' },
      { name: 'LinkedIn', icon: '💼', followers: '5K' },
      { name: 'GitHub', icon: '⚙️', followers: '8K' },
      { name: 'Discord', icon: '💬', followers: '3K' }
    ],
    newsletter = true
  } = data;

  return (
    <div className="w-full h-80 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center px-8 py-10">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-6 gap-6 mb-8">
          <div className="col-span-2">
            <div className="font-bold text-white text-4xl mb-3">{companyName}</div>
            <p className="text-gray-300 text-base font-semibold mb-3">{tagline}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>
            {newsletter && (
              <div>
                <h4 className="text-white font-bold mb-2 text-sm">Subscribe to our newsletter</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-gray-400 text-sm"
                  />
                  <button className="bg-white text-gray-900 px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            )}
          </div>
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-white mb-4 text-xs uppercase tracking-wider">{section.title}</h3>
              <div className="space-y-2">
                {section.links.map((link, idx) => (
                  <a key={idx} href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-400 text-sm">
              © {copyright} {companyName}. All rights reserved.
            </div>
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <a key={index} href="#" className="group text-gray-400 hover:text-white transition-all flex flex-col items-center">
                  <span className="text-2xl mb-1 transform group-hover:scale-110 transition-transform">{social.icon}</span>
                  <span className="text-xs font-medium">{social.name}</span>
                  <span className="text-xs text-gray-500">{social.followers}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedFooter;
