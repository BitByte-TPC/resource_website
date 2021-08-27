const { validate, Resource } = require("../models/resource");
const {User} = require("../models/user");
const { Router } = require("express");
const router = Router();
const _ = require("lodash");
const auth = require("../middleware/auth");

router.post('/', auth, async (req, res) => {
    console.log(req.user);
    req.body.uploaded_by = req.user.name;
    const { error } = validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let resource = await Resource.findOne({
        name: req.body.name,
        id: req.body.id,
        year: req.body.name,
        uploaded_by: req.body.uploaded_by,
    });

    if (resource) {
        return res.status(400).send("Resource already exists, please select an alternate name.");
    }

    resource = new Resource({
        name: req.body.name,
        id: req.body.id,
        year: req.body.name,
        uploaded_by: req.body.uploaded_by,
        link: req.body.link,
    })
    await resource.save();
    res.send(await Resource.find({id: req.body.id}));
});

router.get('/', async (req, res) => {
    res.send(await Resource.find({ id: req.body.semester }));
});

module.exports = router;