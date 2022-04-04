import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "./../../components/Layout/index";
import UserRoute from "../../routes/UserRoute";
import CreatePost from "../../components/Post/CreatePost";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostList from "../../components/Post/PostList";
const dashboard = () => {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const [state] = useContext(UserContext);
  const router = useRouter();
  //post handler
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/createpost", { content, image });
      toast.success("Post Created!");
      setImage({});
      setContent("");
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };
  //handle image upload
  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    console.log([...formData]);
    setUploading(true);
    try {
      const { data } = await axios.post("/upload-image", formData);
      // console.log("Image Upload", data);
      setUploading(false);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect for posts
  useEffect(() => {
    if (state && state.token) {
      fatchPosts();
    }
  }, [state && state.token]);

  // fatchuserPosts
  const fatchPosts = async () => {
    try {
      const { data } = await axios.get("/user-post");
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <UserRoute>
        <div className="row">
          <div className="col-md-8">
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <CreatePost
              content={content}
              setContent={setContent}
              handlePostSubmit={handlePostSubmit}
              handleImage={handleImage}
              uploading={uploading}
              image={image}
            />
            <br />
            <PostList posts={posts} />
          </div>
          <div className="col-md-4">sidebar</div>
        </div>
      </UserRoute>
    </Layout>
  );
};

export default dashboard;
