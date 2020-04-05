const {
  allThreads,
  threadsByBoard,
} = require("../controllers/threadController");

function info() {
  return process.env.INFO;
}
function threads() {
  return allThreads;
}
function boardThreads(_, { board }) {
  return threadsByBoard(board);
}
module.exports = {
  info,
  threads,
  boardThreads,
};
