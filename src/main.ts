import {
  goToLogin,
  registerContainer,
  labelForEmail,
  confirmPasswordInput,
  labelForPassword,
} from "./registerV2";
import {
  showLoginContainer,
  loginContainer,
  goToRegister,
  emailInput,
  loginBtn,
  passwordLenght,
  passwordInput,
} from "./loginV2";
import { showWelcome } from "./welcomeDisplay";
import "./style.css";

const app = document.getElementById("app");

if (app) {
  showLoginContainer(app);

  let isLoggedIn: boolean = false; // store in local storage
  console.log(isLoggedIn);

  type userDetails = {
    emailInput: string;
    passwordInput: string;
    nameInput: string;
  };
  let isPasswordValid: boolean = false;

  const loginForm = document.getElementById("loginForm") as HTMLFormElement; // get login form
  // emailInput.addEventListener("input", (e) => {
  //   // get the inputs per letter
  //   const emailInputs = e.target as HTMLInputElement;
  //   const theInput = emailInputs.value;
  //   if (theInput.includes("@") && theInput.includes(".com")) {
  //     loginBtn.disabled = false;
  //   } else if (theInput === "") {
  //     loginBtn.disabled = true;
  //   }
  // });
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginFormInputs = new FormData(e.target as HTMLFormElement); //get  login form input data
    const objectLoginFormInputs = Object.fromEntries(loginFormInputs); // convert to object
    // console.log(objectLoginFormInputs);
    const { emailLogin, passwordLogin } = objectLoginFormInputs; // get the property value of object

    const users = localStorage.getItem("users"); // get users data from local storage
    if (users) {
      const parseUsers = JSON.parse(users);
      // console.log(parseUsers);
      // const objects = parseUsers.filter((accounts: userDetails) => {
      //   return accounts
      // });

      for (let i = 0; i < parseUsers.length; i++) {
        if (
          emailLogin === parseUsers[i].emailInput &&
          passwordLogin === parseUsers[i].passwordInput
        ) {
          isLoggedIn = true;
          const stringifyObjectLogin = JSON.stringify(parseUsers[i]);
          localStorage.setItem("currentUser", stringifyObjectLogin);
          app.removeChild(loginContainer);
          showWelcome(app);
          break;
        } else {
          console.log("invalid Input");
        }
      }
      // console.log(objects)

      // alert("wrong password or email");

      loginForm.reset();
      // if (isLoggedIn === true) {
      //   showWelcome(app);
      //   app.removeChild(loginContainer);
      // }
    }
  });

  goToRegister.onclick = () => {
    app.removeChild(loginContainer);
    app.appendChild(registerContainer);

    const registerForm = document.getElementById(
      "registerForm"
    ) as HTMLFormElement; //get register form
    let emailExist: boolean = false;
    let isPasswordCorrect: boolean = false;

    // let confirmPassword:string;
    registerForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(confirmPasswordInput.value);
      const registerInputs = new FormData(e.target as HTMLFormElement); //get values from register form
      const objectifyRegisterInputs = Object.fromEntries(registerInputs); //convert register form value into an object
      const { emailInput, passwordInput } = objectifyRegisterInputs;

      const usersFromStorage = localStorage.getItem("users"); // get array of users in local storage
      const users: object[] = [];

      if (usersFromStorage) {
        const parseUsers = JSON.parse(usersFromStorage); // mke the data from storage object with key value pairs
        console.log(parseUsers);
        const emailList = parseUsers.map((emails: userDetails) => {
          //get value of specific attribute in array of objects
          return emails.emailInput;
        });
        console.log(`email list`);
        console.log(emailList);
        if (emailList.includes(emailInput)) {
          emailExist = true;
          labelForEmail.textContent = `The email already Exist!`;
        } else {
          emailExist = false;
          labelForEmail.textContent = ` `;
        }
        if (confirmPasswordInput.value !== passwordInput) {
          labelForPassword.textContent = `Password dont match!`;
          // isPasswordCorrect = false;
        } else {
          isPasswordCorrect = true;
          labelForPassword.textContent = ` `;
        }

        for (let i = 0; i < parseUsers.length; i++) {
          users.push(parseUsers[i]);
        }
      }
      if (emailExist !== true && isPasswordCorrect === true) {
        users.push(objectifyRegisterInputs);
      }
      const stringifyUsers = JSON.stringify(users);
      localStorage.setItem("users", stringifyUsers);
      // emailExist = false;
      // registerForm.reset();
    });
  };

  goToLogin.onclick = () => {
    app.removeChild(registerContainer);
    app.appendChild(loginContainer);
  };
}

//if user logged in store it in the local storage store it as current user
//after login
//before displaying the email get the value of email in the local storage
// display welcome page with the email of the logged user
