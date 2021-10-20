import "./App.css";
import Hangman from "./components/Hangman/Hangman";
import { useState } from "react";
import Letter from "./Letter.js";
import Word from "./Word/Word";

function App() {
  const [errorCounter, setErrorCounter] = useState(0);

  const alphabet = [
    {
      name: "A",
      state: null,
    },
    {
      name: "B",
      state: null,
    },
    {
      name: "C",
      state: null,
    },
    {
      name: "D",
      state: null,
    },
    {
      name: "E",
      state: null,
    },
    {
      name: "F",
      state: null,
    },
    {
      name: "G",
      state: null,
    },
    {
      name: "H",
      state: null,
    },
    {
      name: "I",
      state: null,
    },
    {
      name: "J",
      state: null,
    },
    {
      name: "K",
      state: null,
    },
    {
      name: "L",
      state: null,
    },
    {
      name: "M",
      state: null,
    },
    {
      name: "N",
      state: null,
    },
    {
      name: "Ñ",
      state: null,
    },
    {
      name: "O",
      state: null,
    },
    {
      name: "P",
      state: null,
    },
    {
      name: "Q",
      state: null,
    },
    {
      name: "R",
      state: null,
    },
    {
      name: "S",
      state: null,
    },
    {
      name: "T",
      state: null,
    },
    {
      name: "U",
      state: null,
    },
    {
      name: "V",
      state: null,
    },
    {
      name: "W",
      state: null,
    },
    {
      name: "X",
      state: null,
    },
    {
      name: "Y",
      state: null,
    },
    {
      name: "Z",
      state: null,
    },
  ];

  const [playedWord, setPlayedWord] = useState({
    word: "ornitorrinco",
    solvedLetters: 0,
    playedLetter: "",
    lettersOk: "or",
    errorCounter: 0,
  });
  const variable = playedWord.word.split("");
  return (
    <>
      <header className="header">
        <h1>HANGMAN</h1>
      </header>
      <main>
        <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
          <Hangman errors={errorCounter} />
        </svg>
        <div className="incorrect-letters">
          <div className="incorrect-letters__letter">L</div>
          <div className="incorrect-letters__letter">M</div>
          <div className="incorrect-letters__letter">Ñ</div>
        </div>
      </main>

      <div className="word-container">
        <Word word={playedWord} />
      </div>
      <div className="letter-container">
        {alphabet.map((letter, i) => (
          <Letter
            key={i}
            letter={letter}
            actiononClick={(e) => {
              (() => {
                variable.includes(letter.name.toLowerCase())
                  ? setPlayedWord({
                      ...playedWord,
                      lettersOk:
                        playedWord.lettersOk + letter.name.toLowerCase(),
                    })
                  : (() => {
                      setErrorCounter(errorCounter + 1);
                      console.log(errorCounter);
                    })();
              })();
            }}
          />
        ))}
      </div>
    </>
  );
}

export default App;
