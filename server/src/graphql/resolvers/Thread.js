const {
  postThread,
  allThreads,
  postReply,
  threadById,
  updateThread,
  deleteThread,
  deleteReply,
  reportReply,
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
    return updateThread(threadId, { reported: true });
  },
  deleteThread: (_, { threadId, delete_password }) => {
    return deleteThread(threadId, delete_password);
  },
  deleteReply: (_, { threadId, replyId, delete_password }) => {
    return deleteReply(threadId, replyId, delete_password);
  },
  reportReply: (_, { threadId, replyId }) => {
    return reportReply(threadId, replyId);
  },
};

module.exports = {
  Thread,
  threadQueries,
  threadMutations,
};
