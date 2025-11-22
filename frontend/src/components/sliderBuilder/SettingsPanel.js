import React, { useState } from 'react';
import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';
import { getEntranceAnimations, getExitAnimations, getAnimationPreset } from './animationPresets';
import EditableText from '../EditableText';

const SettingsPanel = ({ layer, onUpdateLayer }) => {
  const [expandedSections, setExpandedSections] = useState({
    animation: true,
    position: true,
    appearance: true,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (!layer) {
    return (
      <div className="flex flex-col h-full items-center justify-center text-gray-500 p-8 text-center">
        <p className="text-sm">No layer selected</p>
        <p className="text-xs mt-2 text-gray-600">Click on a layer in the canvas or layers panel to edit</p>
      </div>
    );
  }

  const entranceAnimations = getEntranceAnimations();
  const exitAnimations = getExitAnimations();

  const inAnimation = layer.animations?.find(a => a.type === 'in') || null;
  const outAnimation = layer.animations?.find(a => a.type === 'out') || null;

  const handleAnimationChange = (type, presetKey) => {
    const preset = getAnimationPreset(presetKey);
    const newAnimations = [...(layer.animations || [])];

    const animIndex = newAnimations.findIndex(a => a.type === type);
    const newAnim = {
      type: type,
      startTime: type === 'in' ? 0 : 4000,
      duration: preset.duration,
      easing: preset.easing,
      properties: preset.properties
    };

    if (animIndex >= 0) {
      newAnimations[animIndex] = newAnim;
    } else {
      newAnimations.push(newAnim);
    }

    onUpdateLayer(layer.id, { animations: newAnimations });
  };

  const handleTimingChange = (type, field, value) => {
    const newAnimations = [...(layer.animations || [])];
    const animIndex = newAnimations.findIndex(a => a.type === type);

    if (animIndex >= 0) {
      newAnimations[animIndex] = {
        ...newAnimations[animIndex],
        [field]: parseInt(value)
      };
      onUpdateLayer(layer.id, { animations: newAnimations });
    }
  };

  const handleChange = (property, value) => {
    onUpdateLayer(layer.id, { [property]: value });
  };

  const handleNestedChange = (parent, property, value) => {
    onUpdateLayer(layer.id, {
      [parent]: {
        ...layer[parent],
        [property]: value
      }
    });
  };

  const handleStyleChange = (nodeId, newClassName) => {
    // Update the layer's tailwind classes
    onUpdateLayer(layer.id, { tailwindClasses: newClassName });
  };

  const Section = ({ title, name, children }) => (
    <div className="border-b border-gray-700">
      <button
        onClick={() => toggleSection(name)}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors"
      >
        <span className="text-sm font-semibold text-gray-200 uppercase tracking-wide">{title}</span>
        {expandedSections[name] ? (
          <IconChevronDown className="w-4 h-4 text-gray-400" />
        ) : (
          <IconChevronRight className="w-4 h-4 text-gray-400" />
        )}
      </button>
      {expandedSections[name] && (
        <div className="px-4 pb-4 space-y-3">
          {children}
        </div>
      )}
    </div>
  );

  const InputField = ({ label, value, onChange, type = 'number', min, max, step = 1 }) => (
    <div>
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(type === 'number' ? parseFloat(e.target.value) : e.target.value)}
        min={min}
        max={max}
        step={step}
        className="w-full px-3 py-2 bg-gray-700 text-gray-200 rounded border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
      />
    </div>
  );

  const ColorPicker = ({ label, value, onChange }) => (
    <div>
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      <div className="flex gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-10 rounded cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3 py-2 bg-gray-700 text-gray-200 rounded border border-gray-600 focus:border-blue-500 focus:outline-none text-sm font-mono"
        />
      </div>
    </div>
  );

  const SelectField = ({ label, value, onChange, options }) => (
    <div>
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 bg-gray-700 text-gray-200 rounded border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">Layer Settings</h2>
        <p className="text-xs text-gray-400 mt-1">
          {layer.type} - {layer.id.slice(-8)}
        </p>
      </div>

      {/* Settings */}
      <div className="flex-1 overflow-y-auto">
        {/* Transform Section */}
        <Section title="Transform" name="transform">
          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="X Position"
              value={layer.position.x}
              onChange={(val) => handleNestedChange('position', 'x', val)}
            />
            <InputField
              label="Y Position"
              value={layer.position.y}
              onChange={(val) => handleNestedChange('position', 'y', val)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="Scale X"
              value={layer.scale.x}
              onChange={(val) => handleNestedChange('scale', 'x', val)}
              step={0.1}
              min={0.1}
            />
            <InputField
              label="Scale Y"
              value={layer.scale.y}
              onChange={(val) => handleNestedChange('scale', 'y', val)}
              step={0.1}
              min={0.1}
            />
          </div>

          <InputField
            label="Rotation (degrees)"
            value={layer.rotation}
            onChange={(val) => handleChange('rotation', val)}
            min={0}
            max={360}
          />

          <InputField
            label="Opacity"
            value={layer.opacity}
            onChange={(val) => handleChange('opacity', val)}
            step={0.1}
            min={0}
            max={1}
          />

          <InputField
            label="Z-Index"
            value={layer.zIndex}
            onChange={(val) => handleChange('zIndex', val)}
            min={1}
          />
        </Section>

        {/* Appearance Section */}
        <Section title="Appearance" name="appearance">
          {layer.type === 'text' && (
            <>
              <div>
                <label className="block text-xs text-gray-400 mb-2">Text Content (WYSIWYG)</label>
                <div className="bg-gray-700 p-3 rounded border border-gray-600 min-h-[100px]">
                  <EditableText
                    value={layer.content}
                    onChange={(newValue) => handleChange('content', newValue)}
                    className={layer.tailwindClasses || 'text-white'}
                    multiline={true}
                    onStyleChange={handleStyleChange}
                    nodeId={layer.id}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Click text to edit with style toolbar</p>
              </div>

              <InputField
                label="Font Size"
                value={layer.fontSize}
                onChange={(val) => handleChange('fontSize', val)}
                min={8}
                max={200}
              />

              <SelectField
                label="Font Family"
                value={layer.fontFamily}
                onChange={(val) => handleChange('fontFamily', val)}
                options={[
                  { value: 'Arial', label: 'Arial' },
                  { value: 'Helvetica', label: 'Helvetica' },
                  { value: 'Times New Roman', label: 'Times New Roman' },
                  { value: 'Courier New', label: 'Courier New' },
                  { value: 'Georgia', label: 'Georgia' },
                  { value: 'Verdana', label: 'Verdana' },
                ]}
              />

              <ColorPicker
                label="Text Color"
                value={layer.fill}
                onChange={(val) => handleChange('fill', val)}
              />
            </>
          )}

          {layer.type === 'rect' && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <InputField
                  label="Width"
                  value={layer.width || 200}
                  onChange={(val) => handleChange('width', val)}
                  min={10}
                />
                <InputField
                  label="Height"
                  value={layer.height || 200}
                  onChange={(val) => handleChange('height', val)}
                  min={10}
                />
              </div>

              <ColorPicker
                label="Fill Color"
                value={layer.fill || '#3b82f6'}
                onChange={(val) => handleChange('fill', val)}
              />

              <InputField
                label="Corner Radius"
                value={layer.cornerRadius || 0}
                onChange={(val) => handleChange('cornerRadius', val)}
                min={0}
              />
            </>
          )}

          {layer.type === 'image' && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <InputField
                  label="Width"
                  value={layer.width || 200}
                  onChange={(val) => handleChange('width', val)}
                  min={10}
                />
                <InputField
                  label="Height"
                  value={layer.height || 200}
                  onChange={(val) => handleChange('height', val)}
                  min={10}
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1">Image URL</label>
                <input
                  type="text"
                  value={layer.content || ''}
                  onChange={(e) => handleChange('content', e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 bg-gray-700 text-gray-200 rounded border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
                />
              </div>
            </>
          )}
        </Section>

        {/* Animation Section */}
        <Section title="Animation" name="animation">
          <div className="space-y-4">
            {/* Entrance Animation */}
            <div>
              <label className="block text-xs text-gray-400 mb-2 font-semibold">Entrance Animation</label>
              <select
                value={inAnimation ? entranceAnimations.findIndex(a => a.easing === inAnimation.easing && JSON.stringify(a.properties) === JSON.stringify(inAnimation.properties)) : -1}
                onChange={(e) => {
                  const selectedAnim = entranceAnimations[e.target.value];
                  if (selectedAnim) handleAnimationChange('in', selectedAnim.key);
                }}
                className="w-full px-3 py-2 bg-gray-700 text-gray-200 rounded border border-gray-600 focus:border-blue-500 focus:outline-none text-sm mb-2"
              >
                <option value="-1">Choose animation...</option>
                {entranceAnimations.map((anim, idx) => (
                  <option key={anim.key} value={idx}>{anim.name}</option>
                ))}
              </select>

              {inAnimation && (
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Start (ms)</label>
                    <input
                      type="number"
                      value={inAnimation.startTime}
                      onChange={(e) => handleTimingChange('in', 'startTime', e.target.value)}
                      min={0}
                      step={100}
                      className="w-full px-2 py-1 bg-gray-700 text-gray-200 rounded border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Duration (ms)</label>
                    <input
                      type="number"
                      value={inAnimation.duration}
                      onChange={(e) => handleTimingChange('in', 'duration', e.target.value)}
                      min={100}
                      step={100}
                      className="w-full px-2 py-1 bg-gray-700 text-gray-200 rounded border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Exit Animation */}
            <div>
              <label className="block text-xs text-gray-400 mb-2 font-semibold">Exit Animation</label>
              <select
                value={outAnimation ? exitAnimations.findIndex(a => a.easing === outAnimation.easing && JSON.stringify(a.properties) === JSON.stringify(outAnimation.properties)) : -1}
                onChange={(e) => {
                  const selectedAnim = exitAnimations[e.target.value];
                  if (selectedAnim) handleAnimationChange('out', selectedAnim.key);
                }}
                className="w-full px-3 py-2 bg-gray-700 text-gray-200 rounded border border-gray-600 focus:border-blue-500 focus:outline-none text-sm mb-2"
              >
                <option value="-1">Choose animation...</option>
                {exitAnimations.map((anim, idx) => (
                  <option key={anim.key} value={idx}>{anim.name}</option>
                ))}
              </select>

              {outAnimation && (
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Start (ms)</label>
                    <input
                      type="number"
                      value={outAnimation.startTime}
                      onChange={(e) => handleTimingChange('out', 'startTime', e.target.value)}
                      min={0}
                      step={100}
                      className="w-full px-2 py-1 bg-gray-700 text-gray-200 rounded border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Duration (ms)</label>
                    <input
                      type="number"
                      value={outAnimation.duration}
                      onChange={(e) => handleTimingChange('out', 'duration', e.target.value)}
                      min={100}
                      step={100}
                      className="w-full px-2 py-1 bg-gray-700 text-gray-200 rounded border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-gray-700">
              <p className="text-xs text-gray-500 italic">
                Select entrance and exit animations from presets. Adjust timing to control when animations start and how long they last.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default SettingsPanel;
