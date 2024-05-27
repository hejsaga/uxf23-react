import PageLayout from "../components/PageLayout";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/dataFetching";

const LandingPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  /* const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); */

  /* useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, []); */

  if (isError)
    return <PageLayout title="Home">Failed to fetch posts</PageLayout>;
  if (isLoading) return <PageLayout title="Home">Loading...</PageLayout>;

  return (
    <PageLayout title="Home">
      <h1 className="mb-10">Posts</h1>

      {data &&
        data.map((post) => {
          return (
            <div key={post.id} className="bg-gray-100 mb-5 rounded-md p-5">
              <h2 className="font-bold mb-2">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
    </PageLayout>
  );
};

export default LandingPage;
