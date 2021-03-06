import { gql } from "apollo-server-express";
import jwt from 'jsonwebtoken';

export const typeDefs = gql`
  type Query {
    # Find all User inside the Database
    FindAllAdmin: [Admin!]!
    # geting user by ID
    getAdminById(_id: String!): [Admin!]!

  }
  # we define User type and what type of data we can get from it
  type Admin {
    _id: String!
    name: String !
    username: String!
    password: String!
    company_client: String! 
    jwt: String!
    createDate: String
    email: String!
    type: String!
    updateDate: String!
  }
  # the root of accessing the Database and make change on it
  type Mutation {
    createAdmin(username: String! password: String! email: String! type:String!): Admin!
    login(email: String! password: String!): Admin!
    deleteUser(_id: ID!): Admin!
    updateUser( type:String! _id: ID!): Admin
  }
`;
