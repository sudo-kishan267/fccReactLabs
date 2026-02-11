const { useState } = React;

export function Board() {
  const winPatterns = [
    [0, 1, 2], // row
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // col
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonal
    [2, 4, 6],
  ];

  const [squares, setSquares] = useState(Array(9).fill(""));
  const [symbol, setSymbol] = useState("X");
  const [winner, setWinner] = useState("");

  const handleToeClick = (index) => {
    if (!winner && !squares.includes("")) return;
    if (winner) return;
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
    setSymbol("X");
  };

  const checkWinner = (squares) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner(squares[a]);
        return; // "X" or "O"
      }
    }
    return null;
  };

  return (
    <div className="main">
      <div className="container">
        <h1>Tic Tac Toe</h1>
        
        <div className="game-board">
          
          // This is the react way !!! Ha ha
          
          {squares.map((value, index) => (
            <button
              key={index}
              className="square"
              value={value}
              onClick={() => handleToeClick(index)}
            >
              {value}
            </button>
          ))}
        </div>

        {/* <div className="game-board">
          <button
            className="square"
            value={squares[0]}
            onClick={() => handleToeClick(0)}
          >
            {squares[0]}
          </button>
          <button
            className="square"
            value={squares[1]}
            onClick={() => handleToeClick(1)}
          >
            {squares[1]}
          </button>
          <button
            className="square"
            value={squares[2]}
            onClick={() => handleToeClick(2)}
          >
            {squares[2]}
          </button>

          <button
            className="square"
            value={squares[3]}
            onClick={() => handleToeClick(3)}
          >
            {squares[3]}
          </button>
          <button
            className="square"
            value={squares[4]}
            onClick={() => handleToeClick(4)}
          >
            {squares[4]}
          </button>
          <button
            className="square"
            value={squares[5]}
            onClick={() => handleToeClick(5)}
          >
            {squares[5]}
          </button>

          <button
            className="square"
            value={squares[6]}
            onClick={() => handleToeClick(6)}
          >
            {squares[6]}
          </button>
          <button
            className="square"
            value={squares[7]}
            onClick={() => handleToeClick(7)}
          >
            {squares[7]}
          </button>
          <button
            className="square"
            value={squares[8]}
            onClick={() => handleToeClick(8)}
          >
            {squares[8]}
          </button>
        </div> */}

        <div className="result">
          {winner && (
            <p className="blink winner-text">
              Winner is: {winner} 💪
              <span className="trophy">🏆</span>
            </p>
          )}
          {!squares.includes("") && !winner && (
            <p className="blink winner-text">💪Its a Draw💪</p>
          )}
        </div>

        <button className="reset-btn" id="reset" onClick={handleResetBtnClick}>
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
