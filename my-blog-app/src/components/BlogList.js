import React, { useEffect } from "react";
import Blog from "./Blog";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteBlog, updateBlog } from "../actions/blogActions";

const BlogList = ({ blogs }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  const handleUpdate = (id, updatedBlog) => {
    dispatch(updateBlog(updatedBlog, id));
  };

  useEffect(() => {
    console.log(blogs.map((blog) => `${blog.id}`));
  }, [blogs]);

  return (
    <div>
      {blogs.map((blog) => (
        <Card key={blog.id} className="my-3">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {blog.category}
                </Card.Subtitle>
              </div>
              <div>
                <Button
                  variant="outline-primary"
                  className="mx-2"
                  onClick={() =>
                    handleUpdate(blog.id, {
                      title: "New Title",
                      description: "New Description",
                      category: "New Category",
                    })
                  }
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
            <Card.Text>{blog.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
