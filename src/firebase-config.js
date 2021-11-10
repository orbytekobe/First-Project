// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJMyNMgP74F1IhwpRncNr-s4Ncdy4WMCU",
    authDomain: "first-react-app-7320b.firebaseapp.com",
    projectId: "first-react-app-7320b",
    storageBucket: "first-react-app-7320b.appspot.com",
    messagingSenderId: "632084679429",
    appId: "1:632084679429:web:0a244f2d7b2c600bcf056c",
    measurementId: "G-44NWDET2RF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);