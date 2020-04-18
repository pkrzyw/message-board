import React from "react";

export default function Reply({ reply }) {
  const date = new Date(+reply.created_on).toLocaleDateString();
  return (
    <div className="py-1">
      <p className="italic ">
        <span className="text-gray-700">{date}</span> {reply.text}
      </p>
    </div>
  );
}
