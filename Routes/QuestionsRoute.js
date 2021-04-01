const express = require("express");
const Question = require("../Models/Question");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json({ questions });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:questionId", async (req, res) => {
  try {
    const question = await Question.find({ _id: req.params.questionId });
    res.json({ question });
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const question = new Question({
    question: req.body.question,
    username: req.body.username,
    answers: req.body.answers,
    likes: req.body.likes,
    date:new Date().toLocaleDateString()
  });

  await question
    .save()
    .then(() => {
      console.log("question saved");
      res.json({ question });
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

router.patch("/:id", async (req, res) => {
  const question = await Question.updateOne(
    { _id: req.params.id },
    { $set: { answers: req.body.answers } }
  );
  question
    .save()
    .then(() => res.json(questi))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
