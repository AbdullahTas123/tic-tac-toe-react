import React, { useState } from 'react';
import "./TicTacToe.css";

const TicTacToe = () => {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");

  const checkWinner = (squares) => {
    const winCondition = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let i = 0; i < winCondition.length; i++){
      console.log(winCondition[i]);
      if (squares[winCondition[i][0]] === "" || squares[winCondition[i][1]] === "" || squares[winCondition[i][2]] === "") {
      }
      else if (squares[winCondition[i][0]] === squares[winCondition[i][1]] && squares[winCondition[i][0]] === squares[winCondition[i][2]]){
        setWinner(squares[winCondition[i][0]]);
      }
    }
  }
  
  const handleClick = (num) => {
    if (cells[num] !== "" || winner){
      return;
    }

    let squares = [...cells];
    
    if (turn === "X") {
      squares[num] = "X";
      setTurn("O");
    } else {
      squares[num] = "O";
      setTurn("X");
    }

    checkWinner(squares);
    setCells(squares);
    //console.log(squares);
    
  }

  const handleRestart = () => {
    setCells(Array(9).fill(""));
    setWinner("");
  }

  // Cell COMPONENT
  const Cell = ({num}) => {
    return (
      <div className='square' onClick={() => handleClick(num)}>
        {cells[num]} 
      </div>
    )
  }

  return (
    <div className='tictactoe'>
      <h1 className='tictactoe-header'>Tic Tac Toe</h1>
      <table className='tictactoe-table'>
        {/* <caption>{"The Winner: " + winner}</caption> */}
        <tbody>
          <tr>
            <th> <Cell num={0} /> </th>
            <th> <Cell num={1} /> </th>
            <th> <Cell num={2} /> </th>
          </tr>
          <tr>
            <th> <Cell num={3} /> </th>
            <th> <Cell num={4} /> </th>
            <th> <Cell num={5} /> </th>
          </tr>
          <tr>
            <th> <Cell num={6} /> </th>
            <th> <Cell num={7} /> </th>
            <th> <Cell num={8} /> </th>
          </tr>
        </tbody>
      </table>
      { (() => {
        if (winner) {
          return(
            <div className='winner-section'>
              <p>{"The Winner: " + winner}</p>
              <button onClick={() => handleRestart()}>Play Again</button>
            </div>
          ); 
        }
      })()}
    </div>
  );
}

export default TicTacToe;

