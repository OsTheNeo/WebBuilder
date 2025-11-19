import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { IconArrowRight, IconArrowLeft, IconReload, IconDatabase, IconCode } from '@tabler/icons-react';

const Converter = () => {
  const [htmlInput, setHtmlInput] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');
  const [dataSource, setDataSource] = useState('');
  const [mappedElements, setMappedElements] = useState([]);
  const [activeTab, setActiveTab] = useState('converter'); // 'converter' or 'data-mapper'

  // Parse HTML to JSON structure
  const parseHTMLToJSON = (htmlString) => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, 'text/html');

      const elementToJSON = (element) => {
        const obj = {
          tag: element.tagName.toLowerCase(),
          attributes: {},
          children: [],
          text: ''
        };

        // Get attributes
        Array.from(element.attributes).forEach(attr => {
          obj.attributes[attr.name] = attr.value;
        });

        // Get text content (only direct text nodes)
        Array.from(element.childNodes).forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            obj.text += node.textContent.trim();
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            obj.children.push(elementToJSON(node));
          }
        });

        return obj;
      };

      const body = doc.body;
      const result = {
        type: 'template',
        elements: Array.from(body.children).map(child => elementToJSON(child))
      };

      return JSON.stringify(result, null, 2);
    } catch (error) {
      return JSON.stringify({ error: error.message }, null, 2);
    }
  };

  // Reconstruct HTML from JSON
  const reconstructHTMLFromJSON = (jsonString) => {
    try {
      const data = JSON.parse(jsonString);

      const jsonToElement = (obj) => {
        if (!obj.tag) return '';

        let html = `<${obj.tag}`;

        // Add attributes
        if (obj.attributes) {
          Object.entries(obj.attributes).forEach(([key, value]) => {
            html += ` ${key}="${value}"`;
          });
        }

        html += '>';

        // Add text content
        if (obj.text) {
          html += obj.text;
        }

        // Add children
        if (obj.children && obj.children.length > 0) {
          obj.children.forEach(child => {
            html += jsonToElement(child);
          });
        }

        // Self-closing tags
        const selfClosing = ['img', 'br', 'hr', 'input', 'meta', 'link'];
        if (!selfClosing.includes(obj.tag)) {
          html += `</${obj.tag}>`;
        }

        return html;
      };

      if (data.elements) {
        return data.elements.map(el => jsonToElement(el)).join('\n');
      } else if (data.tag) {
        return jsonToElement(data);
      }

      return '';
    } catch (error) {
      return `Error: ${error.message}`;
    }
  };

  // Convert HTML to JSON
  const handleHTMLToJSON = () => {
    const json = parseHTMLToJSON(htmlInput);
    setJsonOutput(json);
  };

  // Convert JSON to HTML
  const handleJSONToHTML = () => {
    const html = reconstructHTMLFromJSON(jsonOutput);
    setHtmlInput(html);
  };

  // Detect repeating elements in HTML
  const detectRepeatingElements = (htmlString, dataArray) => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, 'text/html');

      // Find elements with similar structure
      const allElements = doc.querySelectorAll('*');
      const elementsByTag = {};

      allElements.forEach(el => {
        const tag = el.tagName.toLowerCase();
        if (!elementsByTag[tag]) {
          elementsByTag[tag] = [];
        }
        elementsByTag[tag].push(el);
      });

      // Find potential repeating containers
      const repeatingContainers = [];
      Object.entries(elementsByTag).forEach(([tag, elements]) => {
        if (elements.length > 1) {
          // Check if elements have similar structure
          const structures = elements.map(el => {
            return Array.from(el.children).map(child => child.tagName).join(',');
          });

          const uniqueStructures = [...new Set(structures)];
          if (uniqueStructures.length === 1 && structures.length >= 2) {
            repeatingContainers.push({
              tag,
              count: elements.length,
              structure: uniqueStructures[0],
              selector: tag + (elements[0].className ? '.' + elements[0].className.split(' ')[0] : '')
            });
          }
        }
      });

      return repeatingContainers;
    } catch (error) {
      console.error('Error detecting repeating elements:', error);
      return [];
    }
  };

  // Map data to HTML template
  const mapDataToTemplate = () => {
    try {
      const data = JSON.parse(dataSource);
      if (!Array.isArray(data)) {
        alert('Data must be an array');
        return;
      }

      const repeating = detectRepeatingElements(htmlInput, data);
      setMappedElements(repeating);

      // Generate mapped HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlInput, 'text/html');

      // Simple example: find first repeating element and replicate it
      if (repeating.length > 0) {
        const selector = repeating[0].selector;
        const elements = doc.querySelectorAll(selector);

        if (elements.length > 0) {
          const template = elements[0].cloneNode(true);
          const parent = elements[0].parentNode;

          // Clear existing elements
          elements.forEach(el => el.remove());

          // Create new elements from data
          data.forEach((item, index) => {
            const clone = template.cloneNode(true);

            // Replace text content with data
            const textNodes = clone.querySelectorAll('*');
            textNodes.forEach(node => {
              if (node.textContent && !node.children.length) {
                // Try to match data keys
                Object.keys(item).forEach(key => {
                  if (node.textContent.toLowerCase().includes(key.toLowerCase())) {
                    node.textContent = item[key];
                  }
                });
              }
            });

            parent.appendChild(clone);
          });

          setHtmlInput(doc.body.innerHTML);
        }
      }
    } catch (error) {
      alert('Error mapping data: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">HTML/JSON Converter & Data Mapper</h1>
          <p className="text-gray-600 mt-2">Convert between HTML and JSON, and map data to templates</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={activeTab === 'converter' ? 'default' : 'outline'}
            onClick={() => setActiveTab('converter')}
            className="flex items-center gap-2"
          >
            <IconCode className="w-4 h-4" />
            Converter
          </Button>
          <Button
            variant={activeTab === 'data-mapper' ? 'default' : 'outline'}
            onClick={() => setActiveTab('data-mapper')}
            className="flex items-center gap-2"
          >
            <IconDatabase className="w-4 h-4" />
            Data Mapper
          </Button>
        </div>

        {/* Converter Tab */}
        {activeTab === 'converter' && (
          <div className="grid grid-cols-2 gap-4">
            {/* HTML Input */}
            <Card>
              <CardHeader>
                <CardTitle>HTML Template</CardTitle>
                <CardDescription>Paste your HTML code here</CardDescription>
              </CardHeader>
              <CardContent>
                <textarea
                  value={htmlInput}
                  onChange={(e) => setHtmlInput(e.target.value)}
                  className="w-full h-96 font-mono text-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="<div class='product'>
  <h2>Product Name</h2>
  <p>Description</p>
  <span>$99</span>
</div>"
                />
                <div className="flex gap-2 mt-4">
                  <Button onClick={handleHTMLToJSON} className="flex-1 flex items-center justify-center gap-2">
                    Convert to JSON
                    <IconArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* JSON Output */}
            <Card>
              <CardHeader>
                <CardTitle>JSON Structure</CardTitle>
                <CardDescription>Generated JSON representation</CardDescription>
              </CardHeader>
              <CardContent>
                <textarea
                  value={jsonOutput}
                  onChange={(e) => setJsonOutput(e.target.value)}
                  className="w-full h-96 font-mono text-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder='{
  "type": "template",
  "elements": [...]
}'
                />
                <div className="flex gap-2 mt-4">
                  <Button onClick={handleJSONToHTML} variant="outline" className="flex-1 flex items-center justify-center gap-2">
                    <IconArrowLeft className="w-4 h-4" />
                    Reconstruct HTML
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Data Mapper Tab */}
        {activeTab === 'data-mapper' && (
          <div className="grid grid-cols-3 gap-4">
            {/* Data Source */}
            <Card>
              <CardHeader>
                <CardTitle>Data Source (JSON)</CardTitle>
                <CardDescription>Paste your JSON data array</CardDescription>
              </CardHeader>
              <CardContent>
                <textarea
                  value={dataSource}
                  onChange={(e) => setDataSource(e.target.value)}
                  className="w-full h-64 font-mono text-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder='[
  {
    "name": "Product 1",
    "price": "$99",
    "description": "Great product"
  },
  {
    "name": "Product 2",
    "price": "$149",
    "description": "Amazing product"
  }
]'
                />
                <Button onClick={mapDataToTemplate} className="w-full mt-4 flex items-center justify-center gap-2">
                  <IconReload className="w-4 h-4" />
                  Map Data to Template
                </Button>
              </CardContent>
            </Card>

            {/* HTML Template */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>HTML Template with Repeating Elements</CardTitle>
                <CardDescription>The system will detect repeating patterns and populate with data</CardDescription>
              </CardHeader>
              <CardContent>
                <textarea
                  value={htmlInput}
                  onChange={(e) => setHtmlInput(e.target.value)}
                  className="w-full h-64 font-mono text-sm p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="<div class='product-grid'>
  <div class='product'>
    <h3>name</h3>
    <p>description</p>
    <span>price</span>
  </div>
</div>"
                />

                {mappedElements.length > 0 && (
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Detected Repeating Elements:</h4>
                    <ul className="space-y-1">
                      {mappedElements.map((el, i) => (
                        <li key={i} className="text-sm text-blue-800">
                          • {el.selector} ({el.count} instances) - Structure: {el.structure}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Preview */}
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Preview:</h4>
                  <div
                    className="border border-gray-300 rounded-lg p-4 bg-white min-h-32"
                    dangerouslySetInnerHTML={{ __html: htmlInput }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Converter;
