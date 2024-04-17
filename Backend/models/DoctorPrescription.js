const mongoose = require("mongoose");
const { Schema } = mongoose;
// Define User schema
const DoctorPrescriptionSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'user'},
    diseaseName: { type: String, required: true },
    prescription: { type: String, required: true },
    medicine: { type: String, required: true },
    dosage: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});
const DoctorPrescription=mongoose.model('prescription', DoctorPrescriptionSchema);
module.exports = DoctorPrescription;
