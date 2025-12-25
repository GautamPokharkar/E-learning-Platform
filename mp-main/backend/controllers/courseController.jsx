const Course = require('../models/courseModel');

// Create a new course
exports.createCourse = async (req, res) => {
  const { title, description, image } = req.body;

  try {
    const course = await Course.create({ title, description, image });
    res.status(201).json({ success: true, data: course });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json({ success: true, data: courses });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
