
import './App.css';
import Hangman from './components/Hangman/Hangman';
import { useState } from 'react';
import Letter from "./Letter.js";
import Word from "./Word.js";

function App() {
  const [letter, stateLetter] = useState(null)
  const printLetter = (event) => {
    stateLetter(event.target.innerText);
    console.log(event.target.innerText);
  }

  const alphabet = [
    {
      name: "A",
      state: null
    },
    {
      name: "B",
      state: null
    },
    {
      name: "C",
      state: null
    },
    {
      name: "D",
      state: null
    },
    {
      name: "E",
      state: null
    },
    {
      name: "F",
      state: null
    },
    {
      name: "G",
      state: null
    },
    {
      name: "H",
      state: null
    },
    {
      name: "I",
      state: null
    },
    {
      name: "J",
      state: null
    },
    {
      name: "K",
      state: null
    },
    {
      name: "L",
      state: null
    },
    {
      name: "M",
      state: null
    },
    {
      name: "N",
      state: null
    },
    {
      name: "Ñ",
      state: null
    },
    {
      name: "O",
      state: null
    },
    {
      name: "P",
      state: null
    },
    {
      name: "Q",
      state: null
    },
    {
      name: "R",
      state: null
    },
    {
      name: "S",
      state: null
    },
    {
      name: "T",
      state: null
    },
    {
      name: "U",
      state: null
    },
    {
      name: "V",
      state: null
    },
    {
      name: "W",
      state: null
    },
    {
      name: "X",
      state: null
    },
    {
      name: "Y",
      state: null
    },
    {
      name: "Z",
      state: null
    }
  ]

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
      <div className="letter-container">
        {alphabet.map((letter, i) => (
          <Letter key={i} letter={letter} actiononClick={(e) => printLetter(e)} />))}
      </div>
    </>
  );
}

export default App;
