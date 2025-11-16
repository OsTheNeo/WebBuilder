import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Block from './Block';
import BlockSelector from './BlockSelector';
import AddBlockButton from './AddBlockButton';
import DrawerEditor from './DrawerEditor';
import BlockSettingsDrawer from './BlockSettingsDrawer';
import SvgPatterns from './SvgPatterns';

const BlockBuilder = () => {
  const [blocks, setBlocks] = useState([]);
  const [selectorOpenAt, setSelectorOpenAt] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [editingBlock, setEditingBlock] = useState(null);
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);
  const [editingBlockIndex, setEditingBlockIndex] = useState(null);
  const selectorRefs = useRef({});

  const handleAddBlock = (block, position) => {
    const newBlock = {
      ...block,
      uniqueId: `${block.id}-${Date.now()}-${Math.random()}`,
      config: {
        layout: 'boxed',
        alignment: 'center',
        maxWidth: '7xl',
        padding: { top: 12, right: 8, bottom: 12, left: 8 },
        margin: { top: 0, bottom: 0 },
        background: { type: 'color', color: '#ffffff' }
      }
    };

    if (position === null || position === undefined) {
      setBlocks([...blocks, newBlock]);
    } else {
      const newBlocks = [...blocks];
      newBlocks.splice(position, 0, newBlock);
      setBlocks(newBlocks);
    }

    setSelectorOpenAt(null);
  };

  const toggleSelector = (position) => {
    if (selectorOpenAt === position) {
      setSelectorOpenAt(null);
    } else {
      setSelectorOpenAt(position);

      // Scroll to selector with better centering after animation completes
      setTimeout(() => {
        const selectorElement = selectorRefs.current[position];
        if (selectorElement) {
          // Get the element's position
          const rect = selectorElement.getBoundingClientRect();
          const elementTop = rect.top + window.pageYOffset;
          const elementHeight = rect.height;

          // Calculate center position accounting for the selector's height
          const windowHeight = window.innerHeight;
          const scrollToPosition = elementTop - (windowHeight / 2) + (elementHeight / 2);

          // Smooth scroll to calculated position
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
          });
        }
      }, 450); // Increased delay to allow full animation
    }
  };

  const handleDeleteBlock = (index) => {
    const newBlocks = [...blocks];
    newBlocks.splice(index, 1);
    setBlocks(newBlocks);
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const newBlocks = [...blocks];
      [newBlocks[index], newBlocks[index - 1]] = [newBlocks[index - 1], newBlocks[index]];
      setBlocks(newBlocks);
    }
  };

  const handleMoveDown = (index) => {
    if (index < blocks.length - 1) {
      const newBlocks = [...blocks];
      [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
      setBlocks(newBlocks);
    }
  };

  const handleEditBlock = (index) => {
    setEditingBlock({ ...blocks[index], index });
  };

  const handleBlockSettings = (index) => {
    setEditingBlockIndex(index);
    setSettingsDrawerOpen(true);
  };

  const handleConfigUpdate = (newConfig) => {
    if (editingBlockIndex !== null) {
      const newBlocks = [...blocks];
      newBlocks[editingBlockIndex] = {
        ...newBlocks[editingBlockIndex],
        config: newConfig
      };
      setBlocks(newBlocks);
    }
  };

  // Drag and Drop handlers
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();

    if (draggedIndex === null || draggedIndex === dropIndex) {
      return;
    }

    const newBlocks = [...blocks];
    const draggedBlock = newBlocks[draggedIndex];

    // Remove from old position
    newBlocks.splice(draggedIndex, 1);

    // Insert at new position
    const insertIndex = draggedIndex < dropIndex ? dropIndex - 1 : dropIndex;
    newBlocks.splice(insertIndex, 0, draggedBlock);

    setBlocks(newBlocks);
    setDraggedIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Preview Toggle - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 py-3"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Block Builder</h1>
              <p className="text-gray-600 text-sm">Create your page by adding and arranging blocks</p>
            </div>
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                previewMode
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {previewMode ? (
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit Mode
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Preview
                </span>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Content - Full Width */}
      <div className="w-full">
        <div className="">
          {/* Initial Add Button (when no blocks) */}
          {blocks.length === 0 && !previewMode && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center min-h-[60vh]"
            >
              <motion.button
                onClick={() => toggleSelector(0)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-32 h-32 rounded-full bg-white border-2 border-gray-400/60 text-gray-500 shadow-2xl flex items-center justify-center transition-colors hover:border-blue-500 hover:text-blue-500"
                aria-label="Add first block"
              >
                <motion.span
                  className="text-6xl font-light"
                  animate={{ rotate: selectorOpenAt === 0 ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </motion.button>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-gray-600 font-semibold"
              >
                Click to add your first block
              </motion.p>
            </motion.div>
          )}

          {/* Block Selector at position 0 */}
          <div ref={(el) => (selectorRefs.current[0] = el)}>
            <AnimatePresence>
              {selectorOpenAt === 0 && (
                <BlockSelector
                  onSelectBlock={(block) => handleAddBlock(block, 0)}
                  onClose={() => setSelectorOpenAt(null)}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Render Blocks */}
          <div className="space-y-0">
            <AnimatePresence mode="popLayout">
              {blocks.map((block, index) => (
                <React.Fragment key={block.uniqueId}>
                  {/* Block with Floating Add Button */}
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <Block
                      block={block}
                      index={index}
                      onDelete={() => handleDeleteBlock(index)}
                      onMoveUp={() => handleMoveUp(index)}
                      onMoveDown={() => handleMoveDown(index)}
                      onEdit={() => handleEditBlock(index)}
                      onSettings={() => handleBlockSettings(index)}
                      canMoveUp={index > 0}
                      canMoveDown={index < blocks.length - 1}
                      previewMode={previewMode}
                      onDragStart={handleDragStart}
                      onDragEnd={handleDragEnd}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    />

                    {/* Add Block Button - Floating at bottom of block */}
                    {!previewMode && (
                      <AnimatePresence>
                        {selectorOpenAt !== index + 1 && (
                          <AddBlockButton
                            onClick={() => toggleSelector(index + 1)}
                            isOpen={false}
                          />
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>

                  {/* Block Selector */}
                  {!previewMode && (
                    <div ref={(el) => (selectorRefs.current[index + 1] = el)}>
                      <AnimatePresence>
                        {selectorOpenAt === index + 1 && (
                          <>
                            <div className="relative pointer-events-none h-0 z-30">
                              <AddBlockButton
                                onClick={() => setSelectorOpenAt(null)}
                                isOpen={true}
                              />
                            </div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <BlockSelector
                                onSelectBlock={(block) => handleAddBlock(block, index + 1)}
                                onClose={() => setSelectorOpenAt(null)}
                              />
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </AnimatePresence>
          </div>

          {/* Stats */}
          {blocks.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8 text-gray-600"
            >
              <p className="font-semibold">
                Total Blocks: {blocks.length}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Drawer Editor */}
      <DrawerEditor
        isOpen={editingBlock !== null}
        onClose={() => setEditingBlock(null)}
        block={editingBlock}
      />

      {/* Settings Drawer */}
      <BlockSettingsDrawer
        isOpen={settingsDrawerOpen}
        onClose={() => setSettingsDrawerOpen(false)}
        blockConfig={blocks[editingBlockIndex]?.config}
        onUpdate={handleConfigUpdate}
      />

      {/* SVG Patterns */}
      <SvgPatterns />
    </div>
  );
};

export default BlockBuilder;
