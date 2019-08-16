import mongoose from "mongoose";

export const Admin = mongoose.model("Admin", {
	name: String ,
	username: String,
	password: String ,
	admin: String,
	address: String ,
	created_at: String ,
	updated_at: String,
	company_manage: String,
	createDate: String,
	email: String,
	type: String,
	updateDate: String
});


