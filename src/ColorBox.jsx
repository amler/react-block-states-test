import { useState } from 'react';
import './ColorBox.css';

function randomArrayIdx(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
  
function ColorBox({ colors }) {
    const [color, setColor] = useState(randomArrayIdx(colors));
    const changeColor = () => {
        const randomColor = randomArrayIdx(colors);
        setColor(randomColor);
    };
    return (
        <div
        className="ColorBox"
        onClick={changeColor}
        style={{ backgroundColor: color }}
        ></div>
    );
}

export default ColorBox;
