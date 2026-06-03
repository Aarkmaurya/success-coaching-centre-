// js/auth.js
import { auth } from './firebase-config.js';
import { RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    'size': 'invisible'
});

document.getElementById('send-otp').addEventListener('click', () => {
    const phoneNumber = document.getElementById('phone').value;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            alert("OTP Sent! Check your phone.");
        }).catch((error) => {
            console.error(error);
            alert("Error: " + error.message);
        });
});
