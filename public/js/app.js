class User {
  constructor(fullName, email, age, password, money) {
    this.fullName = fullName;
    this.email = email;
    this.age = age;
    this.password = password;
    this.money = money;
  }
}

let user1 = new User("Adam El Bouchiri", "aaaa@gm.com", 20, "1234", 2000);
let user2 = new User("Salim Chaachaa", "ssss@gm.com", 20, "1234", 2000);

let database = [user1, user2];

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

function signUp() {
  let fullName = prompt("Enter Your Full Name");
  let email = prompt("Enter Your email");
  let age = prompt("Enter Your age");
  let password = prompt("Enter Your password");
  let confirmPassword = prompt("Confirm Your password");

  if (password != confirmPassword) {
    console.log("You've been blocked at the momment refresh to start over");
  } else {
    let user = new User(fullName, email, age, password, 0);

    database.push(user);

    console.log(database);
  }
}

function changePassword() {
  console.log("change Password will be here");
}

startPrograme();
