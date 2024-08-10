import { useState } from "react";

export default function ScoreKeeper({ target, playerCount }) {
    const [scores, setScores] = useState(new Array(playerCount).fill(0));
    const gameOver = scores.includes(target);
    const handleReset = () => (setScores(new Array(playerCount).fill(0)))
    const handleScores = (idx) => {
        setScores(
            (currScores) => {
                return currScores.map((val, currIdx) => {
                    if (currIdx === idx) {
                        return val + 1;
                    }
                    return val;
                })
            }
        )
    }
    return (
        <div>
            <h1>ScoreKeeper</h1>
            <ul>
                {
                    scores.map((val, idx) => {
                        return (
                            <li key={idx} id={idx}>
                                Player {idx + 1} : {val}
                                <button disabled={gameOver ? true : false} onClick={() => handleScores(idx)}>+1</button>
                                {val === target && <span>YOU WIN !!</span>}
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}