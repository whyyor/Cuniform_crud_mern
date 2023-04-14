import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBlog } from "../actions/blogActions";
import { Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // get the id parameter from the URL
  const blog = useSelector((state) =>
    state.blogs.blogs.find((b) => b.id === id)
  );
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        description: blog.description,
        category: blog.category,
      });
    } else {
      console.log(`id not found`);
    }
  }, [blog, id]);

  const { title, description, category } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id, formData);
    dispatch(updateBlog(formData, id));
    navigate("/");
  };

  return (
<div style={{ width: "60%" }} className="mx-auto">
      <h1 className="my-4">Edit Blog</h1>
      {blog ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              value={title}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter description"
              name="description"
              value={description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category"
              name="category"
              value={category}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditBlog;
