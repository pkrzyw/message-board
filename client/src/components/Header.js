import React from "react";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const BOARDS = gql`
  query {
    allBoards {
      id
      name
    }
  }
`;

export default function Header() {
  const { loading, error, data } = useQuery(BOARDS);

  if (error) return <p>Error</p>;
  return (
    <div className="bg-blue-800 shadow-lg text-gray-200">
      <div className="pl-3 py-2  text-xl ">Message Board</div>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="board/new">New Board</Link>
        <ul>
          {loading
            ? "Fetching"
            : data.allBoards.map((board) => (
                <li
                  key={board.id}
                  className="inline-block px-1 ml-4 bg-blue-400 rounded-lg text-xs shadow-sm"
                >
                  <Link
                    to={`board/${board.name}`}
                    state={{ boardId: board.id }}
                  >
                    #{board.name}
                  </Link>
                </li>
              ))}
        </ul>
      </nav>
    </div>
  );
}
