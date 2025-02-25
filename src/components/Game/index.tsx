import type { FC } from "react";
import { useGame } from "../../hooks/useGame";
import { Board } from "./components/Board";

export const Game: FC = () => {
	const { currentSquareValues, history, handleHistory, handleClickSquare, statusText } = useGame();
	return (
		<div className="game">
			<p className="status">{statusText}</p>
			<Board squareValues={currentSquareValues} handleClickSquare={handleClickSquare} />
			<div className="game-info">
				<ol>
					{history.map((_, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: 履歴の index は常に一意であるため key として使用
						<li key={index}>
							<button onClick={handleHistory(index)} type="button">
								{index ? `Go to move #${index}` : "Go to game start"}
							</button>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};
