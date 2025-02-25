import type { FC } from "react";
import type { SquareIndex } from "../../../../types/SquareIndex";
import type { SquareValue } from "../../../../types/SquareValue";
import { Square } from "./components/Square";
import { isSquareIndex } from "./modules/isSquareIndex";

type Props = {
	squareValues: SquareValue[];
	handleClickSquare: (index: SquareIndex) => () => void;
};

export const Board: FC<Props> = (props) => {
	const { squareValues, handleClickSquare } = props;
	return (
		<>
			<div className="board">
				{Array.from({ length: 9 }).map((_, i) => {
					if (!isSquareIndex(i)) throw new Error("Invalid square index");
					// biome-ignore lint/suspicious/noArrayIndexKey: 盤面は固定であるため index を key として使用
					return <Square key={i} value={squareValues[i]} onClick={handleClickSquare(i)} />;
				})}
			</div>
		</>
	);
};
