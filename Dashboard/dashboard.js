import { auth, signOut, onAuthStateChanged, collection, addDoc, setDoc, getFirestore, db } from '../firebase.js'


let date = new Date()
let yearChanger = document.querySelector("#yearChanger")
yearChanger.innerText = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`

let logOutBtn = document.getElementById("logOutBtn")
const logOut = () => {
    signOut(auth).then(() => {
        Toastify({
            text: "Logout Sucessfully",
            position: 'center',
            duration: 3000
        }).showToast();
    }).catch((error) => {
        Toastify({
            text: error,
            position: 'center',
            duration: 3000
        }).showToast();
    });
}

logOutBtn.addEventListener('click', logOut)

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = '../index.html   '
    }
});

let publish = document.querySelector('#publish');
let topic = document.querySelector('#topic');
let textarea = document.querySelector('textarea');
publish.addEventListener('click', (e) => {
    e.preventDefault();
    const docRef = addDoc(collection(db, "data"), {
        name: topic.value,
        url: textarea.value,
    });
    // addDoc(collection(db, 'data'), {
    //     name: topic.value,
    //     url: textarea.value,
    // });
    console.log(docRef.id);
})