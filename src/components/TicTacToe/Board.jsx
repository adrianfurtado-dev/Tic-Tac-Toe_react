import React from 'react'
import Cell from './Cell'

const Board = ({ board, updateBoard, item, verifyWin }) => {
    return (
        <div className='board'>
            {
                board.map((row, rowIndex) => (
                    <div key={rowIndex} className='row'>
                        {
                            row.map((_, columnIndex) => (
                                <Cell key={columnIndex} rowIndex={rowIndex} columnIndex={columnIndex} updateBoard={updateBoard} item={item} verifyWin={verifyWin} />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Board