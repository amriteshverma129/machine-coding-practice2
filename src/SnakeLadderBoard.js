import React from "react";
import { useState } from "react";
const board = new Array(10).fill(0).map((_) => new Array(10).fill(" "));
const snakes = { 98: 7, 65: 40, 25: 5, 89: 50 };
const ladders = { 3: 22, 8: 26, 20: 77, 36: 55 };

export const SnakeLadderBoard = () => {
  const [currentPlayer, setCurrentPlayer] = useState("Player1");
  const [diceNumber, setDiceNumber] = useState("6");
  const [currentPlayer1Pos, setCurrentPlayer1Pos] = useState(1);
  const [currentPlayer2Pos, setCurrentPlayer2Pos] = useState(1);

  const handleGame = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(number);
    if (currentPlayer === "Player1") {
      let newPosition = currentPlayer1Pos + number;
      if (snakes[newPosition]) newPosition = snakes[newPosition];
      else if (ladders[newPosition]) newPosition = ladders[newPosition];

      if (newPosition > 100) {
        setCurrentPlayer("Player2");
        return;
      }
      setCurrentPlayer1Pos(newPosition);
      if (newPosition === 100) {
        console.log("Player1 win");
        return;
      }
      setCurrentPlayer("Player2");
    } else {
      let newPosition = currentPlayer2Pos + number;
      if (snakes[newPosition]) newPosition = snakes[newPosition];
      else if (ladders[newPosition]) newPosition = ladders[newPosition];
      if (newPosition > 100) {
        setCurrentPlayer("Player1");
        return;
      }
      setCurrentPlayer2Pos(newPosition);
      if (newPosition === 100) {
        console.log("Player2 win");
        return;
      }
      setCurrentPlayer("Player1");
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {board.map((item, i) => {
        return (
          <div key={i} style={{ display: "flex" }}>
            {item.map((item, j) => {
              return (
                <div
                  key={j}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid black",
                    height: "40px",
                    width: "40px",
                    backgroundColor: snakes[(10 - i - 1) * 10 + (j + 1)]
                      ? "lightPink"
                      : ladders[(10 - i - 1) * 10 + (j + 1)]
                      ? "lightGreen"
                      : "",
                  }}
                >
                  {(10 - i - 1) * 10 + (j + 1)}
                  <div style={{ display: "flex" }}>
                    {currentPlayer1Pos === (10 - i - 1) * 10 + (j + 1) && (
                      <div
                        style={{
                          backgroundColor: "red",
                          height: "10px",
                          width: "10px",
                          margin: "5px",
                        }}
                      ></div>
                    )}
                    {currentPlayer2Pos === (10 - i - 1) * 10 + (j + 1) && (
                      <div
                        style={{
                          backgroundColor: "green",
                          height: "10px",
                          width: "10px",
                          margin: "5px",
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      <div>{currentPlayer} Chance</div>
      <div
        style={{
          border: "1px solid black",
          height: "40px",
          width: "40px",
          marginTop: "20px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "3px",
        }}
        onClick={handleGame}
      >
        {diceNumber}
      </div>
    </div>
  );
};
