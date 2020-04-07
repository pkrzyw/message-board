import React from 'react'
import { Link } from '@reach/router'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks';

const BOARDS = gql`
query {
    allBoards {
        id
        name
    }
}
`

export default function Header() {
    const { loading, error, data } = useQuery(BOARDS);
    if (error) return <p>Error</p>
    return (
        <div className="bg-blue-800 shadow-lg text-gray-200">
            <div className="pl-3 py-2  text-xl ">
                Message Board
        </div>
            <nav>
                <Link to="/">Home</Link>{" | "}
                <Link to="board/new">New Board</Link>
                {loading
                    ? "Fetching"
                    : data.allBoards.map(board => (

                        < Link key={board.id} to={`board/${board.name}`}>{" | "}{board.name}</Link>
                    ))
                }
            </nav>
        </div >
    )
}
