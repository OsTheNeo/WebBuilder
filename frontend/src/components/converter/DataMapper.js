import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IconSearch,
  IconCopy,
  IconCheck,
  IconAlertCircle,
  IconInfoCircle,
  IconRefresh,
  IconEye,
  IconCode
} from '@tabler/icons-react';
import { Button } from '../ui/button';
import {
  processTemplate,
  detectIterations,
  validateTemplate,
  suggestMappings,
  generateExampleData
} from './utils/templateEngine';

const DataMapper = () => {
  // State
  const [jsonData, setJsonData] = useState('');
  const [htmlTemplate, setHtmlTemplate] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);
  const [iterations, setIterations] = useState([]);
  const [mappings, setMappings] = useState([]);
  const [viewMode, setViewMode] = useState('code'); // 'code' or 'preview'
  const [copied, setCopied] = useState(false);

  // Auto-detect iterations when JSON changes
  useEffect(() => {
    if (jsonData.trim()) {
      try {
        const data = JSON.parse(jsonData);
        const detected = detectIterations(data);
        setIterations(detected);

        if (detected.length > 0) {
          const iterInfo = detected.map(iter =>
            `Array detected: "${iter.path}" with ${iter.arrayLength} items`
          ).join(', ');
          setInfo(iterInfo);
        } else {
          setInfo('No arrays detected for iteration');
        }
      } catch (err) {
        // Invalid JSON, don't show error yet
        setIterations([]);
        setInfo(null);
      }
    } else {
      setIterations([]);
      setInfo(null);
    }
  }, [jsonData]);

  // Process the template with data
  const handleProcessTemplate = useCallback(() => {
    setError(null);
    setResult('');

    if (!jsonData.trim()) {
      setError('Please enter JSON data');
      return;
    }

    if (!htmlTemplate.trim()) {
      setError('Please enter HTML template');
      return;
    }

    try {
      // Parse JSON
      const data = JSON.parse(jsonData);

      // Validate template
      const validation = validateTemplate(htmlTemplate);
      if (!validation.isValid) {
        setError(validation.errors.join(', '));
        return;
      }

      // Process template with data
      const processResult = processTemplate(htmlTemplate, data);

      if (processResult.success) {
        setResult(processResult.html);
        setMappings(processResult.mappings);

        // Show success info
        if (processResult.iterations.length > 0) {
          setInfo(`Successfully generated ${processResult.iterations[0].arrayLength} items from template`);
        } else {
          setInfo('Template processed successfully');
        }
      }
    } catch (err) {
      if (err instanceof SyntaxError) {
        setError('Invalid JSON syntax: ' + err.message);
      } else {
        setError('Error processing template: ' + err.message);
      }
    }
  }, [jsonData, htmlTemplate]);

  // Detect and highlight loops
  const handleDetectLoop = useCallback(() => {
    if (!jsonData.trim()) {
      setError('Please enter JSON data first');
      return;
    }

    try {
      const data = JSON.parse(jsonData);
      const detected = detectIterations(data);

      if (detected.length === 0) {
        setInfo('No arrays found for iteration. Make sure your JSON contains an array of objects.');
        return;
      }

      // Show detected iterations
      const details = detected.map(iter => {
        const fields = iter.fields.join(', ');
        return `\n📦 Array: "${iter.path}"\n   - Items: ${iter.arrayLength}\n   - Fields: ${fields}`;
      }).join('\n');

      setInfo(`Detected iterations:${details}\n\nUse placeholders like {{${detected[0].fields[0]}}} in your template.`);
    } catch (err) {
      setError('Invalid JSON: ' + err.message);
    }
  }, [jsonData]);

  // Smart field mapping
  const handleMapFields = useCallback(() => {
    if (!jsonData.trim() || !htmlTemplate.trim()) {
      setError('Please enter both JSON data and HTML template');
      return;
    }

    try {
      const data = JSON.parse(jsonData);
      const suggestions = suggestMappings(htmlTemplate, data);

      if (suggestions.errors) {
        setError(suggestions.errors.join(', '));
        return;
      }

      // Display suggestions
      const suggestionText = suggestions.suggestions
        .map(s => {
          if (s.confidence === 'high') {
            return `✓ ${s.placeholder} → ${s.suggestedField} (exact match)`;
          } else if (s.confidence === 'medium') {
            return `~ ${s.placeholder} → ${s.suggestedField} (suggested)`;
          } else {
            return `✗ ${s.placeholder} (no match found)`;
          }
        })
        .join('\n');

      setInfo(`Field Mapping Suggestions:\n\n${suggestionText}\n\nAvailable fields: ${suggestions.dataFields.join(', ')}`);
    } catch (err) {
      setError('Error generating mapping: ' + err.message);
    }
  }, [jsonData, htmlTemplate]);

  // Copy result to clipboard
  const copyResult = useCallback(() => {
    if (result) {
      navigator.clipboard.writeText(result).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  }, [result]);

  // Load example
  const loadExample = useCallback(() => {
    const exampleData = {
      products: [
        {
          name: 'Wireless Headphones',
          price: 79.99,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
          rating: 4.5,
          inStock: true
        },
        {
          name: 'Smart Watch',
          price: 199.99,
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
          rating: 4.8,
          inStock: true
        },
        {
          name: 'Laptop Stand',
          price: 49.99,
          image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300',
          rating: 4.2,
          inStock: false
        }
      ]
    };

    const exampleTemplate = `<div class="product-card">
  <img src="{{image}}" alt="{{name}}" class="product-image" />
  <h3 class="product-title">{{name}}</h3>
  <div class="product-price">\${{price}}</div>
  <div class="product-rating">⭐ {{rating}}/5</div>
  <span class="stock-status">{{inStock}}</span>
</div>`;

    setJsonData(JSON.stringify(exampleData, null, 2));
    setHtmlTemplate(exampleTemplate);
    setResult('');
    setError(null);
    setInfo('Example loaded! Click "Process Template" to generate HTML.');
  }, []);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Data Mapper</h2>
        <p className="text-gray-600">
          Map JSON data to HTML templates with automatic iteration detection. Perfect for generating dynamic content from APIs.
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mb-4 flex-wrap">
        <Button onClick={loadExample} variant="outline" size="sm">
          Load Example
        </Button>
        <Button onClick={handleDetectLoop} size="sm" className="flex items-center gap-2">
          <IconSearch className="w-4 h-4" />
          Detect Loop
        </Button>
        <Button onClick={handleMapFields} size="sm" className="flex items-center gap-2">
          <IconRefresh className="w-4 h-4" />
          Map Fields
        </Button>
        <Button onClick={handleProcessTemplate} size="sm" className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
          <IconCode className="w-4 h-4" />
          Process Template
        </Button>
      </div>

      {/* Error/Info Display */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
          >
            <IconAlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-red-800">Error</p>
              <p className="text-sm text-red-600 whitespace-pre-wrap">{error}</p>
            </div>
            <button onClick={() => setError(null)} className="text-red-400 hover:text-red-600">
              ✕
            </button>
          </motion.div>
        )}

        {info && !error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3"
          >
            <IconInfoCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-800">Information</p>
              <p className="text-sm text-blue-600 whitespace-pre-wrap font-mono">{info}</p>
            </div>
            <button onClick={() => setInfo(null)} className="text-blue-400 hover:text-blue-600">
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Three-Column Layout */}
      <div className="flex-1 grid grid-cols-3 gap-4 min-h-0">
        {/* Panel 1: JSON Data Input */}
        <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white">
          <div className="px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-between">
            <span className="text-sm font-semibold">1. Data Source (JSON)</span>
            {iterations.length > 0 && (
              <span className="px-2 py-1 bg-white/20 rounded text-xs">
                {iterations.length} array{iterations.length > 1 ? 's' : ''} detected
              </span>
            )}
          </div>
          <textarea
            value={jsonData}
            onChange={(e) => setJsonData(e.target.value)}
            placeholder={`Paste your JSON data here...\n\nExample:\n{\n  "products": [\n    {\n      "name": "Product 1",\n      "price": 99.99\n    }\n  ]\n}`}
            className="flex-1 p-4 font-mono text-sm resize-none focus:outline-none"
            spellCheck={false}
          />
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
            {jsonData.length} characters
          </div>
        </div>

        {/* Panel 2: HTML Template */}
        <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white">
          <div className="px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <span className="text-sm font-semibold">2. HTML Template</span>
            <p className="text-xs mt-1 opacity-90">Use {`{{fieldName}}`} for placeholders</p>
          </div>
          <textarea
            value={htmlTemplate}
            onChange={(e) => setHtmlTemplate(e.target.value)}
            placeholder={`Enter HTML template with placeholders...\n\nExample:\n<div class="card">\n  <h3>{{name}}</h3>\n  <p>\${{price}}</p>\n</div>`}
            className="flex-1 p-4 font-mono text-sm resize-none focus:outline-none"
            spellCheck={false}
          />
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
            {htmlTemplate.length} characters
          </div>
        </div>

        {/* Panel 3: Result/Preview */}
        <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white">
          <div className="px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-between">
            <span className="text-sm font-semibold">3. Generated HTML</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode(viewMode === 'code' ? 'preview' : 'code')}
                className="p-1 rounded hover:bg-white/20 transition-colors"
                title={viewMode === 'code' ? 'Show Preview' : 'Show Code'}
              >
                {viewMode === 'code' ? (
                  <IconEye className="w-4 h-4" />
                ) : (
                  <IconCode className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={copyResult}
                className="p-1 rounded hover:bg-white/20 transition-colors"
                title="Copy Result"
                disabled={!result}
              >
                {copied ? (
                  <IconCheck className="w-4 h-4" />
                ) : (
                  <IconCopy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {viewMode === 'code' ? (
            <textarea
              value={result}
              readOnly
              placeholder="Generated HTML will appear here..."
              className="flex-1 p-4 font-mono text-sm resize-none focus:outline-none bg-gray-50"
              spellCheck={false}
            />
          ) : (
            <div className="flex-1 p-4 overflow-auto bg-gray-50">
              {result ? (
                <div
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: result }}
                />
              ) : (
                <p className="text-sm text-gray-400 text-center mt-8">
                  Preview will appear here after processing
                </p>
              )}
            </div>
          )}

          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 flex justify-between">
            <span>{result.length} characters</span>
            <span>{viewMode === 'code' ? 'Code View' : 'Preview Mode'}</span>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-xs font-semibold text-blue-900 mb-1">Step 1: Add Data</h3>
          <p className="text-xs text-blue-700">
            Paste JSON with arrays to iterate. Arrays will be auto-detected.
          </p>
        </div>
        <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
          <h3 className="text-xs font-semibold text-purple-900 mb-1">Step 2: Template</h3>
          <p className="text-xs text-purple-700">
            Use {`{{fieldName}}`} placeholders. Template repeats for each array item.
          </p>
        </div>
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-xs font-semibold text-green-900 mb-1">Step 3: Generate</h3>
          <p className="text-xs text-green-700">
            Process template to generate HTML. Switch to preview to see rendered output.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataMapper;
