const { getBoards, createBoard } = require("../../controllers/board");
const { allThreads } = require("../../controllers/thread")

const boardQueries = {
  allBoards: async (_, { name }) => {
    const boards = await getBoards(name);

    return boards
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
};
