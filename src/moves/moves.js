import { INVALID_MOVE } from 'boardgame.io/core';

export const clickCell = (G,ctx,id) => {
	if (G.cells[id] !== null) {
		return INVALID_MOVE;
	}
	G.cells[id] = ctx.currentPlayer;
}


export const checkRows = (data) => {
	if(data.length > 0) {
		for (let i = 0; i < 10; i++) {
			let countSampleCode = 0;
			for (let j = 0; j < 10; j++) {
				const id = 10 * i + j;
				if(data[id] !==null && data[id] === data[id+1]){
					
					if(countSampleCode === 0) {
						countSampleCode += 2;
					} else {
						countSampleCode += 1;
					}
				} else {
					countSampleCode = 0;
				}
				if(countSampleCode === 5) {
					return true;
				};
				}
			}
	}
	return false;
}

export const checkCols = (data) => {
	if(data.length > 0) {
		for (let i = 0; i < 10; i++) {
			let countSampleCode = 0;
			for (let j = 0; j < 10; j++) {
				const id = (j * 10) + i;
				if(data[id] !==null && data[id] === data[id+10]){	
					if(countSampleCode === 0) {
						countSampleCode += 2;
					} else {
						countSampleCode += 1;
					}
				} else {
					countSampleCode = 0;
				}
				if(countSampleCode === 5) {
					return true;
				};
				
				}
			}
	}
	return false;
}

export const checkDiags = (data) => {
	if(data.length > 0) {
		for (let i = 0; i < 10; i++) {
			let countSampleCode = 0;
			for (let j = 0; j < 10; j++) {
				const id = i + (j * 11);
				if(data[id] !==null &&  data[id] === data[id+11]){
					if(countSampleCode === 0) {
						countSampleCode += 2;
					} else {
						countSampleCode += 1;
					}
				} else {
					countSampleCode += 0;
				}
				if(countSampleCode === 5) {
					return true;
				};
				}
			}
		}
	return false;
}

export default {
	clickCell,checkRows,checkDiags
}