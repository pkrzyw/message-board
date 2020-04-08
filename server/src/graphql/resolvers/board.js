const { allBoards, createBoard } = require("../../controllers/board")

const boardQueries = {
    allBoards: () => {
        return allBoards()
    }
}
const boardMutations = {
    createBoard: (parent, { name }, context) => {
        return createBoard(name)
    }
}

module.exports = {
    boardQueries,
    boardMutations
}