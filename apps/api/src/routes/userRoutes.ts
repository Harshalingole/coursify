import express, { Router } from "express";
import requestValidator from "../middleware/requestValidator.js";
import { loginSchema } from "@repo/schema/zodSchema";
import { userCourseDetail, userCourses, userLogin, userSignup } from "../controllers/userController.js";
import authenticate from "../middleware/authenticate.js";
import authorizeRoles from "../middleware/authorize.js";

const router: Router = express.Router();

/**
 * @route POST /api/user/login
 * @desc User login
 * @access Public
 * @param {object} body - { userName: string, password: string }
 * @returns {200} Auth token
 * @returns {400} Validation error
 * @returns {401} Invalid credentials
 */
router.post("/login", requestValidator(loginSchema), userLogin);

/**
 * @route POST /api/user/signup
 * @desc User signup
 * @access Public
 * @param {object} body - { userName: string, password: string }
 * @returns {201} User created
 * @returns {400} Validation error
 */
router.post("/signup", requestValidator(loginSchema), userSignup);

/**
 * @route GET /api/user/courses
 * @desc Fetch list of user purchase courses
 * @access Private
 * @returns {200} List of courses
 * @returns {401} Unauthorized
 */
router.get("/courses", authenticate,authorizeRoles(["user"]),userCourses);

/**
 * @route POST /api/user/courses/:courseId
 * @desc Get course details
 * @access Private
 * @param {string} courseId - Course ID (path param)
 * @returns {200} Course details
 * @returns {404} Course not found
 * @returns {401} Unauthorized
 */
router.post("/courses/:courseId",authenticate,authorizeRoles(["user"]), userCourseDetail);

export default router;
