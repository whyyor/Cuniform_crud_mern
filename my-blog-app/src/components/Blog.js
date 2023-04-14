
import React from "react";

const Blog = ({ blog }) => {
  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
      <p>{blog.category}</p>
    </div>
  );
};

export default Blog;
