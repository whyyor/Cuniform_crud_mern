const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/Blog");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
//this will help us parse json so that we can access variables

app.use(cors());

mongoose.connect(process.env.MONGO_URL);

// Middleware to catch and handle errors
const handleErrors = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

app.get("/test", (req, res) => {
  res.json("test ok");
});

// GET route to retrieve all blogs
app.get(
  "/blogs",
  handleErrors(async (req, res) => {
    const blogs = await Blog.find({});
    res.json(
      blogs.map((blog) => {
        return {
          id: blog._id,
          title: blog.title,
          description: blog.description,
          category: blog.category,
        };
      })
    );
  })
);

// PUT route to create a new blog
app.put(
  "/blogs",
  handleErrors(async (req, res) => {
    const { title, description, category } = req.body;
    const newBlog = new Blog({ title, description, category });
    await newBlog.save();
    res.json(newBlog);
  })
);

// PUT route to update an existing blog
app.put(
  "/blogs/:id",
  handleErrors(async (req, res) => {
    const { title, description, category } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, description, category },
      { new: true }
    );
    res.json(updatedBlog);
  })
);

// DELETE route
app.delete(
  "/blogs/:id",
  handleErrors(async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    await Blog.findByIdAndDelete(id);
    res.json({ message: "Blog post deleted successfully" });
  })
);

app.listen(4000);
