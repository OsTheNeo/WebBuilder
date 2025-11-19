import React from 'react';
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
      {/* Show selector directly when no footer block exists (not in preview mode) */}
      {!previewMode && !footerBlock && (
        <div ref={selectorRef}>
          <BlockSelector
            onSelectBlock={onSelectBlock}
            onClose={onCloseSelector}
            filterCategory="footers"
            hideCategories={true}
          />
        </div>
      )}

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
