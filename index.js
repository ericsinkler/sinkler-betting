
function register(){
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await auth.createUserWithEmailAndPassword(auth, email, password);
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
            await auth.signInWithEmailAndPassword(auth, email, password);
            alert("User logged in successfully");
        }
        catch(error){
            console.log("Error code: ", error.code);
            console.log("Error message: ", error.message);
        }
    }
}