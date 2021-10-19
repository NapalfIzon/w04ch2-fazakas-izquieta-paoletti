import './App.css';
import Hangman from './components/Hangman/Hangman';
import { useState } from 'react';
import Letter from "./Letter.js";

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

  return (
    <>
      <header className="header"><h1>HANGMAN</h1></header>
      <main>
        <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
          { /*<Hangman errors={error} /> */}
        </svg>
        <div className="incorrect-letters">
          <div className="incorrect-letters__letter">L</div>
          <div className="incorrect-letters__letter">M</div>
          <div className="incorrect-letters__letter">Ñ</div>
        </div>
      </main>

      <div className="word-container">
        <div className="word-container__correct">H</div>
        <div className="word-container__correct">O</div>
        <div className="word-container__correct">L</div>
        <div className="word-container__correct">A</div>
      </div>
      <div className="letter-container">
        {alphabet.map((letter, i) => (
          <Letter key={i} letter={letter} actiononClick={(e) => printLetter(e)} />))}
      </div>


    </>
  );
}

export default App;
