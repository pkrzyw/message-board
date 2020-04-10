const { Thread } = require("../models/thread");

const allThreads = async (board) => {
  try {
    const where = board ? { board } : {}
    const threads = await Thread.find(where)
    return threads
  } catch (error) {
    throw error
  }
}

const postThread = async (board, text, delete_password) => {
  try {
    const newThread = new Thread({
      board,
      text,
      delete_password
    })
    const savedThread = await newThread.save()
    return savedThread
  } catch (error) {
    throw error
  }
}
module.exports = {
  allThreads,
  postThread
}