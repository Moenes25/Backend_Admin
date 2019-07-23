import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    superAdmin: [Admin!]!
  }

  type Admin {
    id: ID!
    name: String !
    username: String!
    password: String!
    admin: String!
    address: String!
    created_at: String!
    updated_at: String!
    company_client: String! 
  }

  type Mutation {
    createAdmin( username: String! password: String! admin:String!): Admin!
  }
`;
