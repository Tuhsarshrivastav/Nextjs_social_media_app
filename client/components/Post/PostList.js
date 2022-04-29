import React from "react";
import moment from "moment";
import { useRouter } from "next/router";
import renderHTML from "react-render-html";
import PostImage from "./PostImage";
import { BsSuitClubFill, BsSuitHeart } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { FaComment, FaEdit, FaTrash } from "react-icons/fa";

const PostList = ({ posts }) => {
  const defaultImage = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post._id}>
            <div className="card mb-5">
              <div className="card-header">
                <div>
                  <img
                    src={defaultImage}
                    alt="userpic"
                    height={30}
                    width={30}
                  />
                  <span className="ms-2">{post.postedBy.name}</span>
                  <span className="ms-3">
                    {moment(post.createdAt).fromNow()}
                  </span>
                </div>
              </div>
              <div className="card-body">
                <div>{renderHTML(post.content)}</div>
                <PostImage post={post} />
              </div>
              <div className="card-footer">
                <div className="d-flex flex-row m-2">
                  <p>
                    <BsSuitHeart color="red" size={25} /> 3 Likes
                  </p>
                  &nbsp; &nbsp;
                  <p>
                    <GoComment size={25} /> 3 Comments
                  </p>
                  <div className="ms-4">
                    <FaEdit size={25} /> &nbsp; &nbsp;
                    <FaTrash color="red" size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostList;
