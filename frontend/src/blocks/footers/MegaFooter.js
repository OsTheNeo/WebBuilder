import React from 'react';

const MegaFooter = ({ data = {} }) => {
  const {
    companyName = 'Your Company',
    tagline = 'Building the future of technology',
    description = 'We empower businesses worldwide with cutting-edge solutions, innovative tools, and exceptional support to achieve their goals.',
    copyright = '2024',
    sections = [
      {
        title: 'Product',
        links: ['Features', 'Pricing', 'Integrations', 'Security', 'Changelog', 'Roadmap', 'API', 'Mobile App']
      },
      {
        title: 'Solutions',
        links: ['Enterprise', 'Startups', 'Agencies', 'Freelancers', 'Developers', 'Education', 'Non-Profit', 'Government']
      },
      {
        title: 'Resources',
        links: ['Documentation', 'API Docs', 'Guides', 'Tutorials', 'Video Library', 'Webinars', 'Community', 'Forum']
      },
      {
        title: 'Company',
        links: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Partners', 'Contact', 'Investors', 'Newsroom']
      },
      {
        title: 'Support',
        links: ['Help Center', 'Status', 'Service Status', 'Report Issue', 'Feature Request', 'Contact Support', 'Live Chat', 'Phone']
      },
      {
        title: 'Legal',
        links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'CCPA', 'Security', 'Compliance', 'Licenses']
      }
    ],
    socialLinks = [
      { name: 'Twitter', icon: '🐦', followers: '50K+', url: '#' },
      { name: 'LinkedIn', icon: '💼', followers: '25K+', url: '#' },
      { name: 'GitHub', icon: '⚙️', followers: '15K+', url: '#' },
      { name: 'Discord', icon: '💬', followers: '10K+', url: '#' },
      { name: 'YouTube', icon: '📹', followers: '30K+', url: '#' },
      { name: 'Instagram', icon: '📷', followers: '20K+', url: '#' }
    ],
    certifications = ['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA'],
    awards = ['Best SaaS 2024', 'Top Rated', 'G2 Leader'],
    stats = [
      { value: '50K+', label: 'Customers' },
      { value: '99.99%', label: 'Uptime' },
      { value: '150+', label: 'Countries' },
      { value: '24/7', label: 'Support' }
    ]
  } = data;

  return (
    <div className="w-full h-96 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-8 py-12">
      <div className="max-w-7xl w-full">
        {/* Top Section */}
        <div className="grid grid-cols-7 gap-6 mb-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="font-extrabold text-white text-4xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {companyName}
            </div>
            <p className="text-gray-300 text-lg font-bold mb-3">{tagline}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-white font-bold mb-3 text-sm">Stay Updated</h4>
              <div className="flex gap-2 mb-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-gray-500 text-sm"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-bold hover:from-blue-600 hover:to-purple-700 transition-all text-sm">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-xs">Join 10,000+ subscribers</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-2 text-center border border-gray-700">
                  <div className="text-white font-bold text-lg">{stat.value}</div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-white mb-4 text-xs uppercase tracking-wider">{section.title}</h3>
              <div className="space-y-2">
                {section.links.map((link, idx) => (
                  <a key={idx} href="#" className="block text-gray-400 hover:text-white transition-colors text-xs">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Middle Section - Social & Certifications */}
        <div className="border-t border-gray-800 pt-6 pb-6">
          <div className="flex justify-between items-center">
            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} className="group flex flex-col items-center">
                  <div className="bg-gray-800 rounded-full p-3 group-hover:bg-gray-700 transition-all transform group-hover:scale-110">
                    <span className="text-2xl">{social.icon}</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-1 font-medium">{social.name}</span>
                  <span className="text-xs text-gray-600">{social.followers}</span>
                </a>
              ))}
            </div>

            {/* Certifications & Awards */}
            <div>
              <div className="text-xs text-gray-500 mb-2">Certified & Trusted</div>
              <div className="flex gap-3 mb-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-800 text-gray-300 text-xs font-bold px-3 py-2 rounded border border-gray-700">
                    {cert}
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                {awards.map((award, index) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 text-yellow-400 text-xs font-bold px-3 py-2 rounded border border-yellow-600/30">
                    🏆 {award}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex justify-between items-center">
            <div className="text-gray-500 text-xs">
              © {copyright} {companyName}. All rights reserved worldwide.
            </div>
            <div className="flex gap-6 text-xs">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Sitemap</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Preferences</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Do Not Sell My Info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaFooter;
