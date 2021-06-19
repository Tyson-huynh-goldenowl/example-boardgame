export const IsVictory = (cells) => {
  // const positions = [
  //   [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
  //   [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  // ];

  // const isRowComplete = row => {
  //   const symbols = row.map(i => cells[i]);
	// 	console.log('symbols===>',symbols)
  //   return symbols.every(i => i !== null && i === symbols[0]);
  // };

  // return positions.map(isRowComplete).some(i => i === true);
}

// Return true if all `cells` are occupied.
export const IsDraw = (cells) => {
  return cells.filter(c => c === null).length === 0;
}

export const checkRows = (data) => {
	for (let i = 0; i < 10; i++) {
		let countSampleCode = 0;
		for (let j = 0; j < 10; j++) {
			const id = 10 * i + j;
			if(data[id] === data[id+1]){
				if(countSampleCode === 0) {
					countSampleCode += 2;
				} else {
					countSampleCode += 1;
				}
			}
			if(countSampleCode === 5) return true;
			break;
			}
		}
		return false;
}

export default {
	IsVictory,
	IsDraw
}