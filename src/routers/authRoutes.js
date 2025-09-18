import express from "express";
import {
  signup,
  signin,
  signout,
  sendVerificationCode,
  verifyVerificationCode,
  changePassword,
  sendForgetPasswordCode,
  verifyForgetPasswordCode,
} from "../controllers/authcontroller.js";
import { identifier } from "../middlewares/identification.js";
const router = express.Router();

// Define your authentication routes here

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", identifier, signout);

router.patch("/sendVerificationCode", identifier, sendVerificationCode);
router.patch("/verifyVerificationCode", identifier, verifyVerificationCode);

router.patch("/changePassword", identifier, changePassword);

router.patch("/verifyforgetPasswordCode", verifyForgetPasswordCode);
router.patch("/sendforgetPasswordCode", sendForgetPasswordCode);

export default router;
