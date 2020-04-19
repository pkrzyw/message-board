import React from "react";
import BoardForm from "../Forms/BoardForm";
import Layout from "../Layout";

export default function NewBoard() {
  return (
    <Layout>
      <h2>New board</h2>
      <div className="">
        <BoardForm />
      </div>
    </Layout>
  );
}
