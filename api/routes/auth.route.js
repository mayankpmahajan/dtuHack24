import express from "express";
import google from 'passport-google-oauth20'
import { login, logout, register } from "../controllers/auth.controller.js";
import passport from "../pass_authentication/Passport.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get('/auth/google',passport.authenticate('google',{scope:['profile']}));
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'api/auth/auth/google/callback',successRedirect:'http://localhost:5173'}))
export default router;
