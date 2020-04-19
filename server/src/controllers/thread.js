const { Thread } = require("../models/thread");
const { Board } = require("../models/board");

const allThreads = async (boardId, threadId) => {
  try {
    const where = {};
    boardId ? (where.board = boardId) : null;
    threadId ? (where._id = threadId) : null;
    const threads = await Thread.find(where);
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
    board.bumped_on = new Date();
    board.save();
    return savedThread;
  } catch (error) {
    throw error;
  }
};
async function postReply(threadId, text, delete_password) {
  try {
    const thread = await Thread.findById(threadId);
    const created_on = new Date();
    const bumped_on = new Date();
    const reply = {
      text,
      delete_password,
      created_on,
      bumped_on,
    };
    thread.replies.push(reply);
    thread.bumped_on = new Date();
    const savedThread = thread.save();
    return savedThread;
  } catch (error) {
    throw error;
  }
}
async function updateThread(threadId, params) {
  try {
    params.bumped_on = new Date();
    const thread = await Thread.findByIdAndUpdate(threadId, params, {
      new: true,
    });
    if (!thread) return new Error("Thread does not exists");
    return thread;
  } catch (error) {
    throw error;
  }
}
async function deleteThread(threadId, del_password) {
  try {
    const thread = await Thread.findById(threadId);
    if (!thread) throw new Error("Thread does not exists");
    if (thread.delete_password !== del_password)
      throw new Error("Incorrect password");
    Thread.findByIdAndDelete(threadId, () => {
      return "Success";
    });
  } catch (error) {
    throw error;
  }
}
async function deleteReply(threadId, replyId, del_password) {
  try {
    const qry = {
      _id: threadId,
      "replies._id": replyId,
    };
    const thread = await Thread.findOne(qry, {
      "replies.$": 1,
    });
    if (thread.replies[0].delete_password !== del_password)
      throw new Error("Incorrect password");
    const setUpdate = {
      $set: {
        bumped_on: new Date(),
        "replies.$.text": "[deleted]",
        "replies.$.bumped_on": new Date(),
      },
    };
    const savedThread = await Thread.findOneAndUpdate(qry, setUpdate, {
      new: true,
    });
    console.log(savedThread);
    return savedThread;
  } catch (error) {
    throw error;
  }
}
async function reportReply(threadId, replyId) {
  const qry = {
    _id: threadId,
    "replies._id": replyId,
  };
  const setUpdate = {
    $set: {
      bumped_on: new Date(),
      "replies.$.reported": true,
      "replies.$.bumped_on": new Date(),
    },
  };
  const thread = await Thread.findOneAndUpdate(qry, setUpdate, { new: true });
  return thread;
}

module.exports = {
  allThreads,
  postThread,
  postReply,
  threadById,
  updateThread,
  deleteThread,
  deleteReply,
  reportReply,
};
