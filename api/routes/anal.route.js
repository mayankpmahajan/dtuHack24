import express from "express";
import { postForm } from "../controllers/anal.controller.js";


const router = express.Router();


router.post("/form", postForm);

export default router;