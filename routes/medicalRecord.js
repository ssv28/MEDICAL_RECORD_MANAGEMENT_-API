let express = require('express');
let router = express.Router();

let PatientController = require("../Controller/Patient")
let MedicalRecordController = require("../Controller/MedicalRecord")


//SIGN UP
router.post('/create', PatientController.secure, MedicalRecordController.MedicalRecordCreate);


//ALL DATA FIND
router.get('/findall', PatientController.secure, MedicalRecordController.FindData);


//FIND ONE
router.get('/findid/:id', PatientController.secure, MedicalRecordController.FindId);


//DELETE DATA
router.delete('/delete/:id', PatientController.secure, MedicalRecordController.MedicalRecordDelete);


//UPDATE DATA
router.patch('/update/:id', PatientController.secure, MedicalRecordController.MedicalRecordUpdate);


module.exports = router;

