const { Board } = require("../models/board");

const getBoards = async (name) => {
  try {
    const where = {};
    name ? (where.name = name) : null;
    const boards = await Board.find(where);
    return boards;
  } catch (error) {
    throw error;
  }
};

async function boardById(boardId) {
  try {
    const board = await Board.findById(boardId);
    if (!board) throw new Error("Board does not exists");
    return board;
  } catch (error) {
    throw error;
  }
}

const createBoard = async (boardName) => {
  try {
    const board = await Board.findOne({
      name: boardName,
    });
    if (board) throw new Error("Board already exists");

    const newBoard = new Board({
      name: boardName,
      threads: [],
    });
    const savedBoard = await newBoard.save();
    return savedBoard;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  boardById,
  createBoard,
  getBoards,
};
