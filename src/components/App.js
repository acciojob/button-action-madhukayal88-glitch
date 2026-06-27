import React, { useState } from 'react';

function App() {
  // State to track whether the text should be visible or not
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility state on button click
  const handleButtonClick = () => {
    setIsVisible(true);
  };

  return (
    <div id="main">
      {/* Button with required id */}
      <button id="click" onClick={handleButtonClick}>
        Click Me
      </button>

      {/* Paragraph with required id and dynamic className based on state */}
      <p id="para" className={isVisible ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
    </div>
  );
}

export default App;
