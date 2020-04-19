import React from "react";
import Reply from "./Reply";
import ReplyForm from "../Forms/ReplyForm";
import * as dateService from "../../services/Format/Date";

export default function Thread({ thread }) {
  const date = dateService.formatDateTime(new Date(+thread.created_on));

  return (
    <div className="mb-1 px-1 pt-1 mx-0 bg-gray-300 shadow">
      <div className="py-1">
        <p className="text-sm font-normal">
          <span className="text-xs text-gray-600">{date}</span>
          <span className="font-mono font-bold">[{thread.board.name}] </span>
          <span className="italic">{thread.text}</span>
        </p>
      </div>
      {thread.replies.length > 0 ? (
        <div className="py-1 text-xs">
          Replies
          <div className="p-1 bg-gray-200 shadow-inner rounded-md w-6/12">
            {thread.replies.map((reply) => (
              <Reply key={reply.id} reply={reply} />
            ))}
          </div>
        </div>
      ) : null}
      <ReplyForm threadId={thread.id} />
    </div>
  );
}
