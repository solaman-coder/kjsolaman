function validateAndSendMail(){
const name= document.getElementById('name')
const email= document.getElementById('email')
const phone= document.getElementById('phone')
const send= document.getElementById('send')
const phoneRegex = /^(\+?\d{1,4}[\s\-]?)?(\(?\d{1,4}\)?[\s\-]?)?[\d\s\-]{7,15}$/;

const form = document.getElementById('form')
const errorElement =document.getElementById('error')
form.addEventListener('submit',(e) =>{
    let messages = []
    if(name.value === '' || name.value == null){
        messages.push("name is required")
    }
    else if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(name.value)) {
        // Regex to check for numbers or special characters
        messages.push("Name should not contain numbers or special characters");
    }

   if (email.value === '' || email.value == null) {
    messages.push("Email is required");
} else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
    messages.push("Please enter a valid email address");
}

if (phone.value === '' || phone.value == null){
    messages.push("Number  is required");
}
else if (!phoneRegex.test(phone.value)) {
    messages.push("Please enter a valid phone number");
}
else {
    // Strip out non-numeric characters (like spaces, dashes, and parentheses)
    const cleanPhone = phone.value.replace(/\D/g, '');
    
    // Check if the cleaned phone number has exactly 10 digits
    if (cleanPhone.length !== 10) {
        messages.push("Phone number must be exactly 10 digits");
    }
}


if(send.value ===''){
    messages.push("Write something");
}
// message box





    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }


    else{
        sendMail();
    }

})



function  sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        send : document.getElementById("send").value,
    }

    emailjs.send("service_wq4c3hb","template_n2l8od8",parms).then(alert("Email sent!!"))
}
}

// ---------------------------------------------------------------------------------------

// ------------------------------------------------------------
