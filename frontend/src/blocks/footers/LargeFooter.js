import React from 'react';

const LargeFooter = ({ data = {} }) => {
  const {
    companyName = 'Your Company',
    tagline = 'Empowering businesses worldwide',
    description = 'The complete platform for modern teams to build, ship, and scale their products.',
    copyright = '2024',
    sections = [
      { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Security', 'Roadmap'] },
      { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Partners'] },
      { title: 'Resources', links: ['Documentation', 'Guides', 'API Reference', 'Community', 'Status'] },
      { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'Licenses', 'GDPR'] }
    ],
    socialLinks = [
      { name: 'Twitter', icon: '🐦' },
      { name: 'LinkedIn', icon: '💼' },
      { name: 'GitHub', icon: '⚙️' },
      { name: 'Discord', icon: '💬' }
    ]
  } = data;

  return (
    <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center px-8 py-8">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-5 gap-8 mb-8">
          <div className="col-span-1">
            <div className="font-bold text-white text-3xl mb-2">{companyName}</div>
            <p className="text-gray-400 text-sm mb-3">{tagline}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
          </div>
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">{section.title}</h3>
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
        <div className="border-t border-gray-700 pt-6 flex justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {copyright} {companyName}. All rights reserved.
          </div>
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110 flex items-center gap-2">
                <span className="text-xl">{social.icon}</span>
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeFooter;
