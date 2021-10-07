import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
// Initialize Firebase
const iniAtuthen = () =>{
    initializeApp(firebaseConfig);


}

export default iniAtuthen;