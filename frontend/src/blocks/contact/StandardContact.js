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
    <div className="w-full h-48 bg-gradient-to-r from-orange-500 to-orange-700 flex items-center justify-center px-8 py-6">
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
    </div>
  );
};

export default StandardContact;
