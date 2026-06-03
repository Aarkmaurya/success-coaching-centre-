// js/admin-logic.js
import { db } from './firebase-config.js';
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

document.getElementById('upload-btn').addEventListener('click', async () => {
    const title = document.getElementById('note-title').value;
    const url = document.getElementById('note-url').value;

    if (title && url) {
        // Unique ID ke liye title ko ID bana rahe hain
        await setDoc(doc(db, "notes", title), {
            title: title,
            url: url,
            createdAt: new Date()
        });
        alert("Note Uploaded Successfully!");
    } else {
        alert("Please fill all fields.");
    }
});
