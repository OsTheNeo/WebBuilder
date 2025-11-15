import React from 'react';

const MediumGallery = ({ data = {} }) => {
  const {
    title = 'Image Gallery',
    subtitle = 'Explore our collection',
    images = [
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
        title: 'Mountain Peaks',
        caption: 'Alpine adventure'
      },
      {
        url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
        title: 'Ocean Waves',
        caption: 'Coastal beauty'
      },
      {
        url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
        title: 'Forest Path',
        caption: 'Woodland wonders'
      },
      {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
        title: 'Desert Dunes',
        caption: 'Golden sands'
      }
    ]
  } = data;

  return (
    <section className="w-full h-48 bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center px-8 py-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-1">{title}</h2>
          <p className="text-pink-100">{subtitle}</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-pink-100 rounded-xl h-24 overflow-hidden shadow-xl hover:scale-105 transition-all cursor-pointer">
              <div className="h-16 bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">{image.title}</span>
              </div>
              <div className="h-8 bg-pink-100 flex items-center justify-center">
                <span className="text-pink-700 text-xs">{image.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Block metadata and structure for tree mapping
MediumGallery.blockMeta = {
  id: 'gallery-2',
  name: 'Medium Gallery',
  category: 'galleries',
  height: 'h-48',
  defaultData: {
    title: 'Image Gallery',
    subtitle: 'Explore our collection',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
        title: 'Mountain Peaks',
        caption: 'Alpine adventure'
      },
      {
        url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
        title: 'Ocean Waves',
        caption: 'Coastal beauty'
      },
      {
        url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
        title: 'Forest Path',
        caption: 'Woodland wonders'
      },
      {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
        title: 'Desert Dunes',
        caption: 'Golden sands'
      }
    ]
  },
  // Tree structure definition
  getTree: (data = {}) => ({
    id: 'medium-gallery-root',
    tag: 'section',
    label: 'Gallery Section',
    className: 'w-full h-48 bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center px-8 py-6',
    children: [
      {
        id: 'medium-gallery-wrapper',
        tag: 'div',
        label: 'Gallery Container',
        className: 'max-w-6xl w-full',
        children: [
          {
            id: 'medium-gallery-header',
            tag: 'div',
            label: 'Gallery Header',
            className: 'text-center mb-6',
            children: [
              {
                id: 'medium-gallery-title',
                tag: 'h2',
                label: 'Gallery Title',
                content: data.title || 'Image Gallery',
                className: 'text-3xl font-bold text-white mb-1',
                editable: true
              },
              {
                id: 'medium-gallery-subtitle',
                tag: 'p',
                label: 'Gallery Subtitle',
                content: data.subtitle || 'Explore our collection',
                className: 'text-pink-100',
                editable: true
              }
            ]
          },
          {
            id: 'medium-gallery-grid',
            tag: 'div',
            label: 'Image Grid',
            className: 'grid grid-cols-4 gap-4',
            children: (data.images || MediumGallery.blockMeta.defaultData.images).map((image, index) => ({
              id: `medium-gallery-item-${index}`,
              tag: 'div',
              label: `Gallery Item ${index + 1}`,
              className: 'bg-pink-100 rounded-xl h-24 overflow-hidden shadow-xl hover:scale-105 transition-all cursor-pointer',
              children: [
                {
                  id: `medium-gallery-item-image-${index}`,
                  tag: 'div',
                  label: 'Image Area',
                  className: 'h-16 bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center',
                  children: [
                    {
                      id: `medium-gallery-item-title-${index}`,
                      tag: 'span',
                      label: 'Image Title',
                      content: image.title,
                      className: 'text-white text-sm font-semibold',
                      editable: true
                    }
                  ]
                },
                {
                  id: `medium-gallery-item-caption-${index}`,
                  tag: 'div',
                  label: 'Caption Area',
                  className: 'h-8 bg-pink-100 flex items-center justify-center',
                  children: [
                    {
                      id: `medium-gallery-item-caption-text-${index}`,
                      tag: 'span',
                      label: 'Caption',
                      content: image.caption,
                      className: 'text-pink-700 text-xs',
                      editable: true
                    }
                  ]
                }
              ]
            }))
          }
        ]
      }
    ]
  })
};

export default MediumGallery;
