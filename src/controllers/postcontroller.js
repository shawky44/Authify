import { createPoatSchema } from "../middlewares/validator.js";
import Post from "../models/postModel.js";

export const getPosts = async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const postsPerPage = 10;
    const totalPosts = await Post.countDocuments();
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const result = await Post.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * postsPerPage)
      .limit(postsPerPage)
      .populate({ path: "author", select: "email" });

    res.status(200).json({
      success: true,
      message: "posts",
      data: result,
      pagination: {
        currentPage: page,
        totalPages,
        totalPosts,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const singlePosts = async (req, res) => {
  try {
    const { _id } = req.query;
    const result = await Post.findOne({ _id }).populate({
      path: "author",
      select: "email",
    });
    if (!result) {
      return res
        .status(401)
        .json({ success: false, message: "post unavailable" });
    }
    res.status(200).json({
      success: true,
      message: "single post",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  const { title, description } = req.body;
  const { userId } = req.user;
  try {
    const { error, value } = createPoatSchema.validate({
      title,
      description,
      author: userId,
    });
    if (error) {
      return res
        .status(401)
        .json({ success: false, message: error.details[0].message });
    }
    const result = await Post.create({
      title: title,
      description: description,
      author: userId,
    });
    res.status(201).json({
      success: true,
      message: "post created",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (req, res) => {
  const { _id } = req.query;
  const { title, description } = req.body;
  const { userId } = req.user;
  try {
    const { error, value } = createPoatSchema.validate({
      title,
      description,
      author: userId,
    });
    if (error) {
      return res
        .status(401)
        .json({ success: false, message: error.details[0].message });
    }
    const existingPost = await Post.findOne({ _id });
    if (!existingPost) {
      return res
        .status(401)
        .json({ success: false, message: "post unavailable" });
    }
    if (existingPost.author.toString() !== userId) {
      return res.status(403).json({ success: false, message: "Unauthorised" });
    }
    existingPost.title = title;
    existingPost.description = description;

    const result = await existingPost.save();

    res.status(200).json({
      success: true,
      message: "post updated",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
import mongoose from "mongoose";

export const deletePost = async (req, res) => {
  const { _id } = req.query;
  const { userId } = req.user;

  try {
    // 1- تحقق إن الـ _id valid
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid post ID" });
    }

    // 2- دور على البوست
    const existingPost = await Post.findById(_id);
    if (!existingPost) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    // 3- تحقق من المالك
    if (existingPost.author.toString() !== userId) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    // 4- امسح البوست
    await Post.deleteOne({ _id });

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
