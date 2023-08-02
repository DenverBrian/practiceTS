//create element
export const loginContainer = document.createElement("div");
const loginForm = document.createElement("form");
const formTitle = document.createElement("h1");
const emailInput = document.createElement("input");
const passwordInput = document.createElement("input");
const loginBtn = document.createElement("button");
const logo = document.createElement("h1");
export const signUpBtn = document.createElement("button");

//add to main div

loginContainer.appendChild(loginForm);
loginForm.appendChild(formTitle);
loginForm.appendChild(emailInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(loginBtn);
loginContainer.appendChild(logo);
loginContainer.appendChild(signUpBtn);

//set element id
loginContainer.setAttribute("id", "loginContainer");
loginForm.setAttribute("id", "loginForm");
emailInput.setAttribute("id", "emailInput");
passwordInput.setAttribute("id", "passwordInput");
loginBtn.setAttribute("id", "loginBtn");
signUpBtn.setAttribute("id", "signUpBtn");

//set element text content
formTitle.innerText = `LOGIN FORM`;
logo.innerText = `I AM A LOGO`;
loginBtn.innerText = `LOGIN`;
signUpBtn.innerText = `SIGN UP`;
emailInput.placeholder = `ENTER EMAIL`;
passwordInput.placeholder = `ENTER PASSWORD`;

// set element type
emailInput.type = `email`;
passwordInput.type = `password`;

// set required
emailInput.required = true;
passwordInput.required = true;


export const createNewlogin =(app:HTMLElement)=>{
    app.appendChild(loginContainer);
}