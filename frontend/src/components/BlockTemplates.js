import React, { useState } from 'react';
import EditableText from './EditableText';
import MediaModal from './MediaModal';

// Plantilla: Texto simple (1 columna)
export const TextSingleBlock = ({ blockId, data, onChange, onStyleChange }) => {
  return (
    <div className="mb-6">
      <EditableText
        tag="p"
        value={data.content || 'Escribe tu contenido aqu�...'}
        onChange={(val) => onChange(blockId, 'content', val)}
        className="text-gray-700 leading-relaxed text-lg"
        placeholder="Escribe tu contenido..."
        multiline={true}
        nodeId={blockId}
        onStyleChange={onStyleChange}
      />
    </div>
  );
};

// Plantilla: Texto en 2 columnas
export const TextTwoColumnBlock = ({ blockId, data, onChange, onStyleChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <EditableText
          tag="p"
          value={data.column1 || 'Contenido columna 1...'}
          onChange={(val) => onChange(blockId, 'column1', val)}
          className="text-gray-700 leading-relaxed text-lg"
          placeholder="Columna 1..."
          multiline={true}
          nodeId={`${blockId}-col1`}
          onStyleChange={onStyleChange}
        />
      </div>
      <div>
        <EditableText
          tag="p"
          value={data.column2 || 'Contenido columna 2...'}
          onChange={(val) => onChange(blockId, 'column2', val)}
          className="text-gray-700 leading-relaxed text-lg"
          placeholder="Columna 2..."
          multiline={true}
          nodeId={`${blockId}-col2`}
          onStyleChange={onStyleChange}
        />
      </div>
    </div>
  );
};

// Plantilla: Imagen completa
export const ImageFullBlock = ({ blockId, data, onChange }) => {
  const [showMediaModal, setShowMediaModal] = useState(false);

  return (
    <div className="mb-8 group relative">
      <img
        src={data.imageUrl || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop'}
        alt={data.alt || 'Imagen'}
        className="w-full h-96 object-cover rounded-lg shadow-md"
      />
      <button
        onClick={() => setShowMediaModal(true)}
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-white rounded-lg shadow-lg font-semibold hover:bg-gray-50"
      >
        Cambiar Imagen
      </button>

      <MediaModal
        isOpen={showMediaModal}
        onClose={() => setShowMediaModal(false)}
        onSelectMedia={(media) => {
          onChange(blockId, 'imageUrl', media.url);
          setShowMediaModal(false);
        }}
        currentUrl={data.imageUrl}
      />
    </div>
  );
};

// Plantilla: Imagen izquierda + Texto derecha
export const ImageTextLeftBlock = ({ blockId, data, onChange, onStyleChange }) => {
  const [showMediaModal, setShowMediaModal] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="group relative">
        <img
          src={data.imageUrl || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=400&fit=crop'}
          alt={data.alt || 'Imagen'}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <button
          onClick={() => setShowMediaModal(true)}
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-white rounded-lg shadow-lg text-sm font-semibold hover:bg-gray-50"
        >
          Cambiar
        </button>

        <MediaModal
          isOpen={showMediaModal}
          onClose={() => setShowMediaModal(false)}
          onSelectMedia={(media) => {
            onChange(blockId, 'imageUrl', media.url);
            setShowMediaModal(false);
          }}
          currentUrl={data.imageUrl}
        />
      </div>
      <div>
        <EditableText
          tag="p"
          value={data.content || 'Escribe tu contenido aqu�...'}
          onChange={(val) => onChange(blockId, 'content', val)}
          className="text-gray-700 leading-relaxed text-lg"
          placeholder="Escribe tu contenido..."
          multiline={true}
          nodeId={`${blockId}-text`}
          onStyleChange={onStyleChange}
        />
      </div>
    </div>
  );
};

// Plantilla: Texto izquierda + Imagen derecha
export const ImageTextRightBlock = ({ blockId, data, onChange, onStyleChange }) => {
  const [showMediaModal, setShowMediaModal] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <EditableText
          tag="p"
          value={data.content || 'Escribe tu contenido aqu�...'}
          onChange={(val) => onChange(blockId, 'content', val)}
          className="text-gray-700 leading-relaxed text-lg"
          placeholder="Escribe tu contenido..."
          multiline={true}
          nodeId={`${blockId}-text`}
          onStyleChange={onStyleChange}
        />
      </div>
      <div className="group relative">
        <img
          src={data.imageUrl || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=400&fit=crop'}
          alt={data.alt || 'Imagen'}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <button
          onClick={() => setShowMediaModal(true)}
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-white rounded-lg shadow-lg text-sm font-semibold hover:bg-gray-50"
        >
          Cambiar
        </button>

        <MediaModal
          isOpen={showMediaModal}
          onClose={() => setShowMediaModal(false)}
          onSelectMedia={(media) => {
            onChange(blockId, 'imageUrl', media.url);
            setShowMediaModal(false);
          }}
          currentUrl={data.imageUrl}
        />
      </div>
    </div>
  );
};

// Plantilla: T�tulo
export const HeadingBlock = ({ blockId, data, onChange, onStyleChange }) => {
  return (
    <div className="mb-6">
      <EditableText
        tag="h2"
        value={data.content || 'Nuevo T�tulo'}
        onChange={(val) => onChange(blockId, 'content', val)}
        className="text-4xl font-bold text-gray-900"
        placeholder="Escribe un t�tulo..."
        nodeId={blockId}
        onStyleChange={onStyleChange}
      />
    </div>
  );
};

// Plantilla: Cita
export const QuoteBlock = ({ blockId, data, onChange, onStyleChange }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-8 rounded-r-lg my-8">
      <EditableText
        tag="blockquote"
        value={data.quote || 'Escribe una cita inspiradora...'}
        onChange={(val) => onChange(blockId, 'quote', val)}
        className="text-2xl font-medium text-gray-800 italic mb-3"
        placeholder="Escribe una cita..."
        multiline={true}
        nodeId={`${blockId}-quote`}
        onStyleChange={onStyleChange}
      />
      <EditableText
        tag="cite"
        value={data.author || 'Autor'}
        onChange={(val) => onChange(blockId, 'author', val)}
        className="text-gray-600 not-italic font-semibold"
        placeholder="Nombre del autor..."
        nodeId={`${blockId}-author`}
        onStyleChange={onStyleChange}
      />
    </div>
  );
};

// Plantilla: Menu
export const MenuBlock = ({ blockId, data, onChange, onStyleChange }) => {
  return (
    <nav className="mb-6 bg-gray-100 p-4 rounded-lg">
      <EditableText
        tag="div"
        value={data.content || 'Home | About | Services | Contact'}
        onChange={(val) => onChange(blockId, 'content', val)}
        className="text-gray-700 text-center"
        placeholder="Menu items..."
        nodeId={blockId}
        onStyleChange={onStyleChange}
      />
    </nav>
  );
};

// Plantilla: Map
export const MapBlock = ({ blockId, data, onChange }) => {
  return (
    <div className="mb-6 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
      <p className="text-gray-600">Map Block - Google Maps iframe here</p>
    </div>
  );
};

// Plantilla: Video
export const VideoBlock = ({ blockId, data, onChange }) => {
  return (
    <div className="mb-6">
      <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
        <p className="text-white">Video Player - URL: {data.videoUrl || 'No video'}</p>
      </div>
    </div>
  );
};

// Plantilla: Audio
export const AudioBlock = ({ blockId, data, onChange }) => {
  return (
    <div className="mb-6 bg-gray-100 rounded-lg p-4">
      <p className="text-gray-600 text-sm mb-2">Audio Player</p>
      <div className="bg-gray-300 h-12 rounded flex items-center justify-center">
        <p className="text-gray-600">Audio controls here</p>
      </div>
    </div>
  );
};

// Plantilla: Button
export const ButtonBlock = ({ blockId, data, onChange, onStyleChange }) => {
  return (
    <div className="mb-6 text-center">
      <EditableText
        tag="button"
        value={data.text || 'Click Me'}
        onChange={(val) => onChange(blockId, 'text', val)}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        placeholder="Button text..."
        nodeId={blockId}
        onStyleChange={onStyleChange}
      />
    </div>
  );
};

// Plantilla: Icon
export const IconBlock = ({ blockId, data, onChange }) => {
  return (
    <div className="mb-6 text-center">
      <div className="inline-block text-6xl text-blue-500">★</div>
    </div>
  );
};

// Plantilla: Spacer
export const SpacerBlock = ({ blockId, data, onChange }) => {
  const height = data.height || 40;
  return <div style={{ height: `${height}px` }} className="mb-6"></div>;
};

// Plantilla: Form
export const FormBlock = ({ blockId, data, onChange }) => {
  return (
    <form className="mb-6 space-y-4 bg-gray-50 p-6 rounded-lg">
      <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
      <textarea placeholder="Message" className="w-full px-4 py-2 border rounded h-24"></textarea>
      <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

// Plantilla: Markup (HTML)
export const MarkupBlock = ({ blockId, data, onChange }) => {
  return (
    <div className="mb-6 bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
      <pre>{data.html || '<div>Your HTML here</div>'}</pre>
    </div>
  );
};

// Plantilla: Embed
export const EmbedBlock = ({ blockId, data, onChange }) => {
  return (
    <div className="mb-6 bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
      <p className="text-gray-600">Embed Block - iframe/embed code here</p>
    </div>
  );
};

// Plantilla: Circle Text
export const CircleTextBlock = ({ blockId, data, onChange, onStyleChange }) => {
  return (
    <div className="mb-6 flex justify-center">
      <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center">
        <EditableText
          tag="span"
          value={data.text || 'Text'}
          onChange={(val) => onChange(blockId, 'text', val)}
          className="text-white font-bold text-center"
          placeholder="Text..."
          nodeId={blockId}
          onStyleChange={onStyleChange}
        />
      </div>
    </div>
  );
};

// Plantilla: Slider
export const SliderBlock = ({ blockId, data, onChange }) => {
  return (
    <div className="mb-6 bg-gray-200 rounded-lg h-64 flex items-center justify-center relative">
      <p className="text-gray-600">Image Slider - Add slides here</p>
      <button className="absolute left-4 text-2xl">‹</button>
      <button className="absolute right-4 text-2xl">›</button>
    </div>
  );
};

// Plantilla: Social Icons
export const SocialBlock = ({ blockId, data, onChange }) => {
  return (
    <div className="mb-6 flex justify-center gap-4">
      <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">f</a>
      <a href="#" className="w-10 h-10 bg-sky-400 rounded-full flex items-center justify-center text-white">t</a>
      <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white">i</a>
      <a href="#" className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white">y</a>
    </div>
  );
};

// Mapa de componentes por tipo
export const BLOCK_COMPONENTS = {
  'text': TextSingleBlock,
  'menu': MenuBlock,
  'map': MapBlock,
  'image': ImageFullBlock,
  'video': VideoBlock,
  'audio': AudioBlock,
  'button': ButtonBlock,
  'icon': IconBlock,
  'spacer': SpacerBlock,
  'form': FormBlock,
  'markup': MarkupBlock,
  'embed': EmbedBlock,
  'circletext': CircleTextBlock,
  'slider': SliderBlock,
  'social': SocialBlock,
};

// Datos iniciales por tipo de bloque
export const BLOCK_INITIAL_DATA = {
  'text': { content: '' },
  'menu': { content: '' },
  'map': { lat: 0, lng: 0 },
  'image': { imageUrl: '', alt: '' },
  'video': { videoUrl: '' },
  'audio': { audioUrl: '' },
  'button': { text: '', url: '' },
  'icon': { iconName: '' },
  'spacer': { height: 40 },
  'form': { fields: [] },
  'markup': { html: '' },
  'embed': { embedCode: '' },
  'circletext': { text: '' },
  'slider': { slides: [] },
  'social': { links: {} },
};
