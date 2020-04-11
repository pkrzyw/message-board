const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    allBoards(name: String): [Board!]!
    Board(boardId: ID!): Board!
    allThreads(boardId: ID): [Thread!]!
    Thread(threadId: ID!): Thread!
  }

  type Mutation {
    createBoard(name: String!): Board
    postThread(boardId: ID!, text: String!, delete_password: String!): Thread
    postReply(threadId: ID!, text: String!, delete_password: String!): Thread
    reportThread(threadId: ID!): Thread
    deleteThread(threadId: ID!, delete_password: String!): String!
    reportReply(threadId: ID!, replyId: ID!): Thread
    deleteReply(threadId: ID!, replyId: ID!, delete_password: String): Thread
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
    board: Board!
    text: String!
    delete_password: String!
    created_on: String!
    bumped_on: String!
    reported: String!
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
