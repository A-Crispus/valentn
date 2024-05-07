import React, { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really",
  "Pookie please",
  "Don't do this to me",
  "I'm gonna cry",
  "You're breaking my heart ;(",
];

function App() {
  const [noCount, setNoCount] = useState(0); // Changed from count to noCount
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16; // Changed from count to noCount

  function handleNoClick() {
    setNoCount(noCount + 1); // Changed from count to noCount
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)]; // Changed from count to noCount
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="mwuaah"
            src="https://media1.tenor.com/m/gRnRdgBucm8AAAAC/puuung-kiss-puuung.gif"
          />
          <div className="text">Yay!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with heart"
            src="https://media.tenor.com/VIChDQ6ejRQAAAAi/jumping-bear-hearts-no-png.gif"
          />
          {/* Corrected the image URL */}
          <div>Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: `${yesButtonSize}px` }} // Corrected style syntax
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
