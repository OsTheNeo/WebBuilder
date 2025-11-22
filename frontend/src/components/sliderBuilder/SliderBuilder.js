import React, { useState } from 'react';
import { IconHome, IconPlayerPlay, IconPlayerPause, IconTemplate } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import SliderCanvas from './SliderCanvas';
import LayersPanel from './LayersPanel';
import SettingsPanel from './SettingsPanel';
import TimelinePanel from './TimelinePanel';
import TemplateSelector from './TemplateSelector';
import { getTemplate } from './templates';

const SliderBuilder = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedLayerId, setSelectedLayerId] = useState(null);
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);

  // Load hero banner template by default
  const defaultTemplate = getTemplate('hero_banner');

  // Slider data state
  const [sliderData, setSliderData] = useState(defaultTemplate ? defaultTemplate.data : {
    id: 'slider_1',
    duration: 5000,
    slides: [
      {
        id: 'slide_1',
        duration: 5000,
        background: {
          type: 'color',
          value: '#f0f0f0'
        },
        layers: []
      }
    ]
  });

  const currentSlide = sliderData.slides[0]; // For now, work with first slide

  const handleAddLayer = (layerType) => {
    const newLayer = {
      id: `layer_${Date.now()}`,
      type: layerType,
      content: layerType === 'text' ? 'New Text' : '',
      position: { x: 200, y: 200 },
      scale: { x: 1, y: 1 },
      rotation: 0,
      opacity: 1,
      zIndex: currentSlide.layers.length + 1,
      fontSize: layerType === 'text' ? 32 : undefined,
      fontFamily: layerType === 'text' ? 'Arial' : undefined,
      fill: layerType === 'text' ? '#000000' : undefined,
      width: layerType === 'image' ? 200 : undefined,
      height: layerType === 'image' ? 200 : undefined,
      animations: [
        {
          type: 'in',
          startTime: 0,
          duration: 1000,
          easing: 'power2.out',
          properties: {
            from: { opacity: 0, scale: 0.5 },
            to: { opacity: 1, scale: 1 }
          }
        },
        {
          type: 'out',
          startTime: 4000,
          duration: 1000,
          easing: 'power2.in',
          properties: {
            from: { opacity: 1 },
            to: { opacity: 0 }
          }
        }
      ]
    };

    setSliderData(prev => ({
      ...prev,
      slides: prev.slides.map((slide, idx) =>
        idx === 0 ? { ...slide, layers: [...slide.layers, newLayer] } : slide
      )
    }));

    setSelectedLayerId(newLayer.id);
  };

  const handleDeleteLayer = (layerId) => {
    setSliderData(prev => ({
      ...prev,
      slides: prev.slides.map((slide, idx) =>
        idx === 0 ? { ...slide, layers: slide.layers.filter(l => l.id !== layerId) } : slide
      )
    }));
    if (selectedLayerId === layerId) {
      setSelectedLayerId(null);
    }
  };

  const handleUpdateLayer = (layerId, updates) => {
    setSliderData(prev => ({
      ...prev,
      slides: prev.slides.map((slide, idx) =>
        idx === 0 ? {
          ...slide,
          layers: slide.layers.map(layer =>
            layer.id === layerId ? { ...layer, ...updates } : layer
          )
        } : slide
      )
    }));
  };

  const handleReorderLayers = (newLayers) => {
    setSliderData(prev => ({
      ...prev,
      slides: prev.slides.map((slide, idx) =>
        idx === 0 ? { ...slide, layers: newLayers } : slide
      )
    }));
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSelectTemplate = (template) => {
    if (template === null) {
      // Blank template
      setSliderData({
        id: 'slider_blank',
        duration: 5000,
        slides: [
          {
            id: 'slide_blank_1',
            duration: 5000,
            background: {
              type: 'color',
              value: '#1a1a2e'
            },
            layers: []
          }
        ]
      });
    } else {
      setSliderData(template.data);
    }
    setSelectedLayerId(null);
    setCurrentTime(0);
    setIsPlaying(false);
    setShowTemplateSelector(false);
  };

  const selectedLayer = currentSlide.layers.find(l => l.id === selectedLayerId);

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-lg transition-all hover:bg-gray-700 text-gray-300 hover:text-white"
            title="Volver al Home"
          >
            <IconHome className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-white">Slider Builder</h1>
            <p className="text-xs text-gray-400">Revolution-inspired slider constructor</p>
          </div>
        </div>

        {/* Playback controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowTemplateSelector(true)}
            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors flex items-center gap-2"
            title="Load Template"
          >
            <IconTemplate className="w-5 h-5" />
            Templates
          </button>
          <button
            onClick={handlePlayPause}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2"
          >
            {isPlaying ? (
              <>
                <IconPlayerPause className="w-5 h-5" />
                Pause
              </>
            ) : (
              <>
                <IconPlayerPlay className="w-5 h-5" />
                Play
              </>
            )}
          </button>
          <div className="text-gray-300 text-sm font-mono">
            {(currentTime / 1000).toFixed(2)}s / {(sliderData.duration / 1000).toFixed(2)}s
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Layers */}
        <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
          <LayersPanel
            layers={currentSlide.layers}
            selectedLayerId={selectedLayerId}
            onSelectLayer={setSelectedLayerId}
            onAddLayer={handleAddLayer}
            onDeleteLayer={handleDeleteLayer}
            onReorderLayers={handleReorderLayers}
          />
        </div>

        {/* Center - Canvas */}
        <div className="flex-1 bg-gray-900 flex items-center justify-center p-8">
          <SliderCanvas
            slide={currentSlide}
            selectedLayerId={selectedLayerId}
            onSelectLayer={setSelectedLayerId}
            onUpdateLayer={handleUpdateLayer}
            isPlaying={isPlaying}
            currentTime={currentTime}
            onTimeUpdate={setCurrentTime}
            duration={sliderData.duration}
          />
        </div>

        {/* Right Panel - Settings */}
        <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
          <SettingsPanel
            layer={selectedLayer}
            onUpdateLayer={handleUpdateLayer}
          />
        </div>
      </div>

      {/* Bottom Panel - Timeline */}
      <div className="h-48 bg-gray-800 border-t border-gray-700">
        <TimelinePanel
          layers={currentSlide.layers}
          duration={sliderData.duration}
          currentTime={currentTime}
          isPlaying={isPlaying}
          onTimeUpdate={setCurrentTime}
          selectedLayerId={selectedLayerId}
          onSelectLayer={setSelectedLayerId}
        />
      </div>

      {/* Template Selector Modal */}
      {showTemplateSelector && (
        <TemplateSelector
          onSelectTemplate={handleSelectTemplate}
          onClose={() => setShowTemplateSelector(false)}
        />
      )}
    </div>
  );
};

export default SliderBuilder;
