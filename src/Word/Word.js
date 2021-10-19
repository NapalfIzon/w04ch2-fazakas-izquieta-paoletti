import PropTypes from "prop-types";
import "./Word.css";

function Word({ word }) {
  const displayedLetters = word.word.split("");
  const correctLetters = word.lettersOk.split("");

  return (
    <>
      {displayedLetters.map((displayedLetter, i) => {
        return correctLetters.includes(displayedLetter) ? (
          <div key={i} className="word-letter">
            {displayedLetter}
          </div>
        ) : (
          <div key={i} className="word-letter"></div>
        );
      })}
    </>
  );
}

Word.propTypes = {
  word: PropTypes.shape({
    word: PropTypes.string.isRequired,
    lettersOk: PropTypes.string.isRequired,
  }),
};

export default Word;
