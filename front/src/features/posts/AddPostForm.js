import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNewPost } from "./postsSlice";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title && content) {
            dispatch(addNewPost({  id:nanoid(), title, content } ));
            setTitle("");
            setContent("");
            navigate("/");
        }
    }

  return (
    <div>
        <h3> Add Post</h3>
        <form>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Content</label>
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            <button type="button" onClick={handleSubmit} >Submit</button>
        </form>
    </div>
  )
}

export default AddPostForm