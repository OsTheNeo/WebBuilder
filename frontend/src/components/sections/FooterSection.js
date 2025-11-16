import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Block from '../Block';
import BlockSelector from '../BlockSelector';

const FooterSection = ({
  footerBlock,
  previewMode,
  selectorOpen,
  selectorRef,
  onToggleSelector,
  onSelectBlock,
  onCloseSelector,
  onDeleteBlock,
  onReplaceBlock,
  onBlockSettings
}) => {
  return (
    <div>
      {!previewMode && !footerBlock && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center justify-center py-16"
        >
          <motion.button
            onClick={onToggleSelector}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center transition-all hover:bg-gray-100 hover:text-gray-600"
            aria-label="Add footer"
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
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm"
          >
            Click to add footer
          </motion.p>
        </motion.div>
      )}

      {/* Footer Block Selector */}
      <div ref={selectorRef}>
        <AnimatePresence>
          {selectorOpen && (
            <BlockSelector
              onSelectBlock={onSelectBlock}
              onClose={onCloseSelector}
              filterCategory="footers"
              hideCategories={true}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Render Footer Block */}
      {footerBlock && (
        <Block
          block={footerBlock}
          index={0}
          section="footer"
          onDelete={onDeleteBlock}
          onEdit={onReplaceBlock}
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

export default FooterSection;
