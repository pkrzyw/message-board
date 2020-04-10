const {
  getBoards,
  createBoard,
  boardById,
} = require("../../controllers/board");
const { allThreads } = require("../../controllers/thread");

const Board = {
  threads: async (parent) => {
    return allThreads(parent._id);
  },
};

const boardQueries = {
  allBoards: async (_, { name }) => {
    const boards = await getBoards(name);
    return boards;
  },
  Board: async (_, { boardId }) => {
    const board = await boardById(boardId);
    return board;
  },
};

const boardMutations = {
  createBoard: (_, { name }) => {
    return createBoard(name);
  },
};

module.exports = {
  boardQueries,
  boardMutations,
  Board,
};
