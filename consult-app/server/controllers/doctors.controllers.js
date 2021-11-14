const doctorModel = require('../models/doctor.models.js');

exports.getDoctors = async (req, res) => {
    try {
        const doctors = await doctorModel.find();
        res.status(200);
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

