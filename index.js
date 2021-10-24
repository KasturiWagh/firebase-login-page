firebase.auth().onAuthStateChanged((user)=>{
    if(user) {
        location.replace('welcome.html');
    }
})


function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) =>{
        document.getElementById('error').innerHTML = error.message;
    })
    
}


function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) =>{
        document.getElementById('error').innerHTML = error.message;

    }); 
}


document.getElementById('loginform').addEventListener("submit",(event) => {
    event.preventDefault();
})


function forgotpass() {
    const email = document.getElementById('email').value;
    firebase.auth().sendPasswordResetEmail(email)
    .then(() =>{
        alert("link to reset password is send to your email")
    })
    .catch((error) =>{
        document.getElementById('error').innerText = error.message;
    })
    
}