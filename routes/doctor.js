let express = require('express');
let router = express.Router();

let PatientController = require("../Controller/Patient")
let DoctorController = require("../Controller/Doctor")


//SIGN UP
router.post('/create', PatientController.secure, DoctorController.DoctorCreate);


//ALL DATA FIND
router.get('/findall', PatientController.secure, DoctorController.FindData);


//FIND ONE
router.get('/findid/:id', PatientController.secure, DoctorController.FindId);


//DELETE DATA
router.delete('/delete/:id', PatientController.secure, DoctorController.DoctorDelete);


//UPDATE DATA
router.patch('/update/:id', PatientController.secure, DoctorController.DoctorUpdate);


module.exports = router;

