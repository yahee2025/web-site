



//this script is for modal function
function openmodal() {
  document.getElementById("mymodal").style.display="flex";
  }
  function closemodal() {
  document.getElementById("mymodal").style.display="none";
  document.getElementById("myform").reset();
  }



  //This script is for form validation
  const firstNameError=document.getElementById('firstName-error');
  let lastNameError=document.getElementById('lastName-error');
  const phoneError=document.getElementById('phone-error');
  const passwordError=document.getElementById('password-error');
  const emailError=document.getElementById('email-error');
  const subitError=document.getElementById('subit-error');

   
  function validateFirstName() {
    const firstName = document.getElementById('firstName').value;

    if(firstName.length == 0){
      firstNameError.innerHTML = 'First name is required';
      return false;
    }

     if(!firstName.match(/^[A-ZA-Z]*$/)){
      firstNameError.innerHTML = 'A first name must be contain only capital letters';
      return false;
     }
    firstNameError.innerHTML ='valid';
     return true;

  }

     function validateLastName() {
      const lastName = document.getElementById('lastName').value;

    if(lastName.length == 0){
      lastNameError.innerHTML = 'last name is required';
      return false;
    }

     if(!lastName.match(/^[A-ZA-Z]*$/)){
      lastNameError.innerText = 'A last name must be contain only capital letters';
      return false;
     }

    lastNameError.innerText = 'Valid';
    return true;
     }


     function validatePhoneNumber() {
      const phone = document.getElementById('phone').value;
      const phoneVd = /^(255\d{9}|0\d{9})$/;

       if(phone.length == 0){
        phoneError.innerHTML = 'Phone number is required';
        return false;
       }

       if(!phoneVd.test(phone)) {
        phoneError.innerHTML = 'Phone number must start with 255(12 digits total) or 0(10 digits total)';
        return false;

      }

        phoneError.innerHTML = 'Valid';
        return true
      }


     function validateEmail() {
      const email = document.getElementById('email').value;

      if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
      }

      if(!email.match(/[A-Za-z][@][A-Za-z]/)) {
        emailError.innerHTML = 'Email entered must contain @ sign';
        return false;
      }

      emailError.innerHTML = 'Valid';
      return true;

     }

     function validatePassword() {
      const password = document.getElementById('password').value;
      const passwordVd = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])/

      if(password.length == 0) {
        passwordError.innerHTML = 'Password is required';
        return false;
      }

      if(password.length < 8) {
        passwordError.innerHTML = 'A password should be atleast 8 digits';
        return false;
      }

      if(!passwordVd.test(password)) {
        passwordError.innerHTML = 'A password must be contain at least one numbers , one upper case letters, one lower case letters and a special character';
        return false;
      }

      passwordError.innerHTML = 'valid';
      return true;

     }

    function validateForm() {
      if(!validateFirstName() || !validateLastName() || !validatePhoneNumber() || !validateEmail() || !validatePassword()) {
        subitError.style.display = 'block';
        subitError.innerHTML = 'Please fix errors to submit';
        setTimeout(function(){subitError.style.display = 'none';},3000)
        return false;
      }
    }
  








  