import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import IconX from '../x.svg';
import IconO from '../o.svg';

import './styles.css';

const TicTacToeBoard = ({...props}) => {
  console.log('1233232323', props);
  const [haveWin,setWinner] = useState(true);

  const onClick = (id) => {
    props.moves.clickCell(id);
  }

  const renderBoardGame = () => {
    const {G} = props;
    let winner = '';

    if (props.ctx.gameover) {
       return  props.ctx.gameover.winner !== undefined ? (
          <Modal
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={haveWin}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal Result
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Winner!!!!!!</h4>
            {props.ctx.gameover.winner}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => {
              setWinner(false);
              props.reset()
            }}>Close</Button>
          </Modal.Footer>
        </Modal>
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
          <td style={cellStyle} key={id} onClick={() => onClick(id)}>
            {!!G.cells[id] && <img src={G.cells[id] === '0' ? IconO : IconX}  alt="icon-check" />}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <div className="game-caro">
        <div className="header">Cờ Caro</div>
        <table id="board" className="board-game">
          <tbody>{tbody}</tbody>
        </table>
      </div>
    );
  }

  return(
    renderBoardGame()
  )
}
export default TicTacToeBoard;