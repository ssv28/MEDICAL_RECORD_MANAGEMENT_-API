let express = require('express');
let router = express.Router();

let PatientController = require("../Controller/Patient")


//SIGN UP
router.post('/create', PatientController.PatientCreate);


//ALL DATA FIND
router.get('/findall', PatientController.secure, PatientController.FindData);


//FIND ONE
router.get('/findid/:id', PatientController.secure, PatientController.FindId);


//DELETE DATA
router.delete('/delete/:id', PatientController.secure, PatientController.PatientDelete);


//UPDATE DATA
router.patch('/update/:id', PatientController.secure, PatientController.PatientUpdate);


module.exports = router;
