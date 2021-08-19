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
    year: {
        type: String,
        required: true,
    },
    prof: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
    },
    id: {
        type: String,
        required: true,
    },
});

const Course = mongoose.model("Course", courseSchema);

function insertCourse(data) {
    const id = data.name + `${data.semester}` + `${data.year}` + data.prof;
    return new Course({'name': data.name, 'semester': data.semester, 'year': data.year, 'prof': data.prof, 'id': id});
}

function validateCourse(course) {
    const schema = {
      name: Joi.string().min(2).max(50).required(),
      semester: Joi.number().required(),
      year: Joi.number().required(),
      prof: Joi.string().min(2).max(50).required(),
    };
  
    return Joi.validate(course, schema);
}

exports.Course = Course;
exports.validate = validateCourse;
exports.insertCourse = insertCourse;