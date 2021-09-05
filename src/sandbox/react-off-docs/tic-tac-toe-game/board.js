import React, {Component} from "react";

import {calculateWinner} from "./supplements/calculate-winner";

import {Square} from "./square";

class Board extends Component{
    renderSquare(i) {
        const {
            squares,
            onSquareClick
        } = this.props;

        return (
            <Square
                value={squares[i]}
                onClick={() => onSquareClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export {Board};
