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
    socialIcons = ['🐦', '💼', '⚙️']
  } = data;

  return (
    <footer className="w-full h-48 bg-gray-900 flex items-center justify-center px-8 py-6">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-4 gap-8 mb-6">
          <div>
            <div className="font-bold text-white text-2xl mb-2">{companyName}</div>
            <p className="text-gray-300 text-sm">{tagline}</p>
          </div>
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-white mb-3">{section.title}</h3>
              <div className="space-y-2">
                {section.links.map((link, idx) => (
                  <a key={idx} href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
          <div className="text-gray-300 text-sm">© {copyright} {companyName}. All rights reserved.</div>
          <div className="flex gap-4">
            {socialIcons.map((icon, index) => (
              <a key={index} href="#" className="text-2xl hover:scale-110 transition-transform">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Block metadata and structure for tree mapping
StandardFooter.blockMeta = {
  id: 'footer-2',
  name: 'Standard Footer',
  category: 'footers',
  height: 'h-48',
  defaultData: {
    companyName: 'Your Company',
    tagline: 'Building the future together',
    copyright: '2024',
    sections: [
      { title: 'Product', links: ['Features', 'Pricing', 'Security'] },
      { title: 'Company', links: ['About', 'Blog', 'Careers'] },
      { title: 'Support', links: ['Help', 'Docs', 'Contact'] }
    ],
    socialIcons: ['🐦', '💼', '⚙️']
  },
  // Tree structure definition
  getTree: (data = {}) => ({
    id: 'standard-footer-root',
    tag: 'footer',
    label: 'Footer Container',
    className: 'w-full h-48 bg-gray-900 flex items-center justify-center px-8 py-6',
    children: [
      {
        id: 'standard-footer-wrapper',
        tag: 'div',
        label: 'Content Wrapper',
        className: 'max-w-6xl w-full',
        children: [
          {
            id: 'standard-footer-grid',
            tag: 'div',
            label: 'Grid Layout',
            className: 'grid grid-cols-4 gap-8 mb-6',
            children: [
              {
                id: 'standard-footer-brand',
                tag: 'div',
                label: 'Brand Section',
                children: [
                  {
                    id: 'standard-footer-company',
                    tag: 'div',
                    label: 'Company Name',
                    content: data.companyName || 'Your Company',
                    className: 'font-bold text-white text-2xl mb-2',
                    editable: true
                  },
                  {
                    id: 'standard-footer-tagline',
                    tag: 'p',
                    label: 'Tagline',
                    content: data.tagline || 'Building the future together',
                    className: 'text-gray-300 text-sm',
                    editable: true
                  }
                ]
              },
              ...(data.sections || StandardFooter.blockMeta.defaultData.sections).map((section, index) => ({
                id: `standard-footer-section-${index}`,
                tag: 'div',
                label: `Section: ${section.title}`,
                children: [
                  {
                    id: `standard-footer-section-title-${index}`,
                    tag: 'h3',
                    label: 'Section Title',
                    content: section.title,
                    className: 'font-bold text-white mb-3',
                    editable: true
                  },
                  {
                    id: `standard-footer-section-links-${index}`,
                    tag: 'div',
                    label: 'Link Group',
                    className: 'space-y-2',
                    children: section.links.map((link, idx) => ({
                      id: `standard-footer-link-${index}-${idx}`,
                      tag: 'a',
                      label: `Link: ${link}`,
                      content: link,
                      className: 'block text-gray-300 hover:text-white transition-colors text-sm',
                      editable: true
                    }))
                  }
                ]
              }))
            ]
          },
          {
            id: 'standard-footer-bottom',
            tag: 'div',
            label: 'Bottom Section',
            className: 'border-t border-gray-700 pt-4 flex justify-between items-center',
            children: [
              {
                id: 'standard-footer-copyright',
                tag: 'div',
                label: 'Copyright',
                content: `© ${data.copyright || '2024'} ${data.companyName || 'Your Company'}. All rights reserved.`,
                className: 'text-gray-300 text-sm',
                editable: true
              },
              {
                id: 'standard-footer-social',
                tag: 'div',
                label: 'Social Icons',
                className: 'flex gap-4',
                children: (data.socialIcons || ['🐦', '💼', '⚙️']).map((icon, index) => ({
                  id: `standard-footer-social-${index}`,
                  tag: 'a',
                  label: `Social Icon ${index + 1}`,
                  content: icon,
                  className: 'text-2xl hover:scale-110 transition-transform',
                  editable: true
                }))
              }
            ]
          }
        ]
      }
    ]
  })
};

export default StandardFooter;
