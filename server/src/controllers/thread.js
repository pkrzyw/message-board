const { Thread } = require("../models/thread");
const { Board } = require("../models/board");

const allThreads = async (boardId) => {
  try {
    const where = boardId ? { boardId } : {};
    const threads = await Thread.find(where);
    return threads;
  } catch (error) {
    throw error;
  }
};

const postThread = async (boardId, text, delete_password) => {
  try {
    const board = await Board.findById(boardId);
    if (!board) throw new Error("Board does not exists");
    const newThread = new Thread({
      boardId,
      text,
      delete_password,
    });
    const savedThread = await newThread.save();
    board.threads.push(savedThread._id);
    board.save();
    return savedThread;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  allThreads,
  postThread,
};
