const mongoose = require("mongoose");
const { Schema } = mongoose;
// Define Doctor schema
const DoctorSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactnumber: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    qualification: { type: String, required: true },
    majorArea: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
const Doctor=mongoose.model('user', DoctorSchema);
module.exports = Doctor;
