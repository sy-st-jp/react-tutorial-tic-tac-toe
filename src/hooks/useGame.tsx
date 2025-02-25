import { useState } from "react";
import { calculateWinner } from "../components/Game/components/Board/modules/calculateWinner";
import type { SquareIndex } from "../types/SquareIndex";
import type { SquareValue } from "../types/SquareValue";

const initialSquareValues = Array<SquareValue>(9).fill(null);

export const useGame = () => {
	const [history, setHistory] = useState<SquareValue[][]>([initialSquareValues]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const isXTurn = currentIndex % 2 === 0;
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

	const handleClickSquare = (index: SquareIndex) => () => {
		if (currentSquareValues[index] || winner) return;
		const newValue: Exclude<SquareValue, null> = isXTurn ? "X" : "O";
		const nextSquareValues = currentSquareValues.map((value, i) =>
			i === index ? newValue : value,
		);
		handlePlay(nextSquareValues);
	};

	const currentPlayer: Exclude<SquareValue, null> = isXTurn ? "X" : "O";
	const statusText = winner ? `Winner: ${winner}` : `Current player: ${currentPlayer}`;

	return {
		handlePlay,
		isXTurn,
		currentSquareValues,
		winner,
		moves,
		handleClickSquare,
		statusText,
	};
};
