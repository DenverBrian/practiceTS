//create element
export const registerContainer = document.createElement("div");
const registerForm = document.createElement("form");
const formTitle = document.createElement("h1");
export const labelForEmail = document.createElement("label");
const emailInput = document.createElement("input");
export const labelForPassword = document.createElement("label");
const passwordInput = document.createElement("input");
export const confirmPasswordInput = document.createElement("input");
const nameInput = document.createElement("input");
const registerBtn = document.createElement("button");
const logo = document.createElement("h1");
export const goToLogin = document.createElement("button");

//add to main div
registerContainer.appendChild(logo);
registerContainer.appendChild(goToLogin);
registerContainer.appendChild(registerForm);
registerForm.appendChild(formTitle);
registerForm.appendChild(labelForEmail);
registerForm.appendChild(emailInput);
registerForm.appendChild(labelForPassword);
registerForm.appendChild(passwordInput);
registerForm.appendChild(confirmPasswordInput);
registerForm.appendChild(nameInput);
registerForm.appendChild(registerBtn);

//set element Id
registerContainer.id = `registerContainer`;
registerForm.id = `registerForm`;
emailInput.id = `registerEmail`;
passwordInput.id = `registerPassword`;

confirmPasswordInput.id = `confirmRegisterPassword`;
nameInput.id = `registerName`;
registerBtn.id = `registerBtn`;
goToLogin.id = `goToLoginBtn`;

//set text content
goToLogin.innerText = `go to login`;
logo.innerText = `I AM A LOGO`;
formTitle.innerText = `REGISTER FORM`;
registerBtn.innerText = `REGISTER`;
labelForEmail.innerText = ` `;
labelForPassword.innerText = ` `;

//set element placeholder
emailInput.placeholder = `INPUT EMAIL`;
passwordInput.placeholder = `INPUT PASSWORD`;
confirmPasswordInput.placeholder = `CONFIRM PASSWORD`;
nameInput.placeholder = `INPUT NAME`;

//set element type
registerBtn.type = `submit`;
emailInput.type = `email`;
passwordInput.type =`password`;
confirmPasswordInput.type = `password`;



//set element name
emailInput.name = `emailInput`;
passwordInput.name = `passwordInput`;
nameInput.name = `nameInput`;

//set label "for"
labelForEmail.setAttribute("for", "registerEmail");
labelForPassword.setAttribute("for", "registerPassword");

//set element min and max length
passwordInput.minLength = 5;
passwordInput.maxLength = 8;
confirmPasswordInput.minLength = 5;
confirmPasswordInput.maxLength = 8;

export const createNewRegister = (app: HTMLElement) => {
  app.appendChild(registerContainer);
};
