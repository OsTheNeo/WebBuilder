import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IconPlus, IconHome, IconFileText, IconTrash, IconEdit } from '@tabler/icons-react';

const PageMapEditor = () => {
  const navigate = useNavigate();
  const [pages, setPages] = useState([
    {
      id: 'home',
      name: 'Home',
      path: '/',
      position: { x: 400, y: 100 },
      isHome: true
    }
  ]);
  const [connections, setConnections] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [isAddingPage, setIsAddingPage] = useState(false);
  const [newPageData, setNewPageData] = useState({ name: '', path: '', parentId: null });

  const handleAddPage = (parentId = null) => {
    setNewPageData({ name: '', path: '', parentId });
    setIsAddingPage(true);
  };

  const createPage = () => {
    if (!newPageData.name || !newPageData.path) return;

    const newPage = {
      id: `page-${Date.now()}`,
      name: newPageData.name,
      path: newPageData.path,
      position: {
        x: newPageData.parentId
          ? pages.find(p => p.id === newPageData.parentId)?.position.x + 200
          : 400,
        y: newPageData.parentId
          ? pages.find(p => p.id === newPageData.parentId)?.position.y + 150
          : pages.length * 150
      },
      isHome: false
    };

    setPages([...pages, newPage]);

    if (newPageData.parentId) {
      setConnections([...connections, {
        from: newPageData.parentId,
        to: newPage.id
      }]);
    }

    setIsAddingPage(false);
    setNewPageData({ name: '', path: '', parentId: null });
  };

  const handleDeletePage = (pageId) => {
    if (pages.find(p => p.id === pageId)?.isHome) return;

    setPages(pages.filter(p => p.id !== pageId));
    setConnections(connections.filter(c => c.from !== pageId && c.to !== pageId));
    setSelectedPage(null);
  };

  const handleEditPage = (pageId) => {
    navigate(`/builder/${pageId}`);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b shadow-sm px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Site Structure</h1>
            <p className="text-sm text-gray-500 mt-1">Design your site's page hierarchy</p>
          </div>
          <button
            onClick={() => handleAddPage()}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <IconPlus className="w-5 h-5" />
            Add Page
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative h-[calc(100vh-80px)] overflow-auto">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {connections.map((conn, index) => {
            const fromPage = pages.find(p => p.id === conn.from);
            const toPage = pages.find(p => p.id === conn.to);
            if (!fromPage || !toPage) return null;

            const x1 = fromPage.position.x + 150;
            const y1 = fromPage.position.y + 50;
            const x2 = toPage.position.x + 150;
            const y2 = toPage.position.y + 50;

            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            );
          })}
        </svg>

        {/* Page Nodes */}
        <div className="relative z-10 p-8">
          {pages.map((page) => (
            <motion.div
              key={page.id}
              drag
              dragMomentum={false}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute"
              style={{
                left: page.position.x,
                top: page.position.y
              }}
              onDragEnd={(e, info) => {
                setPages(pages.map(p =>
                  p.id === page.id
                    ? { ...p, position: { x: p.position.x + info.offset.x, y: p.position.y + info.offset.y } }
                    : p
                ));
              }}
            >
              <div
                className={`w-72 bg-white rounded-xl shadow-lg border-2 transition-all cursor-move ${
                  selectedPage === page.id ? 'border-blue-500 shadow-xl' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedPage(page.id)}
              >
                <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center gap-3">
                    {page.isHome ? (
                      <IconHome className="w-5 h-5 text-blue-600" />
                    ) : (
                      <IconFileText className="w-5 h-5 text-gray-600" />
                    )}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-800">{page.name}</h3>
                      <p className="text-xs text-gray-500">{page.path}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditPage(page.id);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    >
                      <IconEdit className="w-4 h-4" />
                      Design
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddPage(page.id);
                      }}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <IconPlus className="w-4 h-4" />
                    </button>
                    {!page.isHome && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeletePage(page.id);
                        }}
                        className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                      >
                        <IconTrash className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add Page Modal */}
      <AnimatePresence>
        {isAddingPage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setIsAddingPage(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl p-6 w-96"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Page</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Page Name
                  </label>
                  <input
                    type="text"
                    value={newPageData.name}
                    onChange={(e) => setNewPageData({ ...newPageData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., About Us"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL Path
                  </label>
                  <input
                    type="text"
                    value={newPageData.path}
                    onChange={(e) => setNewPageData({ ...newPageData, path: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., /about"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setIsAddingPage(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={createPage}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Create Page
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageMapEditor;
