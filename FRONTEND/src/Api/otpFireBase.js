import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyANWK4y2kAvyfaB2d0lRgTa2g5aovd5iUw",
    authDomain: "housedeck-home-services.firebaseapp.com",
    projectId: "housedeck-home-services",
    storageBucket: "housedeck-home-services.appspot.com",
    messagingSenderId: "573977734639",
    appId: "1:573977734639:web:995a1cb7da3d25e1f21a1a",
    measurementId: "G-7J5EK1XMXF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase