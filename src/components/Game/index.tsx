import { type FC, useState } from "react";
import type { SquareValue } from "../../types/SquareValue";
import { Board } from "../Board";
import { calculateWinner } from "../Board/modules/calculateWinner";

const initialSquareValues = Array<SquareValue>(9).fill(null);

export const Game: FC = () => {
	const [history, setHistory] = useState<SquareValue[][]>([initialSquareValues]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const isXTurn = history.length % 2 === 0;
	const currentSquareValues = history[currentIndex];
	const winner = calculateWinner(currentSquareValues);

	const handlePlay = (nextSquareValues: SquareValue[]) => {
		const nextHistory = [...history.slice(0, currentIndex + 1), nextSquareValues];
		setHistory(nextHistory);
		setCurrentIndex(nextHistory.length - 1);
	};

	const handleHistory = (index: number) => () => {
		setCurrentIndex(index);
	};

	const moves = history.map((_, index) => {
		return (
			// biome-ignore lint/suspicious/noArrayIndexKey: 履歴の index は常に一意であるため key として使用
			<li key={index}>
				<button onClick={handleHistory(index)} type="button">
					{index ? `Go to move #${index}` : "Go to game start"}
				</button>
			</li>
		);
	});

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
				<ol>{moves}</ol>
			</div>
		</div>
	);
};
