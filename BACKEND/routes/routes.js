import express from "express";
import { sendService } from "../controller/service-controller.js";
import { userSignUp,userLogIn } from "../controller/user-controller.js";


const router = express.Router()


router.post('/signup',userSignUp)
router.post('/login', userLogIn);
router.post('/service',sendService);


export default router;