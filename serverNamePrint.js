const http = require("http");

const server = http.createServer((request, response) => {
  console.log("Pratik");
});

server.listen(3000);
