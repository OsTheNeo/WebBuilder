import React from 'react';

/**
 * SVG Pattern Definitions
 * These patterns can be used as backgrounds for blocks
 */
export const SvgPatterns = () => {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        {/* Dots Pattern */}
        <pattern id="pattern-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.3" />
        </pattern>

        {/* Grid Pattern */}
        <pattern id="pattern-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </pattern>

        {/* Diagonal Lines Pattern */}
        <pattern id="pattern-diagonal" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        </pattern>

        {/* Zigzag Pattern */}
        <pattern id="pattern-zigzag" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 10 L10 0 L20 10 L30 0 L40 10" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        </pattern>

        {/* Hexagon Pattern */}
        <pattern id="pattern-hexagon" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
          <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
          <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        </pattern>

        {/* Circles Pattern */}
        <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </pattern>

        {/* Waves Pattern */}
        <pattern id="pattern-waves" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 10 Q10 0, 20 10 T40 10" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        </pattern>

        {/* Cross Pattern */}
        <pattern id="pattern-cross" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M10 0 L10 20 M0 10 L20 10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </pattern>

        {/* Triangles Pattern */}
        <pattern id="pattern-triangles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <polygon points="20,0 40,40 0,40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </pattern>

        {/* Squares Pattern */}
        <pattern id="pattern-squares" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <rect x="5" y="5" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </pattern>

        {/* Topography Pattern */}
        <pattern id="pattern-topography" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M0 20 Q20 10, 40 20 T80 20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <path d="M0 40 Q20 30, 40 40 T80 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <path d="M0 60 Q20 50, 40 60 T80 60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        </pattern>

        {/* Circuit Pattern */}
        <pattern id="pattern-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="25" cy="25" r="3" fill="currentColor" opacity="0.3" />
          <circle cx="75" cy="75" r="3" fill="currentColor" opacity="0.3" />
          <path d="M25 25 L75 25 L75 75" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none" />
        </pattern>
      </defs>
    </svg>
  );
};

// Pattern options for the UI
export const patternOptions = [
  { id: 'none', name: 'None', value: null },
  { id: 'dots', name: 'Dots', value: 'pattern-dots' },
  { id: 'grid', name: 'Grid', value: 'pattern-grid' },
  { id: 'diagonal', name: 'Diagonal Lines', value: 'pattern-diagonal' },
  { id: 'zigzag', name: 'Zigzag', value: 'pattern-zigzag' },
  { id: 'hexagon', name: 'Hexagon', value: 'pattern-hexagon' },
  { id: 'circles', name: 'Circles', value: 'pattern-circles' },
  { id: 'waves', name: 'Waves', value: 'pattern-waves' },
  { id: 'cross', name: 'Cross', value: 'pattern-cross' },
  { id: 'triangles', name: 'Triangles', value: 'pattern-triangles' },
  { id: 'squares', name: 'Squares', value: 'pattern-squares' },
  { id: 'topography', name: 'Topography', value: 'pattern-topography' },
  { id: 'circuit', name: 'Circuit', value: 'pattern-circuit' }
];

export default SvgPatterns;
