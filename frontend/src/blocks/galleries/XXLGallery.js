import React from 'react';

const XXLGallery = ({ data = {} }) => {
 const {
 title = 'Premium Gallery Collection',
 subtitle = 'Immerse yourself in visual excellence',
 description = 'A carefully curated selection of the world\'s most stunning photography',
 images = [
 {
 url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
 title: 'Mountain Majesty',
 description: 'Towering peaks and valleys',
 tags: ['Mountains', 'Nature', 'Peaks']
 },
 {
 url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
 title: 'Ocean Paradise',
 description: 'Crystal clear tropical waters',
 tags: ['Beach', 'Ocean', 'Tropical']
 },
 {
 url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
 title: 'Forest Haven',
 description: 'Deep woodland trails',
 tags: ['Forest', 'Nature', 'Trees']
 },
 {
 url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
 title: 'Desert Dreams',
 description: 'Endless golden dunes',
 tags: ['Desert', 'Sand', 'Landscape']
 },
 {
 url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
 title: 'Winter Wonderland',
 description: 'Pristine snowy peaks',
 tags: ['Winter', 'Snow', 'Mountains']
 },
 {
 url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
 title: 'Rolling Hills',
 description: 'Verdant meadows',
 tags: ['Hills', 'Nature', 'Grass']
 },
 {
 url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
 title: 'Misty Morning',
 description: 'Foggy forest atmosphere',
 tags: ['Fog', 'Forest', 'Morning']
 },
 {
 url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
 title: 'Sunset Vista',
 description: 'Golden hour beauty',
 tags: ['Sunset', 'Sky', 'Evening']
 }
 ]
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-12">
 <div className="w-full">
 <div className="text-center mb-12">
 <h2 className="text-6xl font-extrabold text-gray-900 mb-4">{title}</h2>
 <p className="text-2xl text-pink-100 font-semibold mb-3">{subtitle}</p>
 <p className="text-xl text-pink-200 mx-auto leading-relaxed">{description}</p>
 </div>
 <div className="grid grid-cols-4 gap-5">
 {images.map((image, index) => (
 <div key={index} className="group relative bg-pink-100 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all cursor-pointer border-2 border-pink-300">
 <div className="h-32 flex items-center justify-center relative">
 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
 <span className="text-gray-900 text-lg font-bold relative z-10">{image.title}</span>
 </div>
 <div className="p-4 bg-pink-100">
 <p className="text-pink-700 text-sm text-center mb-3 leading-relaxed">{image.description}</p>
 <div className="flex gap-1 justify-center flex-wrap">
 {image.tags.map((tag, idx) => (
 <span key={idx} className="bg-pink-200 text-pink-700 px-2 py-1 rounded text-xs font-semibold">
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
XXLGallery.blockMeta = {
 id: 'gallery-5',
 name: 'XXL Gallery',
 category: 'galleries',
 height: 'h-96',
 defaultData: {
 title: 'Premium Gallery Collection',
 subtitle: 'Immerse yourself in visual excellence',
 description: 'A carefully curated selection of the world\'s most stunning photography',
 images: [
 {
 url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
 title: 'Mountain Majesty',
 description: 'Towering peaks and valleys',
 tags: ['Mountains', 'Nature', 'Peaks']
 },
 {
 url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
 title: 'Ocean Paradise',
 description: 'Crystal clear tropical waters',
 tags: ['Beach', 'Ocean', 'Tropical']
 },
 {
 url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
 title: 'Forest Haven',
 description: 'Deep woodland trails',
 tags: ['Forest', 'Nature', 'Trees']
 },
 {
 url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
 title: 'Desert Dreams',
 description: 'Endless golden dunes',
 tags: ['Desert', 'Sand', 'Landscape']
 },
 {
 url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
 title: 'Winter Wonderland',
 description: 'Pristine snowy peaks',
 tags: ['Winter', 'Snow', 'Mountains']
 },
 {
 url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
 title: 'Rolling Hills',
 description: 'Verdant meadows',
 tags: ['Hills', 'Nature', 'Grass']
 },
 {
 url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
 title: 'Misty Morning',
 description: 'Foggy forest atmosphere',
 tags: ['Fog', 'Forest', 'Morning']
 },
 {
 url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
 title: 'Sunset Vista',
 description: 'Golden hour beauty',
 tags: ['Sunset', 'Sky', 'Evening']
 }
 ]
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'xxl-gallery-root',
 tag: 'section',
 label: 'Gallery Section',
 className: 'w-full flex items-center justify-center px-8 py-12',
 children: [
 {
 id: 'xxl-gallery-wrapper',
 tag: 'div',
 label: 'Gallery Container',
 className: 'w-full',
 children: [
 {
 id: 'xxl-gallery-header',
 tag: 'div',
 label: 'Gallery Header',
 className: 'text-center mb-12',
 children: [
 {
 id: 'xxl-gallery-title',
 tag: 'h2',
 label: 'Gallery Title',
 content: data.title || 'Premium Gallery Collection',
 className: 'text-6xl font-extrabold text-gray-900 mb-4',
 editable: true
 },
 {
 id: 'xxl-gallery-subtitle',
 tag: 'p',
 label: 'Gallery Subtitle',
 content: data.subtitle || 'Immerse yourself in visual excellence',
 className: 'text-2xl text-pink-100 font-semibold mb-3',
 editable: true
 },
 {
 id: 'xxl-gallery-description',
 tag: 'p',
 label: 'Gallery Description',
 content: data.description || 'A carefully curated selection of the world\'s most stunning photography',
 className: 'text-xl text-pink-200 mx-auto leading-relaxed',
 editable: true
 }
 ]
 },
 {
 id: 'xxl-gallery-grid',
 tag: 'div',
 label: 'Image Grid',
 className: 'grid grid-cols-4 gap-5',
 children: (data.images || XXLGallery.blockMeta.defaultData.images).map((image, index) => ({
 id: `xxl-gallery-item-${index}`,
 tag: 'div',
 label: `Gallery Item ${index + 1}`,
 className: 'group relative bg-pink-100 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all cursor-pointer border-2 border-pink-300',
 children: [
 {
 id: `xxl-gallery-item-image-${index}`,
 tag: 'div',
 label: 'Image Area',
 className: 'h-32 flex items-center justify-center relative',
 children: [
 {
 id: `xxl-gallery-item-overlay-${index}`,
 tag: 'div',
 label: 'Hover Overlay',
 className: 'absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all'
 },
 {
 id: `xxl-gallery-item-title-${index}`,
 tag: 'span',
 label: 'Image Title',
 content: image.title,
 className: 'text-gray-900 text-lg font-bold relative z-10',
 editable: true
 }
 ]
 },
 {
 id: `xxl-gallery-item-content-${index}`,
 tag: 'div',
 label: 'Content Area',
 className: 'p-4 bg-pink-100',
 children: [
 {
 id: `xxl-gallery-item-desc-${index}`,
 tag: 'p',
 label: 'Description',
 content: image.description,
 className: 'text-pink-700 text-sm text-center mb-3 leading-relaxed',
 editable: true
 },
 {
 id: `xxl-gallery-item-tags-${index}`,
 tag: 'div',
 label: 'Tags Container',
 className: 'flex gap-1 justify-center flex-wrap',
 children: image.tags.map((tag, tagIdx) => ({
 id: `xxl-gallery-item-tag-${index}-${tagIdx}`,
 tag: 'span',
 label: `Tag ${tagIdx + 1}`,
 content: tag,
 className: 'bg-pink-200 text-pink-700 px-2 py-1 rounded text-xs font-semibold',
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

export default XXLGallery;
