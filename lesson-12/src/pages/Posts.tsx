import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import { AuthContext } from "../context/AuthContext";

const Posts = () => {
  const { currentUser } = useContext(AuthContext);
  const context = useContext(PostContext);
  if (!context) throw new Error("Cannot use context outside of provider");
  const { posts, addComment, updatePost } = context;

  const [comment, setComment] = useState<string>("");
  const [updatedText, setUpdatedText] = useState<string>("");
  const [editablePostId, setEditablePostId] = useState<number | null>(null);

  const handleUpdate = (postId: number) => {
    updatePost(postId, updatedText);
    setEditablePostId(null);
  };

  return (
    <div className="max-w-4xl">
      {posts.map((post, i) => {
        const isEditable = post.author === currentUser.email;

        return (
          <div
            key={i}
            className="mb-8 p-6 border border-gray-200 rounded-lg shadow-md"
          >
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-6">{post.title}</h1>
                <p className="text-sm text-gray-500 my-3">By {post.author}</p>
              </div>

              {isEditable && (
                <button
                  className="rounded-md mb-3 mr-2 text-xl"
                  onClick={() => setEditablePostId(post.id)}
                >
                  ✎
                </button>
              )}
            </div>
            {editablePostId === post.id ? (
              <div className="my-5">
                <textarea
                  value={updatedText}
                  onChange={(e) => setUpdatedText(e.target.value)}
                  className="border border-gray-300 p-2 rounded-md w-full mb-3"
                ></textarea>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => handleUpdate(post.id)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                  onClick={() => setEditablePostId(null)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <p className="mb-5">{post.text}</p>
            )}

            {post.comments.map((comment, i) => {
              return (
                <div
                  key={i}
                  className="border border-gray-300 p-4 mb-3 rounded-md bg-gray-50"
                >
                  <p className="text-sm text-gray-600 font-medium">
                    {comment.author}
                  </p>
                  <p>{comment.text}</p>
                </div>
              );
            })}

            <div className="flex items-center">
              <input
                type="text"
                placeholder="Add a comment"
                className="border border-gray-300 p-2 rounded-md w-full"
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  addComment(post.id, comment), setComment("");
                }}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
