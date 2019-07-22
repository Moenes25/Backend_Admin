import { gql } from 'apollo-server';



const features = [
  User
];
const stringDoers = field => features.reduce((accumulator, currentValue) => accumulator.concat(currentValue[field] || ''), '');
const resolversDoers = field => features.reduce((accumulator, currentValue) => Object.assign({}, accumulator, currentValue.Resolvers[field]), {});


const typeDefs = gql`
  ${stringDoers('Type')}
  ${stringDoers('InputType')}
  type Query {
    ${stringDoers('Query')}
  }
  type Mutation {
    ${stringDoers('Mutation')}
  }
`;
const Query = resolversDoers('Query');
const Mutation = resolversDoers('Mutation');
const TypeResolvers = resolversDoers('TypeResolvers');

const resolvers = Object.assign({}, { Query, Mutation }, TypeResolvers);
export {
  typeDefs,
  resolvers,
};
 