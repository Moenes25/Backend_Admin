import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

import { Mutation } from "../src/Graphql/Admin/Mutations/mutationsAdmin";
import { typeDefs } from "../src/Graphql/Admin/Types/typesAdmin";
import { Query } from "../src/Graphql/Admin/Query/queryAdmin";

 
                      
const startServer = async () => {
 const app = express();

// this will handel the work with mongodb
 const server = new ApolloServer({
  typeDefs,
  // extend Query and Mutation
 resolvers:[Query,Mutation]
 });

 server.applyMiddleware({ app });
 // connect to Mongodb database
 await mongoose.connect("mongodb://localhost:27017/Admindb", {
   useNewUrlParser: true });

 app.listen({ port: 4001 }, () =>
   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
 );
};

startServer();