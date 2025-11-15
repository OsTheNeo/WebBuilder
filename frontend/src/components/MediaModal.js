import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MediaModal = ({ isOpen, onClose, onSelectMedia, currentUrl }) => {
  const [activeTab, setActiveTab] = useState('url');
  const [urlInput, setUrlInput] = useState(currentUrl || '');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [mediaType, setMediaType] = useState('image'); // 'image' or 'video'

  // Sample gallery items (in real app, this would come from a database)
  const galleryItems = [
    { id: 1, url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop', type: 'image', name: 'Laptop' },
    { id: 2, url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop', type: 'image', name: 'Code' },
    { id: 3, url: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop', type: 'image', name: 'Workspace' },
    { id: 4, url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop', type: 'image', name: 'Computer' },
    { id: 5, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video', name: 'Sample Video' },
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.startsWith('video/') ? 'video' : 'image';
      setMediaType(fileType);
      setUploadedFile(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (event) => {
        setUrlInput(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = () => {
    if (urlInput) {
      // Detect if URL is video
      const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
      const isVideo = videoExtensions.some(ext => urlInput.toLowerCase().includes(ext)) ||
                      urlInput.includes('youtube.com') ||
                      urlInput.includes('vimeo.com');

      onSelectMedia({
        url: urlInput,
        type: isVideo ? 'video' : 'image'
      });
      onClose();
    }
  };

  const handleGallerySelect = (item) => {
    onSelectMedia({
      url: item.url,
      type: item.type
    });
    onClose();
  };

  const tabs = [
    { id: 'url', name: 'URL', icon: '🔗' },
    { id: 'upload', name: 'Upload', icon: '📤' },
    { id: 'gallery', name: 'Gallery', icon: '🖼️' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl bg-white rounded-xl shadow-2xl z-50 max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Select Media</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 px-6 pt-4 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {/* URL Tab */}
              {activeTab === 'url' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Media URL
                    </label>
                    <input
                      type="text"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://example.com/image.jpg or video.mp4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Supports images (.jpg, .png, .gif) and videos (.mp4, .webm)
                    </p>
                  </div>

                  {/* Preview */}
                  {urlInput && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Preview</p>
                      <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                        {urlInput.match(/\.(mp4|webm|ogg|mov)$/i) || urlInput.includes('youtube') || urlInput.includes('vimeo') ? (
                          <video src={urlInput} controls className="max-w-full h-48 rounded" />
                        ) : (
                          <img src={urlInput} alt="Preview" className="max-w-full h-48 object-contain rounded" />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Upload Tab */}
              {activeTab === 'upload' && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors">
                    <input
                      type="file"
                      accept="image/*,video/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="text-lg font-semibold text-gray-700">
                        Click to upload image or video
                      </span>
                      <span className="text-sm text-gray-500 mt-2">
                        PNG, JPG, GIF, MP4, WEBM up to 10MB
                      </span>
                    </label>
                  </div>

                  {/* Upload Preview */}
                  {uploadedFile && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Uploaded: {uploadedFile.name}
                      </p>
                      <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                        {mediaType === 'video' ? (
                          <video src={urlInput} controls className="max-w-full h-48 rounded" />
                        ) : (
                          <img src={urlInput} alt="Upload preview" className="max-w-full h-48 object-contain rounded" />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Gallery Tab */}
              {activeTab === 'gallery' && (
                <div className="grid grid-cols-3 gap-4">
                  {galleryItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleGallerySelect(item)}
                      className="relative group cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all"
                    >
                      {item.type === 'video' ? (
                        <div className="relative">
                          <video src={item.url} className="w-full h-32 object-cover" />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      ) : (
                        <img src={item.url} alt={item.name} className="w-full h-32 object-cover" />
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                        <p className="text-white text-xs font-semibold">{item.name}</p>
                        <p className="text-white/80 text-xs">{item.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              {activeTab === 'url' && (
                <button
                  onClick={handleUrlSubmit}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                  disabled={!urlInput}
                >
                  Insert Media
                </button>
              )}
              {activeTab === 'upload' && uploadedFile && (
                <button
                  onClick={handleUrlSubmit}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Insert Media
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MediaModal;
