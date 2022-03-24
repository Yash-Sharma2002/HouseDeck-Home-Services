import express from "express";
import { getBookings, sendService } from "../controller/service-controller.js";
import { userSignUp,userLogIn } from "../controller/user-controller.js";


const router = express.Router()


router.post('/signup',userSignUp)
router.post('/login', userLogIn);
router.post('/service',sendService);
router.post('/my-bookings',getBookings);


export default router;