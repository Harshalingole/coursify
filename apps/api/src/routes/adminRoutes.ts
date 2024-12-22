import express, { Router }  from "express";

const router:Router = express.Router()

router.post('/login')
router.post('/signup')
router.post('/courses')
router.put('/courses/:courseId')
router.get('/courses')


export default router