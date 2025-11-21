/**
 * Template Engine
 * Processes HTML templates with data binding and iteration
 * Supports placeholders like {{fieldName}} and detects array iterations
 */

/**
 * Process template with data
 * @param {string} template - HTML template with placeholders
 * @param {object} data - JSON data to bind
 * @returns {object} Result with html, detected iterations, and mappings
 */
export const processTemplate = (template, data) => {
  if (!template || !data) {
    throw new Error('Template and data are required');
  }

  // Detect if there are arrays in the data that should be iterated
  const iterations = detectIterations(data);

  let html = template;
  let mappings = [];

  // If iterations detected, process them
  if (iterations.length > 0) {
    const result = processWithIterations(template, data, iterations);
    html = result.html;
    mappings = result.mappings;
  } else {
    // Simple replacement without iteration
    const result = replacePlaceholders(template, data);
    html = result.html;
    mappings = result.mappings;
  }

  return {
    html,
    iterations,
    mappings,
    success: true
  };
};

/**
 * Detect arrays in data that should be iterated
 * @param {object} data - The data object
 * @returns {array} Array of iteration paths
 */
export const detectIterations = (data) => {
  const iterations = [];

  const findArrays = (obj, path = '') => {
    if (!obj || typeof obj !== 'object') return;

    Object.entries(obj).forEach(([key, value]) => {
      const currentPath = path ? `${path}.${key}` : key;

      if (Array.isArray(value) && value.length > 0) {
        // Check if array contains objects (not just primitives)
        const hasObjects = value.some(item => typeof item === 'object' && item !== null);

        if (hasObjects) {
          iterations.push({
            path: currentPath,
            arrayLength: value.length,
            sampleItem: value[0],
            fields: Object.keys(value[0])
          });
        }
      } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        findArrays(value, currentPath);
      }
    });
  };

  findArrays(data);
  return iterations;
};

/**
 * Process template with detected iterations
 * @param {string} template - HTML template
 * @param {object} data - JSON data
 * @param {array} iterations - Detected iterations
 * @returns {object} Processed result
 */
const processWithIterations = (template, data, iterations) => {
  // Use the first detected iteration (most common case)
  const iteration = iterations[0];
  const arrayData = resolvePath(data, iteration.path);

  if (!Array.isArray(arrayData)) {
    return replacePlaceholders(template, data);
  }

  // Generate HTML for each item in the array
  const htmlParts = arrayData.map((item, index) => {
    const result = replacePlaceholders(template, item, iteration.path, index);
    return result.html;
  });

  return {
    html: htmlParts.join('\n'),
    mappings: [{
      type: 'iteration',
      path: iteration.path,
      count: arrayData.length
    }]
  };
};

/**
 * Replace placeholders in template with data
 * @param {string} template - HTML template
 * @param {object} data - Data object
 * @param {string} iterationPath - Path being iterated (if any)
 * @param {number} index - Current iteration index
 * @returns {object} Result with html and mappings
 */
const replacePlaceholders = (template, data, iterationPath = '', index = 0) => {
  let html = template;
  const mappings = [];

  // Find all placeholders: {{fieldName}} or ${fieldName}
  const placeholderRegex = /\{\{([^}]+)\}\}|\$\{([^}]+)\}/g;
  const matches = [...html.matchAll(placeholderRegex)];

  matches.forEach(match => {
    const fullMatch = match[0];
    const fieldPath = (match[1] || match[2]).trim();

    // Resolve the value from data
    const value = resolvePath(data, fieldPath);

    // Replace placeholder with value
    if (value !== undefined && value !== null) {
      html = html.replace(fullMatch, escapeHtml(String(value)));

      mappings.push({
        placeholder: fullMatch,
        path: fieldPath,
        value: value,
        iterationPath,
        index
      });
    } else {
      // Keep placeholder if value not found (or replace with empty)
      html = html.replace(fullMatch, '');

      mappings.push({
        placeholder: fullMatch,
        path: fieldPath,
        value: null,
        error: 'Value not found',
        iterationPath,
        index
      });
    }
  });

  return { html, mappings };
};

/**
 * Resolve a path in an object (supports nested paths like user.profile.name)
 * @param {object} obj - The object to search
 * @param {string} path - The path to resolve
 * @returns {any} The resolved value
 */
export const resolvePath = (obj, path) => {
  if (!obj || !path) return undefined;

  // Handle array notation: items[0].name
  path = path.replace(/\[(\d+)\]/g, '.$1');

  const keys = path.split('.');
  let current = obj;

  for (const key of keys) {
    if (current === undefined || current === null) {
      return undefined;
    }
    current = current[key];
  }

  return current;
};

/**
 * Escape HTML to prevent XSS
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
const escapeHtml = (str) => {
  if (typeof str !== 'string') return str;

  const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  return str.replace(/[&<>"']/g, char => htmlEscapes[char]);
};

/**
 * Auto-detect the repeating element in template
 * @param {string} template - HTML template
 * @returns {object} Detection result
 */
export const detectRepeatingElement = (template) => {
  // Parse the template to find the root element
  const parser = new DOMParser();
  const doc = parser.parseFromString(template.trim(), 'text/html');
  const body = doc.body;

  // Find the first element (assuming it's the repeating one)
  const firstElement = body.querySelector('*');

  if (!firstElement) {
    return {
      detected: false,
      element: null
    };
  }

  return {
    detected: true,
    element: firstElement.tagName.toLowerCase(),
    classes: Array.from(firstElement.classList),
    hasId: !!firstElement.id
  };
};

/**
 * Generate example data based on template placeholders
 * @param {string} template - HTML template
 * @returns {object} Example data structure
 */
export const generateExampleData = (template) => {
  const placeholderRegex = /\{\{([^}]+)\}\}|\$\{([^}]+)\}/g;
  const matches = [...template.matchAll(placeholderRegex)];

  const exampleData = {};

  matches.forEach(match => {
    const fieldPath = (match[1] || match[2]).trim();
    const keys = fieldPath.split('.');

    let current = exampleData;
    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        // Last key - assign example value
        current[key] = `Example ${key}`;
      } else {
        // Intermediate key - create object if doesn't exist
        if (!current[key]) {
          current[key] = {};
        }
        current = current[key];
      }
    });
  });

  return exampleData;
};

/**
 * Validate template syntax
 * @param {string} template - HTML template
 * @returns {object} Validation result
 */
export const validateTemplate = (template) => {
  const result = {
    isValid: true,
    errors: [],
    warnings: []
  };

  if (!template || typeof template !== 'string') {
    result.isValid = false;
    result.errors.push('Template must be a non-empty string');
    return result;
  }

  // Check for unclosed placeholders
  const unclosedBraces = (template.match(/\{\{/g) || []).length !== (template.match(/\}\}/g) || []).length;
  const unclosedDollar = (template.match(/\$\{/g) || []).length !== (template.match(/\}/g) || []).length;

  if (unclosedBraces) {
    result.errors.push('Unclosed {{ }} placeholders detected');
    result.isValid = false;
  }

  // Check for valid HTML structure
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(template, 'text/html');
    const parserError = doc.querySelector('parsererror');

    if (parserError) {
      result.warnings.push('HTML structure may have issues: ' + parserError.textContent);
    }
  } catch (error) {
    result.warnings.push('HTML parsing warning: ' + error.message);
  }

  // Extract placeholders
  const placeholderRegex = /\{\{([^}]+)\}\}|\$\{([^}]+)\}/g;
  const matches = [...template.matchAll(placeholderRegex)];

  result.placeholders = matches.map(m => (m[1] || m[2]).trim());

  if (result.placeholders.length === 0) {
    result.warnings.push('No placeholders found in template');
  }

  return result;
};

/**
 * Create a smart mapper that suggests field mappings
 * @param {string} template - HTML template
 * @param {object} data - JSON data
 * @returns {object} Suggested mappings
 */
export const suggestMappings = (template, data) => {
  const validation = validateTemplate(template);
  if (!validation.isValid) {
    return { suggestions: [], errors: validation.errors };
  }

  const placeholders = validation.placeholders;
  const dataFields = extractAllFields(data);

  const suggestions = placeholders.map(placeholder => {
    // Try to find exact match
    const exactMatch = dataFields.find(field => field.toLowerCase() === placeholder.toLowerCase());

    if (exactMatch) {
      return {
        placeholder,
        suggestedField: exactMatch,
        confidence: 'high'
      };
    }

    // Try to find partial match
    const partialMatch = dataFields.find(field =>
      field.toLowerCase().includes(placeholder.toLowerCase()) ||
      placeholder.toLowerCase().includes(field.toLowerCase())
    );

    if (partialMatch) {
      return {
        placeholder,
        suggestedField: partialMatch,
        confidence: 'medium'
      };
    }

    return {
      placeholder,
      suggestedField: null,
      confidence: 'none'
    };
  });

  return { suggestions, dataFields };
};

/**
 * Extract all field paths from data object
 * @param {object} data - Data object
 * @param {string} prefix - Path prefix
 * @returns {array} Array of field paths
 */
const extractAllFields = (data, prefix = '') => {
  const fields = [];

  if (!data || typeof data !== 'object') {
    return fields;
  }

  if (Array.isArray(data)) {
    if (data.length > 0) {
      return extractAllFields(data[0], prefix);
    }
    return fields;
  }

  Object.entries(data).forEach(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;

    if (Array.isArray(value) && value.length > 0) {
      fields.push(path);
      fields.push(...extractAllFields(value[0], path));
    } else if (typeof value === 'object' && value !== null) {
      fields.push(path);
      fields.push(...extractAllFields(value, path));
    } else {
      fields.push(path);
    }
  });

  return fields;
};
