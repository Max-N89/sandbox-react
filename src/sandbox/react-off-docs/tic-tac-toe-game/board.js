import React from "react";

import {Square} from "./square";

function Board(props) {
    const {
        squares,
        currentStepSquareIndex,
        winningSquaresIndexes,
        onSquareClick,
    } = props;

    const boardContent = [];

    for (let i = 0; i < squares.length; i+=3){
        const boardRowContent = [];

        for (let j = i; j < i + 3; j++){
            boardRowContent.push(
                <Square
                    key={j}
                    current={j === currentStepSquareIndex}
                    winning={winningSquaresIndexes?.includes(j)}
                    value={squares[j]}
                    onClick={() => onSquareClick(j)}
                />
            );
        }

        boardContent.push(
            <div key={i} className="board-row">
                {boardRowContent}
            </div>
        );
    }

    return (
        <div className="board">
            {boardContent}
        </div>
    );
}

export {Board};
