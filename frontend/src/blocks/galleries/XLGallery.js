import React from 'react';

const XLGallery = ({ data = {} }) => {
  const {
    title = 'Visual Collection',
    subtitle = 'Stunning imagery from around the world',
    description = 'Browse through our curated collection of breathtaking photographs',
    images = [
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
        title: 'Mountain Glory',
        description: 'Alpine peaks',
        tags: ['Nature', 'Mountains']
      },
      {
        url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
        title: 'Ocean Paradise',
        description: 'Tropical waters',
        tags: ['Beach', 'Ocean']
      },
      {
        url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
        title: 'Forest Path',
        description: 'Woodland trails',
        tags: ['Nature', 'Forest']
      },
      {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
        title: 'Desert Vista',
        description: 'Sandy expanse',
        tags: ['Desert', 'Sand']
      },
      {
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
        title: 'Winter Peaks',
        description: 'Snowy landscape',
        tags: ['Winter', 'Snow']
      },
      {
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
        title: 'Green Hills',
        description: 'Rolling meadows',
        tags: ['Nature', 'Hills']
      }
    ]
  } = data;

  return (
    <section className="w-full h-80 bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 flex items-center justify-center px-8 py-10">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-white mb-3">{title}</h2>
          <p className="text-2xl text-pink-100 mb-2">{subtitle}</p>
          <p className="text-lg text-pink-200 max-w-3xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative bg-pink-100 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all cursor-pointer border-2 border-pink-200">
              <div className="h-32 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold">{image.title}</span>
              </div>
              <div className="p-4 bg-pink-100">
                <p className="text-pink-700 text-sm text-center mb-3">{image.description}</p>
                <div className="flex gap-2 justify-center flex-wrap">
                  {image.tags.map((tag, idx) => (
                    <span key={idx} className="bg-pink-200 text-pink-700 px-2 py-1 rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Block metadata and structure for tree mapping
XLGallery.blockMeta = {
  id: 'gallery-4',
  name: 'XL Gallery',
  category: 'galleries',
  height: 'h-80',
  defaultData: {
    title: 'Visual Collection',
    subtitle: 'Stunning imagery from around the world',
    description: 'Browse through our curated collection of breathtaking photographs',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
        title: 'Mountain Glory',
        description: 'Alpine peaks',
        tags: ['Nature', 'Mountains']
      },
      {
        url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
        title: 'Ocean Paradise',
        description: 'Tropical waters',
        tags: ['Beach', 'Ocean']
      },
      {
        url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
        title: 'Forest Path',
        description: 'Woodland trails',
        tags: ['Nature', 'Forest']
      },
      {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
        title: 'Desert Vista',
        description: 'Sandy expanse',
        tags: ['Desert', 'Sand']
      },
      {
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
        title: 'Winter Peaks',
        description: 'Snowy landscape',
        tags: ['Winter', 'Snow']
      },
      {
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
        title: 'Green Hills',
        description: 'Rolling meadows',
        tags: ['Nature', 'Hills']
      }
    ]
  },
  // Tree structure definition
  getTree: (data = {}) => ({
    id: 'xl-gallery-root',
    tag: 'section',
    label: 'Gallery Section',
    className: 'w-full h-80 bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 flex items-center justify-center px-8 py-10',
    children: [
      {
        id: 'xl-gallery-wrapper',
        tag: 'div',
        label: 'Gallery Container',
        className: 'max-w-7xl w-full',
        children: [
          {
            id: 'xl-gallery-header',
            tag: 'div',
            label: 'Gallery Header',
            className: 'text-center mb-10',
            children: [
              {
                id: 'xl-gallery-title',
                tag: 'h2',
                label: 'Gallery Title',
                content: data.title || 'Visual Collection',
                className: 'text-5xl font-bold text-white mb-3',
                editable: true
              },
              {
                id: 'xl-gallery-subtitle',
                tag: 'p',
                label: 'Gallery Subtitle',
                content: data.subtitle || 'Stunning imagery from around the world',
                className: 'text-2xl text-pink-100 mb-2',
                editable: true
              },
              {
                id: 'xl-gallery-description',
                tag: 'p',
                label: 'Gallery Description',
                content: data.description || 'Browse through our curated collection of breathtaking photographs',
                className: 'text-lg text-pink-200 max-w-3xl mx-auto',
                editable: true
              }
            ]
          },
          {
            id: 'xl-gallery-grid',
            tag: 'div',
            label: 'Image Grid',
            className: 'grid grid-cols-3 gap-6',
            children: (data.images || XLGallery.blockMeta.defaultData.images).map((image, index) => ({
              id: `xl-gallery-item-${index}`,
              tag: 'div',
              label: `Gallery Item ${index + 1}`,
              className: 'group relative bg-pink-100 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all cursor-pointer border-2 border-pink-200',
              children: [
                {
                  id: `xl-gallery-item-image-${index}`,
                  tag: 'div',
                  label: 'Image Area',
                  className: 'h-32 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center',
                  children: [
                    {
                      id: `xl-gallery-item-title-${index}`,
                      tag: 'span',
                      label: 'Image Title',
                      content: image.title,
                      className: 'text-white text-xl font-bold',
                      editable: true
                    }
                  ]
                },
                {
                  id: `xl-gallery-item-content-${index}`,
                  tag: 'div',
                  label: 'Content Area',
                  className: 'p-4 bg-pink-100',
                  children: [
                    {
                      id: `xl-gallery-item-desc-${index}`,
                      tag: 'p',
                      label: 'Description',
                      content: image.description,
                      className: 'text-pink-700 text-sm text-center mb-3',
                      editable: true
                    },
                    {
                      id: `xl-gallery-item-tags-${index}`,
                      tag: 'div',
                      label: 'Tags Container',
                      className: 'flex gap-2 justify-center flex-wrap',
                      children: image.tags.map((tag, tagIdx) => ({
                        id: `xl-gallery-item-tag-${index}-${tagIdx}`,
                        tag: 'span',
                        label: `Tag ${tagIdx + 1}`,
                        content: tag,
                        className: 'bg-pink-200 text-pink-700 px-2 py-1 rounded-full text-xs font-semibold',
                        editable: true
                      }))
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

export default XLGallery;
