import express from "express";
import { jwtAuth } from "../middlewares/jwtAuth.js";
import { createForm } from "../controllers/formController.js";
 

const router = express.Router();

router.post("/create",createForm)

export default router;