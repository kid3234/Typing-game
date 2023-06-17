import React from "react";
import UserWordGame from "./UserWordGame";
  export default function Body(){
    const {
        textBoxRef,
        handleChange,
        text,
        isTimeRunning,
        timeRemaining,
        startGame,
        wordCount
      } = UserWordGame();
    return(
        <div>
            <h1>Start typing</h1>
            <textarea onChange={handleChange} placeholder="Starat your typing" ref={textBoxRef}/>
            <button onClick={startGame}> {isTimeRunning ? "start" : "Stop"}</button>
            <p>Remaining Time : {timeRemaining}</p>
            <p>Words:{wordCount}</p>
        </div>
    )
}
// onChange={handleChange}
// onClick={startGame}
//  {wordCount}