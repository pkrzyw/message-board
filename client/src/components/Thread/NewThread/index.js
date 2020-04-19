import React from "react";
import ThreadForm from "../../Forms/ThreadForm";

export default function NewThread({ board }) {
  return (
    <div className="border-2 m-3 p-4">
      <ThreadForm parentBoard={board} />
    </div>
  );
}