import express from "express";
import { makePayments } from "../controller/payment-controller.js";
import { getDraftBookings, sendService } from "../controller/service-controller-draft.js";
import { userSignUp,userLogIn } from "../controller/user-controller.js";


const router = express.Router()


router.post('/signup',userSignUp)
router.post('/login', userLogIn);
router.post('/service',sendService);
router.post('/my-bookings-draft',getDraftBookings);
// router.post('/my-bookings-paid',getBookings);
router.post('/payment',makePayments);


export default router;