import { goToLogin, registerContainer } from "./registerV2";
import { showLoginContainer, loginContainer, goToRegister } from "./loginV2";

import "./style.css";

const app = document.getElementById("app");

if (app) {
  showLoginContainer(app);

  const loginForm = document.getElementById("loginForm") as HTMLFormElement;
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const json = localStorage.getItem("form");
   
    if (json) {
      // console.log(json);
      const storedObj = JSON.parse(json);
      console.log(`password from local storage: ${storedObj.passwordInput}`);
    }
    
    
    const fd = new FormData(e.target as HTMLFormElement); //
    const obj = Object.fromEntries(fd); //convert array into an object
    // const objStringify = JSON.stringify(obj);
    console.log(`passwrod from login page: ${obj.passwordLogin}`);
  });

    goToRegister.onclick = () => {
    app.removeChild(loginContainer);
    app.appendChild(registerContainer);

    const registerForm = document.getElementById(
      "registerForm"
    ) as HTMLFormElement;

    registerForm?.addEventListener("submit", (e) => {
      e.preventDefault();

      const fd = new FormData(e.target   as HTMLFormElement); //
      const obj = Object.fromEntries(fd); //convert array into an object
      const objStringify = JSON.stringify(obj);
      localStorage.setItem("form", objStringify);

      // const json = localStorage.getItem("form");
      // if (json) {
      //   console.log(json);
      //   const storedObj = JSON.parse(json);
      //   console.log(storedObj)
      // }
    });
  };

  goToLogin.onclick = () => {
    app.removeChild(registerContainer);
    app.appendChild(loginContainer);
  };
}
