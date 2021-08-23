const { validate, Course } = require("../models/course");
const { Router } = require("express");
const router = Router();
// import admin from "../middleware/admin";
const _ = require("lodash");

// TODO: use admin middleware to restrict in-valid entries.
router.post("/", async (req, res) => {
  const { error } = validate(req.body.data);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let course = await Course.find({
    name: req.body.name,
    semester: req.body.semester,
    prof: req.body.prof,
  });

  if (course) {
    return res.status(400).send("Course already exists.");
  }

  course = new Course({
    name: req.body.name,
    semester: req.body.semester,
    prof: req.body.prof,
  });
  await course.save();

  res.send(await Course.find({ semester: req.body.semester }));
});

router.get("/", async (req, res) => {
  res.send(await Course.find({ semester: req.body.semester }));
});

module.exports = router;
