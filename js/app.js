// js/app.js
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

// Page security: Check if user is logged in
onAuthStateChanged(auth, (user) => {
    const currentPage = window.location.pathname;
    
    // Agar user logged in nahi hai aur woh protected page pe hai
    if (!user && currentPage !== "/login.html" && currentPage !== "/index.html" && currentPage !== "/") {
        window.location.href = "login.html";
    }
    
    // Agar user logged in hai aur login page pe hai, toh dashboard pe bhejo
    if (user && (currentPage === "/login.html" || currentPage === "/index.html" || currentPage === "/")) {
        window.location.href = "dashboard.html";
    }
});
