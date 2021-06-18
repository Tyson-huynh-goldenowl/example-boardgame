import { INVALID_MOVE } from 'boardgame.io/core';

export const clickCell = (G,ctx,id) => {
	if (G.cells[id] !== null) {
		return INVALID_MOVE;
	}
	G.cells[id] = ctx.currentPlayer;
}

export default {
	clickCell
}