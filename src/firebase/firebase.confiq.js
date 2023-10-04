import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC44YqX3dWC_Yp3c7SUs0eUtzD3ja6Tq7s",
    authDomain: "module-51-private-route.firebaseapp.com",
    projectId: "module-51-private-route",
    storageBucket: "module-51-private-route.appspot.com",
    messagingSenderId: "107170423225",
    appId: "1:107170423225:web:d0dc10b1ba153c23f4d668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;