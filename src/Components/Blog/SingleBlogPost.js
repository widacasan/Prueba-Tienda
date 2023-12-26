import React from "react";
import { useParams } from "react-router-dom";
import BlogPost from "./BlogPost";

const SingleBlogPost = ({ blogPosts }) => {
  const { postId } = useParams();
  const post = blogPosts[postId];

  if (!post) {
    return <p>La publicación no existe.</p>;
  }

  return <BlogPost {...post} />;
};

export default SingleBlogPost;
