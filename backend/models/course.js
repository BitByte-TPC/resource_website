const Joi = require("joi");
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  semester: {
    type: Number,
    required: true,
  },
  prof: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
});

const Course = mongoose.model("Course", courseSchema);

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(2).max(50).required(),
    semester: Joi.number().required(),
    prof: Joi.string().min(2).max(50).required(),
  };

  return Joi.validate(course, schema);
}

exports.Course = Course;
exports.validate = validateCourse;
