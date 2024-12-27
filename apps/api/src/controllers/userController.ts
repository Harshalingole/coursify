import { Request, Response } from "express";
import { prisma } from "@repo/db";

/**
 * @route POST /api/user/signup
 * @desc User signup using email & password
 * @access Public
 * @param {object} body - { email: string, password: string, name: string }
 */
export const userSignup = async (req: Request, res: Response) => {
  
  try {
    
    const user = await prisma.user.create({
      data: req.body,
    });
    res.status(201).json({ data: user, msg: "User created successfully" });
  } catch (error) {
    // res.status(500).send({ error: error.message });
  }
};

/**
 * @route POST /api/user/login
 * @desc User login using email & password
 * @access Public
 * @param {object} body - { email: string, password: string }
 * @returns {200} Auth token
 * @returns {401} Invalid credentials
 * @returns {500} Server error
 */
export const userLogin = async (req: Request, res: Response) => {
  try {
    // Logic for user login
  } catch (error) {
    // res.status(500).send({ error: error.message });
  }
};

/**
 * @route GET /api/user/userCourses
 * @desc Fetch list of user's purchased courses
 * @access Private
 * @returns {200} List of courses
 * @returns {401} Unauthorized
 * @returns {500} Server error
 */
export const userCourses = async (req: Request, res: Response) => {
  try {
    // Logic for fetching user courses
  } catch (error) {
    // res.status(500).send({ error: error.message });
  }
};

/**
 * @route GET /api/user/course/:id
 * @desc Fetch details of a specific purchased course
 * @access Private
 * @param {string} id - Course ID (path param)
 * @returns {200} Course details
 * @returns {404} Course not found
 * @returns {401} Unauthorized
 * @returns {500} Server error
 */
export const userCourseDetail = async (req: Request, res: Response) => {
  try {
    // Logic for fetching course details
  } catch (error) {
    // res.status(500).send({ error: error.message });
  }
};
