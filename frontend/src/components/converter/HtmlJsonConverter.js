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
      const formattedJson = formatJson(jsonStructure, 2);
      setJsonOutput(formattedJson);
    } catch (err) {
      setError('Error converting HTML to JSON: ' + err.message);
    }
  }, [htmlInput]);

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
    const exampleHtml = `<div class="card">
  <div class="card-header">
    <h2 class="card-title">Product Card</h2>
    <span class="badge">New</span>
  </div>
  <div class="card-body">
    <img src="https://example.com/image.jpg" alt="Product" class="product-image" />
    <p class="description">This is a sample product description.</p>
    <div class="price-section">
      <span class="price">$99.99</span>
      <button class="btn btn-primary">Add to Cart</button>
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
      <div className="flex gap-3 mb-4 justify-between items-center">
        <div className="flex gap-3">
          <Button onClick={loadExample} variant="outline" size="sm">
            Load Example
          </Button>
          <Button onClick={handleHtmlToJson} size="sm" className="flex items-center gap-2">
            <IconArrowRight className="w-4 h-4" />
            HTML → JSON
          </Button>
          <Button onClick={handleJsonToHtml} size="sm" className="flex items-center gap-2">
            <IconArrowLeft className="w-4 h-4" />
            JSON → HTML
          </Button>
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

      {/* Three-Column Layout */}
      <div className={`flex-1 grid ${showPreview ? 'grid-cols-3' : 'grid-cols-2'} gap-4 min-h-0`}>
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

        {/* HTML Preview Panel */}
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white"
          >
            <div className="px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconEye className="w-4 h-4" />
                <span className="text-sm font-semibold">HTML Preview</span>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-auto bg-gray-50 min-h-[400px]">
              {htmlInput ? (
                <div
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: htmlInput }}
                />
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-sm text-gray-400 text-center">
                    HTML preview will appear here
                    <br />
                    <span className="text-xs">Paste HTML code to see the rendered output</span>
                  </p>
                </div>
              )}
            </div>
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
              Live Preview
            </div>
          </motion.div>
        )}
      </div>

      {/* Info Cards */}
      <div className={`mt-4 grid ${showPreview ? 'grid-cols-3' : 'grid-cols-2'} gap-4`}>
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">HTML → JSON</h3>
          <p className="text-xs text-blue-700">
            Converts HTML markup into a structured JSON format preserving all attributes, classes, and hierarchy.
          </p>
        </div>
        <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <h3 className="text-sm font-semibold text-purple-900 mb-2">JSON → HTML</h3>
          <p className="text-xs text-purple-700">
            Reconstructs the original HTML from JSON structure maintaining exact formatting and attributes.
          </p>
        </div>
        {showPreview && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-sm font-semibold text-green-900 mb-2">Live Preview</h3>
            <p className="text-xs text-green-700">
              See your HTML rendered in real-time. Changes to HTML input are instantly reflected in the preview.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HtmlJsonConverter;
