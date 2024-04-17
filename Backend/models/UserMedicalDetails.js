const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserMedicalDetailsSchema = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId,ref: "user",},
  age: {type: Number,required: true,},
  weight: {type: Number,required: true,},
  height: {type: Number,required: true,},
  bloodgroup: {type: String,required: true,},
  diseases: {type: String,required: true,},
  allergies: {type: String,required: true,},
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("notes", UserMedicalDetailsSchema);
