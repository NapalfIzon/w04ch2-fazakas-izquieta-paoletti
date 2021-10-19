
import './App.css';
import Hangman from './components/Hangman/Hangman';
import { useState } from 'react';
import Letter from "./Letter.js";
import Word from "./Word.js";
function App() {
  const [playedWord, setPlayedWord] = useState([
    {
      word: "ornitorrinco",
      solvedLetters: 0,
      playedLetter: "",
      lettersOk: "orni",
      errorCounter: 0,
    },
    {
      word: "caracola",
      solvedLetters: 0,
      playedLetter: "",
      lettersOk: "",
      errorCounter: 0,
    },
    {
      word: "surf",
      solvedLetters: 0,
      playedLetter: "",
      lettersOk: "",
      errorCounter: 0,
    },
    {
      word: "ornitorrinco",
      solvedLetters: 0,
      playedLetter: "",
      lettersOk: "",
      errorCounter: 0,
    },
    {
      word: "perro",
      solvedLetters: 0,
      playedLetter: "",
      lettersOk: "",
      errorCounter: 0,
    },
    {
      word: "gato",
      solvedLetters: 0,
      playedLetter: "",
      lettersOk: "",
      errorCounter: 0,
    },
  ]);



  

  return (
    <>
      <header className="header"><h1>HANGMAN</h1></header>
      <main>
        <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">

        </svg>
        <div className="incorrect-letters">
          <div className="incorrect-letters__letter">L</div>
          <div className="incorrect-letters__letter">M</div>
          <div className="incorrect-letters__letter">Ñ</div>
        </div>
      </main>

      <div className="word-container">
        <Word word={playedWord[0]} />
      </div>

      <Letter />
  
    </>
  );
}

export default App;
