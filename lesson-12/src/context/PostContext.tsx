import { createContext, useContext, useState } from "react";
import React from "react";
import { AuthContext } from "./AuthContext";

type Comment = {
  author: string;
  text: string;
};

type Post = {
  id: number;
  title: string;
  text: string;
  author: string;
  comments: Comment[];
};

type NewPost = {
  title: string;
  text: string;
};

type PostContextType = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  updatePost: (id: number, updatedText: string) => void;
  addComment: (postId: number, text: string) => void;
};

export const PostContext = createContext<PostContextType | undefined>(
  undefined
);

export const PostProvider = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Exploring the Mountains",
      text: "I recently went hiking in the Rocky Mountains. The views were breathtaking and the experience was unforgettable.",
      author: "Jane Doe",
      comments: [
        {
          author: "John Smith",
          text: "Sounds amazing! I've always wanted to visit.",
        },
        { author: "Emily Davis", text: "Great post! Any tips for beginners?" },
      ],
    },
    {
      id: 2,
      title: "The Future of Technology",
      text: "Technology is evolving at an unprecedented pace. From AI to quantum computing, the future holds incredible possibilities.",
      author: "Alex Johnson",
      comments: [
        {
          author: "Chris Lee",
          text: "AI is fascinating, but it also scares me a little.",
        },
        {
          author: "Patricia Brown",
          text: "Quantum computing is going to change everything!",
        },
      ],
    },
    {
      id: 3,
      title: "Healthy Eating Habits",
      text: "Eating healthy doesn't have to be difficult. Here are some simple tips to help you get started on your journey to better health.",
      author: "Megan Wilson",
      comments: [
        { author: "David Harris", text: "Thanks for the tips! Very helpful." },
      ],
    },
    {
      id: 4,
      title: "Traveling the World",
      text: "Traveling has opened my eyes to so many different cultures and experiences. Here are some highlights from my recent trips.",
      author: "Michael Scott",
      comments: [
        { author: "Sarah Connor", text: "Wow, your travels sound incredible!" },
        {
          author: "James Bond",
          text: "I'm planning a trip soon. Any recommendations?",
        },
      ],
    },
    {
      id: 5,
      title: "The Art of Meditation",
      text: "Meditation has numerous benefits for both the mind and body. Here's how to get started and make it a part of your daily routine.",
      author: "Linda Baker",
      comments: [
        {
          author: "Tom Cruise",
          text: "Meditation has changed my life. Great post!",
        },
        {
          author: "Anna Kendrick",
          text: "I've been wanting to start meditating. Thanks for the guide!",
        },
      ],
    },
    {
      id: 6,
      title: "My blog post",
      text: "A beautiful text for this post.",
      author: "testing@testing.se",
      comments: [
        {
          author: "Tom Cruise",
          text: "Cool.",
        },
      ],
    },
  ]);

  const addPost = (newPost: NewPost) => {
    const post: Post = {
      id: posts.length + 1,
      author: currentUser.email,
      comments: [],
      ...newPost,
    };
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  const updatePost = (id: number, updatedText: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, text: updatedText } : post
      )
    );
  };

  const addComment = (postId: number, text: string) => {
    const newComment = { author: currentUser.email, text };

    setPosts((posts) =>
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  };

  return (
    <PostContext.Provider value={{ posts, setPosts, updatePost, addComment }}>
      {props.children}
    </PostContext.Provider>
  );
};
