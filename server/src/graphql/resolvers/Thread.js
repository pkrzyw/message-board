const { postThread, allThreads } = require("../../controllers/thread");

const threadQueries = {
  allThreads: (_, { boardId }) => {
    return allThreads(boardId);
  },
};

const threadMutations = {
  createThread: async (_, { boardId, text, delete_password }, context) => {
    return postThread(boardId, text, delete_password);
  },
};
module.exports = {
  threadQueries,
  threadMutations,
};
