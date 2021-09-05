import React, {Component} from "react";

import "./tic-tac-toe-game.css";

import {calculateWinner} from "./supplements/calculate-winner";

import {Board} from "./board";

class TicTacToeGame extends Component{
    constructor(props) {
        super(props);

        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };

        this.jumpTo = this.jumpTo.bind(this);
        this.handleSquareClick = this.handleSquareClick.bind(this);
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    handleSquareClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = [...current.squares];

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState(prevState => ({
            history: [...history, {squares}],
            stepNumber: history.length,
            xIsNext: !prevState.xIsNext,
        }));
    }

    render() {
        const {history, xIsNext} = this.state;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;

        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (xIsNext ? 'X' : 'O');
        }

        return (
            <div className="tic-tac-toe-game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        xIsNext={xIsNext}
                        onSquareClick={this.handleSquareClick}
                    />
                </div>
                <div className="game-info">
                    <div>
                        {status}
                    </div>
                    <ol>
                        {moves}
                    </ol>
                </div>
            </div>
        );
    }
}

export {TicTacToeGame};
