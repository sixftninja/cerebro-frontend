import React from 'react';
import '../styles/UIM.css';
import envConfig from './envConfig';

const UIM = ({ id, number, onDragStart, onDragEnd, onDrop }) => {
    const handleDragStart = (event, position) => {
        event.dataTransfer.setData('uimId', id);
        event.dataTransfer.setData('position', position);
    };

    return (
        <div className="uim" onDrop={onDrop} onDragOver={(e) => e.preventDefault()}>
            <div className="uim-main">
                {number}
            </div>
            <div className="uim-connection-point top" draggable onDragStart={(e) => handleDragStart(e, 'top')} onDragEnd={onDragEnd} />
            <div className="uim-connection-point right" draggable onDragStart={(e) => handleDragStart(e, 'right')} onDragEnd={onDragEnd} />
            <div className="uim-connection-point bottom" draggable onDragStart={(e) => handleDragStart(e, 'bottom')} onDragEnd={onDragEnd} />
            <div className="uim-connection-point left" draggable onDragStart={(e) => handleDragStart(e, 'left')} onDragEnd={onDragEnd} />
        </div>
    );
};

export default UIM;