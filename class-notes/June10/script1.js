const employee = {
  calcTax() {
    console.log("tax rate 10% decrease");
  },
};

const sharath = {
  salary: 5000,
  calcTax() {
    console.log("tax rate 20% decrease");
  },
};

sharath.__proto__ = employee;

const Status = class {
  constructor() {}
};

class Student {
  constructor() {}
}
