const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    info: String!
  }
`;
module.exports = {
  typeDefs,
};
