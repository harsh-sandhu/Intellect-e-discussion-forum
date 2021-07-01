const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Ques = mongoose.model("Ques");
const User = mongoose.model("User");
const requireLogin = require("../middleware/requireLogin");

router.post("/postQues", requireLogin, async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res
      .status(422)
      .json({ error: "Please fill the Question field properly" });
  }
  req.body.user.password = undefined;
  const ques = new Ques({
    question,
    askedBy: req.body.user,
  });
  try {
    await ques.save();
    res.json(ques);
  } catch (err) {
    console.log(ques);
  }
});

router.get("/getQues", requireLogin, async (req, res) => {
  try {
    const ques = await Ques.find().populate("askedBy", "_id name branch batch").sort("-createdAt");
    if (ques) {
      res.json({ ques });
    }
  } catch (err) {
    console.log(err);
  }
});

router.put("/addanswer", requireLogin, (req, res) => {
  const answer = {
    text: req.body.text,
    name: req.user.name,
    askedBy: req.user._id,
  };
  Ques.findByIdAndUpdate(
    req.body.ansId,
    {
      $push: { answers: answer },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/deleteAnswer/:ansId", requireLogin, (req, res) => {
  let answer = [];
  Ques.findOne({ _id: req.body.userId })
    .then((ques) => {
      ques.answers.map((ans) => {
        if (ans._id != req.params.ansId) {
          answer.push(ans);
        }
      });
    })
    .then((result) => {
      Ques.findByIdAndUpdate(
        req.body.userId,
        {
          $set: { answers: answer },
        },
        {
          new: true,
        }
      ).exec((err, result) => {
        if (err) {
          return res.status(422).json({ error: err });
        } else {
          res.json(result);
        }
      });
    });
});
router.delete('/deleteQues/:quesId',requireLogin,(req,res)=>{
    Ques.findOne({_id:req.params.quesId})
    .populate("askedBy","_id")
    .exec((err,ques)=>{
        if(err||!ques){
            return res.status(422).json({error:err})
        }
        if(ques.askedBy._id.toString()===req.user._id.toString()){
            ques.remove()
            .then(result=>{
                res.json("Post Deleted Successfully")
            }).catch(err=>{
                console.log(err)
            })
        }
    })
})

module.exports = router;
