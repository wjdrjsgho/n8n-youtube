import React, { useEffect, useState } from 'react';
import { getSummaries } from '../services/github';

const ListView = ({ onSelectFile }) => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFiles = async () => {
            setLoading(true);
            const data = await getSummaries();
            setFiles(data);
            setLoading(false);
        };
        loadFiles();
    }, []);

    return (
        <div style={{
            padding: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '100vh',
            backgroundColor: '#1a1a1a',
            color: '#fff'
        }}>
            <header style={{ marginBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ff4b4b', marginBottom: '10px' }}>
                    MindMap Hub
                </h1>
                <p style={{ color: '#aaa', fontSize: '1.1rem' }}>
                    Select a YouTube AI summary to visualize as a Mind Map.
                </p>
            </header>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '100px', fontSize: '1.2rem', color: '#888' }}>
                    Fetching summaries from GitHub...
                </div>
            ) : files.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '100px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px' }}>
                    <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '20px' }}>No summaries found in the repository.</p>
                    <p style={{ fontSize: '0.9rem', color: '#555' }}>Make sure your n8n workflow is pushing .md files to the 'summaries' folder.</p>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '20px'
                }}>
                    {files.map(file => (
                        <div
                            key={file.sha}
                            onClick={() => onSelectFile(file)}
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '16px',
                                padding: '24px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                                e.currentTarget.style.borderColor = '#ff4b4b';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                        >
                            <div style={{ color: '#ff4b4b', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '12px', textTransform: 'uppercase' }}>
                                Summary
                            </div>
                            <h3 style={{ margin: 0, fontSize: '1.2rem', lineHeight: '1.4', color: '#eee' }}>
                                {file.name.replace('.md', '').replaceAll('-', ' ')}
                            </h3>
                            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', color: '#666', fontSize: '0.85rem' }}>
                                <span>View MindMap</span>
                                <span style={{ marginLeft: 'auto' }}>→</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListView;
