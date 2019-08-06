import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

import { Mutation } from "../src/Graphql/Admin/Mutations/mutationsAdmin";
import { typeDefs } from "../src/Graphql/Admin/Types/typesAdmin";
import { Query } from "../src/Graphql/Admin/Query/queryAdmin";

 // root server                     
const startServer = async () => {


// this will handel the work with mongodb
 const server = new ApolloServer({
  typeDefs,
  // extend Query and Mutation
 resolvers:[Query,Mutation]
});


 // connect to Mongodb database
 await mongoose.connect("mongodb://localhost:27017/Admindb", {
   useNewUrlParser: true });
 // starting the server on port 3000
 server.listen(5000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
};
// call the root Function
startServer();