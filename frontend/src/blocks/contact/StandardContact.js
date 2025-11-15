import React from 'react';

const StandardContact = ({ data = {} }) => {
  const {
    title = 'Contact Us',
    subtitle = 'We\'d love to hear from you',
    contactMethods = [
      { type: 'Email', value: 'hello@company.com', icon: '📧' },
      { type: 'Phone', value: '+1 (555) 123-4567', icon: '📞' },
      { type: 'Address', value: '123 Main St, San Francisco, CA', icon: '📍' }
    ],
    formFields = ['Name', 'Email', 'Message']
  } = data;

  return (
    <section className="w-full h-48 bg-gradient-to-r from-orange-500 to-orange-700 flex items-center justify-center px-8 py-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-1">{title}</h2>
          <p className="text-orange-100">{subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-5 space-y-3">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <span className="text-3xl">{method.icon}</span>
                <div>
                  <div className="font-bold text-sm">{method.type}</div>
                  <div className="text-orange-100 text-sm">{method.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Form */}
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-lg bg-white/30 text-white placeholder-orange-200 border border-white/30 mb-2 text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded-lg bg-white/30 text-white placeholder-orange-200 border border-white/30 mb-2 text-sm"
            />
            <button className="w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50 transition-colors text-sm">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Block metadata and structure for tree mapping
StandardContact.blockMeta = {
  id: 'contact-2',
  name: 'Standard Contact',
  category: 'contact',
  height: 'h-48',
  defaultData: {
    title: 'Contact Us',
    subtitle: 'We\'d love to hear from you',
    contactMethods: [
      { type: 'Email', value: 'hello@company.com', icon: '📧' },
      { type: 'Phone', value: '+1 (555) 123-4567', icon: '📞' },
      { type: 'Address', value: '123 Main St, San Francisco, CA', icon: '📍' }
    ]
  },
  getTree: (data = {}) => {
    const methods = data.contactMethods || [
      { type: 'Email', value: 'hello@company.com', icon: '📧' },
      { type: 'Phone', value: '+1 (555) 123-4567', icon: '📞' },
      { type: 'Address', value: '123 Main St, San Francisco, CA', icon: '📍' }
    ];

    return {
      id: 'standard-contact-root',
      tag: 'section',
      label: 'Contact Section',
      className: 'w-full h-48 bg-gradient-to-r from-orange-500 to-orange-700 flex items-center justify-center px-8 py-6',
      children: [
        {
          id: 'standard-contact-wrapper',
          tag: 'div',
          label: 'Content Wrapper',
          className: 'max-w-6xl w-full',
          children: [
            {
              id: 'standard-contact-header',
              tag: 'div',
              label: 'Header',
              className: 'text-center mb-6',
              children: [
                {
                  id: 'standard-contact-title',
                  tag: 'h2',
                  label: 'Title',
                  content: data.title || 'Contact Us',
                  className: 'text-3xl font-bold text-white mb-1',
                  editable: true
                },
                {
                  id: 'standard-contact-subtitle',
                  tag: 'p',
                  label: 'Subtitle',
                  content: data.subtitle || 'We\'d love to hear from you',
                  className: 'text-orange-100',
                  editable: true
                }
              ]
            },
            {
              id: 'standard-contact-grid',
              tag: 'div',
              label: 'Grid Container',
              className: 'grid grid-cols-2 gap-6',
              children: [
                {
                  id: 'standard-contact-info',
                  tag: 'div',
                  label: 'Contact Info',
                  className: 'bg-white/15 backdrop-blur-md rounded-xl p-5 space-y-3',
                  children: methods.map((method, index) => ({
                    id: `standard-contact-method-${index}`,
                    tag: 'div',
                    label: `${method.type} Info`,
                    className: 'flex items-center gap-3 text-white',
                    children: [
                      {
                        id: `standard-contact-method-icon-${index}`,
                        tag: 'span',
                        label: 'Icon',
                        content: method.icon,
                        className: 'text-3xl',
                        editable: false
                      },
                      {
                        id: `standard-contact-method-details-${index}`,
                        tag: 'div',
                        label: 'Details',
                        children: [
                          {
                            id: `standard-contact-method-type-${index}`,
                            tag: 'div',
                            label: 'Type',
                            content: method.type,
                            className: 'font-bold text-sm',
                            editable: true
                          },
                          {
                            id: `standard-contact-method-value-${index}`,
                            tag: 'div',
                            label: 'Value',
                            content: method.value,
                            className: 'text-orange-100 text-sm',
                            editable: true
                          }
                        ]
                      }
                    ]
                  }))
                },
                {
                  id: 'standard-contact-form',
                  tag: 'div',
                  label: 'Quick Form',
                  className: 'bg-white/20 backdrop-blur-md rounded-xl p-5',
                  children: [
                    {
                      id: 'standard-contact-form-name',
                      tag: 'input',
                      label: 'Name Input',
                      className: 'w-full px-3 py-2 rounded-lg bg-white/30 text-white placeholder-orange-200 border border-white/30 mb-2 text-sm',
                      editable: false
                    },
                    {
                      id: 'standard-contact-form-email',
                      tag: 'input',
                      label: 'Email Input',
                      className: 'w-full px-3 py-2 rounded-lg bg-white/30 text-white placeholder-orange-200 border border-white/30 mb-2 text-sm',
                      editable: false
                    },
                    {
                      id: 'standard-contact-form-button',
                      tag: 'button',
                      label: 'Submit Button',
                      content: 'Send Message',
                      className: 'w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50 transition-colors text-sm',
                      editable: true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  }
};

export default StandardContact;
