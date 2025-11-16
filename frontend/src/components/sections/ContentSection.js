import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Block from '../Block';
import BlockSelector from '../BlockSelector';
import AddBlockButton from '../AddBlockButton';

const ContentSection = ({
  contentBlocks,
  previewMode,
  fullHeight,
  selectorOpenAt,
  selectorSection,
  selectorRefs,
  onToggleSelector,
  onSelectBlock,
  onCloseSelector,
  onDeleteBlock,
  onMoveUp,
  onMoveDown,
  onReplaceBlock,
  onBlockSettings,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop
}) => {
  return (
    <div className={fullHeight ? 'flex-grow flex flex-col' : ''}>
      {/* Initial Add Button (when no content blocks) */}
      {contentBlocks.length === 0 && !previewMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`flex flex-col items-center justify-center ${
            fullHeight ? 'flex-grow' : 'py-32'
          }`}
        >
          <motion.button
            onClick={() => onToggleSelector(0, 'content')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center transition-all hover:bg-gray-100 hover:text-gray-600"
            aria-label="Add first content block"
          >
            <motion.span
              className="text-4xl font-light"
              animate={{ rotate: selectorOpenAt === 0 && selectorSection === 'content' ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              +
            </motion.span>
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-400 text-sm"
          >
            Click to add content
          </motion.p>
        </motion.div>
      )}

      {/* Content Block Selector at position 0 */}
      <div ref={(el) => (selectorRefs.current['content-0'] = el)}>
        <AnimatePresence>
          {selectorOpenAt === 0 && selectorSection === 'content' && (
            <BlockSelector
              onSelectBlock={(block) => onSelectBlock(block, 0, 'content')}
              onClose={onCloseSelector}
              excludeCategories={['headers', 'footers']}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Render Content Blocks */}
      <div className="space-y-0 pb-12">
        <AnimatePresence mode="popLayout">
          {contentBlocks.map((block, index) => (
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
                  section="content"
                  onDelete={() => onDeleteBlock(index, 'content')}
                  onMoveUp={() => onMoveUp(index)}
                  onMoveDown={() => onMoveDown(index)}
                  onEdit={() => onReplaceBlock(index, 'content')}
                  onSettings={() => onBlockSettings(index, 'content')}
                  canMoveUp={index > 0}
                  canMoveDown={index < contentBlocks.length - 1}
                  previewMode={previewMode}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  onDragOver={onDragOver}
                  onDrop={onDrop}
                  disableDrag={false}
                />

                {/* Add Block Button - Floating at bottom of block */}
                {!previewMode && (
                  <AnimatePresence>
                    {!(selectorOpenAt === index + 1 && selectorSection === 'content') && (
                      <AddBlockButton
                        onClick={() => onToggleSelector(index + 1, 'content')}
                        isOpen={false}
                      />
                    )}
                  </AnimatePresence>
                )}
              </motion.div>

              {/* Block Selector */}
              {!previewMode && (
                <div ref={(el) => (selectorRefs.current[`content-${index + 1}`] = el)}>
                  <AnimatePresence>
                    {selectorOpenAt === index + 1 && selectorSection === 'content' && (
                      <>
                        <div className="relative pointer-events-none h-0 z-30">
                          <AddBlockButton
                            onClick={onCloseSelector}
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
                            onSelectBlock={(block) => onSelectBlock(block, index + 1, 'content')}
                            onClose={onCloseSelector}
                            excludeCategories={['headers', 'footers']}
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
    </div>
  );
};

export default ContentSection;
