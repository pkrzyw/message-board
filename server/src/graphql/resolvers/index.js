const { threadQueries, threadMutations } = require("./thread");
const { boardQueries, boardMutations } = require("./board");

const rootResolver = {
  Query: {
    ...threadQueries,
    ...boardQueries,
  },
  Mutation: {
    ...boardMutations,
    ...threadMutations,
  },
};

module.exports = rootResolver;
