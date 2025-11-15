import React from 'react';

const SimpleContact = ({ data = {} }) => {
  const {
    title = 'Get in Touch',
    email = 'hello@company.com',
    phone = '+1 (555) 123-4567'
  } = data;

  return (
    <div className="w-full h-32 bg-gradient-to-r from-orange-500 to-orange-700 flex items-center justify-center px-8">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
        <div className="flex gap-8 justify-center">
          <div className="flex items-center gap-2 text-white">
            <span className="text-xl">📧</span>
            <span className="font-semibold">{email}</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <span className="text-xl">📞</span>
            <span className="font-semibold">{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleContact;
