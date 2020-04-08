const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    info: String!
    threads: [Thread!]!
    boardThreads(board: String!): [Thread!]!
    allBoards(name: String): [Board!]!
  }

  type Mutation {
    createBoard(name: String!): Board!
  }

  type Board {
    id: ID!
    name: String!
    created_on: String
    threads: [Thread!]!
  }

  type Thread {
    id: ID!
    text: String!
    delete_password: String!
    created_on: String
    bumped_on: String
    reported: String
    replies: [Reply!]!
  }

  type Reply {
    id: ID!
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
