const form = document.querySelector('#form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

// Add event listeners to form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Function check input value 
  checkInputs([firstName, lastName, email, password]);
  // Function validate email
  validateEmail(email);  
});

// Function check input value
function checkInputs(inputArr) {
  inputArr.forEach(input => {
    if(input.value.trim() === '') {
      showError(input, `${input.placeholder} cannot be empty`);
    } else {
      showSuccess(input);
    }
  })
}

// Function validate email
function validateEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Looks like this is not an email');
  }
}

// Function show error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Function show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}