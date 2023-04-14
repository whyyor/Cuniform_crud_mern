import React from "react";
import { Card } from "react-bootstrap";

const Blog = ({ blog }) => {
  return (
    <Card className="w-50 mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {blog.category}
            </Card.Subtitle>
          </div>
          <div>
            <Card.Text>{blog.date}</Card.Text>
          </div>
        </div>
        <Card.Text>{blog.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Blog;
