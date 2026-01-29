import React, { useEffect, useState } from 'react';
import { getSummaries } from '../services/github';

const Sidebar = ({ onSelectFile }) => {
    const [files, setFiles] = useState([]);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const loadFiles = async () => {
            const data = await getSummaries();
            setFiles(data);
        };
        loadFiles();
    }, []);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    zIndex: 200,
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)'
                }}
            >
                {isOpen ? 'Close Menu' : 'Open Menu'}
            </button>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '300px',
                height: '100%',
                background: 'rgba(20, 20, 20, 0.95)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '60px 20px 20px 20px',
                boxSizing: 'border-box',
                transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 0.3s ease',
                zIndex: 100,
                overflowY: 'auto'
            }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#ff4b4b' }}>Summaries</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {files.map(file => (
                        <li key={file.sha} style={{ marginBottom: '10px' }}>
                            <button
                                onClick={() => onSelectFile(file)}
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#ddd',
                                    padding: '8px',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    transition: 'background 0.2s'
                                }}
                                onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                            >
                                {file.name.replace('.md', '')}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
