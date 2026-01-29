import React, { useEffect, useRef } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import Toolbar from './Toolbar';
import 'markmap-toolbar/dist/style.css';

const transformer = new Transformer();

const MindMapViewer = ({ markdown, title, onBack }) => {
    const svgRef = useRef(null);
    const markmapInstanceRef = useRef(null);

    useEffect(() => {
        if (svgRef.current) {
            if (markmapInstanceRef.current) {
                svgRef.current.innerHTML = '';
            }

            const mm = Markmap.create(svgRef.current, {
                autoFit: true,
                duration: 200,
            });
            markmapInstanceRef.current = mm;
            updateMap();
        }
    }, []);

    useEffect(() => {
        updateMap();
    }, [markdown]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ignore if typing in an input (though likely none in this view)
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            if (e.key === '=' || e.key === '+') {
                e.preventDefault(); // Prevent browser zoom if possible/needed
                handleZoomIn();
            } else if (e.key === '-' || e.key === '_') {
                e.preventDefault();
                handleZoomOut();
            } else if (e.key === '0') {
                e.preventDefault();
                handleFit();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []); // Empty dependency as handlers use refs

    const updateMap = () => {
        if (!markmapInstanceRef.current || !markdown) return;
        const { root } = transformer.transform(markdown);
        markmapInstanceRef.current.setData(root);
        markmapInstanceRef.current.fit();
    };

    const handleZoomIn = () => {
        if (markmapInstanceRef.current) {
            markmapInstanceRef.current.svg.transition().call(markmapInstanceRef.current.zoom.scaleBy, 1.25);
        }
    };

    const handleZoomOut = () => {
        if (markmapInstanceRef.current) {
            markmapInstanceRef.current.svg.transition().call(markmapInstanceRef.current.zoom.scaleBy, 0.75);
        }
    };

    const handleFit = () => {
        if (markmapInstanceRef.current) {
            markmapInstanceRef.current.fit();
        }
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: '#1a1a1a' }}>
            {/* Header bar */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                padding: '20px 40px',
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(26, 26, 26, 0.8)',
                backdropFilter: 'blur(10px)',
                zIndex: 50,
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
                <button
                    onClick={onBack}
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: 'none',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        marginRight: '20px',
                        fontSize: '14px'
                    }}
                >
                    ← Back to List
                </button>
                <span style={{ color: '#ff4b4b', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {title || 'MindMap'}
                </span>
            </div>

            <svg ref={svgRef} style={{ width: '100%', height: '100%' }} />

            <Toolbar
                onZoomIn={handleZoomIn}
                onZoomOut={handleZoomOut}
                onFit={handleFit}
            />
        </div>
    );
};

export default MindMapViewer;
