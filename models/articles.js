const { Schema, model } = require("mongoose");

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
  authorname: {
    type: String,
    required: true,
  },
});

const Articles = model("Article", articleSchema);

module.exports = Articles;
