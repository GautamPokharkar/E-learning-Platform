const Admin = require('../models/adminModel');
const generateToken = require('../utils/generateToken');

// Register a new admin
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const admin = await Admin.create({ name, email, password });
    res.status(201).json({ success: true, data: admin });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Login admin
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.matchPassword(password))) {
      return res.status(400).json({ success: false, error: 'Invalid credentials' });
    }

    const token = generateToken(admin._id, 'admin');

    res.json({ success: true, token });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
