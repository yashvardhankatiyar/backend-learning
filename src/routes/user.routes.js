import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { asyncHandler } from "./path/to/your/utils/asyncHandler.js";

const router = Router();

router.route("/register").post(registerUser)



export default router;