const { Server } = require('boardgame.io/server');
const { TicTacToe } = require('../Game/Game');

const server = Server({ games: [TicTacToe] });

server.run(8000);