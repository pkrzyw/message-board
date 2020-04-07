import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Thread from './Thread';

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

export default function MessageBoard(props) {

  const { loading, error, data } = useQuery(THREADS);
  if (error) return <p>Error {error.message}</p>
  return (
    < main className="w-8/12 mx-auto text-gray-800 mt-4" >
      <h2>{props.name}</h2>
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
