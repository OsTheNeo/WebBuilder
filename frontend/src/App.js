import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuilderPage from './pages/BuilderPage';
import EditorPage from './pages/EditorPage';
import PageMapEditor from './pages/PageMapEditor';
import Converter from './pages/Converter';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageMapEditor />} />
          <Route path="/builder/:pageId?" element={<BuilderPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/converter" element={<Converter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
