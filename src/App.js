import './App.css';
import Hangman from './components/Hangman/Hangman';
import { useState } from 'react';

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
      <div className="letter-container">
        <div className="letter">A</div>
        <div className="letter">B</div>
        <div className="letter">C</div>
        <div className="letter">D</div>
        <div className="letter">E</div>
        <div className="letter">F</div>
        <div className="letter">G</div>
        <div className="letter">H</div>
        <div className="letter">I</div>
        <div className="letter">J</div>
        <div className="letter">K</div>
        <div className="letter">L</div>
        <div className="letter">M</div>
        <div className="letter">N</div>
        <div className="letter">Ñ</div>
        <div className="letter">O</div>
        <div className="letter">P</div>
        <div className="letter">Q</div>
        <div className="letter">R</div>
        <div className="letter">S</div>
        <div className="letter">T</div>
        <div className="letter">U</div>
        <div className="letter">V</div>
        <div className="letter">W</div>
        <div className="letter">X</div>
        <div className="letter">Y</div>
        <div className="letter">Z</div>
      </div>
    </>
  );
}

export default App;
