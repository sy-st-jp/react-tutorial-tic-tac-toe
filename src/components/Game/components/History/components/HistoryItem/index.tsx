import type { FC } from "react";

type Props = {
	index: number;
	handleHistory: (index: number) => () => void;
};

export const HistoryItem: FC<Props> = (props) => {
	const { index, handleHistory } = props;
	return (
		<li>
			<button onClick={handleHistory(index)} type="button">
				{index ? `Go to move #${index}` : "Go to game start"}
			</button>
		</li>
	);
};
