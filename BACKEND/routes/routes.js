import express from "express";
import { checkPaymentStatus, makePayments } from "../controller/payment-controller.js";
import { getDraftBookings, sendService,getPaidBookings } from "../controller/service-controller.js";
import { userSignUp,userLogIn } from "../controller/user-controller.js";


const router = express.Router()


router.post('/signup',userSignUp)
router.post('/login', userLogIn);
router.post('/service',sendService);
router.post('/create-order',makePayments);
router.post('/check-payment',checkPaymentStatus);
router.post('/my-bookings-draft',getDraftBookings);
router.post('/my-bookings-paid',getPaidBookings);


export default router;