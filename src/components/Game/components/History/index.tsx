import type { FC } from "react";
import type { SquareValue } from "../../../../types/SquareValue";
import { HistoryItem } from "./components/HistoryItem";

type Props = {
	history: SquareValue[][];
	handleHistory: (index: number) => () => void;
};

export const History: FC<Props> = (props) => {
	const { history, handleHistory } = props;
	return (
		<ol>
			{history.map((_, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: 履歴の index は常に一意であるため key として使用
				<HistoryItem key={index} index={index} handleHistory={handleHistory} />
			))}
		</ol>
	);
};
