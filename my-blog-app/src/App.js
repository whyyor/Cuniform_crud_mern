import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "./actions/blogActions";
import BlogList from "./components/BlogList";
import { Container, Col } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  let firstBlog = blogs[0];

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);


  return (
    <Container className="d-flex flex-column align-items-center py-3">
      <h1>All Blogs</h1>
      <Col xs={12}>
        <BlogList blogs={blogs.blogs} />
      </Col>
    </Container>
  );
}

export default App;
