import express from "express";
import { jwtAuth } from "../middlewares/jwtAuth.js";
import { createForm, fetchForm, fetchFormData } from "../controllers/formController.js";

const router = express.Router();


router.get("/single/:id",jwtAuth,fetchFormData);  
router.post("/create", jwtAuth, createForm);
router.get("/all-forms", fetchForm);    

export default router;
