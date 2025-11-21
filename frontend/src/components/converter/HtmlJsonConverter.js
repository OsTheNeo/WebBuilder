import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { IconArrowRight, IconArrowLeft, IconCopy, IconCheck, IconAlertCircle, IconEye, IconEyeOff } from '@tabler/icons-react';
import { Button } from '../ui/button';
import { htmlToJson, formatJson, validateHtml } from './utils/htmlToJson';
import { jsonToHtml, validateJsonStructure } from './utils/jsonToHtml';

const HtmlJsonConverter = () => {
  const [htmlInput, setHtmlInput] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');
  const [error, setError] = useState(null);
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [appendMode, setAppendMode] = useState(false);

  // Convert HTML to JSON
  const handleHtmlToJson = useCallback(() => {
    setError(null);

    if (!htmlInput.trim()) {
      setError('Please enter HTML code');
      return;
    }

    try {
      // Validate HTML first
      const validation = validateHtml(htmlInput);
      if (!validation.isValid) {
        setError(validation.errors.join(', '));
        return;
      }

      // Convert HTML to JSON
      const jsonStructure = htmlToJson(htmlInput);

      if (appendMode && jsonOutput.trim()) {
        // Append mode: merge with existing JSON
        try {
          const existingJson = JSON.parse(jsonOutput);
          let mergedJson;

          // If existing is an array, push new element
          if (Array.isArray(existingJson)) {
            mergedJson = [...existingJson, jsonStructure];
          } else {
            // If existing is a single element, create an array
            mergedJson = [existingJson, jsonStructure];
          }

          const formattedJson = formatJson(mergedJson, 2);
          setJsonOutput(formattedJson);
        } catch (err) {
          // If existing JSON is invalid, just replace
          const formattedJson = formatJson(jsonStructure, 2);
          setJsonOutput(formattedJson);
        }
      } else {
        // Replace mode: just set the new JSON
        const formattedJson = formatJson(jsonStructure, 2);
        setJsonOutput(formattedJson);
      }
    } catch (err) {
      setError('Error converting HTML to JSON: ' + err.message);
    }
  }, [htmlInput, appendMode, jsonOutput]);

  // Convert JSON to HTML
  const handleJsonToHtml = useCallback(() => {
    setError(null);

    if (!jsonOutput.trim()) {
      setError('Please enter JSON code');
      return;
    }

    try {
      // Parse JSON
      const jsonStructure = JSON.parse(jsonOutput);

      // Validate JSON structure
      const validation = validateJsonStructure(jsonStructure);
      if (!validation.isValid) {
        setError(validation.errors.join(', '));
        return;
      }

      // Convert JSON to HTML
      const html = jsonToHtml(jsonStructure);
      setHtmlInput(html);
    } catch (err) {
      if (err instanceof SyntaxError) {
        setError('Invalid JSON syntax: ' + err.message);
      } else {
        setError('Error converting JSON to HTML: ' + err.message);
      }
    }
  }, [jsonOutput]);

  // Copy to clipboard
  const copyToClipboard = useCallback((text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'html') {
        setCopiedHtml(true);
        setTimeout(() => setCopiedHtml(false), 2000);
      } else {
        setCopiedJson(true);
        setTimeout(() => setCopiedJson(false), 2000);
      }
    });
  }, []);

  // Load example
  const loadExample = useCallback(() => {
    const exampleHtml = `<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
  <img class="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" alt="Product">
  <div class="px-6 py-4">
    <div class="flex items-center justify-between mb-2">
      <h2 class="text-xl font-bold text-gray-800">Premium Watch</h2>
      <span class="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">New</span>
    </div>
    <p class="text-gray-600 text-sm">
      High-quality timepiece with elegant design and precision movement.
    </p>
  </div>
  <div class="px-6 pb-4">
    <div class="flex items-center justify-between">
      <span class="text-2xl font-bold text-gray-900">$299.99</span>
      <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
        Add to Cart
      </button>
    </div>
  </div>
</div>`;
    setHtmlInput(exampleHtml);
    setJsonOutput('');
    setError(null);
  }, []);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">HTML ↔ JSON Converter</h2>
        <p className="text-gray-600">
          Convert HTML to JSON structure and reconstruct HTML from JSON. Perfect for template analysis and manipulation.
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mb-4 justify-between items-center flex-wrap">
        <div className="flex gap-3 items-center flex-wrap">
          <Button onClick={loadExample} variant="outline" size="sm">
            Load Example
          </Button>
          <Button onClick={handleHtmlToJson} size="sm" className="flex items-center gap-2">
            <IconArrowRight className="w-4 h-4" />
            {appendMode ? 'Append to JSON' : 'HTML → JSON'}
          </Button>
          <Button onClick={handleJsonToHtml} size="sm" className="flex items-center gap-2">
            <IconArrowLeft className="w-4 h-4" />
            JSON → HTML
          </Button>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={appendMode}
              onChange={(e) => setAppendMode(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span>Append Mode</span>
          </label>
        </div>
        <Button
          onClick={() => setShowPreview(!showPreview)}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          {showPreview ? (
            <>
              <IconEyeOff className="w-4 h-4" />
              Hide Preview
            </>
          ) : (
            <>
              <IconEye className="w-4 h-4" />
              Show Preview
            </>
          )}
        </Button>
      </div>

      {/* Error Display */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
        >
          <IconAlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-800">Error</p>
            <p className="text-sm text-red-600">{error}</p>
          </div>
        </motion.div>
      )}

      {/* HTML Preview Panel - Above converters */}
      {showPreview && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white"
        >
          <div className="px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconEye className="w-4 h-4" />
              <span className="text-sm font-semibold">HTML Preview (Live with Tailwind CSS)</span>
            </div>
          </div>
          <div className="p-4 overflow-auto bg-white" style={{ maxHeight: '400px' }}>
            {htmlInput ? (
              <iframe
                srcDoc={`
                  <!DOCTYPE html>
                  <html>
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <script src="https://cdn.tailwindcss.com"></script>
                      <style>
                        body { margin: 0; padding: 16px; }
                      </style>
                    </head>
                    <body>
                      ${htmlInput}
                    </body>
                  </html>
                `}
                className="w-full border-0"
                style={{ minHeight: '300px', height: '100%' }}
                title="HTML Preview"
                sandbox="allow-scripts"
              />
            ) : (
              <div className="h-full flex items-center justify-center py-12">
                <p className="text-sm text-gray-400 text-center">
                  HTML preview will appear here
                  <br />
                  <span className="text-xs">Paste HTML code to see the rendered output with Tailwind CSS</span>
                </p>
              </div>
            )}
          </div>
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
            Live Preview with Tailwind CSS Support
          </div>
        </motion.div>
      )}

      {/* Two-Column Layout */}
      <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
        {/* HTML Input Panel */}
        <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-sm font-medium text-gray-700">HTML Input</span>
            </div>
            <button
              onClick={() => copyToClipboard(htmlInput, 'html')}
              className="p-1.5 rounded hover:bg-gray-200 transition-colors"
              title="Copy HTML"
            >
              {copiedHtml ? (
                <IconCheck className="w-4 h-4 text-green-600" />
              ) : (
                <IconCopy className="w-4 h-4 text-gray-600" />
              )}
            </button>
          </div>
          <textarea
            value={htmlInput}
            onChange={(e) => setHtmlInput(e.target.value)}
            placeholder="Paste your HTML here..."
            className="flex-1 p-4 font-mono text-sm resize-none focus:outline-none min-h-[400px]"
            spellCheck={false}
          />
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
            {htmlInput.length} characters | {htmlInput.split('\n').length} lines
          </div>
        </div>

        {/* JSON Output Panel */}
        <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-sm font-medium text-gray-700">JSON Output</span>
            </div>
            <button
              onClick={() => copyToClipboard(jsonOutput, 'json')}
              className="p-1.5 rounded hover:bg-gray-200 transition-colors"
              title="Copy JSON"
            >
              {copiedJson ? (
                <IconCheck className="w-4 h-4 text-green-600" />
              ) : (
                <IconCopy className="w-4 h-4 text-gray-600" />
              )}
            </button>
          </div>
          <textarea
            value={jsonOutput}
            onChange={(e) => setJsonOutput(e.target.value)}
            placeholder="JSON structure will appear here..."
            className="flex-1 p-4 font-mono text-sm resize-none focus:outline-none min-h-[400px]"
            spellCheck={false}
          />
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
            {jsonOutput.length} characters | {jsonOutput.split('\n').length} lines
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">HTML → JSON</h3>
          <p className="text-xs text-blue-700">
            Converts HTML markup into a structured JSON format. Enable "Append Mode" to add multiple HTML blocks to the same JSON array.
          </p>
        </div>
        <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <h3 className="text-sm font-semibold text-purple-900 mb-2">JSON → HTML</h3>
          <p className="text-xs text-purple-700">
            Reconstructs the original HTML from JSON structure maintaining exact formatting and attributes.
          </p>
        </div>
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-sm font-semibold text-green-900 mb-2">Live Preview with Tailwind</h3>
          <p className="text-xs text-green-700">
            Preview rendered HTML with full Tailwind CSS support. All Tailwind classes will be applied correctly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HtmlJsonConverter;
