import randomColor from 'randomColor';
import { useState } from 'react';

export default function ColorGenerator() {
  const initialColor = randomColor(); // Generate the initial random color
  console.log(initialColor);
  const [color, setColor] = useState(initialColor.color);
  const generateNewColor = () => {
    const newColor = randomColor(); // Generate a new random color
    setColor(newColor); // Update the state
  };
  return (
    <div className="Color-generator">
      <h1>Random Color Generator</h1>
      <h2>Generate a random color by clicking the "Generate" button below.</h2>
      <div
        style={{
          backgroundColor: color,
          width: '200px',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {`Generated Color: ${color}`}
      </div>
      <div>
        <button onClick={generateNewColor}> Generate </button>
      </div>
    </div>
  );
}
