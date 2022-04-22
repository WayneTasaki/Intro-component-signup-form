// Grabbing all dom elements that are needed
const form = document.getElementById('form')

const firstName = document.getElementById('firstName')
const firstNameErrorTxt = document.getElementById('firstNameErrorTxt')
const firstNameErrorIcon = document.getElementById('firstNameErrorIcon')

const lastName = document.getElementById('lastName')
const lastNameErrorTxt = document.getElementById('lastNameErrorTxt')
const lastNameErrorIcon = document.getElementById('lastNameErrorIcon')

const email = document.getElementById('email')
const emailErrorTxt = document.getElementById('emailErrorTxt')
const emailErrorIcon = document.getElementById('emailErrorIcon')

const password = document.getElementById('password')
const passwordErrorTxt = document.getElementById('passwordErrorTxt')
const passwordErrorIcon = document.getElementById('passwordErrorIcon')

const submit = document.getElementById('submitButton')

// --- Regex Section ---
// Name regex that matches a-z, -, and ' only and between 2-45 chars case insensitive
const nameRegex = /(^[a-z -']{2,45}$)/i

// password regex
const passRegex = /\w{6,20}$/

// --- Event Listener ---
// event listener on form that prevents the default submit action based on a few conditionals
form.addEventListener('submit', e => {

  // --- First Name Input ---
  // if first name is null or empty, changes error text
  if (firstName.value === '' ||
  firstName.value === null) {
    e.preventDefault()
    firstNameErrorTxt.innerText = 'First Name cannot be empty'
    displayErrors(firstName, firstNameErrorIcon, firstNameErrorTxt)
  }
  // separate conditional to display a different error text if the regex test is false
  else if (nameRegex.test(firstName.value) === false) {
    e.preventDefault()
    firstNameErrorTxt.innerText = 'First Name must be 2-45 characters long & contain only letters'
    displayErrors(firstName, firstNameErrorIcon, firstNameErrorTxt)
  }
  // conditional used to hide errors if regex match is true
  else if (nameRegex.test(firstName.value === true)) {
     hideErrors(firstName, firstNameErrorIcon, firstNameErrorTxt)
  }

  // --- Last Name Input ---
  // if last name is null or empty, show error text
  if (lastName.value === '' ||
    lastName.value === null) {
    e.preventDefault()
    lastNameErrorTxt.textContent = 'Last Name cannot be empty'
    displayErrors(lastName, lastNameErrorIcon, lastNameErrorTxt)
  }
  // separate conditional to show different error text if regex test is false
  else if (nameRegex.test(lastName.value) === false) {
    e.preventDefault()
    lastNameErrorTxt.innerText = 'Last Name must be 2-45 characters long & contain only letters'
    displayErrors(lastName, lastNameErrorIcon, lastNameErrorTxt)
  }
  // conditional to hide errors if regex match is true
  else if (nameRegex.test(lastName.value === true)) {
    hideErrors(lastName, lastNameErrorIcon, lastNameErrorTxt)
  }

  // --- Email Input ---
  // if email is null or empty display error text
  if (email.value === '' ||
    email.value === null) {
    e.preventDefault()
    emailErrorTxt.innerText = 'email cannot be empty'
    displayErrors(email, emailErrorIcon, emailErrorTxt)
  }
  // Since email inputs have default validation built in, I looked at the input node and saw it had a 'valid' property. If the property returns false, an error text will display on the page
  else if (email.validity.valid === false) {
    e.preventDefault()
    emailErrorTxt.innerText = 'Looks like this is not an email'
    displayErrors(email, emailErrorIcon, emailErrorTxt)
  }
  // conditional to hide errors if regex match is true
  else if (email.validity.valid === true) {
    hideErrors(email, emailErrorIcon, emailErrorTxt)
  }

  // --- Password Input ---
  // if password is null or empty, displays error text
  if (password.value === null ||
    password.value === '') {
      e.preventDefault()
      passwordErrorTxt.innerText = 'Password cannot be empty'
      displayErrors(password, passwordErrorIcon, passwordErrorTxt)
    }
  // separate conditional to show different error text if regext test is false 
  else if (passRegex.test(password.value) === false) {
    e.preventDefault()
    passwordErrorTxt.innerText = 'Password must be between 6-20 characters'
    displayErrors(password, passwordErrorIcon, passwordErrorTxt)
  }
  // hide errors if regex check is passed
  else if (passRegex.test(password.value) === true) {
    hideErrors(password, passwordErrorIcon, passwordErrorTxt)
  }
})

// function that adds the border, icon, and text when there's an error
function displayErrors(input, icon, text) {
  input.style.border = '2px solid #FF7979'
  icon.style.opacity = '1'
  icon.style.height = 'auto'
  text.style.opacity = '1'
  text.style.height = 'auto'
}

// function hides all errors 
function hideErrors(input, icon, text) {
  input.style.border ='1px solid #DEDEDE'
  icon.style.opacity = '0'
  icon.style.height = '0'
  text.style.opacity = '0'
  text.style.height = '0'
}