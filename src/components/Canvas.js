import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UIM from './UIM';
import '../styles/Canvas.css';

const Canvas = () => {
    const [uims, setUims] = useState([]);

    useEffect(() => {
        axios.get('/api/uims')
            .then(response => setUims(response.data))
            .catch(error => console.error('Error fetching UIMs:', error));
    }, []);

    const addUIM = () => {
        axios.post('/uims/create', { position: { x: 0, y: 0 } })
            .then(response => {
                const newUim = { id: response.data.uim_id, position: { x: 0, y: 0 } };
                setUims([...uims, newUim]);
            })
            .catch(error => console.error('Error adding UIM:', error));
    };

    const handleDrop = (event, targetUimId) => {
        const sourceUimId = event.dataTransfer.getData('uimId');
        if (sourceUimId && targetUimId) {
            // Call backend to create connection
            axios.post('/connections/create', { from_uim: sourceUimId, to_uim: targetUimId })
                .catch(error => console.error('Error creating connection:', error));
        }
    };

    return (
        <div className="canvas">
            {uims.map(uim => (
                <UIM key={uim.id} id={uim.id} number={uim.id} onDrop={handleDrop} />
            ))}
            <button onClick={addUIM}>Add UIM</button>
        </div>
    );
};

export default Canvas;