import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Thread from './Thread';
import { useParams, useLocation } from 'react-router';

const THREADS = gql`
query board($boardId: ID) {
  allThreads(boardId: $boardId) {
    id
    board {
      name
    }
    text
    created_on
    replies {
      id
      text
      created_on
    }
  }
}
`

export default function MessageBoard() {
  const { boardName } = useParams()
  const { state } = useLocation()
  const { loading, error, data } = useQuery(THREADS, { variables: { boardId: state.boardId } });
  if (error) return <p>Error {error.message}</p>
  return (
    < main className="w-8/12 mx-auto text-gray-800 mt-4" >
      <h2>{boardName}</h2>
      {
        loading
          ? "Fetching.."
          : data.allThreads.map(thread => (
            <Thread key={thread.id} thread={thread} />
          ))
      }
    </main >
  )
}
