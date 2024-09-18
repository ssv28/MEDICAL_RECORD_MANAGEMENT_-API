const DOCTOR = require('../Models/doctors');


exports.DoctorCreate = async function (req, res, next) {
    try {

        let DoctorCreate = await DOCTOR.create(req.body);

        res.status(200).json({
            status: 'Success',
            message: 'Doctor created successfully!',
            data: DoctorCreate,
        });

    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};


// Find All DOCTOR
exports.FindData = async function (req, res, next) {
    try {
        let DoctorFind = await DOCTOR.find().populate("patients");

        res.status(200).json({
            status: 'Success',
            message: 'Doctors found successfully!',
            data: DoctorFind
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// Find DOCTOR by ID
exports.FindId = async function (req, res, next) {
    try {
        let DoctorFind = await DOCTOR.findById(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'Doctor found successfully!',
            data: DoctorFind
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// Delete DOCTOR by ID
exports.DoctorDelete = async function (req, res, next) {
    try {
        await DOCTOR.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'Doctor deleted successfully!'
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// Update DOCTOR by ID
exports.DoctorUpdate = async function (req, res, next) {
    try {
        let updatedDoctor = await DOCTOR.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            status: 'Success',
            message: 'Doctor updated successfully!',
            data: updatedDoctor
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};
