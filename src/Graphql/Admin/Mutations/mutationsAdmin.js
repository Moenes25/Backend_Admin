import { Admin } from "./d";
 
export const resolvers = {
  Query: {
    superAdmin: () => Admin.find()
  },
  // will 
  Mutation: {
    createAdmin: async (_, { 
      username, 
      password,  
      admin 
    }) => {
      const UpdateAdmin = new Admin({   
        username, 
        password,  
        admin
      });
      await UpdateAdmin.save();
      return UpdateAdmin;
    }
  }
};
