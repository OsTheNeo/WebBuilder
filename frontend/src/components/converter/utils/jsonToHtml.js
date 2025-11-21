/**
 * JSON to HTML Constructor
 * Reconstructs HTML from JSON representation
 * Preserves all attributes, classes, styles, and hierarchy
 */

/**
 * Convert JSON structure to HTML string
 * @param {object|array|string} json - The JSON structure to convert
 * @param {number} indentLevel - Current indentation level (for formatting)
 * @returns {string} HTML string
 */
export const jsonToHtml = (json, indentLevel = 0) => {
  if (!json) {
    return '';
  }

  // Handle array of elements (multiple root elements)
  if (Array.isArray(json)) {
    return json.map(item => jsonToHtml(item, indentLevel)).join('\n');
  }

  // Handle text nodes (strings)
  if (typeof json === 'string') {
    return indent(json, indentLevel);
  }

  // Handle comment nodes
  if (json.type === 'comment') {
    return indent(`<!-- ${json.content} -->`, indentLevel);
  }

  // Handle element nodes
  if (json.tag) {
    return constructElement(json, indentLevel);
  }

  throw new Error('Invalid JSON structure for HTML conversion');
};

/**
 * Construct an HTML element from JSON
 * @param {object} element - The element JSON structure
 * @param {number} indentLevel - Current indentation level
 * @returns {string} HTML element string
 */
const constructElement = (element, indentLevel) => {
  const { tag, attributes, children } = element;

  // Build opening tag
  let html = `<${tag}`;

  // Add attributes
  if (attributes && Object.keys(attributes).length > 0) {
    const attrs = Object.entries(attributes)
      .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
      .join(' ');
    html += ` ${attrs}`;
  }

  // Check if it's a self-closing tag
  const selfClosingTags = [
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img',
    'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'
  ];

  if (selfClosingTags.includes(tag)) {
    html += ' />';
    return indent(html, indentLevel);
  }

  // Close opening tag
  html += '>';

  // Handle children
  if (children && children.length > 0) {
    // Check if all children are text nodes
    const allTextNodes = children.every(child => typeof child === 'string');

    if (allTextNodes) {
      // Inline text content (no line breaks)
      html += children.join('');
      html += `</${tag}>`;
      return indent(html, indentLevel);
    } else {
      // Block-level content with proper indentation
      const childrenHtml = children
        .map(child => jsonToHtml(child, indentLevel + 1))
        .join('\n');

      return [
        indent(html, indentLevel),
        childrenHtml,
        indent(`</${tag}>`, indentLevel)
      ].join('\n');
    }
  }

  // Empty element
  html += `</${tag}>`;
  return indent(html, indentLevel);
};

/**
 * Add indentation to a string
 * @param {string} str - The string to indent
 * @param {number} level - Indentation level
 * @param {number} spaces - Spaces per level (default: 2)
 * @returns {string} Indented string
 */
const indent = (str, level, spaces = 2) => {
  return ' '.repeat(level * spaces) + str;
};

/**
 * Escape HTML special characters
 * @param {string} str - The string to escape
 * @returns {string} Escaped string
 */
const escapeHtml = (str) => {
  if (typeof str !== 'string') {
    return str;
  }

  const htmlEscapes = {
    '"': '&quot;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  return str.replace(/["&<>]/g, char => htmlEscapes[char]);
};

/**
 * Minify HTML (remove extra whitespace)
 * @param {string} html - The HTML string to minify
 * @returns {string} Minified HTML
 */
export const minifyHtml = (html) => {
  return html
    .replace(/\n\s+/g, '\n') // Remove leading spaces on lines
    .replace(/\n+/g, '\n')   // Remove multiple newlines
    .trim();
};

/**
 * Format HTML with proper indentation
 * @param {string} html - The HTML string to format
 * @returns {string} Formatted HTML
 */
export const formatHtml = (html) => {
  // This is a simple formatter - for production, consider using a library like prettier
  let formatted = '';
  let indent = 0;
  const lines = html.split('\n');

  lines.forEach(line => {
    const trimmed = line.trim();

    if (trimmed.startsWith('</')) {
      indent = Math.max(0, indent - 1);
    }

    if (trimmed) {
      formatted += '  '.repeat(indent) + trimmed + '\n';
    }

    if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.endsWith('/>') && !trimmed.includes('</')) {
      indent++;
    }
  });

  return formatted.trim();
};

/**
 * Validate JSON structure for HTML conversion
 * @param {any} json - The JSON to validate
 * @returns {object} Validation result
 */
export const validateJsonStructure = (json) => {
  const result = {
    isValid: true,
    errors: []
  };

  if (!json) {
    result.isValid = false;
    result.errors.push('JSON structure is required');
    return result;
  }

  try {
    // Recursive validation
    validateNode(json, result);
  } catch (error) {
    result.isValid = false;
    result.errors.push(error.message);
  }

  return result;
};

/**
 * Validate a single JSON node
 * @param {any} node - The node to validate
 * @param {object} result - The validation result object
 */
const validateNode = (node, result) => {
  // Handle arrays
  if (Array.isArray(node)) {
    node.forEach(item => validateNode(item, result));
    return;
  }

  // Handle text nodes
  if (typeof node === 'string') {
    return;
  }

  // Handle comment nodes
  if (node.type === 'comment') {
    if (!node.content) {
      result.isValid = false;
      result.errors.push('Comment node must have content');
    }
    return;
  }

  // Handle element nodes
  if (typeof node === 'object' && node !== null) {
    if (!node.tag) {
      result.isValid = false;
      result.errors.push('Element node must have a tag property');
      return;
    }

    // Validate children if present
    if (node.children) {
      if (!Array.isArray(node.children)) {
        result.isValid = false;
        result.errors.push('Children must be an array');
      } else {
        node.children.forEach(child => validateNode(child, result));
      }
    }

    // Validate attributes if present
    if (node.attributes && typeof node.attributes !== 'object') {
      result.isValid = false;
      result.errors.push('Attributes must be an object');
    }
  }
};
