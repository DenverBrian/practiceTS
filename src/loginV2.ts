//create element
export const loginContainer = document.createElement("div");
const loginForm = document.createElement("form");
const formTitle = document.createElement("h1");
const emailInput = document.createElement("input");
const passwordInput = document.createElement("input");
const loginBtn = document.createElement("button");
const logo = document.createElement("h1");
export const goToRegister = document.createElement("button");

//add to main div

loginContainer.appendChild(loginForm);
loginForm.appendChild(formTitle);
loginForm.appendChild(emailInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(loginBtn);
loginContainer.appendChild(logo);
loginContainer.appendChild(goToRegister);

//set element id
loginContainer.setAttribute("id", "loginContainer");
loginForm.setAttribute("id", "loginForm");
emailInput.setAttribute("id", "emailInput");
passwordInput.setAttribute("id", "passwordInput");
loginBtn.setAttribute("id", "loginBtn");
goToRegister.setAttribute("id", "signUpBtn");

//set element text content
formTitle.innerText = `LOGIN FORM`;
logo.innerText = `I AM A LOGO`;
loginBtn.innerText = `LOGIN`;
goToRegister.innerText = `GO TO REGISTER`;
emailInput.placeholder = `ENTER EMAIL`;
passwordInput.placeholder = `ENTER PASSWORD`;

// set element type
emailInput.type = `email`;
passwordInput.type = `password`;

//set name
emailInput.name = `emailLogin`;
passwordInput.name = `passwordLogin`;

// set required
// emailInput.required = true;
// passwordInput.required = true;


export const showLoginContainer =(app:HTMLElement)=>{
    app.appendChild(loginContainer);
}