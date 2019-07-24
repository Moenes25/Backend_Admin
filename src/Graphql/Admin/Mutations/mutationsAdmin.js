import { Admin } from "../../../model/schemaDB";
 

export const resolvers = {
  // this go to Query folder
  Query: {
    superAdmin: () => Admin.find(),
     getTalk:(_, args) => Admin.find(args.id)

  },
  // will 
  Mutation: {
    createAdmin: async (_, { 
      _id,
      username, 
      password,  
      admin ,
      
    }) => {
      const UpdateAdmin = new Admin({  
         _id, 
        username, 
        password,  
        admin,
        
      });
      await UpdateAdmin.save();
      return UpdateAdmin;

    }
  }
};
