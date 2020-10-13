const dotenv = require("dotenv").config({ path: ".env.local" });
const express = require("express");
const https = require("https");
const http = require("http");
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");

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
    key: fs.readFileSync(path.join(__dirname, "../certs/davidryancs_com.key")),
	cert: fs.readFileSync(path.join(__dirname, "../certs/davidryancs_com.crt")),
}, new App().express);
server.listen(process.env.PORT);

// HTTP Redirect
http.createServer((req, res) => 
{
    res.writeHead(301, { "Location": "https://www." + req.headers["host"] + req.url });
    res.end();
}).listen(80);

// Error Callback
server.on("error", (e) => { console.log("Error starting server" + e); });

// Server-Listening Callback
server.on("listening", () => {
	console.log(`Server started on PORT[${process.env.PORT}] on NODE_ENV[${process.env.NODE_ENV}]`);
});

function sendEmail(from, email, subject, text)
{
	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.NODEMAILER_USERNAME,
     		pass: process.env.NODEMAILER_PASSWORD,
		}
	});

	let info = transporter.sendMail({
		from: from + " <" + email + ">",
		to: "davidryan0119@gmail.com",
		subject: subject,
		text: text,
	});

	console.log("[" + new Date().toISOString() +  "] Message Sent: %s", info.messageId);
}