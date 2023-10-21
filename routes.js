const fs = require("fs");

const requestHandler = (request, response) => {
  if (request.url == "/") {
    fs.readFile("message.txt", (err, data) => {
      if (err) {
        console.log(err);
      }
      response.write("<html>");
      response.write("<head><title>Enter Message</title></head>");
      response.write(`<body><h4>${data}</h4></body`);
      response.write(
        "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></form></body>"
      );
      response.write("</html>");
      return response.end();
    });
  } else if (request.url == "/message" && request.method == "POST") {
    const body = [];
    request.on("data", (chunk) => {
      body.push(chunk);
    });

    return request.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.log(err);
        }
        response.statusCode = 302;
        response.setHeader("Location", "/");
        return response.end();
      });
    });
  }
};

module.exports = requestHandler;
