import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Thread from './Thread';
import { useParams } from 'react-router';

const THREADS = gql`
query {
  threads {
    id
    board
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
  const { loading, error, data } = useQuery(THREADS);
  if (error) return <p>Error {error.message}</p>
  return (
    < main className="w-8/12 mx-auto text-gray-800 mt-4" >
      <h2>{boardName}</h2>
      {
        loading
          ? "Fetching.."
          : data.threads.map(thread => (
            <Thread key={thread.id} thread={thread} />
          ))
      }
    </main >
  )
}
