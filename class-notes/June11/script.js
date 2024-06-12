// class Employee {
//   constructor(role) {
//     this.role = role;
//   }

//   setRole() {
//     console.log("Role: ", this.role); // output 'sde' without constructor this.role will be undefined
//   }
//   salary() {
//     console.log("50000");
//   }
//   experience() {
//     console.log("Experience: 2yr");
//   }
// }

// const employee = new Employee("sde");

// employee.setRole();

// class Parent {
//   constructor() {
//     this.branch = "alex";
//   }
//   m1() {
//     console.log("m1 from parent");
//   }
//   m2() {
//     console.log("m2 from parent");
//   }
// }

// class Child extends Parent {
//   constructor(branch) {
//     super(); // ReferenceError: must call super constructor before using 'this' in derived class constructor
//     this.branch = branch;
//   }
//   m1() {
//     console.log("m1 from child");
//   }
// }

// const user1 = new Child("ec");
// console.log(user1.branch);
// console.log(user1);

// super(args); //used to call parent methods and properties from child class

// Q1
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log(`Name: ${this.name}, Email: ${this.email}`);
//   }
// }

// const user1 = new User("Sharath", "Sharath@gmail.com");

// user1.viewData();

// Q2

document.querySelector(".img").addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 6);
  console.log(randomNumber);
  document.querySelector(".span").innerHTML = randomNumber;
});
