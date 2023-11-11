/* 
Filename: SophisticatedJavaScriptCode.js
Content: A complex code demonstrating a chatbot that can understand and respond to various user inputs.
*/

// Chatbot class
class Chatbot {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}. How can I assist you today?`);
  }

  processInput(input) {
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
      console.log("Hi there!");
    } else if (input.includes("how are you") || input.includes("how's it going")) {
      console.log("I'm a chatbot, so I'm always good!");
    } else if (input.includes("weather")) {
      this.getWeather();
    } else if (input.includes("time")) {
      this.getTime();
    } else if (input.includes("joke")) {
      this.tellJoke();
    } else {
      console.log("I'm sorry, I didn't understand that.");
    }
  }

  getWeather() {
    // Simulating asynchronous API call
    setTimeout(() => {
      console.log("The weather is sunny!");
    }, 2000);
  }

  getTime() {
    // Simulating time retrieval
    const now = new Date();
    console.log(`The current time is ${now.toLocaleTimeString()}.`);
  }

  tellJoke() {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "I used to be a baker, but I couldn't make enough dough.",
      "How do you organize an outer space party? You planet!"
    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    console.log(jokes[randomIndex]);
  }
}

// Usage
const chatbot = new Chatbot("Sophie");
chatbot.greet();

// Simulating chat conversation
chatbot.processInput("Hello");
chatbot.processInput("How are you?");
chatbot.processInput("What's the weather like?");
chatbot.processInput("Tell me a joke.");
chatbot.processInput("What time is it?");
chatbot.processInput("Goodbye");