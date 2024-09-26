// src/Notepad.js
import React, { useState } from 'react';
import './Notepad.css'; // Ensure you have the CSS file imported

function Notepad() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSave = () => {
        localStorage.setItem('notepadText', text);
        alert('Text saved!');
    };

    const handleLoad = () => {
        const savedText = localStorage.getItem('notepadText');
        if (savedText) {
            setText(savedText);
        }
    };

    return (
        <div className="notepad">
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Start typing here..."
            />
            <div className="notepad-footer">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleLoad}>Load</button>
            </div>
        </div>
    );
}

export default Notepad;

