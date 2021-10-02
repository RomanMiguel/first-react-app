import * as firebase from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAkSunaLOZumZkrEnQo9BZ8AGlLK9lladE",
    authDomain: "mi-proyecto-react-3b8d5.firebaseapp.com",
    projectId: "mi-proyecto-react-3b8d5",
    storageBucket: "mi-proyecto-react-3b8d5.appspot.com",
    messagingSenderId: "824859107377",
    appId: "1:824859107377:web:8be69f7bb271bbe8f7b510"
}

const app= firebase.initializeApp(firebaseConfig)

export const getFirebase=()=>{return app}

export const db= getFirestore(app)