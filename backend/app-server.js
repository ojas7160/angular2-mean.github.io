// default package which get included when we install node
const http = require('http');

//to import the express js app
const app = require('./app');

//for nodemon to work we need to require
//nodemon is a dependeny whuch automatically restart the server if any js file get chnage
const debug = require("debug")("node-angular");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
  console.log("Listening on " + bind);
};


const port = normalizePort(process.env.PORT || "3001");
app.set("port", port);
console.log('port', port)
console.log('port1', port)

//creating the node js serer with express js
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);

//listen to the port
server.listen(port);


// creating the node js server
// const server = http.createServer((req, res) => {
// 	res.end('this is my first serer');
// });

// const server = http.createServer((req, res) => {
//   res.end('This is my new server')
// })

// server.listen(port);