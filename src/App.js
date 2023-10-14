import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/Wrongletters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';
import './App.css';

// Array of words for the game
const words = ['application', 'programming', 'interface', 'wizard'];

// Randomly select a word from the array
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  // State variables to manage game state
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  console.log(wrongLetters);

  // Effect to handle keydown events for letter guesses
  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      // Check if the key pressed is a letter (A-Z)
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        // Check if the selected word contains the guessed letter
        if (selectedWord.includes(letter)) {
          // If the letter is not already guessed correctly, add it to the correctLetters array
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // If the letter is already guessed correctly, show a notification
            show(setShowNotification);
          }
        } else {
          // If the selected word does not contain the guessed letter, add it to the wrongLetters array
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // If the letter is already guessed incorrectly, show a notification
            show(setShowNotification);
          }
        }
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeydown);

    // Cleanup: Remove event listener when the component is unmounted
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  // Function to reset the game and play again
  function playAgain() {
    setPlayable(true);

    // Empty the arrays for correct and wrong letters
    setCorrectLetters([]);
    setWrongLetters([]);

    // Randomly select a new word for the game
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  // Render the game components
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
