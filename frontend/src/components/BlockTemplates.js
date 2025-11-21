import React, { useState } from 'react';
import EditableText from './EditableText';
import MediaModal from './MediaModal';

// Plantilla: Texto simple (1 columna)
export const TextSingleBlock = ({ blockId, data, onChange, onStyleChange }) => {
  return (
    <div className="mb-6">
      <EditableText
        tag="p"
        value={data.content || 'Escribe tu contenido aquí...'}
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
          value={data.content || 'Escribe tu contenido aquí...'}
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
          value={data.content || 'Escribe tu contenido aquí...'}
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

// Plantilla: Título
export const HeadingBlock = ({ blockId, data, onChange, onStyleChange }) => {
  return (
    <div className="mb-6">
      <EditableText
        tag="h2"
        value={data.content || 'Nuevo Título'}
        onChange={(val) => onChange(blockId, 'content', val)}
        className="text-4xl font-bold text-gray-900"
        placeholder="Escribe un título..."
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

// Mapa de componentes por tipo
export const BLOCK_COMPONENTS = {
  'text-single': TextSingleBlock,
  'text-two-column': TextTwoColumnBlock,
  'image-full': ImageFullBlock,
  'image-text-left': ImageTextLeftBlock,
  'image-text-right': ImageTextRightBlock,
  'heading': HeadingBlock,
  'quote': QuoteBlock,
};

// Datos iniciales por tipo de bloque
export const BLOCK_INITIAL_DATA = {
  'text-single': { content: '' },
  'text-two-column': { column1: '', column2: '' },
  'image-full': { imageUrl: '', alt: '' },
  'image-text-left': { imageUrl: '', content: '', alt: '' },
  'image-text-right': { imageUrl: '', content: '', alt: '' },
  'heading': { content: '' },
  'quote': { quote: '', author: '' },
};
