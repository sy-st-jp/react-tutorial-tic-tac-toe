import { type FC, useState } from "react";
import { Square } from "../Square";

type SquareValue = string | null;

const initialSquareValues = Array<SquareValue>(9).fill(null);

export const Board: FC = () => {
	const [squareValues, setSquareValues] = useState<SquareValue[]>(initialSquareValues);
	return (
		<>
			<div className="board-row">
				<Square />
				<Square />
				<Square />
			</div>
			<div className="board-row">
				<Square />
				<Square />
				<Square />
			</div>
			<div className="board-row">
				<Square />
				<Square />
				<Square />
			</div>
		</>
	);
};
