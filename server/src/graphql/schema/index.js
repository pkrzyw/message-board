const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    info: String!
    threads: [Thread!]!
    boardThreads(board: String!): [Thread!]!
    allBoards: [Board!]!
  }

  type Mutation {
    createBoard(name:String!): Board!
  }

  type Board {
    id: ID!
    name: String!
  }

  type Thread {
    id: ID!
    board: String!
    text: String!
    delete_password: String!
    created_on: String
    bumped_on: String
    reported: String
    replies: [Reply!]!
    replycount: Int
  }

  type Reply {
    id: ID!
    text: String!
    created_on: String!
    delete_password: String!
    reported: String!
  }
`;
module.exports = {
  typeDefs,
};
