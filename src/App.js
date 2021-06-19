import React from 'react';
import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import { TicTacToe } from './Game/Game';
import { TicTacToeBoard } from './Game/Board';

const TicTacToeClient = Client({
  game: TicTacToe,
  numPlayers: 2,
  board: TicTacToeBoard,
  multiplayer: SocketIO({ server: 'localhost:8000' }),
  // ai:{
  //   enumerate: (G, ctx) => {
  //     let moves = [];
  //     for (let i = 0; i < 100; i++) {
  //       if (G.cells[i] === null) {
  //         moves.push({ move: 'clickCell', args: [i] });
  //       }
  //     }
  //     return moves;
  //   },
  // },
});

const App = () => (
  <div>
    <TicTacToeClient playerID="0" />
    <TicTacToeClient playerID="1" />
  </div>
);

export default App;