firebase.auth().onAuthStateChanged((user) =>{
    if(!user) {
        location.replace('index.html');
    }else{
        document.getElementById('user').innerHTML = 'hello, ' + user.email
    }
})

function logout() {
    firebase.auth().signOut()        
}


document.getElementById('loginform').addEventListener("submit",(event) => {
    event.preventDefault();
})