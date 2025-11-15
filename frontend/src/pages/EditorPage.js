import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EditableText from '../components/EditableText';
import TreeView from '../components/TreeView';
import MediaModal from '../components/MediaModal';

const EditorPage = () => {
  const [article, setArticle] = useState({
    title: 'The Art of Modern Web Design',
    subtitle: 'Exploring the intersection of creativity and technology',
    author: 'Jane Doe',
    date: 'November 15, 2025',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    quote: '"Design is not just what it looks like and feels like. Design is how it works."',
    quoteAuthor: 'Steve Jobs',
    columnOneContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,

    columnTwoContent: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.`
  });

  const [selectedNodeId, setSelectedNodeId] = useState('root');
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [mediaType, setMediaType] = useState('image'); // or 'video'

  // Build tree structure from article
  const buildTreeStructure = () => {
    return {
      id: 'root',
      tag: 'article',
      label: 'Article',
      children: [
        {
          id: 'header',
          tag: 'header',
          label: 'Header Section',
          children: [
            { id: 'title', tag: 'h1', label: 'Title' },
            { id: 'subtitle', tag: 'p', label: 'Subtitle' },
            { id: 'meta', tag: 'div', label: 'Metadata (Author, Date)' }
          ]
        },
        {
          id: 'image',
          tag: 'img',
          label: 'Featured Image'
        },
        {
          id: 'content',
          tag: 'div',
          label: 'Two Column Content',
          children: [
            { id: 'col1', tag: 'div', label: 'Column 1 (Paragraphs)' },
            { id: 'col2', tag: 'div', label: 'Column 2 (Paragraphs)' }
          ]
        },
        {
          id: 'quote-section',
          tag: 'blockquote',
          label: 'Quote Section',
          children: [
            { id: 'quote', tag: 'q', label: 'Quote Text' },
            { id: 'quote-author', tag: 'cite', label: 'Quote Author' }
          ]
        }
      ]
    };
  };

  const [treeStructure, setTreeStructure] = useState(buildTreeStructure());

  const updateArticleField = (field, value) => {
    setArticle(prev => ({ ...prev, [field]: value }));
  };

  const handleAddNode = (parentId, componentType) => {
    console.log(`Adding ${componentType.name} to parent ${parentId}`);
    // TODO: Implement adding new nodes to the structure
    // This will update the treeStructure and add corresponding content to article
  };

  const handleMediaSelect = (media) => {
    setArticle(prev => ({
      ...prev,
      image: media.url
    }));
    setMediaType(media.type);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 py-3"
      >
        <div className="max-w-full mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Article Editor</h1>
              <p className="text-gray-600 text-sm">Create and edit your article with inline editing</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                Preview
              </button>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Publish
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Two Column Layout: Editor + Tree View */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Column: Article Editor */}
        <div className="flex-1 overflow-y-auto p-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-12"
          >
            {/* Article Header */}
            <header className="mb-12 border-b border-gray-200 pb-8">
              <EditableText
                tag="h1"
                value={article.title}
                onChange={(val) => updateArticleField('title', val)}
                className="text-5xl font-bold text-gray-900 mb-4"
                placeholder="Enter article title..."
              />
              <EditableText
                tag="p"
                value={article.subtitle}
                onChange={(val) => updateArticleField('subtitle', val)}
                className="text-2xl text-gray-600 mb-6"
                placeholder="Enter subtitle..."
              />
              <div className="flex items-center text-gray-500 text-sm">
                <EditableText
                  tag="span"
                  value={article.author}
                  onChange={(val) => updateArticleField('author', val)}
                  className="font-semibold"
                  placeholder="Author name..."
                />
                <span className="mx-2">•</span>
                <EditableText
                  tag="span"
                  value={article.date}
                  onChange={(val) => updateArticleField('date', val)}
                  placeholder="Date..."
                />
              </div>
            </header>

            {/* Featured Media (Image or Video) */}
            <div className="mb-12 group relative">
              {mediaType === 'video' ? (
                <video
                  src={article.image}
                  controls
                  className="w-full h-96 object-cover rounded-lg shadow-md"
                />
              ) : (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-96 object-cover rounded-lg shadow-md"
                />
              )}
              <button
                onClick={() => setShowMediaModal(true)}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-white rounded-lg shadow-lg font-semibold hover:bg-gray-50"
              >
                Change Media
              </button>
            </div>

            {/* Two Column Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Column 1 */}
              <div className="space-y-4">
                {article.columnOneContent.split('\n\n').map((paragraph, index) => (
                  <EditableText
                    key={`col1-${index}`}
                    tag="p"
                    value={paragraph}
                    onChange={(val) => {
                      const paragraphs = article.columnOneContent.split('\n\n');
                      paragraphs[index] = val;
                      updateArticleField('columnOneContent', paragraphs.join('\n\n'));
                    }}
                    className="text-gray-700 leading-relaxed text-lg"
                    placeholder="Enter paragraph..."
                    multiline={true}
                  />
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                {article.columnTwoContent.split('\n\n').map((paragraph, index) => (
                  <EditableText
                    key={`col2-${index}`}
                    tag="p"
                    value={paragraph}
                    onChange={(val) => {
                      const paragraphs = article.columnTwoContent.split('\n\n');
                      paragraphs[index] = val;
                      updateArticleField('columnTwoContent', paragraphs.join('\n\n'));
                    }}
                    className="text-gray-700 leading-relaxed text-lg"
                    placeholder="Enter paragraph..."
                    multiline={true}
                  />
                ))}
              </div>
            </div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-8 rounded-r-lg my-12"
            >
              <EditableText
                tag="blockquote"
                value={article.quote}
                onChange={(val) => updateArticleField('quote', val)}
                className="text-2xl font-medium text-gray-800 italic mb-3"
                placeholder="Enter quote..."
                multiline={true}
              />
              <EditableText
                tag="cite"
                value={article.quoteAuthor}
                onChange={(val) => updateArticleField('quoteAuthor', val)}
                className="text-gray-600 not-italic font-semibold"
                placeholder="Quote author..."
              />
            </motion.div>
          </motion.article>
        </div>

        {/* Right Column: Tree View */}
        <div className="w-96 bg-gray-100 border-l border-gray-300 p-4">
          <TreeView
            structure={treeStructure}
            onAddNode={handleAddNode}
            onSelectNode={setSelectedNodeId}
            selectedNodeId={selectedNodeId}
          />
        </div>
      </div>

      {/* Media Modal */}
      <MediaModal
        isOpen={showMediaModal}
        onClose={() => setShowMediaModal(false)}
        onSelectMedia={handleMediaSelect}
        currentUrl={article.image}
      />
    </div>
  );
};

export default EditorPage;
