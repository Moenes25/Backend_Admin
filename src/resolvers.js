import { Cat } from "./models/Cat";
export const resolvers = {
 Query: {
   hello: () => "hi",
   cats: () => Cat.find()
 },
 Mutation: {
   createCat: async (_, { name , age }) => {
     // here we accpet the schema that will add to db
     const kitty = new Cat({ name , age});
     // we save it to db
     await kitty.save();
     return kitty;
   }
 }
};

