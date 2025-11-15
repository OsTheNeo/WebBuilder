import React from 'react';

const LargeContact = ({ data = {} }) => {
  const {
    title = 'Let\'s Connect',
    subtitle = 'Have a question? We\'re here to help',
    contactMethods = [
      {
        type: 'Email Us',
        value: 'support@company.com',
        icon: '📧',
        description: 'Response within 24 hours'
      },
      {
        type: 'Call Us',
        value: '+1 (555) 123-4567',
        icon: '📞',
        description: 'Mon-Fri, 9AM-6PM EST'
      },
      {
        type: 'Visit Us',
        value: '123 Main Street, San Francisco, CA 94102',
        icon: '📍',
        description: 'By appointment only'
      },
      {
        type: 'Live Chat',
        value: 'Available now',
        icon: '💬',
        description: 'Average response: 2 min'
      }
    ],
    socialLinks = [
      { name: 'Twitter', icon: '🐦' },
      { name: 'LinkedIn', icon: '💼' },
      { name: 'Facebook', icon: '📘' }
    ]
  } = data;

  return (
    <div className="w-full h-64 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center px-8 py-8">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
          <p className="text-xl text-orange-100">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white/15 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/25 transition-all flex items-start gap-4">
                <span className="text-4xl">{method.icon}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg mb-1">{method.type}</h3>
                  <p className="text-orange-100 font-semibold mb-1">{method.value}</p>
                  <p className="text-orange-200 text-sm">{method.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/25">
            <h3 className="text-white font-bold text-xl mb-4">Send us a message</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-orange-200 border border-white/30 focus:outline-none focus:border-white text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-orange-200 border border-white/30 focus:outline-none focus:border-white text-sm"
              />
              <textarea
                placeholder="Your Message"
                rows="3"
                className="w-full px-4 py-3 rounded-lg bg-white/30 text-white placeholder-orange-200 border border-white/30 focus:outline-none focus:border-white text-sm resize-none"
              />
              <button className="w-full bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all shadow-lg">
                Send Message
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center mt-6 pt-4 border-t border-white/20">
              {socialLinks.map((social, index) => (
                <a key={index} href="#" className="text-white hover:text-orange-200 transition-colors flex items-center gap-2">
                  <span className="text-2xl">{social.icon}</span>
                  <span className="text-sm font-semibold">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeContact;
