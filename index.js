const http = require("http"); // Import the http module to create a server
const fs = require("fs");
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define an event listener
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
myEmitter.emit('greet', 'Sospeter'); // Output: Hello, Sospeter!

// let data = fs.readFileSync("input.txt,utf8"); // Read the contents of InputDeviceInfo.txt synchronously
// console.log(data); // Log the contents of InputDeviceInfo.txt to the console

fs.readFile("input.txt", "utf8", (err, data) => {
  //read the contents of input.txt asynchronously
  if (err) {
    console.error("Error reading file:", err); //Log an error if reading fails
    return;
  }
  console.log(data); //Log the contents of input.txt to the console
});
console.log("program started"); //Log the

// const server = http.createServer((req,res) =>{
// res.writeHead(200, {"Content-Type": "text/plain"});
// res.end("Hello, world!");
// })

// server.listen(3000,()=> console.log(`Server is running on port http://localhost:3000`));
