import type { FC } from "react";
import { Board } from "../Board";

export const Game: FC = () => {
	return (
		<div className="game">
			<div className="game-board">
				<Board />
			</div>
			<div className="game-info">
				<ol>{/* TODO */}</ol>
			</div>
		</div>
	);
};
