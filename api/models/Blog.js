const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
});

const BlogModel = mongoose.model("Blog", blogSchema);

module.exports = BlogModel;
