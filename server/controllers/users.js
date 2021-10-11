const User = require('../models/User');

//Get users
//GET /api/v1/users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

//Create user
//POST /api/v1/users
exports.createUser = async (req, res, next) => {
  try {
    let user = await User.create({});
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

//Update user
//PUT /api/v1/users/:id
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      res.status(404).json({
        success: false,
        error: err.message,
      });
    }
    res.status(200).json({ success: true, data: user });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
