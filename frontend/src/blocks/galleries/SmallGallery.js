import React from 'react';

const SmallGallery = ({ data = {} }) => {
 const {
 title = 'Photo Gallery',
 images = [
 {
 url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
 title: 'Mountain Landscape',
 caption: 'Breathtaking views'
 },
 {
 url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
 title: 'Ocean Sunset',
 caption: 'Golden hour beauty'
 },
 {
 url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
 title: 'Forest Trail',
 caption: 'Nature walk'
 }
 ]
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-16">
 <div className="w-full">
 <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">{title}</h2>
 <div className="grid grid-cols-3 gap-3">
 {images.map((image, index) => (
 <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer bg-pink-100">
 <div className="h-16 flex items-center justify-center text-gray-900 font-semibold text-sm">
 <span>{image.title}</span>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
SmallGallery.blockMeta = {
 id: 'gallery-1',
 name: 'Small Gallery',
 category: 'galleries',
 height: 'h-32',
 defaultData: {
 title: 'Photo Gallery',
 images: [
 {
 url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
 title: 'Mountain Landscape',
 caption: 'Breathtaking views'
 },
 {
 url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
 title: 'Ocean Sunset',
 caption: 'Golden hour beauty'
 },
 {
 url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
 title: 'Forest Trail',
 caption: 'Nature walk'
 }
 ]
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'small-gallery-root',
 tag: 'section',
 label: 'Gallery Section',
 className: 'w-full flex items-center justify-center px-8',
 children: [
 {
 id: 'small-gallery-wrapper',
 tag: 'div',
 label: 'Gallery Container',
 className: 'w-full',
 children: [
 {
 id: 'small-gallery-title',
 tag: 'h2',
 label: 'Gallery Title',
 content: data.title || 'Photo Gallery',
 className: 'text-2xl font-bold text-gray-900 text-center mb-3',
 editable: true
 },
 {
 id: 'small-gallery-grid',
 tag: 'div',
 label: 'Image Grid',
 className: 'grid grid-cols-3 gap-3',
 children: (data.images || SmallGallery.blockMeta.defaultData.images).map((image, index) => ({
 id: `small-gallery-item-${index}`,
 tag: 'div',
 label: `Gallery Item ${index + 1}`,
 className: 'relative group overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer bg-pink-100',
 children: [
 {
 id: `small-gallery-item-content-${index}`,
 tag: 'div',
 label: 'Image Placeholder',
 className: 'h-16 flex items-center justify-center text-gray-900 font-semibold text-sm',
 children: [
 {
 id: `small-gallery-item-title-${index}`,
 tag: 'span',
 label: 'Image Title',
 content: image.title,
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

export default SmallGallery;
