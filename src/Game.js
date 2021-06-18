
import {clickCell,checkRows,checkCols,checkDiags} from './moves';
import {IsVictory,IsDraw, } from './helper';

export const TicTacToe = {
  setup: () => ({ cells: Array(100).fill(null) }),
	turn: {
    moveLimit: 1,
  },
  moves: {
    clickCell,
  },
	endIf: (G, ctx) => {
    if (checkRows(G.cells) || checkCols(G.cells) || checkDiags(G.cells)) {
      return { winner: ctx.currentPlayer };
    }
    if (IsDraw(G.cells)) {
      return { draw: true };
    }
  },
	ai: {
    enumerate: (G, ctx) => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: 'clickCell', args: [i] });
        }
      }
      return moves;
    },
	}
};