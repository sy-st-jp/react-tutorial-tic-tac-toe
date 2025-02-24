import type { FC } from "react";
import { Square } from "../Square/Square.tsx";

export const Board: FC = () => (
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
