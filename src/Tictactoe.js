import { useState } from "react";
const n = 3;
const mat = new Array(n).fill(0).map((_) => new Array(n).fill(""));

const map = new Map();

const Tictactoe = () => {
  const [player, setPlayer] = useState("Player1");
  const [message, setMessage] = useState("");

  const checkWinner = (i, j, val) => {
    let countRow = 0;
    let countCol = 0;
    let diaLeft = 0;
    let diaRight = 0;
    for (let k = 0; k < n; k++) {
      if (mat[i][k] === val) countRow++;
      if (mat[k][j] === val) countCol++;
      if (mat[k][k] === val) diaLeft++;
      if (mat[k][n - k - 1] === val) diaRight++;
    }
    if (countRow === n || countCol === n || diaLeft === n || diaRight === n)
      return true;
    return false;
  };

  const handleClick = (i, j) => {
    if (mat[i][j] !== "") return;
    if (player === "Player1") {
      mat[i][j] = "X";
      if (checkWinner(i, j, "X")) setMessage("Player1 is winner");
      else setPlayer("Player2");
    } else {
      mat[i][j] = "O";
      if (checkWinner(i, j, "O")) setMessage("Player2 is winner");
      else setPlayer("Player1");
    }
  };

  const RenderTable = () => {
    return mat.map((item, i) => (
      <div key={i} style={{ display: "flex" }}>
        {item.map((item2, j) => (
          <div
            key={j}
            onClick={() => handleClick(i, j)}
            style={{
              border: "1px solid black",
              height: "30px",
              width: "30px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            {item2}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div>
      <RenderTable />
      {!message ? player + " is playing" : message}
    </div>
  );
};
export default Tictactoe;
