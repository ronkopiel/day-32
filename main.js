"use strict";

// class Shape {
//     constructor(name, sides, sideLength) {
//         this.name = name;
//         this.sides = sides;
//         this.sideLength = sideLength;
//     }
//     calcPerimeter() {
//         return console.log('perimeter of ' +this.name +" is: "+ this.sides*this.sideLength);
//     }
// }

// const square = new Shape ('square', 4, 5);
// square.calcPerimeter();
// const triangle = new Shape ('triangle', 3, 3);
// triangle.calcPerimeter();

// class Square extends Shape {
//     constructor (sideLength) {
//         super('','',sideLength);
//         this.name = 'square';
//         this.sides = 4;
//     }
//     calcArea(){
//         return console.log('area of ' +this.name +" is: "+ this.sideLength*this.sideLength);
//     }
// }

// const square2 = new Square(8);
// console.log(square2);
// square2.calcArea();
// square2.calcPerimeter();

// class Circle {
//     #PI
//     constructor(r) {
//         this.radius = r;
//         this.#PI = 3.14;
//     }
//     area() {
//         return console.log('the area of the circle is: ' + Math.pow(this.radius, 2)*this.#PI);
//     }
// }

// const circle = new Circle(8);
// circle.area();

// class Account {
//     constructor (balance, owner) {
//         this.balance = balance;
//         this.owner = owner;
//     }
//     #create(owner) {
//         return new Account(0, owner);
//     }
//     callCreate(){
//         return this.#create(this.owner)
//     }
// }

// const mainAccount = new Account(578, 'Greg');
// const seconderyAccount = mainAccount.callCreate();
// console.log(mainAccount, seconderyAccount);

// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     set personName(name){
//         this.name = name
//     }
//     get personName() {
//         return this.name.toUpperCase()
//     }
// }

// const david = new Person('david');
// console.log(david.personName);
// david.personName = 'benny'
// console.log(david.personName);

// class Product {
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     set productPrice(price) {
//         this.price = (Math.round(price *100))/100;
//     }
//     get productPrice() {
//         return this.price;
//     }
// }
// const couch = new Product('couch');
// couch.productPrice = 54.8789;
// console.log(couch.productPrice);

// class Circle {
//     #radius
//     constructor(r){
//         this.#radius = r
//     }
//     set diameter(diameter) {
//         this.#radius = diameter/2;
//     }
//     get diameter() {
//         return this.#radius*2
//     }
// }
// const circle3 = new Circle;
// circle3.diameter = 30;
// console.log(circle3.diameter);

// class Person {
//     #firstName
//     #lastName
//     #age
//     constructor(firstname, lastname, value) {
//         this.#firstName = firstname;
//         this.#lastName = lastname;
//         this.#age = value;
//     }
//     set age(value) {
//         if (value < 0) console.log('invalid age');
//         else this.#age = value
//     }
//     get age() {
//         return this.#age
//     }
//     displayInfo(){
//         return `first name: ${this.#firstName}, last name: ${this.#lastName}, age: ${this.#age}`
//     }
// }

// const mike = new Person('mike', 'moynahem');
// mike.age = -2;
// mike.age = 46;
// console.log(mike.displayInfo());

// class BankAccount {
//     #accountNumber
//     #accountHolder
//     #accountBalance
//     constructor (accountNumber, accountHolder, accountBalance){
//         this.#accountNumber = accountNumber;
//         this.#accountHolder = accountHolder;
//         this.#accountBalance = accountBalance;
//     }
//     withdraw(amount) {
//         this.#accountBalance -= amount;
//     }
//     deposit(amount) {
//         this.#accountBalance += amount;
//     }
//     checkBalance() {
//         return this.#accountBalance;
//     }
// }
// const bankAccount = new BankAccount('142323', 'George Costanza', 347);
// console.log(bankAccount.checkBalance());
// bankAccount.withdraw(600);
// console.log(bankAccount.checkBalance());
// bankAccount.deposit(67465);
// console.log(bankAccount.checkBalance());

// class Animals {
//     constructor(name, species) {
//         this.name = name;
//         this.species = species;
//     }
//     makeSound() {
//         return 'the animal is making a sound';
//     }
// }

// class Dog extends Animals {
//     constructor(name, species) {
//         super(name, species);
//     }
//     bark() {
//         return 'the dog is barking'
//     }
// }

// class Cat extends Animals {
//     constructor(name, species) {
//         super(name, species);
//     }
//     meow() {
//         return 'the cat is meowing'
//     }
// }

// class Lion extends Animals {
//     constructor(name, species) {
//         super(name, species);
//     }
//     roar() {
//         return 'the lion is roaring'
//     }
// }

// const dog = new Dog('rexy', 'labrador');
// console.log(dog.bark());
// const cat = new Cat('mitzy','persian');
// console.log(cat.meow());
// const lion = new Lion('simba', 'Panthera Leo');
// console.log(lion.roar());
















// // part 2

// // EX1

// class Person {
//     constructor(firstname, lastname, value) {
//         this.firstName = firstname;
//         this.lastName = lastname;
//         this.age = value;
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// class Student extends Person {
//     constructor (firstname, lastname, age, studentid) {
//         super(firstname, lastname, age);
//         this.studentId = studentid;
//     }
//     getDetails() {
//         return `${this.firstName}, ${this.lastName}, ${this.age}, ${this.studentId}`;
//     }
// }

// const student1 = new Student('Tal', 'Kessler', 28, 3546352);
// console.log(student1.getDetails());

// // EX2

// class BankAccount {
//     constructor (balance){
//         this._balance = balance;
//     }
//     set balance(amount){
//         this._balance = amount;
//     }
//     get balance() {
//         return this._balance;
//     }
//     deposit(amount) {
//         if (typeof this._balance != 'number') {
//             this._balance = amount;
//         }
//         else this._balance += amount;
//     }

// }
// const account = new BankAccount();
// account.deposit(100);
// console.log(`Balance: ${account.balance}`);
// account.balance = 200;
// console.log(`Balance: ${account.balance}`);

// // EX3

// class Car {
//     #make
//     #model
//     #year
//     constructor(make, model, year) {
//         this.#make = make;
//         this.#model = model;
//         this.#year = year;
//     }
//     get info() {
//         return `Make: ${this.#make}, Model: ${this.#model}, Year: ${this.#year}`
//     }
//     setInfo(make, model, year) {
//         this.#make = make;
//         this.#model = model;
//         this.#year = year;
//     }
// }

// const car = new Car("Toyota", "Camry", 2020);
// console.log(car.info); // Make: Toyota, Model: Camry, Year: 2020
// car.setInfo("Honda", "Civic", 2022);
// console.log(car.info); // Make: Honda, Model: Civic, Year: 2022

// // EX4

// class BankAccount {
//     #balance
//     #owner
//     #transaction
//     constructor (balance, owner){
//         this.#balance = balance;
//         this.#owner = owner;
//         this.#transaction = [];
//     }
//     getBalance() {
//         return this.#balance;
//     }
//     getTransaction() {
//         return this.#transaction;
//     }
//     deposit(amount) {
//         if (typeof this.#balance != 'number') {
//             this.#balance = amount;
//             this.#transaction.push(amount);
//         }
//         else {
//             this.#balance += amount;
//             this.#transaction.push(amount);
//         }
//     }
//     withdraw(amount) {
//         if (typeof this.#balance != 'number') {
//                 this.#balance = -amount;
//                 this.#transaction.push(-amount);
//             }
//             else {
//                 this.#balance -= amount;
//                 this.#transaction.push(-amount)
//             }
//         }
// }

// const account = new BankAccount(800, 'trevor');
// console.log(account.getTransaction());
// console.log(account.getBalance());
// account.deposit(300);
// console.log(account.getTransaction());
// console.log(account.getBalance());
// account.withdraw(9000);
// console.log(account.getTransaction());
// console.log(account.getBalance());

// // EX5

// class Animal {
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed) {
//         this.speed = speed;
//         console.log(this.name + " runs with speed " +this.speed);
//     }
//     stop() {
//         this.speed = 0;
//         console.log(this.name + " stands still.");
//     }
// }

// class Rabbit extends Animal {
//     constructor (name, speed) {
//         super(name, speed);
//     }
//     hide() {
//         console.log(this.name +' hides!');
//     }
//     stop() {
//         super.stop()
//         this.hide()
//     }
// }
// let rabbit = new Rabbit("White Rabbit");
// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.stop(); // White Rabbit stands still. White Rabbit hides!

// // EX6

// class Calculator{
//     add(a,b) {
//         if (typeof b != "number") return a
//         return a+b
//     }
// }

// const calculator = new Calculator();
// console.log(calculator.add(3));
// console.log(calculator.add(2,3));

// // EX7

// const formatString = (text, option = {}) => {
//     if (option.uppercase) return text.toUpperCase();
//     else if (option.lowercase) return text.toLowerCase();
//     else return text;
// }
// console.log(formatString("Hello World!"));// Output: Hello World!
// console.log(formatString("Hello World!", { uppercase: true })); // Output: HELLO WORLD!
// console.log(formatString("Hello World!", { lowercase: true })); // Output: hello world!

// // EX8
// class Employee {
//   constructor(salary) {
//     if (this.constructor == Employee) {
//       throw new Error("Object of Abstract Class cannot be created");
//     }
//     this.salary = salary;
//   }
//   getSalary() {
//     return this.salary;
//   }
//   getMonthlyBonus() {
//     throw new Error("Abstract Method has no implementation");
//   }
// }
// class Manager extends Employee {
//     constructor(salary) {
//         super(salary)
//     }
//     getMonthlyBonus() {
//         return this.salary*0.1
//     }
// }
// class Developer extends Employee {
//     constructor(salary) {
//         super(salary)
//     }
//     getMonthlyBonus() {
//         return this.salary*0.05
//     }
// }
// const manager = new Manager(50000);
// console.log(manager.getSalary()); // 50000
// console.log(manager.getMonthlyBonus()); // 5000
// const developer = new Developer(40000);
// console.log(developer.getSalary()); // 40000
// console.log(developer.getMonthlyBonus()); // 2000
// const emp = new Employee(); // it will throw error "Object of Abstract Class cannot be created"

// //EX9


// class Calculator {
//     add() {
//       let sum = 0;
//       const processArg = arg => {
//         if (Array.isArray(arg)) {
//           for (const subArg of arg) {
//             processArg(subArg);
//           }
//         } else if (typeof arg === 'number') {
//           sum += arg;
//         } else {
//           throw new Error(`Invalid argument: ${arg}`);
//         }
//       };
//       for (const arg of arguments) {
//         processArg(arg);
//       }
//       return sum;
//     }
//   }
  
// const calculator = new Calculator();

// console.log(calculator.add(1, 2, 3)); // 6
// console.log(calculator.add([1, 2, 3])); // 6
// console.log(calculator.add(1, [2, 3])); // 6
// console.log(calculator.add([1, [2, 3]])); // 6
