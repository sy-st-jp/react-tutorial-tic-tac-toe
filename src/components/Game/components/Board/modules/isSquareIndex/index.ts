import type { SquareIndex } from "../../../../../../types/SquareIndex";

export const isSquareIndex = (index: number): index is SquareIndex => {
	return index >= 0 && index < 9 && Number.isInteger(index);
};
