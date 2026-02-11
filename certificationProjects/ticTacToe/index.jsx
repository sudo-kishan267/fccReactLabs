const { useState } = React;

export function Board() {
  // what i thought earlier but this does not work dynamically

  //   const [sq1, setSq1] = useState("");
  //   const [sq2, setSq2] = useState("");
  //   const [sq3, setSq3] = useState("");
  //   const [sq4, setSq4] = useState("");
  //   const [sq5, setSq5] = useState("");
  //   const [sq6, setSq6] = useState("");
  //   const [sq7, setSq7] = useState("");
  //   const [sq8, setSq8] = useState("");
  //   const [sq9, setSq9] = useState("");

  //   const[symbol, setSymbol] = useState("X");

  //   const handleToeClick = (e)=>{
  //         if(e.target.value === ""){
  //              setSq1(symbol);
  //             if(symbol==="X")
  //                 setSymbol("O");
  //             else
  //                 setSymbol("X");
  //         }

  //   };

  const winPatterns = [
    [0, 1, 2], // row 1
    [3, 4, 5], // row 2
    [6, 7, 8], // row 3
    [0, 3, 6], // col 1
    [1, 4, 7], // col 2
    [2, 5, 8], // col 3
    [0, 4, 8], // diagonal
    [2, 4, 6], // diagonal
  ];

  const [squares, setSquares] = useState(Array(9).fill(""));
  const [symbol, setSymbol] = useState("X");
  const [winner, setWinner] = useState("");

  const handleToeClick = (index) => {
    if (squares[index] !== "") return;

    const newSquares = [...squares];
    newSquares[index] = symbol;
    setSquares(newSquares);

    setSymbol(symbol === "X" ? "O" : "X");
    
    // console.log(squares);
    // console.log(newSquares);
    
    checkWinner(newSquares);
  };

  const handleResetBtnClick = () => {
    setSquares(Array(9).fill(""));
    setWinner("");
  };

  const checkWinner = (squares) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
       setWinner(squares[a]) ; // "X" or "O"

      }
    }
    return null;
  };

  return (
    <div className="main">
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <div className="game-board">
          <button
            className="square"
            value={squares[0]}
            onClick={() => handleToeClick(0)}
            disabled={winner !== ""}
          >
            {squares[0]}
          </button>
          <button
            className="square"
            value={squares[1]}
            onClick={() => handleToeClick(1)}
            disabled={winner !== ""}
          >
            {squares[1]}
          </button>
          <button
            className="square"
            value={squares[2]}
            onClick={() => handleToeClick(2)}
            disabled={winner !== ""}
          >
            {squares[2]}
          </button>

          <button
            className="square"
            value={squares[3]}
            onClick={() => handleToeClick(3)}
            disabled={winner !== ""}
          >
            {squares[3]}
          </button>
          <button
            className="square"
            value={squares[4]}
            onClick={() => handleToeClick(4)}
            disabled={winner !== ""}
          >
            {squares[4]}
          </button>
          <button
            className="square"
            value={squares[5]}
            onClick={() => handleToeClick(5)}
            disabled={winner !== ""}
          >
            {squares[5]}
          </button>

          <button
            className="square"
            value={squares[6]}
            onClick={() => handleToeClick(6)}
            disabled={winner !== ""}
          >
            {squares[6]}
          </button>
          <button
            className="square"
            value={squares[7]}
            onClick={() => handleToeClick(7)}
            disabled={winner !== ""}
          >
            {squares[7]}
          </button>
          <button
            className="square"
            value={squares[8]}
            onClick={() => handleToeClick(8)}
            disabled={winner !== ""}
          >
            {squares[8]}
          </button>
        </div>
        
        <div className="result">
            {winner && <p className="blink winner-text">Player "{winner}" is the Winner 💪 <span className="trophy">🏆</span> </p>}
            {!squares.includes("") && !winner && <p className="blink winner-text">💪Its a {winner} Draw💪  </p>}
        </div>

        <button className="reset-btn" onClick={handleResetBtnClick}>
          Reset Game
        </button>
      </div>

      <div className="copyright">
        Developed by
        <br /> KGM💖
      </div>
    </div>
  );
}
