import React, { useState } from 'react'
import './TicTacToe.css'
import Board from './Board'
import Hero from './Hero'
import Footer from './Footer'
import ResetButton from './ResetButton'

const TicTacToe = () => {

  const initialGameBoard = Array(3).fill().map(() => Array(3).fill(null));

  const [gameBoard, setGameBoard] = useState(initialGameBoard)
  const [item, setItem] = useState('x')
  const [boardKey, setBoardKey] = useState(0);

  const verifyWin = () => {

    let board = gameBoard;
    
    for(let i = 0; i < 3; i++) {
      // verify rows
      if (board[i].every(cell => cell === board[i][0] && cell !== null)) {
        return { 'icon': board[i][0], 'cells': [[i, 0], [i, 1], [i, 2]] };
      }

      // verify cols
      if (board.every(row => row[i] === board[0][i] && row[i] !== null)) {
        return { 'icon': board[0][i], 'cells': [[0, i], [1, i], [2, i]] };
      }

    }
    // verify diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== null) {
      return { 'icon': board[0][0], 'cells': [[0, 0], [1, 1], [2, 2]] };
    }

    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== null) {
      return { 'icon': board[0][2], 'cells': [[0, 2], [1, 1], [2, 0]] };
    }

    return null;
  }

  const updateBoard = (row, col) => {
      if(!gameBoard[row][col]) {
          const newBoard = [...gameBoard]
          newBoard[row][col] = item === 'x' ? 'x' : 'o'
          setGameBoard(newBoard)
          setItem(item === 'x' ? 'o' : 'x')
          console.log(verifyWin())
      }
  }

  const resetBoard = () => {
    setGameBoard(initialGameBoard)
    setItem('x')
    setBoardKey(prevKey => prevKey + 1);
  }
  
  return (
    <div className='container'>
      <Hero item={item} />
      <Board key={boardKey} board={ gameBoard } updateBoard={ updateBoard } item={ item } verifyWin={ verifyWin }/>
      <ResetButton reset={resetBoard}/>
      <Footer />
    </div>
  )
}

export default TicTacToe