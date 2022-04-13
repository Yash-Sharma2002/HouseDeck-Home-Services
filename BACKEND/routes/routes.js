import express from "express";
import { mailVerification, otpSend } from "../controller/otpSend.js";
import { checkPaymentStatus, checkSubscriptionStatus, makePayments } from "../controller/payment-controller.js";
import { getDraftBookings, sendService, getPaidBookings, getSubscriptions, deleteDraftBookings } from "../controller/service-controller.js";
import { userSignUp, userLogIn, userUpdate } from "../controller/user-controller.js";


const router = express.Router()


router.post('/signup', userSignUp)
router.post('/login', userLogIn);
router.post('/service', sendService);
router.post('/create-order', makePayments);
router.post('/check-payment', checkPaymentStatus);
router.post('/send-otp', otpSend);
router.post('/send-mail', mailVerification);
router.post('/profile-update', userUpdate);
router.post('/check-subscription', checkSubscriptionStatus);
router.post('/my-bookings-draft', getDraftBookings);
router.post('/my-bookings-paid', getPaidBookings);
router.post('/delete-draft', deleteDraftBookings);
router.post('/get-subscription', getSubscriptions);


export default router;