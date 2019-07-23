import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

import { resolvers } from "../src/Graphql/Admin/Mutations/mutationsAdmin";
import { typeDefs } from "../src/Graphql/Admin/Types/typesAdmin";

                      
const startServer = async () => {
 const app = express();

// this will handel the work with mongodb
 const server = new ApolloServer({
  typeDefs,
 resolvers
 });

 server.applyMiddleware({ app });

 await mongoose.connect("mongodb://localhost:27017/test", {
   useNewUrlParser: true });

 app.listen({ port: 4000 }, () =>
   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
 );
};

startServer();