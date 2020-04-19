import React from "react";
import Reply from "./Reply";
import ReplyForm from "../Forms/ReplyForm";
import * as dateService from "../../services/Format/Date";

export default function Thread({ thread }) {
  const date = dateService.formatDateTime(new Date(+thread.created_on));

  return (
    <div className="mb-3 px-1 pt-1 pb-2 shadow">
      <div className="py-1">
        <p className="text-sm font-normal">
          <span className="text-xs text-gray-600 float-right">{date}</span>
          <span className="font-bold text-gray-600">
            [{thread.board.name}]{" "}
          </span>
          <span className="italic">
            {thread.text}
            {thread.reported ? " reported" : ""}
          </span>
        </p>
      </div>
      {thread.replies.length > 0 ? (
        <div className="py-1 text-xs">
          Replies
          <div className="p-1 bg-blue-100 shadow-inner rounded-md w-6/12">
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
