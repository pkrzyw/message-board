const { threadQueries, threadMutations, Thread } = require("./thread");
const { Board, boardQueries, boardMutations } = require("./board");

const rootResolver = {
  Query: {
    ...threadQueries,
    ...boardQueries,
  },
  Mutation: {
    ...boardMutations,
    ...threadMutations,
  },
  Thread,
  Board,
};

module.exports = rootResolver;
