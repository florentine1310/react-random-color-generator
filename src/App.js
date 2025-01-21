import randomColor from 'randomcolor';
import { useState } from 'react';

export default function ColorGenerator() {
  const [color, setColor] = useState(randomColor()); // State for random color
  const generateNewColor = () => {
    const newColor = randomColor(); // Generate a new random color
    setColor(newColor); // Update the state
  };
  return (
    <div
      className="Color-generator"
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Random Color Generator</h1>
      <h3>Generate a random color by clicking the "Generate" button below.</h3>
      <br />
      <div
        style={{
          backgroundColor: color,
          width: '300px',
          height: '300px',
          display: 'flex',
          padding: '20px',
          border: 'solid 2px #000000',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          transition: 'background-color 1s',
        }}
      >
        {`Generated Color: ${color}`}
      </div>
      <br />
      <div>
        <button onClick={generateNewColor}> Generate </button>
      </div>
    </div>
  );
}
