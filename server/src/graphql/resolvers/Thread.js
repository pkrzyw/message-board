const { postThread, allThreads } = require("../../controllers/thread");

const threadQueries = {
  allThreads: (_, { boardID }) => {
    return allThreads(boardID)
  }
};

function Thread(parent, args, context) {
  return allThreads(parent.id)
}

const threadMutations = {
  createThread: async (_, { board, text, delete_password }, context) => {
    return postThread(board, text, delete_password)
  }
}
module.exports = {
  threadQueries,
  threadMutations,
  Thread
};
