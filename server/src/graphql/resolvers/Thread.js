const {
  allThreads,
  threadsByBoard,
} = require("../../controllers/threadController");

const ThreadQueries = {
  info: () => {
    return process.env.INFO
  },

  threads: () => {
    return allThreads;
  },

  boardThreads: (_, { board }) => {
    return threadsByBoard(board)
  }
}

module.exports = {
  ThreadQueries
};
