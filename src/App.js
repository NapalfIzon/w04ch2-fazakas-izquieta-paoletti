import './App.css';

function App() {
  return (
    <>
      <header className="header">HANGMAN</header>
      <main>
        <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
          <line className="stage11" x1="62" y1="70" x2="56" y2="56"></line>
          <line className="stage10" x1="50" y1="70" x2="56" y2="56"></line>
          <line className="stage9" x1="68" y1="46" x2="56" y2="40"></line>
          <line className="stage8" x1="44" y1="46" x2="56" y2="40"></line>
          <line className="stage7" x1="56" y1="40" x2="56" y2="56"></line>
          <circle className="stage6" cx="56" cy="34" r="6" fill="#bee5eb"></circle>
          <line className="stage5" x1="56" y1="16" x2="56" y2="28"></line>
          <line className="stage4" x1="24" y1="24" x2="32" y2="16"></line>
          <line className="stage3" x1="21" y1="16" x2="60" y2="16"></line>
          <line className="stage2" x1="24" y1="80" x2="24" y2="16"></line>
          <line className="stage1" x1="16" y1="80" x2="32" y2="80"></line>
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
