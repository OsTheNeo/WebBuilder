/**
 * HTML to JSON Parser
 * Converts HTML string to a structured JSON representation
 * Preserves all attributes, classes, styles, and hierarchy
 */

/**
 * Parse HTML string to JSON structure
 * @param {string} htmlString - The HTML string to parse
 * @returns {object} JSON representation of the HTML
 */
export const htmlToJson = (htmlString) => {
  if (!htmlString || typeof htmlString !== 'string') {
    throw new Error('Invalid HTML string provided');
  }

  // Create a temporary DOM element to parse the HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString.trim(), 'text/html');

  // Check for parsing errors
  const parserError = doc.querySelector('parsererror');
  if (parserError) {
    throw new Error('HTML parsing error: ' + parserError.textContent);
  }

  // Get the body content (or the entire document if needed)
  const body = doc.body;

  // Convert the DOM to JSON
  return convertNodeToJson(body.childNodes);
};

/**
 * Convert a DOM node to JSON representation
 * @param {NodeList|Node} nodes - The DOM node(s) to convert
 * @returns {object|array} JSON representation
 */
const convertNodeToJson = (nodes) => {
  // Handle single node
  if (nodes instanceof Node && !nodes.length) {
    return parseNode(nodes);
  }

  // Handle NodeList or array of nodes
  const nodeArray = Array.from(nodes);

  // If there's only one root element, return it directly
  if (nodeArray.length === 1) {
    return parseNode(nodeArray[0]);
  }

  // If there are multiple root elements, return them as an array
  return nodeArray
    .map(node => parseNode(node))
    .filter(node => node !== null);
};

/**
 * Parse a single DOM node
 * @param {Node} node - The DOM node to parse
 * @returns {object|string|null} JSON representation of the node
 */
const parseNode = (node) => {
  // Handle text nodes
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent.trim();
    return text ? text : null;
  }

  // Handle comment nodes (preserve them)
  if (node.nodeType === Node.COMMENT_NODE) {
    return {
      type: 'comment',
      content: node.textContent
    };
  }

  // Handle element nodes
  if (node.nodeType === Node.ELEMENT_NODE) {
    const element = {
      tag: node.tagName.toLowerCase(),
      attributes: {},
      children: []
    };

    // Extract all attributes
    if (node.attributes.length > 0) {
      Array.from(node.attributes).forEach(attr => {
        element.attributes[attr.name] = attr.value;
      });
    }

    // Parse child nodes
    if (node.childNodes.length > 0) {
      Array.from(node.childNodes).forEach(child => {
        const childJson = parseNode(child);
        if (childJson !== null) {
          element.children.push(childJson);
        }
      });
    }

    // Remove empty children array
    if (element.children.length === 0) {
      delete element.children;
    }

    // Remove empty attributes object
    if (Object.keys(element.attributes).length === 0) {
      delete element.attributes;
    }

    return element;
  }

  return null;
};

/**
 * Pretty print JSON with proper formatting
 * @param {object} json - The JSON object to format
 * @param {number} indent - Indentation level (default: 2)
 * @returns {string} Formatted JSON string
 */
export const formatJson = (json, indent = 2) => {
  return JSON.stringify(json, null, indent);
};

/**
 * Validate HTML string
 * @param {string} htmlString - The HTML string to validate
 * @returns {object} Validation result with isValid and errors
 */
export const validateHtml = (htmlString) => {
  const result = {
    isValid: true,
    errors: []
  };

  if (!htmlString || typeof htmlString !== 'string') {
    result.isValid = false;
    result.errors.push('HTML string is required');
    return result;
  }

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString.trim(), 'text/html');

    const parserError = doc.querySelector('parsererror');
    if (parserError) {
      result.isValid = false;
      result.errors.push(parserError.textContent);
    }
  } catch (error) {
    result.isValid = false;
    result.errors.push(error.message);
  }

  return result;
};
