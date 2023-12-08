/*
Filename: ComplexCode.js
Content: A sophisticated and elaborate JavaScript code showcasing advanced concepts and techniques.
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Class representing a Book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  displayInfo() {
    console.log(`"${this.title}" written by ${this.author}`);
  }
}

// Function to find the factorial of a number recursively
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function to capitalize the first letter of each word in a sentence
function capitalizeSentence(sentence) {
  const words = sentence.split(" ");
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join(" ");
}

// Object representing a car
const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2022,
  isElectric: true,
  getColor() {
    return "red";
  },
};

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Higher-order function to calculate the sum of an array using reduce
function calculateSum(numbers) {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Fetch API request
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Regular expression to validate an email address
const emailRegex = /^[\w\-]+(\.[\w\-]+)*@([\w\-]+\.)+[a-zA-Z]{2,7}$/;

// Promise-based function to delay execution
function delayExecution(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

// Usage examples
const john = new Person("John Doe", 25);
john.sayHello();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
book1.displayInfo();

console.log(factorial(5));

console.log(capitalizeSentence("this is a sentence."));

console.log(car.getColor());

console.log(calculateSum(numbers));

delayExecution(2000).then(() => console.log("Delayed execution"));

console.log(emailRegex.test("example@example.com"));