import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Block from './Block';
import BlockSelector from './BlockSelector';
import AddBlockButton from './AddBlockButton';
import DrawerEditor from './DrawerEditor';
import BlockSettingsDrawer from './BlockSettingsDrawer';
import PageSettingsDrawer from './PageSettingsDrawer';
import SvgPatterns from './SvgPatterns';

const BlockBuilder = () => {
  // Separate states for header, content, and footer sections
  const [headerBlock, setHeaderBlock] = useState(null);
  const [contentBlocks, setContentBlocks] = useState([]);
  const [footerBlock, setFooterBlock] = useState(null);

  const [selectorOpenAt, setSelectorOpenAt] = useState(null);
  const [selectorSection, setSelectorSection] = useState(null); // 'header', 'content', or 'footer'
  const [previewMode, setPreviewMode] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [editingBlock, setEditingBlock] = useState(null);
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);
  const [editingBlockIndex, setEditingBlockIndex] = useState(null);
  const [editingSection, setEditingSection] = useState(null); // Track which section is being edited
  const [pageSettingsOpen, setPageSettingsOpen] = useState(false);
  const [pageSettings, setPageSettings] = useState({
    backgroundColor: '#f3f4f6',
    primaryFont: 'Inter',
    secondaryFont: 'Inter',
    primaryColor: '#3b82f6',
    secondaryColor: '#8b5cf6',
    logo: null,
    darkMode: false,
    fullHeight: true
  });
  const selectorRefs = useRef({});

  // Load Google Fonts dynamically
  useEffect(() => {
    const loadGoogleFont = (fontName) => {
      const formattedFont = fontName.replace(/ /g, '+');
      const linkId = `google-font-${formattedFont}`;

      // Check if font is already loaded
      if (document.getElementById(linkId)) return;

      const link = document.createElement('link');
      link.id = linkId;
      link.href = `https://fonts.googleapis.com/css2?family=${formattedFont}:wght@300;400;500;600;700;800;900&display=swap`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    };

    if (pageSettings.primaryFont) {
      loadGoogleFont(pageSettings.primaryFont);
    }
    if (pageSettings.secondaryFont && pageSettings.secondaryFont !== pageSettings.primaryFont) {
      loadGoogleFont(pageSettings.secondaryFont);
    }
  }, [pageSettings.primaryFont, pageSettings.secondaryFont]);

  const handleAddBlock = (block, position, section) => {
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

    if (section === 'header') {
      setHeaderBlock(newBlock);
    } else if (section === 'footer') {
      setFooterBlock(newBlock);
    } else {
      // Content section
      if (position === null || position === undefined) {
        setContentBlocks([...contentBlocks, newBlock]);
      } else {
        const newBlocks = [...contentBlocks];
        newBlocks.splice(position, 0, newBlock);
        setContentBlocks(newBlocks);
      }
    }

    setSelectorOpenAt(null);
    setSelectorSection(null);
  };

  const toggleSelector = (position, section) => {
    if (selectorOpenAt === position && selectorSection === section) {
      setSelectorOpenAt(null);
      setSelectorSection(null);
    } else {
      setSelectorOpenAt(position);
      setSelectorSection(section);

      // Scroll to selector with better centering after animation completes
      setTimeout(() => {
        const selectorKey = `${section}-${position}`;
        const selectorElement = selectorRefs.current[selectorKey];
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

  const handleDeleteBlock = (index, section) => {
    if (section === 'header') {
      setHeaderBlock(null);
    } else if (section === 'footer') {
      setFooterBlock(null);
    } else {
      const newBlocks = [...contentBlocks];
      newBlocks.splice(index, 1);
      setContentBlocks(newBlocks);
    }
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const newBlocks = [...contentBlocks];
      [newBlocks[index], newBlocks[index - 1]] = [newBlocks[index - 1], newBlocks[index]];
      setContentBlocks(newBlocks);
    }
  };

  const handleMoveDown = (index) => {
    if (index < contentBlocks.length - 1) {
      const newBlocks = [...contentBlocks];
      [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
      setContentBlocks(newBlocks);
    }
  };

  const handleEditBlock = (index, section) => {
    if (section === 'header') {
      setEditingBlock({ ...headerBlock, index: 0, section: 'header' });
    } else if (section === 'footer') {
      setEditingBlock({ ...footerBlock, index: 0, section: 'footer' });
    } else {
      setEditingBlock({ ...contentBlocks[index], index, section: 'content' });
    }
  };

  const handleBlockSettings = (index, section) => {
    setEditingBlockIndex(index);
    setEditingSection(section);
    setSettingsDrawerOpen(true);
  };

  const handleConfigUpdate = (newConfig) => {
    if (editingBlockIndex !== null && editingSection) {
      if (editingSection === 'header') {
        setHeaderBlock({
          ...headerBlock,
          config: newConfig
        });
      } else if (editingSection === 'footer') {
        setFooterBlock({
          ...footerBlock,
          config: newConfig
        });
      } else {
        const newBlocks = [...contentBlocks];
        newBlocks[editingBlockIndex] = {
          ...newBlocks[editingBlockIndex],
          config: newConfig
        };
        setContentBlocks(newBlocks);
      }
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

    const newBlocks = [...contentBlocks];
    const draggedBlock = newBlocks[draggedIndex];

    // Remove from old position
    newBlocks.splice(draggedIndex, 1);

    // Insert at new position
    const insertIndex = draggedIndex < dropIndex ? dropIndex - 1 : dropIndex;
    newBlocks.splice(insertIndex, 0, draggedBlock);

    setContentBlocks(newBlocks);
    setDraggedIndex(null);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${pageSettings.darkMode ? 'dark' : ''}`}
      style={{
        backgroundColor: pageSettings.darkMode ? '#1f2937' : pageSettings.backgroundColor,
        '--primary-font': pageSettings.primaryFont,
        '--secondary-font': pageSettings.secondaryFont,
        '--primary-color': pageSettings.primaryColor,
        '--secondary-color': pageSettings.secondaryColor
      }}
    >
      {/* Header with Preview Toggle - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`sticky top-0 z-50 shadow-sm border-b py-2 transition-colors duration-300 ${
          pageSettings.darkMode
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className={`text-2xl font-bold transition-colors ${
                pageSettings.darkMode ? 'text-white' : 'text-gray-800'
              }`}>Block Builder</h1>
            </div>
            <div className="flex gap-2">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setPageSettings({ ...pageSettings, darkMode: !pageSettings.darkMode })}
                className={`p-2 rounded-lg transition-all ${
                  pageSettings.darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
                title={pageSettings.darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {pageSettings.darkMode ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setPageSettingsOpen(true)}
                className="px-3 py-2 rounded-lg font-medium transition-all bg-purple-500 text-white hover:bg-purple-600 flex items-center gap-2 text-sm"
                title="Page Settings"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Page
              </button>
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                  previewMode
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {previewMode ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Preview
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content - Full Width with Three Sections */}
      <div className={`w-full ${pageSettings.fullHeight ? 'flex flex-col min-h-[calc(100vh-73px)]' : ''}`}>
        {/* HEADER SECTION */}
        <div className="border-b-2 border-gray-200">
          {!previewMode && !headerBlock && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-gray-300 m-4 rounded-lg"
            >
              <motion.button
                onClick={() => toggleSelector(0, 'header')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 text-gray-400 shadow-md flex items-center justify-center transition-colors hover:border-blue-500 hover:text-blue-500"
                aria-label="Add header"
              >
                <motion.span
                  className="text-3xl font-light"
                  animate={{ rotate: selectorOpenAt === 0 && selectorSection === 'header' ? 45 : 0 }}
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
          <div ref={(el) => (selectorRefs.current['header-0'] = el)}>
            <AnimatePresence>
              {selectorOpenAt === 0 && selectorSection === 'header' && (
                <BlockSelector
                  onSelectBlock={(block) => handleAddBlock(block, 0, 'header')}
                  onClose={() => { setSelectorOpenAt(null); setSelectorSection(null); }}
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
              onDelete={() => handleDeleteBlock(0, 'header')}
              onEdit={() => handleEditBlock(0, 'header')}
              onSettings={() => handleBlockSettings(0, 'header')}
              canMoveUp={false}
              canMoveDown={false}
              previewMode={previewMode}
              disableDrag={true}
            />
          )}
        </div>

        {/* CONTENT SECTION */}
        <div className={`border-b-2 border-gray-200 ${pageSettings.fullHeight ? 'flex-grow' : ''}`}>
          {/* Initial Add Button (when no content blocks) */}
          {contentBlocks.length === 0 && !previewMode && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className={`flex flex-col items-center justify-center border-2 border-dashed border-gray-300 m-4 rounded-lg ${
                pageSettings.fullHeight ? 'min-h-full' : 'min-h-[40vh]'
              }`}
            >
              <motion.button
                onClick={() => toggleSelector(0, 'content')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-white border-2 border-gray-300 text-gray-400 shadow-md flex items-center justify-center transition-colors hover:border-green-500 hover:text-green-500"
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
                transition={{ delay: 0.4 }}
                className="mt-4 text-gray-500 font-medium"
              >
                Add Content Block
              </motion.p>
            </motion.div>
          )}

          {/* Content Block Selector at position 0 */}
          <div ref={(el) => (selectorRefs.current['content-0'] = el)}>
            <AnimatePresence>
              {selectorOpenAt === 0 && selectorSection === 'content' && (
                <BlockSelector
                  onSelectBlock={(block) => handleAddBlock(block, 0, 'content')}
                  onClose={() => { setSelectorOpenAt(null); setSelectorSection(null); }}
                  excludeCategories={['headers', 'footers']}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Render Content Blocks */}
          <div className="space-y-0">
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
                      onDelete={() => handleDeleteBlock(index, 'content')}
                      onMoveUp={() => handleMoveUp(index)}
                      onMoveDown={() => handleMoveDown(index)}
                      onEdit={() => handleEditBlock(index, 'content')}
                      onSettings={() => handleBlockSettings(index, 'content')}
                      canMoveUp={index > 0}
                      canMoveDown={index < contentBlocks.length - 1}
                      previewMode={previewMode}
                      onDragStart={handleDragStart}
                      onDragEnd={handleDragEnd}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      disableDrag={false}
                    />

                    {/* Add Block Button - Floating at bottom of block */}
                    {!previewMode && (
                      <AnimatePresence>
                        {!(selectorOpenAt === index + 1 && selectorSection === 'content') && (
                          <AddBlockButton
                            onClick={() => toggleSelector(index + 1, 'content')}
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
                                onClick={() => { setSelectorOpenAt(null); setSelectorSection(null); }}
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
                                onSelectBlock={(block) => handleAddBlock(block, index + 1, 'content')}
                                onClose={() => { setSelectorOpenAt(null); setSelectorSection(null); }}
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

        {/* FOOTER SECTION */}
        <div className="border-b-2 border-gray-200">
          {!previewMode && !footerBlock && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-gray-300 m-4 rounded-lg"
            >
              <motion.button
                onClick={() => toggleSelector(0, 'footer')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 text-gray-400 shadow-md flex items-center justify-center transition-colors hover:border-gray-600 hover:text-gray-600"
                aria-label="Add footer"
              >
                <motion.span
                  className="text-3xl font-light"
                  animate={{ rotate: selectorOpenAt === 0 && selectorSection === 'footer' ? 45 : 0 }}
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
                Add Footer
              </motion.p>
            </motion.div>
          )}

          {/* Footer Block Selector */}
          <div ref={(el) => (selectorRefs.current['footer-0'] = el)}>
            <AnimatePresence>
              {selectorOpenAt === 0 && selectorSection === 'footer' && (
                <BlockSelector
                  onSelectBlock={(block) => handleAddBlock(block, 0, 'footer')}
                  onClose={() => { setSelectorOpenAt(null); setSelectorSection(null); }}
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
              onDelete={() => handleDeleteBlock(0, 'footer')}
              onEdit={() => handleEditBlock(0, 'footer')}
              onSettings={() => handleBlockSettings(0, 'footer')}
              canMoveUp={false}
              canMoveDown={false}
              previewMode={previewMode}
              disableDrag={true}
            />
          )}
        </div>

        {/* Stats */}
        {(headerBlock || contentBlocks.length > 0 || footerBlock) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 text-gray-600"
          >
            <p className="font-semibold">
              Total Blocks: {(headerBlock ? 1 : 0) + contentBlocks.length + (footerBlock ? 1 : 0)}
            </p>
          </motion.div>
        )}
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
        blockConfig={
          editingSection === 'header' ? headerBlock?.config :
          editingSection === 'footer' ? footerBlock?.config :
          contentBlocks[editingBlockIndex]?.config
        }
        onUpdate={handleConfigUpdate}
      />

      {/* Page Settings Drawer */}
      <PageSettingsDrawer
        isOpen={pageSettingsOpen}
        onClose={() => setPageSettingsOpen(false)}
        pageSettings={pageSettings}
        onUpdate={setPageSettings}
      />

      {/* SVG Patterns */}
      <SvgPatterns />
    </div>
  );
};

export default BlockBuilder;
