import React from "react";
import ThreadForm from "../../Forms/ThreadForm";

export default function NewThread({ board }) {
  return (
    <div className="rounded shadow m-3 p-4">
      Add new thread:
      <ThreadForm parentBoard={board} />
    </div>
  );
}
