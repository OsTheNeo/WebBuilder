import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuilderPage from './pages/BuilderPage';
import EditorPage from './pages/EditorPage';
import PageMapEditor from './pages/PageMapEditor';
import SliderPage from './pages/SliderPage';
import ConverterPage from './pages/ConverterPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageMapEditor />} />
          <Route path="/builder/:pageId?" element={<BuilderPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/slider" element={<SliderPage />} />
          <Route path="/converter" element={<ConverterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
