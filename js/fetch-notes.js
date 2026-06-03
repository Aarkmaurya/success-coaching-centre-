// js/fetch-notes.js
import { db } from './firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

async function loadNotes() {
    const container = document.getElementById('notes-container');
    const querySnapshot = await getDocs(collection(db, "notes"));
    
    container.innerHTML = ""; // Container saaf karo

    querySnapshot.forEach((doc) => {
        const note = doc.data();
        container.innerHTML += `
            <div class="card">
                <h3>${note.title}</h3>
                <a href="${note.url}" target="_blank" class="btn-get-started" style="padding: 10px 20px; font-size: 0.9rem;">View PDF</a>
            </div>
        `;
    });
}

loadNotes();
