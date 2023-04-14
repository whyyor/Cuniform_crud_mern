import {
  ADD_BLOG,
  DELETE_BLOG,
  GET_BLOGS,
  UPDATE_BLOG,
} from "../actions/types";

const initialState = {
  blogs: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case UPDATE_BLOG:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog._id === action.payload._id ? action.payload : blog
        ),
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
    default:
      return state;
  }
}
