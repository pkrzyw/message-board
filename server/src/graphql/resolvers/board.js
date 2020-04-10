const { getBoards, createBoard } = require("../../controllers/board");
const { allThreads } = require("../../controllers/thread");

const boardQueries = {
  allBoards: async (_, { name }) => {
    const boards = await getBoards(name);
    // boards.forEach(async (board, i) => {
    //   let threads = await allThreads(board._id);
    //   console.log(threads);
    // });
    return boards;
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
