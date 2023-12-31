import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';

function Cell({ rowIndex, columnIndex, updateBoard, item, verifyWin }) {
    const [lock, setLock] = useState(false);
    const [icon, setIcon] = useState(null);
    const [winnerCells, setWinnerCells] = useState(null);

    useEffect(() => {
        const winnerInfo = verifyWin();
        if (winnerInfo) {
            const winningCells = winnerInfo.cells;
            const isWinnerCell = winningCells.some(cell => cell[0] === rowIndex && cell[1] === columnIndex);
            setWinnerCells(isWinnerCell);
        }
    }, [verifyWin, rowIndex, columnIndex]);

    const toggle = () => {
        if (!lock && verifyWin() === null) {
            setIcon(item === 'x' ? faXmark : faCircle);
            updateBoard(rowIndex, columnIndex);
            setLock(true);
        }
    };

    return (
        <div className={`cell ${winnerCells ? `winner-cell-${icon === faXmark ? 'cross' : 'circle'}` : ''}`} onClick={toggle}>
            {
                lock ? <FontAwesomeIcon icon={icon} className={icon === faXmark ? 'cross_icon' : 'circle_icon'} /> : undefined
            }
        </div>
    )
}

export default Cell;