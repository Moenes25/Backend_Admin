import { Admin } from "../../../model/schemaDB";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// the core of mutation 
export const Mutation = {
  // the root of mutation that will make change on Database
  Mutation: {
    updateUser: async (_,{ type,_id}) => {
      const findId = await Admin.find({_id})

      if(!findId){
        throw new Error('please try again')
      }

      const saveUpdate = await Admin.updateOne({_id}, {$set: {
        type,
        updateDate: new Date()
        }})
      // saveUpdate.save();
      return saveUpdate;


    },
    deleteUser: async (_,{_id}) => {
       await Admin.deleteOne({_id})

    },
    // update database with new Admin 
    createAdmin: async (_, {  username, password, email, type}) => {

      // test if we have username in database 
      const SetAdmin = await Admin.findOne({ email });

      // if we find username with that name we send Error
      if(SetAdmin){
        // Error hase been throw to user
        throw new Error('Name or Email already used. ')
      }
       // we hash the password before we save it
       const passHash =await bcrypt.hash(password,10)
       // Schema for the new user to add
        const SaveAdmin =  new Admin({
          username,
          // Saving Hash Password  
          password: passHash,
          createDate: new Date(),
          email,
          type
        }); 
          // Add new User and return it
          SaveAdmin.save()
          return SaveAdmin;
    },
    // get admin username and password
    login: async (parent, { username, password , email}) => {

        // find in database
        const user = await Admin.findOne({ email })
       
        // check if the user not in database
        if (!user) {
          throw new Error('Wrong Email or Password');
        };

         // compare the user password and the hash password in database
         const passwordMatch = await bcrypt.compare(  password, user.password);
         // check if the Password is not Correct
         if (!passwordMatch) {
            throw new Error('Wrong UserName or Password');
          }
          // Generate Json Web Token  
          user.jwt = jwt.sign({ _id: user._id }, "DARK-NIGHT-TO-CODE");
          // if the above was passed it will let user to login and see all data he have 
          return user;
      }
  }
};
