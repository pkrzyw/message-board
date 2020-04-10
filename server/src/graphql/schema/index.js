const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    allBoards(name: String): [Board!]!
    allThreads(boardID: ID): [Thread!]!
  }

  type Mutation {
    createBoard(name: String!): Board
    createThread(board: ID!, text: String!, delete_password:String!): Thread
  }

  type Board {
    id: ID!
    name: String!
    created_on: String
    bumped_on: String
    threads: [Thread!]!
  }

  type Thread {
    id: ID!
    board: ID!
    text: String!
    delete_password: String!
    created_on: String!
    bumped_on: String!
    reported: String!
    replies: [Reply!]!
  }

  type Reply {
    text: String!
    delete_password: String!
    created_on: String!
    bumped_on: String!
    reported: String!
  }
`;
module.exports = {
  typeDefs,
};
