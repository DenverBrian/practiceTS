import { loginContainer } from "./loginV2";
//create element
const messageContainer = document.createElement("div");
const message = document.createElement("h1");
const logOut = document.createElement("button");

//append element to container
messageContainer.appendChild(message);
messageContainer.appendChild(logOut);

//create element id
messageContainer.id = "messageContainer";
message.id = "message";
logOut.id = "logout";

//create element text content
message.innerText = "WELCOME";
logOut.innerText = "Logout";

export const showWelcome = (main: HTMLElement) => {
  const currentUser = localStorage.getItem("currentUser"); //get logged user data in localstorage

  if (currentUser) {
    const parseCurrentUser = JSON.parse(currentUser); // convertn string to object
    const { emailLogin } = parseCurrentUser; // get email

    message.innerText = `welcome ${emailLogin}`; //di

    main.appendChild(messageContainer);

    logOut.onclick = () => {
      localStorage.removeItem("currentUser");
      main.removeChild(messageContainer);
      main.appendChild(loginContainer);
    };
  }
};
