import React, {Component} from "react";

import "./tic-tac-toe-game.css";

import {getWinningSquaresIndexes} from "./supplements/get-winning-squares-indexes";

import {Board} from "./board";

class TicTacToeGame extends Component{
    constructor(props) {
        super(props);

        this.state = {
            history: [{
                squares: Array(9).fill(null),
                moveAt: null,
            }],
            currentStepIndex: 0,
            xIsNext: true,
            reverseMovesOrder: false,
        };

        this.jumpToStep = this.jumpToStep.bind(this);
        this.handleSquareClick = this.handleSquareClick.bind(this);
        this.handleReverseMovesOrder = this.handleReverseMovesOrder.bind(this);
    }

    jumpToStep(stepIndex) {
        this.setState({
            currentStepIndex: stepIndex,
            xIsNext: (stepIndex % 2) === 0,
        });
    }

    handleSquareClick(squareIndex) {
        const remainingHistory = this.state.history.slice(0, this.state.currentStepIndex + 1);
        const lastStep = remainingHistory[remainingHistory.length - 1];

        if (getWinningSquaresIndexes(lastStep.squares) || lastStep.squares[squareIndex]) {
            return;
        }

        const nextSquares = [...lastStep.squares];

        nextSquares[squareIndex] = this.state.xIsNext ? 'X' : 'O';

        this.setState(prevState => ({
            history: [...remainingHistory, {squares: nextSquares, moveAt: squareIndex}],
            currentStepIndex: remainingHistory.length,
            xIsNext: !prevState.xIsNext,
        }));
    }

    handleReverseMovesOrder() {
        this.setState(prevState => ({
            reverseMovesOrder: !prevState.reverseMovesOrder
        }));
    }

    render() {
        const {history, currentStepIndex, xIsNext, reverseMovesOrder} = this.state;
        const currentStep = history[currentStepIndex];
        const winningSquaresIndexes = getWinningSquaresIndexes(currentStep.squares);
        const moves = history.map((step, stepIndex) => {
            const moveAtRow = Math.floor(step.moveAt / 3) + 1;
            const moveAtCol = (step.moveAt % 3) + 1;

            const desc = stepIndex ?
                `Go to move #${stepIndex} (${(stepIndex % 2) === 0 ? "O" : "X"} at row: ${moveAtRow}, col: ${moveAtCol})` :
                'Go to game start';

            return (
                <li key={stepIndex}>
                    <button
                        className={currentStepIndex === stepIndex? "highlighted-green" : ""}
                        onClick={() => this.jumpToStep(stepIndex)}
                    >
                        {desc}
                    </button>
                </li>
            );
        });

        if (reverseMovesOrder) moves.reverse();

        let status;

        if (winningSquaresIndexes) {
            status = "Winner: " + currentStep.squares[winningSquaresIndexes[0]];
        } else if (currentStepIndex === 9) {
            status = "Result is draw";
        } else {
            status = "Next player: " + (xIsNext ? "X" : "O");
        }

        return (
            <div className="tic-tac-toe-game">
                <Board
                    squares={currentStep.squares}
                    currentStepSquareIndex={currentStep.moveAt}
                    winningSquaresIndexes={winningSquaresIndexes}
                    onSquareClick={this.handleSquareClick}
                />
                <div className="game-info">
                    <div>
                        {status}
                    </div>
                    <button onClick={this.handleReverseMovesOrder}>Reverse moves display order</button>
                    <ol reversed={reverseMovesOrder}>
                        {moves}
                    </ol>
                </div>
            </div>
        );
    }
}

export {TicTacToeGame};
