const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors")
const morgan = require("morgan")
const resolvers = require("./graphql/resolvers");
const { typeDefs } = require("./graphql/schema");
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(cors({ origin: "*" }))
app.use(morgan('tiny'))
server.applyMiddleware({ app, path: '/api/graphql' });

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", () => {
  console.log(`🍃 Connected to MongoDB`);
  app.listen({ port: process.env.PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
    )
  );
});
