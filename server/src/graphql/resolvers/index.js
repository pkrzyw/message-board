const { threadQueries, threadMutations, Thread } = require("./thread")
const { boardQueries, boardMutations } = require("./board")

const rootResolver = {
    Query: {
        ...threadQueries,
        ...boardQueries
    },
    Mutation: {
        ...boardMutations,
        ...threadMutations
    },
    Thread
}

module.exports = rootResolver;