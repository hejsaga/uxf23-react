import React from "react";
import { useState } from "react";

export const Form = () => {
  const [posts, setPosts] = useState([]);
  const [userInput, setUserInput] = useState({
    title: "",
    bodyText: "",
    author: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput) {
      const newPost = {
        id: Date.now(),
        title: userInput.title,
        bodyText: userInput.bodyText,
        author: "Name from context",
      };
      setPosts([...posts, newPost]);
    }
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border-2 border-gray-300 rounded mr-5 p-1"
        type="text"
        placeholder="Title"
        name="title"
        value={userInput.title}
        onChange={handleChange}
      />
      <input
        className="border-2 border-gray-300 rounded mr-5 p-1"
        type="text"
        placeholder="Text"
        name="bodyText"
        value={userInput.bodyText}
        onChange={handleChange}
      />
      <button type="submit">Create post</button>
    </form>
  );
};
