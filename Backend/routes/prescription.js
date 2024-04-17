const express=require('express');
const router=express.Router();
var fetchUser=require('../middleware/fetchUser');
const Prescription=require('../models/DoctorPrescription');
const { body, validationResult } = require('express-validator');

//Route 1: Fetch all prescriptions using: GET "/api/prescription/fetchallprescription". Login required
//not working
router.get('/fetchallprescription', fetchUser, async (req, res) => {
    try {
        const prescriptiongot = await Prescription.find({ user: req.user.id });
        //res.json(prescriptiongot);
        res.json({ prescriptiongot });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
//Route 2: Add prescription using: POST "/api/prescription/addprescription". Login required
router.post('/addprescription', fetchUser, [body('diseaseName', 'Enter a valid disease name').isLength({ min: 3 }), body('prescription', 'Enter a valid prescription').isLength({ min: 5 }),body('medicine','Enter a valid medicine name').isLength({min:5}),body('dosage','Enter a valid dosage').isLength({min:1})], async (req, res) => {
    try{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    };
    const { diseaseName, prescription, medicine,dosage } = req.body;
    const prescriptionnew = new Prescription({ diseaseName, prescription, medicine,dosage, user: req.user.id });
    const saved = await prescriptionnew.save();
    res.json(saved);
    }
catch(error){
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
}
)
//Route 3: Update an existing prescription using: POST "/api/prescription/updateprescription". Login required
router.put('/updateprescription/:id', fetchUser, async (req, res) => {
    try {
        const { diseaseName, prescription, medicine, dosage } = req.body;
        const newprescription = {};
        if (diseaseName) { newprescription.diseaseName = diseaseName };
        if (prescription) { newprescription.prescription = prescription };
        if (medicine) { newprescription.medicine = medicine };
        if (dosage) { newprescription.dosage = dosage };
        let prescriptionfound = await Prescription.findById(req.params.id);
        if (!prescriptionfound) { return res.status(404).send("Not Found") };
        if (prescriptionfound.user.toString() !== req.user.id) { return res.status(401).send("Not Allowed") };
        prescriptionfound = await Prescription.findByIdAndUpdate(req.params.id, { $set: newprescription }, { new: true });
        res.json({ prescriptionfound });
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Route 4: Delete an existing prescription using: DELETE "/api/prescription/deleteprescription". Login required
router.delete('/deleteprescription/:id', fetchUser, async (req, res) => {
    try{
    let prescriptiongot = await Prescription.findById(req.params.id);
    if (!prescriptiongot) { return res.status(404).send("Not Found") };
    if (prescriptiongot.user.toString() !== req.user.id) { return res.status(401).send("Not Allowed") };
    prescriptiongot= await Prescription.findByIdAndDelete(req.params.id);
    res.json({ "Success": "Prescription has been deleted", prescription: prescriptiongot});
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;
