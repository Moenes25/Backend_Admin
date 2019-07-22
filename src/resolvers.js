import { schemaDB } from "./model/schemaDB";
export const resolvers = {
 Query: {
   hello: () => "hi",
   cats: () => Cat.find()
 },
 Mutation: {
   createCat: async (_, { name }) => {
     // here we accpet the schema that will add to db
     const kitty = new schemaDB({ name , age});
     // we save it to db
     await kitty.save();
     return kitty;
   }
 }
};

 