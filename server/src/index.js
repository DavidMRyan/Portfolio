const express = require("express");
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const HomeController = require("./controllers/home");

class App 
{
	// Express application constructor
	constructor() 
	{
		this.express = express();

		this.express.set("views", path.join(__dirname, "../public/views"));
		this.express.set("view engine", "html");

		this.initializeRoutes();
	}

	// Initialize the express application routes
	initializeRoutes() 
	{
		// Static
		this.express.use("/", express.static("/var/www/html"));
		this.express.use("/", express.static(path.join(__dirname, "../../build")));

		// Home Route
		this.express.route("/").get(HomeController.getInstance().index.bind(HomeController.getInstance()));
	}
}

// HTTPS & SSL Certificate Setup
const server = https.createServer({
    // key: fs.readFileSync(path.join(__dirname, "../certs/davidryancs.key")),
    // cert: fs.readFileSync(path.join(__dirname, "../certs/davidryancs.crt"))
}, new App().app);
server.listen(443);

// HTTP Redirect
http.createServer((req, res) => 
{
    res.writeHead(301, { "Location": "https://" + req.headers["host"] + req.url });
    res.end();
}).listen(80);

// Error Callback
server.on("error", (e) => { console.log("Error starting server" + e); });

// Server-Listening Callback
server.on("listening", () => { console.log(`Server started on port ${443} on env ${process.env.NODE_ENV}`); });
