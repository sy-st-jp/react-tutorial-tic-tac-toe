import type { FC } from "react";

export const Board: FC = () => (
	<>
		<div className="board-row">
			<button className="square" type="button">
				1
			</button>
			<button className="square" type="button">
				2
			</button>
			<button className="square" type="button">
				3
			</button>
		</div>
		<div className="board-row">
			<button className="square" type="button">
				4
			</button>
			<button className="square" type="button">
				5
			</button>
			<button className="square" type="button">
				6
			</button>
		</div>
		<div className="board-row">
			<button className="square" type="button">
				7
			</button>
			<button className="square" type="button">
				8
			</button>
			<button className="square" type="button">
				9
			</button>
		</div>
	</>
);
