import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Google Fonts popular list
const googleFonts = [
  'Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Poppins', 'Raleway',
  'Playfair Display', 'Merriweather', 'Nunito', 'Source Sans Pro', 'PT Sans',
  'Ubuntu', 'Oswald', 'Quicksand', 'Mukta', 'Work Sans', 'Rubik', 'DM Sans',
  'Space Grotesk', 'Outfit', 'Manrope', 'Plus Jakarta Sans', 'Sora'
];

// Style Presets
const stylePresets = [
  {
    id: 'modern',
    name: 'Modern & Clean',
    description: 'Clean design with Inter typography',
    primaryFont: 'Inter',
    secondaryFont: 'Inter',
    primaryColor: '#3b82f6',
    secondaryColor: '#8b5cf6',
    backgroundColor: '#ffffff'
  },
  {
    id: 'elegant',
    name: 'Elegant Serif',
    description: 'Classic serif with Playfair Display',
    primaryFont: 'Playfair Display',
    secondaryFont: 'Lato',
    primaryColor: '#1f2937',
    secondaryColor: '#f59e0b',
    backgroundColor: '#faf5f0'
  },
  {
    id: 'bold',
    name: 'Bold & Vibrant',
    description: 'Eye-catching with strong colors',
    primaryFont: 'Poppins',
    secondaryFont: 'Poppins',
    primaryColor: '#dc2626',
    secondaryColor: '#f97316',
    backgroundColor: '#fef2f2'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean minimalism with Roboto',
    primaryFont: 'Roboto',
    secondaryFont: 'Roboto',
    primaryColor: '#000000',
    secondaryColor: '#6b7280',
    backgroundColor: '#f9fafb'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Business-ready with subtle colors',
    primaryFont: 'Open Sans',
    secondaryFont: 'Merriweather',
    primaryColor: '#1e40af',
    secondaryColor: '#059669',
    backgroundColor: '#f0f9ff'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Artistic with Montserrat',
    primaryFont: 'Montserrat',
    secondaryFont: 'Nunito',
    primaryColor: '#a855f7',
    secondaryColor: '#ec4899',
    backgroundColor: '#fdf4ff'
  }
];

const defaultSettings = {
  backgroundColor: '#f3f4f6',
  primaryFont: 'Inter',
  secondaryFont: 'Inter',
  primaryColor: '#3b82f6',
  secondaryColor: '#8b5cf6',
  logo: null
};

const PageSettingsDrawer = ({ isOpen, onClose, pageSettings, onUpdate }) => {
  const [settings, setSettings] = useState(pageSettings || defaultSettings);
  const [activeTab, setActiveTab] = useState('branding'); // branding, typography, presets

  useEffect(() => {
    if (pageSettings) {
      setSettings(pageSettings);
    }
  }, [pageSettings]);

  const updateSetting = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    onUpdate(newSettings);
  };

  const applyPreset = (preset) => {
    const newSettings = {
      ...settings,
      primaryFont: preset.primaryFont,
      secondaryFont: preset.secondaryFont,
      primaryColor: preset.primaryColor,
      secondaryColor: preset.secondaryColor,
      backgroundColor: preset.backgroundColor
    };
    setSettings(newSettings);
    onUpdate(newSettings);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateSetting('logo', event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[480px] bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-xl font-bold text-gray-800">Page Settings</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="sticky top-[73px] bg-white border-b border-gray-200 px-6 z-10">
              <div className="flex gap-1">
                {[
                  { id: 'branding', label: 'Branding', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
                  { id: 'typography', label: 'Typography', icon: 'M12 4v16m8-8H4' },
                  { id: 'presets', label: 'Presets', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 font-medium text-sm transition-colors border-b-2 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                    </svg>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-6 space-y-6">
              {/* Branding Tab */}
              {activeTab === 'branding' && (
                <>
                  {/* Logo Upload */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Logo</h3>
                    <div className="space-y-3">
                      {settings.logo && (
                        <div className="relative w-full h-32 border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                          <img src={settings.logo} alt="Logo" className="max-h-full max-w-full object-contain" />
                          <button
                            onClick={() => updateSetting('logo', null)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      )}
                      <label className="block">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                          <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="text-sm text-gray-600 mb-1">Click to upload logo</p>
                          <p className="text-xs text-gray-400">PNG, JPG, SVG up to 2MB</p>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Primary Color */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Primary Color</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <input
                          type="color"
                          value={settings.primaryColor}
                          onChange={(e) => updateSetting('primaryColor', e.target.value)}
                          className="w-20 h-12 rounded-lg border border-gray-300 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={settings.primaryColor}
                          onChange={(e) => updateSetting('primaryColor', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Secondary Color */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Secondary Color</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <input
                          type="color"
                          value={settings.secondaryColor}
                          onChange={(e) => updateSetting('secondaryColor', e.target.value)}
                          className="w-20 h-12 rounded-lg border border-gray-300 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={settings.secondaryColor}
                          onChange={(e) => updateSetting('secondaryColor', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Background Color */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Page Background</h3>
                    <p className="text-xs text-gray-500 mb-3">
                      Background color visible behind boxed blocks
                    </p>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <input
                          type="color"
                          value={settings.backgroundColor}
                          onChange={(e) => updateSetting('backgroundColor', e.target.value)}
                          className="w-20 h-12 rounded-lg border border-gray-300 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={settings.backgroundColor}
                          onChange={(e) => updateSetting('backgroundColor', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                        />
                      </div>

                      {/* Quick Background Presets */}
                      <div className="grid grid-cols-5 gap-2">
                        {[
                          { name: 'White', color: '#ffffff' },
                          { name: 'Gray 50', color: '#f9fafb' },
                          { name: 'Gray 100', color: '#f3f4f6' },
                          { name: 'Blue 50', color: '#eff6ff' },
                          { name: 'Purple 50', color: '#faf5ff' }
                        ].map((preset) => (
                          <button
                            key={preset.color}
                            onClick={() => updateSetting('backgroundColor', preset.color)}
                            className={`h-10 rounded-lg border-2 transition-all ${
                              settings.backgroundColor === preset.color
                                ? 'border-purple-500 scale-105'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                            style={{ backgroundColor: preset.color }}
                            title={preset.name}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Typography Tab */}
              {activeTab === 'typography' && (
                <>
                  {/* Primary Font */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Primary Font (Headings)</h3>
                    <select
                      value={settings.primaryFont}
                      onChange={(e) => updateSetting('primaryFont', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      style={{ fontFamily: settings.primaryFont }}
                    >
                      {googleFonts.map((font) => (
                        <option key={font} value={font} style={{ fontFamily: font }}>
                          {font}
                        </option>
                      ))}
                    </select>
                    <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold mb-2" style={{ fontFamily: settings.primaryFont }}>
                        The quick brown fox
                      </p>
                      <p className="text-sm text-gray-600" style={{ fontFamily: settings.primaryFont }}>
                        Preview of {settings.primaryFont}
                      </p>
                    </div>
                  </div>

                  {/* Secondary Font */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Secondary Font (Body Text)</h3>
                    <select
                      value={settings.secondaryFont}
                      onChange={(e) => updateSetting('secondaryFont', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      style={{ fontFamily: settings.secondaryFont }}
                    >
                      {googleFonts.map((font) => (
                        <option key={font} value={font} style={{ fontFamily: font }}>
                          {font}
                        </option>
                      ))}
                    </select>
                    <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                      <p className="text-base mb-2" style={{ fontFamily: settings.secondaryFont }}>
                        The quick brown fox jumps over the lazy dog. This is how your body text will look throughout your website.
                      </p>
                      <p className="text-sm text-gray-600" style={{ fontFamily: settings.secondaryFont }}>
                        Preview of {settings.secondaryFont}
                      </p>
                    </div>
                  </div>

                  {/* Font Pairing Tips */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-sm text-blue-800">
                        <p className="font-semibold mb-1">Font Pairing Tips:</p>
                        <ul className="list-disc list-inside space-y-1 text-xs">
                          <li>Use same font for simple, clean look</li>
                          <li>Pair serif headings with sans-serif body</li>
                          <li>Ensure good contrast between weights</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Presets Tab */}
              {activeTab === 'presets' && (
                <>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Style Presets</h3>
                    <p className="text-xs text-gray-500 mb-4">
                      Apply a complete style theme with one click
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {stylePresets.map((preset) => (
                      <motion.button
                        key={preset.id}
                        onClick={() => applyPreset(preset)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-400 transition-all text-left"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">{preset.name}</h4>
                            <p className="text-xs text-gray-600">{preset.description}</p>
                          </div>
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1">
                            <div
                              className="w-8 h-8 rounded border border-gray-300"
                              style={{ backgroundColor: preset.primaryColor }}
                              title="Primary"
                            />
                            <div
                              className="w-8 h-8 rounded border border-gray-300"
                              style={{ backgroundColor: preset.secondaryColor }}
                              title="Secondary"
                            />
                            <div
                              className="w-8 h-8 rounded border border-gray-300"
                              style={{ backgroundColor: preset.backgroundColor }}
                              title="Background"
                            />
                          </div>
                          <div className="text-xs text-gray-500">
                            <span style={{ fontFamily: preset.primaryFont }}>{preset.primaryFont}</span>
                            {preset.primaryFont !== preset.secondaryFont && (
                              <> + <span style={{ fontFamily: preset.secondaryFont }}>{preset.secondaryFont}</span></>
                            )}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PageSettingsDrawer;
