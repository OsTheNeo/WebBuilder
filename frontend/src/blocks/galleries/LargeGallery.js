import React from 'react';

const LargeGallery = ({ data = {} }) => {
 const {
 title = 'Photo Gallery',
 subtitle = 'Beautiful moments captured',
 images = [
 {
 url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
 title: 'Mountain Vista',
 description: 'Majestic peaks'
 },
 {
 url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
 title: 'Ocean Sunset',
 description: 'Golden horizon'
 },
 {
 url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
 title: 'Forest Trail',
 description: 'Woodland path'
 },
 {
 url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
 title: 'Desert Landscape',
 description: 'Endless dunes'
 },
 {
 url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
 title: 'Snowy Peaks',
 description: 'Winter wonder'
 },
 {
 url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
 title: 'Green Valley',
 description: 'Rolling hills'
 }
 ]
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-8">
 <div className="max-w-6xl w-full">
 <div className="text-center mb-8">
 <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
 <p className="text-xl text-pink-100">{subtitle}</p>
 </div>
 <div className="grid grid-cols-3 gap-6">
 {images.map((image, index) => (
 <div key={index} className="bg-pink-100 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all cursor-pointer">
 <div className="h-24 flex items-center justify-center">
 <span className="text-gray-900 text-lg font-bold">{image.title}</span>
 </div>
 <div className="p-4 bg-pink-100">
 <p className="text-pink-700 text-sm text-center">{image.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
LargeGallery.blockMeta = {
 id: 'gallery-3',
 name: 'Large Gallery',
 category: 'galleries',
 height: 'h-64',
 defaultData: {
 title: 'Photo Gallery',
 subtitle: 'Beautiful moments captured',
 images: [
 {
 url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
 title: 'Mountain Vista',
 description: 'Majestic peaks'
 },
 {
 url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
 title: 'Ocean Sunset',
 description: 'Golden horizon'
 },
 {
 url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
 title: 'Forest Trail',
 description: 'Woodland path'
 },
 {
 url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
 title: 'Desert Landscape',
 description: 'Endless dunes'
 },
 {
 url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
 title: 'Snowy Peaks',
 description: 'Winter wonder'
 },
 {
 url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
 title: 'Green Valley',
 description: 'Rolling hills'
 }
 ]
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'large-gallery-root',
 tag: 'section',
 label: 'Gallery Section',
 className: 'w-full flex items-center justify-center px-8 py-8',
 children: [
 {
 id: 'large-gallery-wrapper',
 tag: 'div',
 label: 'Gallery Container',
 className: 'max-w-6xl w-full',
 children: [
 {
 id: 'large-gallery-header',
 tag: 'div',
 label: 'Gallery Header',
 className: 'text-center mb-8',
 children: [
 {
 id: 'large-gallery-title',
 tag: 'h2',
 label: 'Gallery Title',
 content: data.title || 'Photo Gallery',
 className: 'text-4xl font-bold text-gray-900 mb-2',
 editable: true
 },
 {
 id: 'large-gallery-subtitle',
 tag: 'p',
 label: 'Gallery Subtitle',
 content: data.subtitle || 'Beautiful moments captured',
 className: 'text-xl text-pink-100',
 editable: true
 }
 ]
 },
 {
 id: 'large-gallery-grid',
 tag: 'div',
 label: 'Image Grid',
 className: 'grid grid-cols-3 gap-6',
 children: (data.images || LargeGallery.blockMeta.defaultData.images).map((image, index) => ({
 id: `large-gallery-item-${index}`,
 tag: 'div',
 label: `Gallery Item ${index + 1}`,
 className: 'bg-pink-100 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all cursor-pointer',
 children: [
 {
 id: `large-gallery-item-image-${index}`,
 tag: 'div',
 label: 'Image Area',
 className: 'h-24 flex items-center justify-center',
 children: [
 {
 id: `large-gallery-item-title-${index}`,
 tag: 'span',
 label: 'Image Title',
 content: image.title,
 className: 'text-gray-900 text-lg font-bold',
 editable: true
 }
 ]
 },
 {
 id: `large-gallery-item-desc-${index}`,
 tag: 'div',
 label: 'Description Area',
 className: 'p-4 bg-pink-100',
 children: [
 {
 id: `large-gallery-item-desc-text-${index}`,
 tag: 'p',
 label: 'Description',
 content: image.description,
 className: 'text-pink-700 text-sm text-center',
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

export default LargeGallery;
