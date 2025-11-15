import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Block from './Block';
import BlockSelector from './BlockSelector';
import AddBlockButton from './AddBlockButton';

const BlockBuilder = () => {
  const [blocks, setBlocks] = useState([]);
  const [selectorOpenAt, setSelectorOpenAt] = useState(null);

  const handleAddBlock = (block, position) => {
    const newBlock = {
      ...block,
      uniqueId: `${block.id}-${Date.now()}-${Math.random()}`
    };

    if (position === null || position === undefined) {
      // Add to end
      setBlocks([...blocks, newBlock]);
    } else {
      // Insert at position
      const newBlocks = [...blocks];
      newBlocks.splice(position, 0, newBlock);
      setBlocks(newBlocks);
    }

    // Close selector
    setSelectorOpenAt(null);
  };

  const toggleSelector = (position) => {
    if (selectorOpenAt === position) {
      setSelectorOpenAt(null);
    } else {
      setSelectorOpenAt(position);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Block Builder</h1>
          <p className="text-gray-600">Create your page by adding and arranging blocks</p>
        </motion.div>

        {/* Initial Add Button (when no blocks) */}
        {blocks.length === 0 && (
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
              className="w-32 h-32 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-2xl flex items-center justify-center transition-colors"
              aria-label="Add first block"
            >
              <motion.span
                className="text-6xl font-bold"
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
        <AnimatePresence>
          {selectorOpenAt === 0 && (
            <BlockSelector
              onSelectBlock={(block) => handleAddBlock(block, 0)}
              onClose={() => setSelectorOpenAt(null)}
            />
          )}
        </AnimatePresence>

        {/* Render Blocks */}
        <div className="space-y-0">
          <AnimatePresence mode="popLayout">
            {blocks.map((block, index) => (
              <React.Fragment key={block.uniqueId}>
                {/* Block */}
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="mb-0"
                >
                  <Block block={block} index={index} />
                </motion.div>

                {/* Add Block Button between blocks */}
                <AnimatePresence>
                  {selectorOpenAt !== index + 1 && (
                    <AddBlockButton
                      onClick={() => toggleSelector(index + 1)}
                      isOpen={false}
                    />
                  )}
                </AnimatePresence>

                {/* Block Selector */}
                <AnimatePresence>
                  {selectorOpenAt === index + 1 && (
                    <>
                      <AddBlockButton
                        onClick={() => setSelectorOpenAt(null)}
                        isOpen={true}
                      />
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
  );
};

export default BlockBuilder;
