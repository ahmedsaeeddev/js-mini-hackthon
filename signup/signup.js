import {auth, createUserWithEmailAndPassword, onAuthStateChanged } from '../firebase.js'

let formFeild = document.querySelectorAll("form input");

const [userEmail, userPassword] = formFeild;

let signUpBtn = document.getElementById("signUpBtn")
let errorshow = document.getElementById("error")

const signUp = ()=>{
    event.preventDefault();
    signUpBtn.innerText = "loading..."
    if(userEmail.value === "" || userPassword.value === ""){
        // alert("Please fill all fields")
        Toastify({
          text: "Please fill all fields",
          position: "center",
          duration: 3000
        }).showToast();
    }
    createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((userCredential) => {
      signUpBtn.innerText = "signUp !!"
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      Toastify({
        text: "signUp SuccesFully!",
        position: "center",
        duration: 3000
      }).showToast();
      
      // ...
    })
    .catch((error) => {
      signUpBtn.innerText = "SignUP"
    const errorCode = error.code;
    const errorMessage = error.message;
    // errorshow.innerText = `${errorMessage}`
    Toastify({
      text: `${errorMessage}`,
      position: "center",
        duration: 3000
        }).showToast();
    // ..
  });
    
}

signUpBtn.addEventListener("click", signUp)

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = '../Dashboard/dashboard.html'
  } 
});




