import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController";

const router = Router();

// POST /register - Register a user
router.post("/register", (req, res) => registerUser(req, res));

// POST /login - Login a user
router.post("/login", (req, res) => loginUser(req, res));

export default router;
