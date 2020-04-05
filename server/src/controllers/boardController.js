const Board = require("../models/board");

module.exports = {
  allBoards: Board.find(),
};
