import mongoose from "mongoose";

export const schemaDB = mongoose.model("Cat", { name: String });