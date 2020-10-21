const path = require("path");
const nodemailer = require("nodemailer");

class HomeController 
{
  	static _instance;

	/**
	 * Constructor for the home controller singleton
	 */
	constructor() {}

	/**
	 * @returns The singleton instance for the home controller
	 */
	static getInstance() 
	{
		if (!HomeController._instance)
			HomeController._instance = new HomeController();
		return HomeController._instance;
	}

	/**
	 * Response handler for the index page
	 */
	index(req, res) 
	{
		res.sendFile(path.join(__dirname, "../../../build", "index.html"));
	}

	async email(req, res)
	{
		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.NODEMAILER_USERNAME,
				pass: process.env.NODEMAILER_PASSWORD,
			}
		});

		let info = await transporter.sendMail({
			from: req.body.from + "<" + req.body.email + ">",
			to: "business.davidryancs@gmail.com",
			subject: req.body.subject,
			text: "<" + req.body.email + ">\n\n" + req.body.text,
		});

		res.send({ success: info.accepted.length > 0 });
	}
}

module.exports = HomeController;
