const http = require("http");
const { url } = require("inspector");

const server = http.createServer((request, response) => {
  if (request.url == "/home") {
    response.write("<html>");
    response.write("<head><title>Enter Message<</title></head>");
    response.write("<body><h1>Welcome to the Home</h1></body>");
    response.write("</html>");
    response.end();
  }
  // console.log("Welcome to Home");
  if (request.url == "/about") {
    response.write("<html>");
    response.write("<head><title>Enter Message<</title></head>");
    response.write("<body><h1>Welcome to the About US</h1></body>");
    response.write("</html>");
    response.end();
  }
  if (request.url == "/node") {
    response.write("<html>");
    response.write("<head><title>Enter Message<</title></head>");
    response.write("<body><h1>Welcome to my Node JS project</h1></body>");
    response.write("</html>");
    response.end();
  }
});

server.listen(3000);
