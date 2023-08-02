export const createLogin = (app: HTMLElement) => {
  //create element
  const loginContainer = document.createElement("div");
  const loginForm = document.createElement("form");
  const formTitle = document.createElement("h1");
  const emailInput = document.createElement("input");
  const passwordInput = document.createElement("input");
  const loginBtn = document.createElement("button");
  const logo = document.createElement("h1");
  const signUpBtn = document.createElement("button");

  //add to main div
  app.appendChild(loginContainer);
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

  
  //   signUpBtn.click = () => {
  //     console.log(`test`)
  //     const registerContainer = document.getElementById("registerContainer");
  //     if (registerContainer) {

  //       app.removeChild(registerContainer);
  //     }
  //   };
};

export const createRegister = (app: HTMLElement) => {
  //create element
  const registerContainer = document.createElement("div");
  const registerForm = document.createElement("form");
  const formTitle = document.createElement("h1");
  const emailInput = document.createElement("input");
  const passwordInput = document.createElement("input");
  const confirmPasswordInput = document.createElement("input");
  const nameInput = document.createElement("input");
  const registerBtn = document.createElement("button");
  const logo = document.createElement("h1");
  const goToLogin = document.createElement("button");

  //add to main div
  app.appendChild(registerContainer);
  registerContainer.appendChild(registerForm);
  registerForm.appendChild(formTitle);
  registerForm.appendChild(emailInput);
  registerForm.appendChild(passwordInput);
  registerForm.appendChild(confirmPasswordInput);
  registerForm.appendChild(nameInput);
  registerForm.appendChild(registerBtn);
  registerContainer.appendChild(logo);
  registerContainer.appendChild(goToLogin);

  //set element Id
  registerContainer.id = `registerContainer`;
  registerForm.id = `registerForm`;
  emailInput.id = `registerEmail`;
  passwordInput.id = `registerPassword`;
  confirmPasswordInput.id = `confirmRegisterPassword`;
  nameInput.id = `registerName`;
  registerBtn.id = `registerBtn`;
  goToLogin.id = ``;

  //set text content
  goToLogin.innerText = `go to login`
};
