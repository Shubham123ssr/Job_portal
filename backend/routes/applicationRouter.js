import express from 'express';
import { employerGetAllApplication,JobSeekerDeleteApplication,JobSeekerGetAllApplication,postApplication } from '../controllers/applicationController.js';
import { isAuthorized } from '../middlewares/auth.js';
const router =express.Router();

router.get("/jobseeker/getall",JobSeekerGetAllApplication);
router.get("/employer/getall",employerGetAllApplication);
router.delete("/delete/:id",isAuthorized,JobSeekerDeleteApplication);
router.post("post",isAuthorized,postApplication);

export default router;