import './App.css';
import Hangman from './components/Hangman/Hangman';
import { useState } from 'react';
import Letter from "./Letter.js";

function App() {
  let [error, setError] = useState(0);

  window.addEventListener("click", () => {
    setError(error + 1);
    console.log(error);
  })

  return (
    <>
      <header className="header"><h1>HANGMAN</h1></header>
      <main>
        <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
          <Hangman errors={error} />
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

      <Letter />
  
    </>
  );
}

export default App;
