import {useState} from "react"; 
import "./Letter.css";

const Letter = ({playedLetter}) => {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L",
                        "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    const [played, setPlayed] = useState(false);

    return (
        <div className="letter-container">
        {
            alphabet.map( letter => <div key={letter} className="letter" 
                                         onClick={ ()=> setPlayed(true)}> {letter} </div>)
        }
        </div>
    )
}

export default Letter;