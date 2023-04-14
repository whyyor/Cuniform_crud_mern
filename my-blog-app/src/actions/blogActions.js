import axios from "axios";
import { ADD_BLOG, DELETE_BLOG, GET_BLOGS, UPDATE_BLOG } from "./types";

const api = axios.create({
  baseURL: "http://localhost:4000", // Update this to the correct port
});

export const getBlogs = () => async (dispatch) => {
  const res = await api.get("/blogs");
  dispatch({
    type: GET_BLOGS,
    payload: res.data,
  });
};

export const addBlog = (blogData) => async (dispatch) => {
  const res = await api.put("/blogs", blogData);
  dispatch({
    type: ADD_BLOG,
    payload: res.data,
  });
};

export const updateBlog = (blogData, id) => async (dispatch) => {
  const res = await api.put(`/blogs/${id}`, blogData);
  dispatch({
    type: UPDATE_BLOG,
    payload: res.data,
  });
};

export const deleteBlog = (id) => async (dispatch) => {
  await api.delete(`/blogs/${id}`);
  dispatch({
    type: DELETE_BLOG,
    payload: id,
  });
};
