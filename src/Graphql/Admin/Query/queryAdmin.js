import { Admin } from "../../../model/schemaDB";

export const Query = {
 
  Query: {
  	// get all admins inside Database
    FindAllAdmin: () => Admin.find(),
    
    // find admin by ID
    getAdminById:(_, args) => Admin.find(args)

  }
};