import React, { useEffect, useState } from "react";
import { getBlogs } from "../actions/blogActions";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog, updateBlog } from "../actions/blogActions";

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const location = useLocation();

  // search
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const filterBlogs = () => {
    if (!searchTerm) {
      setFilteredBlogs(blogs.blogs);
    } else {
      const filtered = blogs.blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  const handleUpdate = (id, updatedBlog) => {
    dispatch(updateBlog(updatedBlog, id));
  };

  useEffect(() => {
    dispatch(getBlogs());
    filterBlogs();
  }, [dispatch, blogs, searchTerm]);

  return (
    <div style={{ width: "60%" }} className="mx-auto">
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control mb-3"
          style={{width: "60%"}}
        />
        {location.pathname !== "/create-blog" && (
          <Link to="/create-blog">
            <Button variant="primary">Create Blog</Button>
          </Link>
        )}
      </div>
      {filteredBlogs.map((blog) => (
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
                <Link to={`/edit-blog/${blog.id}`}>
                  <Button variant="outline-primary" className="mx-2">
                    Edit
                  </Button>
                </Link>
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
