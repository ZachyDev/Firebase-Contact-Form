// contactForm Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDuvfElNG0H86BzQ_7nY2qvykdxIjZrrwQ",
    authDomain: "register-form-83ea3.firebaseapp.com",
    databaseURL: "https://register-form-83ea3.firebaseio.com",
    projectId: "register-form-83ea3",
    storageBucket: "register-form-83ea3.appspot.com",
    messagingSenderId: "674549475802",
    appId: "1:674549475802:web:43d2ba5fe25abf3be4f8e3"
  };

    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    // get reference to database
    const contactRef = firebase.database().ref('contactList');

    // get the contactForm
document.getElementById('contactForm').addEventListener('submit',submitForm);

// submitForm
function submitForm(e) {
    e.preventDefault();

    // getInputValues
    const name = getInputValues('name');
    const company = getInputValues('company');
    const email = getInputValues('email');
    const phone = getInputValues('phone');
    const message = getInputValues('message');

    // saveInfoToFirebase call
    saveInfoToFirebase(name,company,email,phone,message);

    // alert message on submit
    document.querySelector('.alert').style.display = 'block'

    // hide the alert after 3 seconds
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    },3000)

}

// get all the form inputs

const getInputValues = (id) => {
    return document.getElementById(id).value;
}

// save all the info to firebase database

const saveInfoToFirebase = (name,company,email,phone,message) => {
    // push the data to database collection ('contacts')
    const pushData = contactRef.push();
    // set the data object
    pushData.set({
        name,
        company,
        email,
        phone,
        message
    });
}