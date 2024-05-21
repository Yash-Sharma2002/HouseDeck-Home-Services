import express from "express";
import { mailVerification, otpSend } from "../controller/otpSend.js";
import { checkPaymentStatus, checkSubscriptionStatus, makePayments } from "../controller/payment-controller-cashfree.js";
import { PlacesAutoComplete } from "../controller/placesAutocomplete.js";
import { promocodeStore, promocodeFetch } from "../controller/promocode-controller.js";
import { getDraftBookings, sendService, getPaidBookings, getSubscriptions, deleteDraftBookings, getCancelledBookings, cancelService } from "../controller/service-controller.js";
import { userSignUp, userLogIn, userUpdate, verifyEmail, verifyPhone } from "../controller/user-controller.js";
import { createOrder } from "../controller/payment-controller-paypal.js";

const router = express.Router()



router.post('/signup', userSignUp)
router.post('/login', userLogIn);
router.post('/service', sendService);
// router.post('/create-order', makePayments);
router.post('/create-order', createOrder);
router.post('/check-payment', checkPaymentStatus);
router.post('/send-otp', otpSend);
router.post('/promocode', promocodeFetch);
router.post('/promocode-save', promocodeStore);
router.post('/send-mail', mailVerification);
router.post('/profile-update', userUpdate);
router.post('/check-subscription', checkSubscriptionStatus);
router.post('/my-bookings-draft', getDraftBookings);
router.post('/places', PlacesAutoComplete);
router.post('/my-bookings-paid', getPaidBookings);
router.post('/delete-draft', deleteDraftBookings);
router.post('/get-subscription', getSubscriptions);
router.post('/get-cancelled-bookings', getCancelledBookings);
router.post('/cancel-booking', cancelService);
router.post('/email-verified', verifyEmail);
router.post('/phone-verified', verifyPhone);


export default router;