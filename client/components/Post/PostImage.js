import React from "react";

const PostImage = ({ post }) => {
  return (
    <div>
      {post.image ? (
        <img
          src={post.image && post.image.url}
          alt={post.postedBy.name}
          height={300}
          className="mt-1"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default PostImage;
