import React, { useState } from 'react';
import MindMapViewer from './components/MindMapViewer';
import ListView from './components/ListView';
import { getSummaryContent } from './services/github';

function App() {
  const [view, setView] = useState('list'); // 'list' or 'map'
  const [markdown, setMarkdown] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleSelectFile = async (file) => {
    if (!file.download_url) return;

    // Set title immediately for better UX
    setSelectedTitle(file.name.replace('.md', '').replaceAll('-', ' '));

    const content = await getSummaryContent(file.download_url);
    if (content) {
      setMarkdown(content);
      setView('map');
    }
  };

  const handleBack = () => {
    setView('list');
  };

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: '#1a1a1a' }}>
      {view === 'list' ? (
        <ListView onSelectFile={handleSelectFile} />
      ) : (
        <MindMapViewer
          markdown={markdown}
          title={selectedTitle}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;
