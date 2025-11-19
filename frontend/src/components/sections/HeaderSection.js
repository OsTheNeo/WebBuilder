import React from 'react';
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
  onReplaceBlock,
  onBlockSettings
}) => {
  return (
    <div>
      {/* Show selector directly when no header block exists (not in preview mode) */}
      {!previewMode && !headerBlock && (
        <div ref={selectorRef}>
          <BlockSelector
            onSelectBlock={onSelectBlock}
            onClose={onCloseSelector}
            filterCategory="headers"
            hideCategories={true}
          />
        </div>
      )}

      {/* Render Header Block */}
      {headerBlock && (
        <Block
          block={headerBlock}
          index={0}
          section="header"
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

export default HeaderSection;
