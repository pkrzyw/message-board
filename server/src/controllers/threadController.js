const Thread = require("../models/thread");

module.exports = {
  allThreads: Thread.find(),
  threadsByBoard: (board) => {
    return Thread.aggregate([
      {
        $project: {
          _id: 1,
          text: 1,
          created_on: 1,
          bumped_on: 1,
          board: 1,
          replies: {
            $slice: ["$replies", -3],
          },
          replycount: {
            $cond: {
              if: { $isArray: "$replies" },
              then: { $size: "$replies" },
              else: "NA",
            },
          },
        },
      },
    ])
      .match({ board: board })
      .project(" -replies.reported -replies.delete_password -board")
      .sort("-bumped_on")
      .limit(10)
      .exec();
  },
};
