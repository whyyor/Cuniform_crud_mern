import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import CreateBlog from "./components/createBlog";

function App() {
  return (
    <BrowserRouter>
      <Container className="d-flex flex-column align-items-center py-3">
        <h1>Blogs</h1>
      </Container>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create-blog" element={<CreateBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


