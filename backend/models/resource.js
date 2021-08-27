const Joi = require("joi");
const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  id: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  uploaded_by: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  link: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  year: {
      type: String,
      required: true,
      length: 4,
  }
});

const Resource = mongoose.model("Resource", ResourceSchema);

function validateResource(resource) {
  const schema = {
    name: Joi.string().min(2).max(50).required(),
    id: Joi.string().min(2).max(50).required(),
    uploaded_by: Joi.string().min(2).max(50).required(),
    link: Joi.string().min(2).max(50).required(),
    year: Joi.string().length(4).required(),
  };

  return Joi.validate(resource, schema);
}

exports.Resource = Resource;
exports.validate = validateResource;
