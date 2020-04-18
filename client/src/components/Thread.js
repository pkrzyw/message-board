import React from "react";
import Reply from "./Reply";

export default function Thread({ thread }) {
  const date = new Date(+thread.created_on).toLocaleDateString();
  return (
    <div className="mb-1 px-1 pt-1 mx-0 bg-gray-300 shadow">
      <div className="py-1">
        <p className="text-sm font-normal">
          <span className="text-xs">{date}</span> [{thread.board.name}]{" "}
          {thread.text}
        </p>
      </div>
      <div className="py-1 text-xs">
        {thread.replies.length > 0 ? (
          <>
            Replies
            <div className="p-1 bg-gray-200 shadow-inner rounded-md w-6/12">
              {thread.replies.map((reply) => (
                <Reply key={reply.id} reply={reply} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
