import React from "react";
import Blog from "./Blog";
import { Button, Card } from "react-bootstrap";

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <Card key={blog._id} className="my-3">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {blog.category}
                </Card.Subtitle>
              </div>
              <div>
                <Button variant="outline-primary" className="mx-2">
                  Edit
                </Button>
                <Button variant="outline-danger">Delete</Button>
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
