import { createUserWithEmailAndPassword } from "./firebase/auth";
import { auth } from "./firebase.js";


function register(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        }
        catch(error){
            console.log("Error code: ", error.code);
            console.log("Error message: ", error.message);
        }
    }
}

function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, email, password);
            alert("User logged in successfully");
        }
        catch(error){
            console.log("Error code: ", error.code);
            console.log("Error message: ", error.message);
        }
    }
}