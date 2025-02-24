import type { FC } from "react";
import { useGame } from "../../hooks/useGame.tsx";
import { Board } from "../Board";

export const Game: FC = () => {
	const { currentSquareValues, handlePlay, isXTurn, moves, winner } = useGame();
	return (
		<div className="game">
			<div className="game-board">
				<Board
					isXTurn={isXTurn}
					squareValues={currentSquareValues}
					onPlay={handlePlay}
					winner={winner}
				/>
			</div>
			<div className="game-info">
				<ol>{moves}</ol>
			</div>
		</div>
	);
};
