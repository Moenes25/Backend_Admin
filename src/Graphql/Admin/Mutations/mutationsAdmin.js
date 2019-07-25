import { Admin } from "../../../model/schemaDB";

export const Mutation = {
  // will 
  Mutation: {
    // update database with new Admin 
    createAdmin: async (_, {  username, password,  admin }) => {
      const UpdateAdmin = new Admin({  username, password, admin});
      await UpdateAdmin.save();
      return UpdateAdmin;

    }
  }
};
