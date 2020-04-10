const {
  postThread,
  allThreads,
  postReply,
  threadById,
  updateThread,
} = require("../../controllers/thread");

const { boardById } = require("../../controllers/board");

const Thread = {
  board: async (parent) => {
    return boardById(parent.board);
  },
};

const threadQueries = {
  allThreads: (_, { boardId }) => {
    return allThreads(boardId);
  },
  Thread: (_, { threadId }) => {
    return threadById(threadId);
  },
};

const threadMutations = {
  postThread: (_, { boardId, text, delete_password }) => {
    return postThread(boardId, text, delete_password);
  },
  postReply: (_, { threadId, text, delete_password }) => {
    return postReply(threadId, text, delete_password);
  },
  reportThread: (_, { threadId }) => {
    return updateThread(threadId);
  },
};

module.exports = {
  Thread,
  threadQueries,
  threadMutations,
};
