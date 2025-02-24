import { type FC, useState } from "react";
import type { SquareValue } from "../../types/SquareValue";

export const Square: FC = () => {
	const [value, setValue] = useState<SquareValue>(null);

	const handleClick = () => {
		setValue("X");
	};

	return (
		<button className="square" type="button" onClick={handleClick}>
			{value}
		</button>
	);
};
