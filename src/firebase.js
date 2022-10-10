// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

//Install firebase module , 'npm i firebase'.
//Integrating firebase in our project
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgGzCReoC3okX8SHnIy6jNEh-C_jO0MAc",
    authDomain: "yt-demo-17e3c.firebaseapp.com",
    projectId: "yt-demo-17e3c",
    storageBucket: "yt-demo-17e3c.appspot.com",
    messagingSenderId: "651539154294",
    appId: "1:651539154294:web:4f2a10baea08b8701f6657"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// const app = initializeApp(firebaseConfig);

//exporting auth functions of Firebase for performing authorization
export const auth = firebase.auth()

//exporting the users collection
const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users')
}

//exporting the firebase storage to store the image,videos
export const storage = firebase.storage()