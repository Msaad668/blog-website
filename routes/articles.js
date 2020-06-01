const express = require("express");

const router = express.Router();
const Articles = require("../models/articles");

//request get all articles
router.get("/", (req, res) => {
  Articles.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).res.json(`Error : ${err}`));
});

//add new article
router.post("/add", (req, res) => {
  const newArticle = new Articles({
    title: req.body.title,
    article: req.body.article,
    authorname: req.body.authorname,
  });

  newArticle
    .save()
    .then(() => res.json("added successfully"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//find article by id:

router.get("/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// find by id and update
router.put("/update/:id", (req, res) => {
  Articles.findById(req.params.id)
    .then((art) => {
      (art.title = req.body.title),
        (art.article = req.body.article),
        (art.authorname = req.body.authorname);

      art
        .save()
        .then(() => res.json("article updated succesfully"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//find by id and delete
router.delete("/:id", (req, res) => {
  Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted succesfully"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
