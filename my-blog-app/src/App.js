import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "./actions/blogActions";
import BlogList from "./components/BlogList";

function App() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  let firstBlog = blogs[0];

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>All Blogs</h1>
      {blogs.blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}

export default React.memo(App);
