import type { FC } from "react";
import type { SquareValue } from "../../types/SquareValue";

type Props = {
	value: SquareValue;
};

export const Square: FC<Props> = (props) => {
	const { value } = props;
	return (
		<button className="square" type="button">
			{value}
		</button>
	);
};
