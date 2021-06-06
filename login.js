var firebaseConfig = {

    //firebase config stuff

    apiKey: "AIzaSyCRz2dm7fL2AZakQl6Y8G67U1Ktz-x7k_4",
    authDomain: "db-12345.firebaseapp.com",
    projectId: "db-12345",
    storageBucket: "db-12345.appspot.com",
    messagingSenderId: "1076216524096",
    appId: "1:1076216524096:web:59ec85f17a8ed078811ea5",
    measurementId: "G-4FSP67DX0J"
};

// Initialize Firebase


firebase.initializeApp(firebaseConfig);



const auth = firebase.auth();

function signUp() {

    var fname = document.getElementById("fname");
    var uname = document.getElementById("uname");

    var email = document.getElementById("email");

    var password = document.getElementById("password");

    var cpassword = document.getElementById("cpassword");

    if (password.value != cpassword.value) {
        alert("password and confirm password fields are not matching!!!");
    }

    if (password.value == cpassword.value) {
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

        promise.then(
            function(value) {
                alert("Signed Up Sucessfull!!!  Go to login");

            },

            function(error) {
                alert(error);
            }
        )
    }
}

function signIn() {

    var email = document.getElementById("emaill");
    var password = document.getElementById("passwordd");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    promise.then(
        function(value) {

            window.open("home.html");
        },
    )
}

const mailField = document.getElementById('mail');
const resetPassword = document.getElementById('btnn');
auth.useDeviceLanguage();
const resetPasswordFunction = () => {
    const email = mailField.value;

    auth.sendPasswordResetEmail(email)
        .then(() => {
            console.log('Password Reset Email Sent Successfully!');
        })
        .catch(error => {
            console.error(error);
        })
}


resetPassword.addEventListener('click', resetPasswordFunction);

/*document.getElementById('glogin').addEventListener('click', GoogleLogin)

let provider = new firebase.auth.GoogleAuthProvider()

function GoogleLogin() {
    console.log('Login Btn Call')
    firebase.auth().signInWithPopup(provider).then(res => {
        console.log(res.user)
        showUserDetails(res.user)
    }).catch(e => {
        console.log(e)
    }) }
*/