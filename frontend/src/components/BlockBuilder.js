import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeaderSection from './sections/HeaderSection';
import ContentSection from './sections/ContentSection';
import FooterSection from './sections/FooterSection';
import DrawerEditor from './DrawerEditor';
import BlockSettingsDrawer from './BlockSettingsDrawer';
import PageSettingsDrawer from './PageSettingsDrawer';
import SvgPatterns from './SvgPatterns';
import { IconSun, IconMoon, IconSettings, IconEye, IconEdit } from '@tabler/icons-react';

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
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
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

  const handleReplaceBlock = (index, section) => {
    if (section === 'header') {
      toggleSelector(0, 'header');
    } else if (section === 'footer') {
      toggleSelector(0, 'footer');
    } else {
      toggleSelector(index, 'content');
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
                  <IconSun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <IconMoon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              <button
                onClick={() => setPageSettingsOpen(true)}
                className="px-3 py-2 rounded-lg font-medium transition-all bg-purple-500 text-white hover:bg-purple-600 flex items-center gap-2 text-sm"
                title="Page Settings"
              >
                <IconSettings className="w-4 h-4" />
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
                    <IconEdit className="w-4 h-4" />
                    Edit
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <IconEye className="w-4 h-4" />
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
        <HeaderSection
          headerBlock={headerBlock}
          previewMode={previewMode}
          selectorOpen={selectorOpenAt === 0 && selectorSection === 'header'}
          selectorRef={(el) => (selectorRefs.current['header-0'] = el)}
          onToggleSelector={() => toggleSelector(0, 'header')}
          onSelectBlock={(block) => handleAddBlock(block, 0, 'header')}
          onCloseSelector={() => { setSelectorOpenAt(null); setSelectorSection(null); }}
          onDeleteBlock={() => handleDeleteBlock(0, 'header')}
          onReplaceBlock={() => handleReplaceBlock(0, 'header')}
          onBlockSettings={() => handleBlockSettings(0, 'header')}
        />

        {/* CONTENT SECTION */}
        <ContentSection
          contentBlocks={contentBlocks}
          previewMode={previewMode}
          fullHeight={pageSettings.fullHeight}
          selectorOpenAt={selectorOpenAt}
          selectorSection={selectorSection}
          selectorRefs={selectorRefs}
          onToggleSelector={toggleSelector}
          onSelectBlock={handleAddBlock}
          onCloseSelector={() => { setSelectorOpenAt(null); setSelectorSection(null); }}
          onDeleteBlock={handleDeleteBlock}
          onMoveUp={handleMoveUp}
          onMoveDown={handleMoveDown}
          onReplaceBlock={handleReplaceBlock}
          onBlockSettings={handleBlockSettings}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />

        {/* FOOTER SECTION */}
        <FooterSection
          footerBlock={footerBlock}
          previewMode={previewMode}
          selectorOpen={selectorOpenAt === 0 && selectorSection === 'footer'}
          selectorRef={(el) => (selectorRefs.current['footer-0'] = el)}
          onToggleSelector={() => toggleSelector(0, 'footer')}
          onSelectBlock={(block) => handleAddBlock(block, 0, 'footer')}
          onCloseSelector={() => { setSelectorOpenAt(null); setSelectorSection(null); }}
          onDeleteBlock={() => handleDeleteBlock(0, 'footer')}
          onReplaceBlock={() => handleReplaceBlock(0, 'footer')}
          onBlockSettings={() => handleBlockSettings(0, 'footer')}
        />
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
