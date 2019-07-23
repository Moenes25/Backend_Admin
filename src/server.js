import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

import { Schema } from "../../Admin/index";

const startServer = async () => {
 const app = express();

// this will handel the work with mongodb
 const server = new ApolloServer({
  Schema
 });

 server.applyMiddleware({ app });

 await mongoose.connect("mongodb://localhost:27017/Admin", {
   useNewUrlParser: true });

 app.listen({ port: 4000 }, () =>
   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
 );
};

startServer();