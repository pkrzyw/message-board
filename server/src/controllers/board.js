const Board = require("../models/board");

const createBoard = async (boardName) => {
  try {
    const board = await Board.findOne({
      name: boardName
    })
    if (board) throw new Error("Board already exists")

    const newBoard = new Board({
      name: boardName
    })
    const savedBoard = await newBoard.save();
    return savedBoard

  } catch (error) {
    throw error
  }
}

const allBoards = async () => {
  try {
    const boards = await Board.find()
    return boards
  } catch (error) {
    throw error
  }
}

module.exports = {
  createBoard,
  allBoards
};
