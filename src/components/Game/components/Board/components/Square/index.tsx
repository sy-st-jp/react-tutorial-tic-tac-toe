import type { FC } from "react";
import type { EmptyFunction } from "../../../../../../types/EmptyFunction";
import type { SquareValue } from "../../../../../../types/SquareValue";

type Props = {
	value: SquareValue;
	onClick: EmptyFunction;
};

export const Square: FC<Props> = (props) => {
	const { value, onClick } = props;
	return (
		<button className="square" type="button" onClick={onClick}>
			{value}
		</button>
	);
};
