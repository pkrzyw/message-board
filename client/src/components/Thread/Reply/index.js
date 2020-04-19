import React from "react";
import * as dateService from "../../../services/Format/Date";

export default function Reply({ reply }) {
  const date = dateService.formatDateTime(new Date(+reply.created_on));

  return (
    <div className="py-1">
      <p className="italic ">
        <span className="text-gray-700">{date}</span> {reply.text}
      </p>
    </div>
  );
}
