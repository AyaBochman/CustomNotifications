const Configuration = require('../models/Configuration');

//Get all configurations
//GET /api/v1/configurations
exports.getConfigurations = async (req, res, next) => {
  try {
    const configurations = await Configuration.find();
    res.status(200).json({
      success: true,
      data: configurations[0],
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
