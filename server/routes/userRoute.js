import express from "express";
import {currentUser, login, logout, signUp } from "../controllers/userController.js";
import { jwtAuth } from "../middlewares/jwtAuth.js";
 

const router = express.Router();

router.post("/register",signUp)
router.post("/login",login);
router.get("/current-user",jwtAuth,currentUser)
router.get("/logout",logout);

export default router;