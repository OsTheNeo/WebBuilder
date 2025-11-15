import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 py-3"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Article Editor</h1>
              <p className="text-gray-600 text-sm">Create and edit your article</p>
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-lg p-12"
        >
          {/* Article Header */}
          <header className="mb-12 border-b border-gray-200 pb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <p className="text-2xl text-gray-600 mb-6">
              {article.subtitle}
            </p>
            <div className="flex items-center text-gray-500 text-sm">
              <span className="font-semibold">{article.author}</span>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Two Column Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Column 1 */}
            <div className="space-y-4">
              {article.columnOneContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {article.columnTwoContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed text-lg">
                  {paragraph}
                </p>
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
            <blockquote className="text-2xl font-medium text-gray-800 italic mb-3">
              {article.quote}
            </blockquote>
            <cite className="text-gray-600 not-italic font-semibold">
              — {article.quoteAuthor}
            </cite>
          </motion.div>

          {/* Additional Content (Single Column) */}
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              In conclusion, the intersection of design and technology continues to evolve,
              bringing new opportunities and challenges for creators worldwide. As we move
              forward, it's essential to maintain a balance between aesthetic appeal and
              functional excellence.
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default EditorPage;
