const { Thread } = require("../models/thread");
const { Board } = require("../models/board");

const allThreads = async (boardId, threadId) => {
  try {
    const where = {};
    boardId ? (where.board = boardId) : null;
    threadId ? (where._id = threadId) : null;
    const threads = await Thread.find(where);
    console.log(threads);
    return threads;
  } catch (error) {
    throw error;
  }
};
async function threadById(threadId) {
  try {
    const thread = await Thread.findById(threadId);
    if (!thread) throw new Error("Thread does not exists");
    return thread;
  } catch (error) {
    throw error;
  }
}

const postThread = async (boardId, text, delete_password) => {
  try {
    const board = await Board.findById(boardId);
    if (!board) throw new Error("Board does not exists");
    const newThread = new Thread({
      board: boardId,
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

async function postReply(threadId, text, delete_password) {
  try {
    const thread = await Thread.findById(threadId);
    const reply = {
      text,
      delete_password,
    };
    thread.replies.push(reply);
    thread.bumped_on = new Date();
    const savedThread = thread.save();
    return savedThread;
  } catch (error) {
    throw error;
  }
}

async function updateThread(threadId) {
  try {
    const thread = await Thread.findById(threadId);
    if (!thread) throw new Error("Thread does not exists");
    thread.reported = true;
    thread.bumped_on = new Date();
    const savedThread = thread.save();
    return savedThread;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  allThreads,
  postThread,
  postReply,
  threadById,
  updateThread,
};
