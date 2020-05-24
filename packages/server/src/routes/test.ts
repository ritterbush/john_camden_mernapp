const express = require("express");
const router = express.Router();

const Test = require("../models/Test");

/**
 * @api {get} /test/:id Request Test Object
 * @apiName GetTest
 * @apiGroup Test
 *
 * @apiParam {Number} id ostensible URL of the test object
 *
 * @apiSuccess {Number} self ostensible URL of the test object
 * @apiSuccess {String} firstmorpheme First morpheme of the test object.
 * @apiSuccess {String} secondmorpheme  Second morpheme of the test object.
 *
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 */

router.get("/", async (req, res) => {
  console.log(req.query);
  try {
    const testObject = await Test.find({
      self: `/api/test?id=${req.query.id}`,
    }).sort({
      date: -1,
    });
    res.json({ testObject });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.post("/", [], async (req, res) => {
  const self = `/api/test?id=${req.query.id}`;
  const { firstmorpheme, secondmorpheme } = req.body;

  try {
    const newTest = new Test({
      self,
      firstmorpheme,
      secondmorpheme,
    });
    const test = await newTest.save();
    res.json(test);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
