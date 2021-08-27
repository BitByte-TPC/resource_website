const { validate, Course } = require("../models/course");
const { Router } = require("express");
const router = Router();
// import admin from "../middleware/admin";
const _ = require("lodash");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

// TODO: use admin middleware to restrict in-valid entries.
router.post("/", auth, admin, async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let course = await Course.findOne({
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
