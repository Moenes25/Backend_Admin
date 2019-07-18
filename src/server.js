import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';

import schema from './graphql/schema';
dotenv.config();
const server = new ApolloServer({
 schema,

});
server.listen().then(({ url }) => {
 console.log(🚀  Server ready at ${url});
});

