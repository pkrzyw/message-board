const { allBoards, createBoard } = require("../../controllers/board");

const boardQueries = {
  allBoards: (parent, { name }, context) => {
    return allBoards(name);
  },
};
const boardMutations = {
  createBoard: (parent, { name }, context) => {
    return createBoard(name);
  },
};

module.exports = {
  boardQueries,
  boardMutations,
};
