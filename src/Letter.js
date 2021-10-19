//import { useState } from "react";
import "./Letter.css";

const Letter = ({ letter, actiononClick }) => {
  //const [state, setState] = useState(true);

  return (
    <div className="letter" onClick={actiononClick}>{letter.name}</div>
  )
}

export default Letter;