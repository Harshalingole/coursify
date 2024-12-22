import express, { Router } from "express";
import requestValidator from "../middleware/requestValidator.js";
import { loginSchema } from "@repo/schema/zodSchema";

const router:Router = express.Router()
router.post("login", requestValidator(loginSchema), (req, res) => {
  // Handle login logic here
  res.send("Login successful");
});
// router.post("/signup")
// router.get("/courses")
// router.post("/courses/:courseId")
// router.get("/purchasedCourses")

export default router