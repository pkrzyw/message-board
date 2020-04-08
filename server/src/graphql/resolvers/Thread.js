const { allThreads, threadsByBoard } = require("../../controllers/thread");

const threadQueries = {
  info: () => {
    return process.env.INFO;
  },

  threads: () => {
    return allThreads;
  },

  boardThreads: (_, { board }) => {
    return threadsByBoard(board);
  },
};

module.exports = {
  threadQueries,
};
