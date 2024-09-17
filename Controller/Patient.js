const PATIENT = require('../Models/patients');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Middleware for Securing Routes
exports.secure = async function (req, res, next) {
    try {
        let token = req.headers.authorization;
        if (!token) throw new Error('Please enter a token');

        let verify = jwt.verify(token, 'PATIENT');
        let patientVerify = await PATIENT.findById(verify.id);
        if (!patientVerify) throw new Error('Patient not found');

        next();
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

exports.PatientCreate = async function (req, res, next) {
    try {

        let PatientCreate = await PATIENT.create(req.body);
        
        let token = jwt.sign({ id: PatientCreate._id }, 'PATIENT');

        res.status(200).json({
            status: 'Success',
            message: 'Patient created successfully!',
            data: PatientCreate,
            token
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};


// Find All Patients
exports.FindData = async function (req, res, next) {
    try {
        let PatientFind = await PATIENT.find();

        res.status(200).json({
            status: 'Success',
            message: 'Patients found successfully!',
            data: PatientFind
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// Find Patient by ID
exports.FindId = async function (req, res, next) {
    try {
        let PatientFind = await PATIENT.findById(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'Patient found successfully!',
            data: PatientFind
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// Delete Patient by ID
exports.PatientDelete = async function (req, res, next) {
    try {
        await PATIENT.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'Patient deleted successfully!'
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// Update Patient by ID
exports.PatientUpdate = async function (req, res, next) {
    try {

        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        let updatedPatient = await PATIENT.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            status: 'Success',
            message: 'Patient updated successfully!',
            data: updatedPatient
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};
