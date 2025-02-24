import { type FC, useState } from "react";
import type { SquareValue } from "../../types/SquareValue";
import { Square } from "../Square";

const initialSquareValues = Array<SquareValue>(9).fill(null);

export const Board: FC = () => {
	const [squareValues, setSquareValues] = useState<SquareValue[]>(initialSquareValues);

	const handleClick = (index: number) => () => {
		const nextSquareValues = squareValues.map((value, i) => (i === index ? "X" : value));
		setSquareValues(nextSquareValues);
	};

	return (
		<>
			<div className="board-row">
				<Square value={squareValues[0]} />
				<Square value={squareValues[1]} />
				<Square value={squareValues[2]} />
			</div>
			<div className="board-row">
				<Square value={squareValues[3]} />
				<Square value={squareValues[4]} />
				<Square value={squareValues[5]} />
			</div>
			<div className="board-row">
				<Square value={squareValues[6]} />
				<Square value={squareValues[7]} />
				<Square value={squareValues[8]} />
			</div>
		</>
	);
};
