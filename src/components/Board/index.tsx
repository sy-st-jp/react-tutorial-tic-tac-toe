import { type FC, useState } from "react";
import type { SquareIndex } from "../../types/SquareIndex";
import type { SquareValue } from "../../types/SquareValue";
import { Square } from "../Square";

const initialSquareValues = Array<SquareValue>(9).fill(null);

export const Board: FC = () => {
	const [isXTurn, setIsXTurn] = useState<boolean>(true);
	const [squareValues, setSquareValues] = useState<SquareValue[]>(initialSquareValues);

	const handleClick = (index: SquareIndex) => () => {
		if (squareValues[index]) return;
		const newValue: Exclude<SquareValue, null> = isXTurn ? "X" : "O";
		const nextSquareValues = squareValues.map((value, i) => (i === index ? newValue : value));
		setSquareValues(nextSquareValues);
		setIsXTurn(!isXTurn);
	};

	return (
		<>
			<div className="board-row">
				<Square value={squareValues[0]} onClick={handleClick(0)} />
				<Square value={squareValues[1]} onClick={handleClick(1)} />
				<Square value={squareValues[2]} onClick={handleClick(2)} />
			</div>
			<div className="board-row">
				<Square value={squareValues[3]} onClick={handleClick(3)} />
				<Square value={squareValues[4]} onClick={handleClick(4)} />
				<Square value={squareValues[5]} onClick={handleClick(5)} />
			</div>
			<div className="board-row">
				<Square value={squareValues[6]} onClick={handleClick(6)} />
				<Square value={squareValues[7]} onClick={handleClick(7)} />
				<Square value={squareValues[8]} onClick={handleClick(8)} />
			</div>
		</>
	);
};
