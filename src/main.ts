import { createLogin, createRegister } from "./createForms";
import { createNewRegister, goToLogin, registerContainer } from "./goToSignup";
import { createNewlogin, loginContainer, signUpBtn } from "./loginV2";

import "./style.css";

const app = document.getElementById("app");

if (app) {
  createNewlogin(app);
  createNewRegister(app);
  // signUpBtn.addEventListener("click", () => {
  //   app.removeChild(loginContainer);
  // });

  signUpBtn.onclick = () => {
    app.removeChild(loginContainer);
    app.appendChild(registerContainer)
  };
  goToLogin.onclick = () => {
    app.removeChild(registerContainer)
    app.appendChild(loginContainer)
  };
  // signUpBtn.click(app.removeChild(loginContainer))
}
// setTimeout(() => {
//   signUpBtn.click();
// }, 2000);
