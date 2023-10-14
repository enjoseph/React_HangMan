import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

// Popup component displays a message when the game ends
const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  // Initialize variables for the final message and reveal word
  let finalMessage = '';
  let finalMessageRevealWord = '';
  // Set the default game state to playable
  let playable = true;

  // Check if the game is won or lost and update the final message and playable state
  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations! You win! 😃';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately, you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  // Use useEffect to update the playable state when the component mounts
  useEffect(() => {
    setPlayable(playable);
  });

  // Render the popup with the final message, reveal word, and play again button
  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup;
