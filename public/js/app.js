class User {
  constructor(fullName, email, age, password, money) {
    this.fullName = fullName;
    this.email = email;
    this.age = age;
    this.password = password;
    this.money = money;
  }
}

let user = new User("", "", "0", "", "");

let database = [];

function chooseAProccess(choose) {
  switch (choose) {
    case "1":
      signIn();
      showSignInMenu();
      break;
    case "2":
      signUp();
      startPrograme();
      break;
    case "3":
      changePassword();
      startPrograme();
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
    if (e.email == email) {
      database.forEach((e) => {
        if (e.email == email && e.password == password) {
          console.log("Loged in Successfully");
          isFound = false;
          user = e;
        }
      });
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

  if (scndPassword.length < 7) {
    return false;
  }

  let characters = ["@", "#", "-", "+", "*", "/"];
  console.log(characters.length);

  for (let i = 0; i < characters.length; i++) {
    if (scndPassword.includes(characters[i])) {
      return true;
    }
  }
  console.log("Must Have Special Character");
  return false;
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

// ^ sign in proccess

function withdraw() {
  let withdrawAmount = prompt("Enter Amout to Withdraw");
  while (withdrawAmount <= 0 || withdrawAmount > user.money) {
    if (withdrawAmount > user.money) {
      console.log("Enter an amount less or equals you balance");
    } else {
      console.log("Enter a higher amount");
    }
  }

  user.money -= withdrawAmount;
}

function deposit() {
  let depositeAmount = prompt("Enter Amout to Deposite");
  while (depositeAmount <= 0 || depositeAmount > 1000) {
    if (depositeAmount > 1000) {
      console.log("Enter an amount less or equals 1000dh");
    } else {
      console.log("Enter a higher amount");
    }
  }

  user.money += depositeAmount;
}

function takeALoan() {
  console.log("Loan will be here");
}

function invest() {
  console.log("Invest will be here");
}

function transactionHestory() {
  console.log("Transaction Hestory will be here");
}

function chooseASignInProccess(choose) {
  switch (choose) {
    case "1":
      startPrograme();
      break;
    case "2":
      withdraw();
      showSignInMenu();
      break;
    case "3":
      deposit();
      showSignInMenu();
      break;
    case "4":
      takeALoan();
      showSignInMenu();
      break;
    case "5":
      invest();
      showSignInMenu();
      break;
    case "6":
      transactionHestory();
      showSignInMenu();
      break;
    default:
      console.log("Enter A number within the range");
  }
}

function showSignInMenu() {
  let choose = prompt(
    "choose a number [1]Logout, [2]Withdraw money, [3]Deposit money, [4]Take a loan, [5]Invest, [6]Transaction history"
  );

  chooseASignInProccess(choose);
}

function startPrograme() {
  let chooseEnter = prompt(
    "choose a number [1]sign-in, [2]sign-up, [3]change password, [4]exit"
  );

  chooseAProccess(chooseEnter);
}

startPrograme();
