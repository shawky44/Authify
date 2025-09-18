import express from "express";
import {getPosts,createPost,singlePosts,updatePost,deletePost} from "../controllers/postcontroller.js";
import { identifier } from "../middlewares/identification.js";
const router = express.Router();

// Define your authentication routes here

router.get("/all-posts", getPosts);
router.get("/single-post", singlePosts);
router.post("/create-post", identifier, createPost);

router.put("/update-post", identifier, updatePost);
router.delete("/delete-post", identifier, deletePost);

export default router;
