import React from 'react';

const StandardFooter = ({ data = {} }) => {
  const {
    companyName = 'Your Company',
    tagline = 'Building the future together',
    copyright = '2024',
    sections = [
      { title: 'Product', links: ['Features', 'Pricing', 'Security'] },
      { title: 'Company', links: ['About', 'Blog', 'Careers'] },
      { title: 'Support', links: ['Help', 'Docs', 'Contact'] }
    ],
    socialLinks = ['Twitter', 'LinkedIn', 'GitHub']
  } = data;

  return (
    <div className="w-full h-48 bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center px-8 py-6">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-4 gap-8 mb-6">
          <div>
            <div className="font-bold text-white text-2xl mb-2">{companyName}</div>
            <p className="text-gray-400 text-sm">{tagline}</p>
          </div>
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-white mb-3">{section.title}</h3>
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
        <div className="border-t border-gray-600 pt-4 flex justify-between items-center">
          <div className="text-gray-400 text-sm">© {copyright} {companyName}. All rights reserved.</div>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardFooter;
