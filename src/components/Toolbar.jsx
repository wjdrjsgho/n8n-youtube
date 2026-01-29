import React from 'react';

const Toolbar = ({ onZoomIn, onZoomOut, onFit }) => {
    return (
        <div style={{
            position: 'absolute',
            bottom: '30px',
            right: '30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            zIndex: 100
        }}>
            <button onClick={onZoomIn} style={buttonStyle}>+</button>
            <button onClick={onZoomOut} style={buttonStyle}>-</button>
            <button onClick={onFit} style={buttonStyle}>[ ]</button>
        </div>
    );
};

const buttonStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    border: 'none',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s',
    outline: 'none',
};

export default Toolbar;
