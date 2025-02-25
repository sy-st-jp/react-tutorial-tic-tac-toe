import type { FC } from "react";
import type { SquareIndex } from "../../types/SquareIndex";
import type { SquareValue } from "../../types/SquareValue";
import { Square } from "../Square";
import { isSquareIndex } from "./modules/isSquareIndex";

type Props = {
	isXTurn: boolean;
	squareValues: SquareValue[];
	onPlay: (nextSquare: SquareValue[]) => void;
	winner: SquareValue;
};

export const Board: FC<Props> = (props) => {
	const { isXTurn, squareValues, onPlay, winner } = props;

	const handleClick = (index: SquareIndex) => () => {
		if (squareValues[index] || winner) return;
		const newValue: Exclude<SquareValue, null> = isXTurn ? "X" : "O";
		const nextSquareValues = squareValues.map((value, i) => (i === index ? newValue : value));
		onPlay(nextSquareValues);
	};

	const currentPlayer: Exclude<SquareValue, null> = isXTurn ? "X" : "O";
	const statusText = winner ? `Winner: ${winner}` : `Current player: ${currentPlayer}`;

	return (
		<>
			<div className="status">{statusText}</div>
			<div className="board">
				{Array.from({ length: 9 }).map((_, i) => {
					if (!isSquareIndex(i)) throw new Error("Invalid square index");
					// biome-ignore lint/suspicious/noArrayIndexKey: 盤面は固定であるため index を key として使用
					return <Square key={i} value={squareValues[i]} onClick={handleClick(i)} />;
				})}
			</div>
		</>
	);
};
