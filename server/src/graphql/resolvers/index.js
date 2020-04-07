const { threadQueries } = require("./thread")
const { boardQueries, boardMutations } = require("./board")

const rootResolver = {
    Query: {
        ...threadQueries,
        ...boardQueries
    },
    Mutation: {
        ...boardMutations
    }
}

module.exports = rootResolver;