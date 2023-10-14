import React from "react";

// Word component displays the selected word with correct letters
const Word = ({ selectedWord, correctLetters }) => {

  return (
    <div className="word" >
      {/* Map through each letter in the selected word */}
      {selectedWord.split("").map((letter, i) => {
        return (
          // Display the letter if it's in the correct letters array
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
