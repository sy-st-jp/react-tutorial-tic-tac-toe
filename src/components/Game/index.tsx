import { type FC, useState } from "react";
import type { SquareValue } from "../../types/SquareValue";
import { Board } from "../Board";
import { calculateWinner } from "../Board/modules/calculateWinner";

const initialSquareValues = Array<SquareValue>(9).fill(null);

export const Game: FC = () => {
	const [history, setHistory] = useState<SquareValue[][]>([initialSquareValues]);
	const [winner, setWinner] = useState<SquareValue>(null);

	const isXTurn = history.length % 2 === 0;
	const currentSquareValues = history[history.length - 1];

	const handlePlay = (nextSquareValues: SquareValue[]) => {
		setHistory([...history, nextSquareValues]);
		setWinner(calculateWinner(nextSquareValues));
	};

	return (
		<div className="game">
			<div className="game-board">
				<Board
					isXTurn={isXTurn}
					squareValues={currentSquareValues}
					onPlay={handlePlay}
					winner={winner}
				/>
			</div>
			<div className="game-info">
				<ol>{/* TODO */}</ol>
			</div>
		</div>
	);
};
