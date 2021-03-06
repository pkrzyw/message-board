import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Thread from "../Thread";
import { useParams, useLocation } from "react-router";
import Layout from "../Layout";
import NewThread from "../Thread/NewThread";

export const THREADS = gql`
  query($boardId: ID) {
    allThreads(boardId: $boardId) {
      id
      board {
        name
      }
      text
      reported
      created_on
      bumped_on
      replies {
        id
        text
        reported
        created_on
        bumped_on
      }
    }
  }
`;

export default function Board() {
  const { boardName } = useParams();
  const { state } = useLocation();
  const { loading, error, data } = useQuery(THREADS, {
    variables: { boardId: state.boardId },
  });
  if (error) return <p>Error {error.message}</p>;
  return (
    <Layout>
      <h2 className="text-center text-lg text-blue-800 font-bold">
        {boardName}
      </h2>
      <NewThread board={state.boardId} />
      {loading
        ? "Fetching.."
        : data.allThreads.map((thread) => (
            <Thread key={thread.id} thread={thread} />
          ))}
    </Layout>
  );
}
