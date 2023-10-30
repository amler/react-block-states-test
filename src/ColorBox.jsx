import { useState } from 'react';
import './ColorBox.css';

function ColorBox () {
    const [color, setColor] = useState('purple');
    const changeColor = () => {
        setColor('orange');
    }
    return (
        <div 
            className="ColorBox"
            onClick={changeColor} 
            style={{ backgroundColor: color }}
        ></div>
    );
}

export default ColorBox;