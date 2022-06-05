import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCVQmKbIJHRcD8b1cLn34gDVq2bmd9xfXk",
    authDomain: "test-2e0aa.firebaseapp.com",
    projectId: "test-2e0aa",
    storageBucket: "test-2e0aa.appspot.com",
    messagingSenderId: "87179856329",
    appId: "1:87179856329:web:9da7a0e338841e1c038018",
    measurementId: "G-HMFR41DQER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

let emailInput = document.getElementById('exampleInputEmail1');
let passwordInput = document.getElementById('exampleInputPassword1');
let submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    let email = emailInput.value;
    let password = passwordInput.value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            swal({
                title: "Success",
                text: 'Signed in successfully',
                icon: "success",
                button: "OK",
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            swal({
                title: "Error",
                text: errorMessage,
                icon: "error",
                button: "OK",
            });
        });

})