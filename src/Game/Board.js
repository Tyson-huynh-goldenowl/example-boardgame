import React from 'react';
import IconX from '../x.svg';
import IconO from '../o.svg';

import './styles.css';

export class TicTacToeBoard extends React.Component {
  onClick(id) {
    this.props.moves.clickCell(id);
  }

  render() {
		const {G} = this.props;
    let winner = '';
    if (this.props.ctx.gameover) {
      winner =
        this.props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }

    const cellStyle = {
      border: '1px solid #555',
      width: '50px',
      height: '50px',
      lineHeight: '50px',
      textAlign: 'center',
    };

    let tbody = [];
    for (let i = 0; i < 10; i++) {
      let cells = [];
      for (let j = 0; j < 10; j++) {
        const id = 10 * i + j;
        cells.push(
          <td style={cellStyle} key={id} onClick={() => this.onClick(id)}>
            {/* {G.cells[id]} */}
						{!!G.cells[id] && <img src={G.cells[id] === '0' ? IconO : IconX}  alt="icon-check" />}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <div className="game-caro">
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
        {winner}
      </div>
    );
  }
}