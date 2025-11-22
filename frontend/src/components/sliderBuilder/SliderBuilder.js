import React, { useState } from 'react';
import { IconHome, IconPlayerPlay, IconPlayerPause, IconTemplate, IconDeviceFloppy, IconFolderOpen, IconCode } from '@tabler/icons-react';
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
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedLayerId, setSelectedLayerId] = useState(null);
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showLoadModal, setShowLoadModal] = useState(false);
  const [showJSONModal, setShowJSONModal] = useState(false);
  const [sliderName, setSliderName] = useState('');

  // Load parallax hero template by default
  const defaultTemplate = getTemplate('parallax_hero');

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

  const currentSlide = sliderData.slides[currentSlideIndex];

  const handleSlideComplete = () => {
    console.log('🔄 Slide complete, advancing from slide', currentSlideIndex);
    // Advance to next slide (loop back to 0 when reaching the end)
    setCurrentSlideIndex((prev) => {
      const next = (prev + 1) % sliderData.slides.length;
      console.log('   Moving to slide', next);
      return next;
    });
    setCurrentTime(0);
  };

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
        idx === currentSlideIndex ? { ...slide, layers: [...slide.layers, newLayer] } : slide
      )
    }));

    setSelectedLayerId(newLayer.id);
  };

  const handleDeleteLayer = (layerId) => {
    setSliderData(prev => ({
      ...prev,
      slides: prev.slides.map((slide, idx) =>
        idx === currentSlideIndex ? { ...slide, layers: slide.layers.filter(l => l.id !== layerId) } : slide
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
        idx === currentSlideIndex ? {
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
        idx === currentSlideIndex ? { ...slide, layers: newLayers } : slide
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
    setCurrentSlideIndex(0);
    setIsPlaying(false);
    setShowTemplateSelector(false);
  };

  const handleSave = () => {
    if (!sliderName.trim()) {
      alert('Please enter a name for your slider');
      return;
    }

    const savedSliders = JSON.parse(localStorage.getItem('savedSliders') || '[]');
    const newSlider = {
      id: Date.now(),
      name: sliderName,
      data: sliderData,
      createdAt: new Date().toISOString()
    };

    savedSliders.push(newSlider);
    localStorage.setItem('savedSliders', JSON.stringify(savedSliders));

    alert(`Slider "${sliderName}" saved successfully!`);
    setShowSaveModal(false);
    setSliderName('');
  };

  const handleLoad = (slider) => {
    setSliderData(slider.data);
    setSelectedLayerId(null);
    setCurrentTime(0);
    setCurrentSlideIndex(0);
    setIsPlaying(false);
    setShowLoadModal(false);
  };

  const handleDelete = (sliderId) => {
    if (!window.confirm('Are you sure you want to delete this slider?')) return;

    const savedSliders = JSON.parse(localStorage.getItem('savedSliders') || '[]');
    const filtered = savedSliders.filter(s => s.id !== sliderId);
    localStorage.setItem('savedSliders', JSON.stringify(filtered));
    setShowLoadModal(false);
    setTimeout(() => setShowLoadModal(true), 10); // Force re-render
  };

  const getSavedSliders = () => {
    return JSON.parse(localStorage.getItem('savedSliders') || '[]');
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
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSaveModal(true)}
            className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors flex items-center gap-2"
            title="Save Slider"
          >
            <IconDeviceFloppy className="w-5 h-5" />
            <span className="hidden md:inline">Save</span>
          </button>
          <button
            onClick={() => setShowLoadModal(true)}
            className="px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors flex items-center gap-2"
            title="Load Slider"
          >
            <IconFolderOpen className="w-5 h-5" />
            <span className="hidden md:inline">Load</span>
          </button>
          <button
            onClick={() => setShowTemplateSelector(true)}
            className="px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors flex items-center gap-2"
            title="Load Template"
          >
            <IconTemplate className="w-5 h-5" />
            <span className="hidden md:inline">Templates</span>
          </button>
          <button
            onClick={() => setShowJSONModal(true)}
            className="px-3 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors flex items-center gap-2"
            title="View JSON Data"
          >
            <IconCode className="w-5 h-5" />
            <span className="hidden md:inline">View JSON</span>
          </button>
          <div className="w-px h-8 bg-gray-700"></div>
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
        <div className="flex-1 bg-gray-900 flex flex-col items-center justify-center p-8">
          <SliderCanvas
            slide={currentSlide}
            selectedLayerId={selectedLayerId}
            onSelectLayer={setSelectedLayerId}
            onUpdateLayer={handleUpdateLayer}
            isPlaying={isPlaying}
            currentTime={currentTime}
            onTimeUpdate={setCurrentTime}
            duration={currentSlide.duration}
            onSlideComplete={handleSlideComplete}
            slideIndex={currentSlideIndex}
          />

          {/* Slide Navigation Dots */}
          <div className="flex gap-2 mt-4">
            {sliderData.slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlideIndex(idx);
                  setCurrentTime(0);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentSlideIndex
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                title={`Slide ${idx + 1}`}
              />
            ))}
          </div>
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

      {/* Save Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8" onClick={() => setShowSaveModal(false)}>
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-white mb-4">Save Slider</h2>
            <input
              type="text"
              value={sliderName}
              onChange={(e) => setSliderName(e.target.value)}
              placeholder="Enter slider name..."
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none mb-4"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-semibold"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setShowSaveModal(false);
                  setSliderName('');
                }}
                className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Load Modal */}
      {showLoadModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8" onClick={() => setShowLoadModal(false)}>
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Load Slider</h2>
              <p className="text-sm text-gray-400 mt-1">Select a saved slider to load</p>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {getSavedSliders().length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p>No saved sliders yet</p>
                  <p className="text-sm mt-2">Create a slider and click Save to see it here</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {getSavedSliders().map((slider) => (
                    <div
                      key={slider.id}
                      className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{slider.name}</h3>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(slider.createdAt).toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {slider.data.slides[0].layers.length} layers
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleLoad(slider)}
                          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-semibold"
                        >
                          Load
                        </button>
                        <button
                          onClick={() => handleDelete(slider.id)}
                          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="p-4 border-t border-gray-700 flex justify-end">
              <button
                onClick={() => setShowLoadModal(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* JSON Viewer Modal */}
      {showJSONModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8" onClick={() => setShowJSONModal(false)}>
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Slider JSON Data</h2>
                <p className="text-sm text-gray-400 mt-1">Complete structure that will be saved to database</p>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(sliderData, null, 2));
                  alert('JSON copied to clipboard!');
                }}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm"
              >
                Copy JSON
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 bg-gray-900">
              <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap break-words">
                {JSON.stringify(sliderData, null, 2)}
              </pre>
            </div>
            <div className="p-4 border-t border-gray-700 bg-gray-800">
              <div className="text-xs text-gray-400 mb-3">
                <p className="font-semibold text-white mb-2">Structure includes:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Slider ID and configuration</li>
                  <li>All slides with durations and backgrounds</li>
                  <li>All layers per slide (text, images, shapes)</li>
                  <li>Layer properties: position, scale, rotation, opacity, zIndex</li>
                  <li>Animation definitions: type (in/out), timing, easing, properties</li>
                  <li>Visual properties: fontSize, fontFamily, fill colors</li>
                  <li>Complete layer tree structure</li>
                </ul>
              </div>
              <button
                onClick={() => setShowJSONModal(false)}
                className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderBuilder;
