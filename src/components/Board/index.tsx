import { type FC, useState } from "react";
import type { SquareValue } from "../../types/SquareValue";
import { Square } from "../Square";

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
