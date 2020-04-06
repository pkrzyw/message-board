const { ThreadQueries } = require("./Thread")

const rootResolver = {
    Query: {
        ...ThreadQueries
    }
}

module.exports = rootResolver;