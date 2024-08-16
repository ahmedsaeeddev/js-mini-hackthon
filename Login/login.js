import { auth, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail   } from "../firebase.js";

let formFeild = document.querySelectorAll("form input");

const [loginEmail, loginPassword] = formFeild;

let logInBtn = document.getElementById("logInBtn")

const Login = ()=>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    Toastify({
        text: "LogIn SuccesFully!",
        position: "center",
        duration: 3000
    }).showToast();
    // ...
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({
        text: `${errorMessage}`,
        position: "center",
        duration: 3000
        }).showToast();
  });
 
}

logInBtn.addEventListener("click", Login)

onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = '../Dashboard/dashboard.html'
    } 
  });

  let forgetPassword = document.getElementById("forgetPassword")
  const forgortPassword = ()=>{
    sendPasswordResetEmail(auth, loginEmail.value)
  .then(() => {
    Toastify({
      text: "password sent check your email",
      position: "center",
      duration: 3000
      }).showToast();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({
      text: `${errorMessage}`,
      position: "center",
      duration: 3000
      }).showToast();
  });
  }

  forgetPassword.addEventListener("click", forgortPassword)



