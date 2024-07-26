class User {
  constructor(fullName, email, age, password, money) {
    this.fullName = fullName;
    this.email = email;
    this.age = age;
    this.password = password;
    this.money = money;
  }
}

let database = [];

let chooseEnter = prompt(
  "choose a number [1]sign-in, [2]sign-up, [3]change password, [4]exit"
);

function startPrograme() {
  switch (chooseEnter) {
    case "1":
      signIn();
      break;
    case "2":
      signUp();
      break;
    case "3":
      changePassword();
      break;
    case "4":
      console.log("you've exited the programme");
      break;
    default:
      console.log("refresh and enter one of the following numbers");
  }
}

function signIn() {
  let email = prompt("Enter Your Email : ");
  let password = prompt("Enter Your Password : ");
  let isFound = true;

  database.forEach((e) => {
    if (e.email == email && e.password == password) {
      console.log("Loged in Successfully");
      isFound = false;
    }
  });

  if (isFound) {
    console.log("Information dont match our records");
  }
}

// ^ Name Check

function nameFormating(name = "") {
  let scndName = name.trim();
  scndName = scndName.charAt(0).toUpperCase() + scndName.slice(1).toLowerCase();

  if (scndName.includes(" ")) {
    let newName = "";
    let splitArr = scndName.split(" ");
    splitArr.forEach((ele) => {
      newName += ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase() + " ";
    });
    scndName = newName.trim();
  }

  return scndName;
}

function nameCheck(name) {
  let arrName = name.split(" ");

  let newName = "";

  arrName.forEach((ele) => {
    newName += ele;
  });

  const nameRegex = /^[a-zA-Z]+$/i;

  if (newName.length < 5 || !nameRegex.test(newName)) {
    return true;
  } else {
    return false;
  }
}

// ^ Email check

function emailCheck(email) {
  let scndEmail = email.trim();
  scndEmail.toLowerCase();

  if (scndEmail.includes(" ")) {
    console.log("The email include a space");
    return false;
  }

  if (scndEmail.length < 10) {
    console.log("The email length is lower than 10");
    return false;
  }

  let regular = /^[^\s@]+@[^\s@]+$/;

  if (!regular.test(scndEmail)) {
    console.log("wrong email format");
    return false;
  }

  database.forEach((ele) => {
    if (ele.email === email) {
      console.log("Email Already in use");
      return false;
    }
  });

  return true;
}

// ^ Age check

function ageCheck(age) {
  let scndAge = age.trim();
  if (scndAge.includes(" ")) {
    console.log("The Age Includes a space");
    return false;
  }

  let regular = /^\d+$/;

  if (!regular.test(scndAge)) {
    console.log("You need to enter numbers only");
    return false;
  }

  if (scndAge.length < 2 || scndAge.length > 2) {
    console.log("Enter a resonable Number");
    return false;
  }

  return true;
}

// ^ Password check

function passwordCheck(password) {
  let scndPassword = password.trim();

  if (scndPassword.includes(" ")) {
    console.log("The password includes a space");
    return false;
  }

  let characters = ["@", "#", "-", "+", "*", "/"];

  for (let i = 0; i < characters.length; i++) {
    if (scndPassword.includes(characters[i])) {
      return true;
    }
  }

  if (scndPassword.length < 7) {
    return false;
  }

  return true;
}

function signUp() {
  let fullName = prompt("Enter Your Full Name");
  fullName = nameFormating(fullName);

  while (nameCheck(fullName)) {
    fullName = prompt("Reenter Your Full Name");
    fullName = nameFormating(fullName);
  }

  let email = prompt("Enter Your email");

  while (!emailCheck(email)) {
    email = prompt("Reenter Your email");
  }

  let age = prompt("Enter Your age");

  while (!ageCheck(age)) {
    age = prompt("Reenter Your age");
  }

  let password = prompt("Enter Your password");

  while (!passwordCheck(password)) {
    password = prompt("Reenter Your password");
  }

  let confirmPassword = prompt("Confirm Your password");

  if (password != confirmPassword) {
    console.log("You've been blocked at the momment refresh to start over");
  } else {
    let user = new User(fullName, email, age, password, 0);

    database.push(user);
  }

  console.log(database);
}

function changePassword() {
  let email = prompt("Enter Your email");
  let password = prompt("Enter Your password");
  let isFound = false;

  database.forEach((e) => {
    if (e.email == email && e.password == password) {
      let newPassword = prompt("Enter the new password");
      e.password = newPassword;
      isFound = true;
    }
  });

  if (!isFound) {
    console.log("No match email or password");
  }
}

startPrograme();
