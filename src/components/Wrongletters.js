import React from "react";

// WrongLetters component displays the wrong letters entered by the user
const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div id="wrong-letters">
        Wrong letters :
        {/* Display the wrong letters */}
        <span className="wrongLetter">{wrongLetters}  </span>
      </div>
    </div>
  );
};

export default WrongLetters;
