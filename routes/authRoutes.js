import express from "express";
import {
  registerController,
  loginController,
  currentUserController,
} from "../controllers/authCtrl";
import { requireSignin } from "../middlewares/";
//router object
const router = express.Router();

//routes
//register route
router.post("/register", registerController);

//login route
router.post("/login", loginController);

// currentUser route
router.get("/currentuser", requireSignin, currentUserController);

export default router;
