// You will add code in this file

import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";
import CommentInput from "../CommentSection/CommentInput";

const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.post.likes)
  const incrementLike = () => {
    setLikes(likes + 1);
  }

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection incrementLike={incrementLike} likes={likes} />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
      <CommentInput/>
    </div>
  );
};

export default Post;
