const { Board } = require("../models/board");

const getBoards = async (name) => {
  try {
    const boards = await Board.find();
    return boards;
  } catch (error) {
    throw error;
  }
};

const createBoard = async (boardName) => {
  try {
    const board = await Board.findOne({
      name: boardName,
    });
    if (board) throw new Error("Board already exists");

    const newBoard = new Board({
      name: boardName,
    });
    const savedBoard = await newBoard.save();
    return savedBoard;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createBoard,
  getBoards,
};
