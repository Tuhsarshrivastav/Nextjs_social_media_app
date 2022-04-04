import postModel from "../models/postModel";
import cloudinary from "cloudinary";

//configure
cloudinary.config({
  cloud_name: "hydra123",
  api_key: 335986569295115,
  api_secret: "8cTN6wy23WH0k4U-GYd19dNMU48",
});

export const createPostController = async (req, res) => {
  //   console.log(req.body);
  const { content, image } = req.body;
  //validation
  if (!content.length) {
    return res.status(400).send("Content is Required");
  }
  try {
    const post = new postModel({ content, image, postedBy: req.user._id });
    post.save();
    res.status(201).send(post);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error, Please Try Again!");
  }
};

//image upload ctrl
export const imageUploadController = async (req, res) => {
  // console.log("Image details", req.files);
  try {
    const result = await cloudinary.uploader.upload(req.files.image.path);
    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userPostsController = async (req, res) => {
  try {
    const posts = await postModel
      .find({ postedBy: req.user._id })
      .populate("postedBy", "_id name image")
      .sort({ createdAt: -1 })
      .limit(10);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};
