import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Block from '../Block';
import BlockSelector from '../BlockSelector';

const HeaderSection = ({
  headerBlock,
  previewMode,
  selectorOpen,
  selectorRef,
  onToggleSelector,
  onSelectBlock,
  onCloseSelector,
  onDeleteBlock,
  onEditBlock,
  onBlockSettings
}) => {
  return (
    <div className="border-b-2 border-gray-200">
      {!previewMode && !headerBlock && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-gray-300 m-4 rounded-lg"
        >
          <motion.button
            onClick={onToggleSelector}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 text-gray-400 shadow-md flex items-center justify-center transition-colors hover:border-blue-500 hover:text-blue-500"
            aria-label="Add header"
          >
            <motion.span
              className="text-3xl font-light"
              animate={{ rotate: selectorOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              +
            </motion.span>
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-gray-500 font-medium text-sm"
          >
            Add Header
          </motion.p>
        </motion.div>
      )}

      {/* Header Block Selector */}
      <div ref={selectorRef}>
        <AnimatePresence>
          {selectorOpen && (
            <BlockSelector
              onSelectBlock={onSelectBlock}
              onClose={onCloseSelector}
              filterCategory="headers"
              hideCategories={true}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Render Header Block */}
      {headerBlock && (
        <Block
          block={headerBlock}
          index={0}
          section="header"
          onDelete={onDeleteBlock}
          onEdit={onEditBlock}
          onSettings={onBlockSettings}
          canMoveUp={false}
          canMoveDown={false}
          previewMode={previewMode}
          disableDrag={true}
        />
      )}
    </div>
  );
};

export default HeaderSection;
