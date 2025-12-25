const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');

const adminMiddleware = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, error: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findById(decoded.id);
    if (req.admin && req.admin.role === 'admin') {
      next();
    } else {
      res.status(403).json({ success: false, error: 'Not authorized as admin' });
    }
  } catch (err) {
    res.status(401).json({ success: false, error: 'Token is not valid' });
  }
};

module.exports = adminMiddleware;
