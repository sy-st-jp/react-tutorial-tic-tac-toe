import type { FC } from "react";
import { useGame } from "../../hooks/useGame.tsx";
import { Board } from "./components/Board";

export const Game: FC = () => {
	const { currentSquareValues, moves, handleClickSquare, statusText } = useGame();
	return (
		<div className="game">
			<div className="game-board">
				<Board
					squareValues={currentSquareValues}
					statusText={statusText}
					handleClickSquare={handleClickSquare}
				/>
			</div>
			<div className="game-info">
				<ol>{moves}</ol>
			</div>
		</div>
	);
};
