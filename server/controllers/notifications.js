const Notification = require('../models/Notification');

//Get all notifications
//GET /api/v1/notifications
exports.getNotifications = async (req, res, next) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
