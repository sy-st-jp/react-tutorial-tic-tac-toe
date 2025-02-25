import type { FC } from "react";
import { useGame } from "../../hooks/useGame";
import { Board } from "./components/Board";
import { HistoryList } from "./components/HistoryList";

export const Game: FC = () => {
	const { currentSquareValues, history, handleHistory, handleClickSquare, statusText } = useGame();
	return (
		<div className="game">
			<p className="status">{statusText}</p>
			<Board squareValues={currentSquareValues} handleClickSquare={handleClickSquare} />
			<HistoryList history={history} handleHistory={handleHistory} />
		</div>
	);
};
