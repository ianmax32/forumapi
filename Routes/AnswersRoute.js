const express = require("express");
const router = express.Router();
const Question = require("../Models/Question");

router.get("/:id", async (req, res) => {
  try {
    const question = await Question.find({ _id: req.params.id });
    res.json({ question });
  } catch (error) {
    res.json({ message: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const answer = req.body.answer;
    const question = await Question.updateOne(
      { _id: req.params.id },
      { $push: { answers: answer } }
    );
    res.json(question);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
